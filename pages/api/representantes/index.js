import { PrismaClient } from '../../../src/gerado/prisma';

const prisma = new PrismaClient();

/**
 * API para gerenciar representantes
 * 
 * @param {import('next').NextApiRequest} req - Requisição Next.js
 * @param {import('next').NextApiResponse} res - Resposta Next.js
 */
export default async function handler(req, res) {
  try {
    // Simulação de autenticação (será integrada depois)
    const usuarioAutenticado = true;
    const papelUsuario = req.headers['x-user-role'] || 'ADMIN';
    
    if (!usuarioAutenticado) {
      return res.status(401).json({ message: 'Não autorizado' });
    }

    // Roteamento baseado no método HTTP
    switch (req.method) {
      case 'GET':
        return await getRepresentantes(req, res);
      case 'POST':
        return await criarRepresentante(req, res);
      case 'PUT':
        return await atualizarRepresentante(req, res);
      case 'DELETE':
        return await removerRepresentante(req, res);
      default:
        return res.status(405).json({ message: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro na API de representantes:', error);
    return res.status(500).json({ 
      message: 'Erro interno do servidor',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

/**
 * Obter representantes com filtros opcionais
 */
async function getRepresentantes(req, res) {
  const { id, nome, email, cpf, ativo, regiao, page = 1, limit = 10 } = req.query;
  
  try {
    const where = {};
    
    // Aplicar filtros
    if (id) where.id = id;
    if (nome) {
      where.usuario = {
        nome: { contains: nome, mode: 'insensitive' }
      };
    }
    if (email) {
      where.usuario = {
        ...where.usuario,
        email: { contains: email, mode: 'insensitive' }
      };
    }
    if (cpf) where.cpf = cpf;
    if (ativo !== undefined) where.ativo = ativo === 'true';
    if (regiao) where.regiao = { contains: regiao, mode: 'insensitive' };
    
    // Se um ID específico foi solicitado, retornar apenas esse representante
    if (id) {
      const representante = await prisma.representante.findUnique({
        where: { id },
        include: {
          usuario: {
            select: {
              id: true,
              nome: true,
              email: true,
              ativo: true
            }
          },
          vinculacoes: {
            include: {
              fornecedor: {
                select: {
                  id: true,
                  nomeFantasia: true,
                  cnpj: true
                }
              }
            }
          },
          pedidos: {
            select: {
              id: true,
              numero: true,
              status: true,
              valorTotal: true,
              dataCriacao: true
            },
            orderBy: {
              dataCriacao: 'desc'
            },
            take: 5
          },
          comissoes: {
            select: {
              id: true,
              valor: true,
              status: true,
              dataVencimento: true
            },
            orderBy: {
              dataVencimento: 'desc'
            },
            take: 5
          },
          _count: {
            select: {
              vinculacoes: true,
              pedidos: true,
              comissoes: true
            }
          }
        }
      });
      
      if (!representante) {
        return res.status(404).json({ message: 'Representante não encontrado' });
      }
      
      return res.status(200).json(representante);
    }
    
    // Busca paginada
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const take = parseInt(limit);
    
    const [representantes, total] = await Promise.all([
      prisma.representante.findMany({
        where,
        skip,
        take,
        include: {
          usuario: {
            select: {
              id: true,
              nome: true,
              email: true,
              ativo: true
            }
          },
          _count: {
            select: {
              vinculacoes: true,
              pedidos: true,
              comissoes: true
            }
          }
        },
        orderBy: {
          usuario: {
            nome: 'asc'
          }
        }
      }),
      prisma.representante.count({ where })
    ]);
    
    return res.status(200).json({
      representantes,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    });
    
  } catch (error) {
    console.error('Erro ao buscar representantes:', error);
    return res.status(500).json({ message: 'Erro ao buscar representantes' });
  }
}

/**
 * Criar novo representante
 */
async function criarRepresentante(req, res) {
  const {
    usuarioId,
    cpf,
    telefone,
    endereco,
    regiao,
    especialidades = [],
    configuracoes = {}
  } = req.body;
  
  // Validações básicas
  if (!usuarioId || !regiao) {
    return res.status(400).json({
      message: 'Campos obrigatórios: usuarioId, regiao'
    });
  }
  
  try {
    // Verificar se o usuário existe
    const usuario = await prisma.usuario.findUnique({
      where: { id: usuarioId }
    });
    
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    
    // Verificar se já existe representante com este CPF (se fornecido)
    if (cpf) {
      const representanteExistente = await prisma.representante.findUnique({
        where: { cpf }
      });
      
      if (representanteExistente) {
        return res.status(409).json({ message: 'Já existe um representante com este CPF' });
      }
    }
    
    // Criar representante
    const novoRepresentante = await prisma.representante.create({
      data: {
        usuarioId,
        cpf,
        telefone,
        regiao,
        especialidades,
        endereco,
        configuracoes,
        ativo: true
      },
      include: {
        usuario: {
          select: {
            id: true,
            nome: true,
            email: true
          }
        }
      }
    });
    
    return res.status(201).json({
      message: 'Representante criado com sucesso',
      representante: novoRepresentante
    });
    
  } catch (error) {
    console.error('Erro ao criar representante:', error);
    
    // Tratar erros específicos do Prisma
    if (error.code === 'P2002') {
      const field = error.meta?.target?.[0];
      if (field === 'cpf') {
        return res.status(409).json({ message: 'CPF já cadastrado' });
      } else if (field === 'email') {
        return res.status(409).json({ message: 'Email já cadastrado' });
      }
      return res.status(409).json({ message: 'Dados já cadastrados' });
    }
    
    return res.status(500).json({ message: 'Erro ao criar representante' });
  }
}

/**
 * Atualizar representante existente
 */
async function atualizarRepresentante(req, res) {
  const { id } = req.query;
  const dadosAtualizacao = req.body;
  
  if (!id) {
    return res.status(400).json({ message: 'ID do representante é obrigatório' });
  }
  
  try {
    // Verificar se o representante existe
    const representanteExistente = await prisma.representante.findUnique({
      where: { id }
    });
    
    if (!representanteExistente) {
      return res.status(404).json({ message: 'Representante não encontrado' });
    }
    
    // Remover campos que não devem ser atualizados
    const { usuarioId, ...dadosPermitidos } = dadosAtualizacao;
    
    // Atualizar representante
    const representanteAtualizado = await prisma.representante.update({
      where: { id },
      data: {
        ...dadosPermitidos
        // updatedAt é atualizado automaticamente pelo Prisma
      },
      include: {
        usuario: {
          select: {
            id: true,
            nome: true,
            email: true
          }
        }
      }
    });
    
    return res.status(200).json({
      message: 'Representante atualizado com sucesso',
      representante: representanteAtualizado
    });
    
  } catch (error) {
    console.error('Erro ao atualizar representante:', error);
    
    if (error.code === 'P2002') {
      const field = error.meta?.target?.[0];
      if (field === 'cpf') {
        return res.status(409).json({ message: 'CPF já cadastrado por outro representante' });
      } else if (field === 'email') {
        return res.status(409).json({ message: 'Email já cadastrado por outro representante' });
      }
      return res.status(409).json({ message: 'Dados já cadastrados por outro representante' });
    }
    
    return res.status(500).json({ message: 'Erro ao atualizar representante' });
  }
}

/**
 * Remover representante (soft delete)
 */
async function removerRepresentante(req, res) {
  const { id } = req.query;
  
  if (!id) {
    return res.status(400).json({ message: 'ID do representante é obrigatório' });
  }
  
  try {
    // Verificar se o representante existe
    const representante = await prisma.representante.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            vinculacoes: true,
            pedidos: true,
            comissoes: true
          }
        }
      }
    });
    
    if (!representante) {
      return res.status(404).json({ message: 'Representante não encontrado' });
    }
    
    // Verificar se há dependências ativas
    if (representante._count.vinculacoes > 0 || representante._count.pedidos > 0 || representante._count.comissoes > 0) {
      // Soft delete - apenas desativar
      await prisma.representante.update({
        where: { id },
        data: {
          ativo: false
          // updatedAt é atualizado automaticamente pelo Prisma
        }
      });
      
      return res.status(200).json({
        message: 'Representante desativado com sucesso (possui vinculações, pedidos ou comissões)'
      });
    } else {
      // Hard delete se não há dependências
      await prisma.representante.delete({
        where: { id }
      });
      
      return res.status(200).json({
        message: 'Representante removido com sucesso'
      });
    }
    
  } catch (error) {
    console.error('Erro ao remover representante:', error);
    return res.status(500).json({ message: 'Erro ao remover representante' });
  }
}

// Fechar conexão Prisma quando o processo terminar
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});