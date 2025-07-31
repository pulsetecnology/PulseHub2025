import { PrismaClient } from '../../../src/gerado/prisma';

const prisma = new PrismaClient();

/**
 * API para gerenciar fornecedores
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
        return await getFornecedores(req, res);
      case 'POST':
        return await criarFornecedor(req, res);
      case 'PUT':
        return await atualizarFornecedor(req, res);
      case 'DELETE':
        return await removerFornecedor(req, res);
      default:
        return res.status(405).json({ message: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro na API de fornecedores:', error);
    return res.status(500).json({ 
      message: 'Erro interno do servidor',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

/**
 * Obter fornecedores com filtros opcionais
 */
async function getFornecedores(req, res) {
  const { id, nome, cnpj, ativo, page = 1, limit = 10 } = req.query;
  
  try {
    const where = {};
    
    // Aplicar filtros
    if (id) where.id = id;
    if (nome) where.nomeFantasia = { contains: nome, mode: 'insensitive' };
    if (cnpj) where.cnpj = cnpj;
    if (ativo !== undefined) where.ativo = ativo === 'true';
    
    // Se um ID específico foi solicitado, retornar apenas esse fornecedor
    if (id) {
      const fornecedor = await prisma.fornecedor.findUnique({
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
          produtos: {
            select: {
              id: true,
              nome: true,
              preco: true,
              ativo: true
            }
          },
          vinculacoes: {
            include: {
              representante: {
                select: {
                  id: true,
                  nome: true,
                  email: true
                }
              }
            }
          },
          _count: {
            select: {
              produtos: true,
              vinculacoes: true
            }
          }
        }
      });
      
      if (!fornecedor) {
        return res.status(404).json({ message: 'Fornecedor não encontrado' });
      }
      
      return res.status(200).json(fornecedor);
    }
    
    // Busca paginada
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const take = parseInt(limit);
    
    const [fornecedores, total] = await Promise.all([
      prisma.fornecedor.findMany({
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
              produtos: true,
              vinculacoes: true
            }
          }
        },
        orderBy: {
          nomeFantasia: 'asc'
        }
      }),
      prisma.fornecedor.count({ where })
    ]);
    
    return res.status(200).json({
      fornecedores,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    });
    
  } catch (error) {
    console.error('Erro ao buscar fornecedores:', error);
    return res.status(500).json({ message: 'Erro ao buscar fornecedores' });
  }
}

/**
 * Criar novo fornecedor
 */
async function criarFornecedor(req, res) {
  const {
    usuarioId,
    nomeFantasia,
    razaoSocial,
    cnpj,
    inscricaoEstadual,
    telefone,
    endereco,
    cidade,
    estado,
    cep,
    website,
    descricao,
    configuracoes = {}
  } = req.body;
  
  // Validações básicas
  if (!usuarioId || !nomeFantasia || !razaoSocial || !cnpj) {
    return res.status(400).json({
      message: 'Campos obrigatórios: usuarioId, nomeFantasia, razaoSocial, cnpj'
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
    
    // Verificar se já existe fornecedor com este CNPJ
    const fornecedorExistente = await prisma.fornecedor.findUnique({
      where: { cnpj }
    });
    
    if (fornecedorExistente) {
      return res.status(409).json({ message: 'Já existe um fornecedor com este CNPJ' });
    }
    
    // Criar fornecedor
    const novoFornecedor = await prisma.fornecedor.create({
      data: {
        usuarioId,
        nomeFantasia,
        razaoSocial,
        cnpj,
        inscricaoEstadual,
        telefone,
        endereco,
        cidade,
        estado,
        cep,
        website,
        descricao,
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
      message: 'Fornecedor criado com sucesso',
      fornecedor: novoFornecedor
    });
    
  } catch (error) {
    console.error('Erro ao criar fornecedor:', error);
    
    // Tratar erros específicos do Prisma
    if (error.code === 'P2002') {
      return res.status(409).json({ message: 'CNPJ já cadastrado' });
    }
    
    return res.status(500).json({ message: 'Erro ao criar fornecedor' });
  }
}

/**
 * Atualizar fornecedor existente
 */
async function atualizarFornecedor(req, res) {
  const { id } = req.query;
  const dadosAtualizacao = req.body;
  
  if (!id) {
    return res.status(400).json({ message: 'ID do fornecedor é obrigatório' });
  }
  
  try {
    // Verificar se o fornecedor existe
    const fornecedorExistente = await prisma.fornecedor.findUnique({
      where: { id }
    });
    
    if (!fornecedorExistente) {
      return res.status(404).json({ message: 'Fornecedor não encontrado' });
    }
    
    // Remover campos que não devem ser atualizados
    const { usuarioId, ...dadosPermitidos } = dadosAtualizacao;
    
    // Atualizar fornecedor
    const fornecedorAtualizado = await prisma.fornecedor.update({
      where: { id },
      data: {
        ...dadosPermitidos,
        dataAtualizacao: new Date()
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
      message: 'Fornecedor atualizado com sucesso',
      fornecedor: fornecedorAtualizado
    });
    
  } catch (error) {
    console.error('Erro ao atualizar fornecedor:', error);
    
    if (error.code === 'P2002') {
      return res.status(409).json({ message: 'CNPJ já cadastrado por outro fornecedor' });
    }
    
    return res.status(500).json({ message: 'Erro ao atualizar fornecedor' });
  }
}

/**
 * Remover fornecedor (soft delete)
 */
async function removerFornecedor(req, res) {
  const { id } = req.query;
  
  if (!id) {
    return res.status(400).json({ message: 'ID do fornecedor é obrigatório' });
  }
  
  try {
    // Verificar se o fornecedor existe
    const fornecedor = await prisma.fornecedor.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            produtos: true,
            vinculacoes: true
          }
        }
      }
    });
    
    if (!fornecedor) {
      return res.status(404).json({ message: 'Fornecedor não encontrado' });
    }
    
    // Verificar se há dependências ativas
    if (fornecedor._count.produtos > 0 || fornecedor._count.vinculacoes > 0) {
      // Soft delete - apenas desativar
      await prisma.fornecedor.update({
        where: { id },
        data: {
          ativo: false,
          dataAtualizacao: new Date()
        }
      });
      
      return res.status(200).json({
        message: 'Fornecedor desativado com sucesso (possui produtos ou vinculações)'
      });
    } else {
      // Hard delete se não há dependências
      await prisma.fornecedor.delete({
        where: { id }
      });
      
      return res.status(200).json({
        message: 'Fornecedor removido com sucesso'
      });
    }
    
  } catch (error) {
    console.error('Erro ao remover fornecedor:', error);
    return res.status(500).json({ message: 'Erro ao remover fornecedor' });
  }
}

// Fechar conexão Prisma quando o processo terminar
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});