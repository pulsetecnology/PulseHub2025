import { PrismaClient } from '../../../src/gerado/prisma';

const prisma = new PrismaClient();

/**
 * API para gerenciar vinculações entre fornecedores e representantes
 * 
 * @param {import('next').NextApiRequest} req - Requisição Next.js
 * @param {import('next').NextApiResponse} res - Resposta Next.js
 */
export default async function handler(req, res) {
  try {
    // Simulação de autenticação e autorização (será integrada depois)
    const usuarioAutenticado = true;
    const papelUsuario = req.headers['x-user-role'] || 'FORNECEDOR';
    
    if (!usuarioAutenticado) {
      return res.status(401).json({ message: 'Não autorizado' });
    }

    // Roteamento baseado no método HTTP
    switch (req.method) {
      case 'GET':
        return await getVinculacoes(req, res, papelUsuario);
      case 'POST':
        return await criarVinculacao(req, res, papelUsuario);
      case 'PUT':
        return await atualizarVinculacao(req, res, papelUsuario);
      case 'DELETE':
        return await removerVinculacao(req, res, papelUsuario);
      default:
        return res.status(405).json({ message: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro na API de vinculações:', error);
    return res.status(500).json({ 
      message: 'Erro interno do servidor',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

/**
 * Obter vinculações
 */
async function getVinculacoes(req, res, papelUsuario) {
  const { fornecedorId, representanteId, status, page = 1, limit = 10 } = req.query;
  
  console.log('🔍 getVinculacoes - Parâmetros:', { fornecedorId, representanteId, status, page, limit });
  
  try {
    const where = {};
    
    // Aplicar filtros baseados no papel do usuário e parâmetros
    if (fornecedorId) where.fornecedorId = fornecedorId;
    if (representanteId) where.representanteId = representanteId;
    if (status) where.status = status;
    
    console.log('🔍 getVinculacoes - Where clause:', where);
    
    // Busca paginada
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const take = parseInt(limit);
    
    console.log('🔍 getVinculacoes - Executando query Prisma...');
    
    const [vinculacoes, total] = await Promise.all([
      prisma.vinculacao.findMany({
        where,
        skip,
        take,
        include: {
          fornecedor: {
            select: {
              id: true,
              nomeFantasia: true,
              razaoSocial: true,
              cnpj: true,
              ativo: true
            }
          },
          representante: {
            select: {
              id: true,
              telefone: true,
              regiao: true,
              ativo: true,
              usuario: {
                select: {
                  nome: true,
                  email: true
                }
              }
            }
          }
        },
        orderBy: {
          createdAt: 'desc'
        }
      }),
      prisma.vinculacao.count({ where })
    ]);
    
    // Formatar dados para compatibilidade com o frontend
    const vinculacoesFormatadas = vinculacoes.map(vinculacao => ({
      id: vinculacao.id,
      fornecedorId: vinculacao.fornecedorId,
      fornecedorNome: vinculacao.fornecedor.nomeFantasia,
      representanteId: vinculacao.representanteId,
      representanteNome: vinculacao.representante.usuario.nome,
      representanteEmail: vinculacao.representante.usuario.email,
      status: vinculacao.status,
      dataVinculacao: vinculacao.dataVinculacao,
      comissaoPercent: vinculacao.comissaoPercent || 5.0,
      precoEspecial: vinculacao.precoEspecial || false,
      acessoRelatorios: vinculacao.acessoRelatorios || true,
      estatisticas: {
        pedidosRealizados: 0, // TODO: calcular do banco
        valorTotalVendas: 0.0, // TODO: calcular do banco
        ultimoPedido: null // TODO: buscar do banco
      }
    }));
    
    return res.status(200).json({
      vinculacoes: vinculacoesFormatadas,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    });
    
  } catch (error) {
    console.error('Erro ao buscar vinculações:', error);
    return res.status(500).json({ message: 'Erro ao buscar vinculações' });
  }
}

/**
 * Criar nova vinculação
 */
async function criarVinculacao(req, res, papelUsuario) {
  const { 
    fornecedorId, 
    representanteId, 
    comissaoPercent, 
    precoEspecial = false, 
    acessoRelatorios = true 
  } = req.body;

  // Validação básica
  if (!fornecedorId || !representanteId) {
    return res.status(400).json({ 
      message: 'Dados incompletos. Fornecedor e representante são obrigatórios.' 
    });
  }

  // Verificar permissão (apenas fornecedores podem criar vinculações diretamente)
  if (papelUsuario !== 'FORNECEDOR' && papelUsuario !== 'ADMINISTRADOR') {
    return res.status(403).json({ 
      message: 'Apenas fornecedores podem criar vinculações diretamente.' 
    });
  }

  try {
    // Verificar se fornecedor e representante existem
    const [fornecedor, representante] = await Promise.all([
      prisma.fornecedor.findUnique({ where: { id: fornecedorId } }),
      prisma.representante.findUnique({ where: { id: representanteId } })
    ]);

    if (!fornecedor) {
      return res.status(404).json({ message: 'Fornecedor não encontrado' });
    }

    if (!representante) {
      return res.status(404).json({ message: 'Representante não encontrado' });
    }

    // Verificar se já existe vinculação ativa
    const vinculacaoExistente = await prisma.vinculacao.findFirst({
      where: {
        fornecedorId,
        representanteId,
        status: 'ATIVO'
      }
    });

    if (vinculacaoExistente) {
      return res.status(409).json({ 
        message: 'Já existe uma vinculação ativa entre este fornecedor e representante' 
      });
    }

    // Criar nova vinculação
    const novaVinculacao = await prisma.vinculacao.create({
      data: {
        fornecedorId,
        representanteId,
        status: 'ATIVO',
        comissaoPercent: comissaoPercent || representante.comissaoPadrao || 5.0,
        precoEspecial,
        acessoRelatorios
      },
      include: {
        fornecedor: {
          select: {
            id: true,
            nomeFantasia: true,
            razaoSocial: true
          }
        },
        representante: {
          select: {
            id: true,
            nome: true,
            email: true
          }
        }
      }
    });

    return res.status(201).json({
      message: 'Vinculação criada com sucesso',
      vinculacao: {
        id: novaVinculacao.id,
        fornecedorId: novaVinculacao.fornecedorId,
        fornecedorNome: novaVinculacao.fornecedor.nomeFantasia,
        representanteId: novaVinculacao.representanteId,
        representanteNome: novaVinculacao.representante.nome,
        representanteEmail: novaVinculacao.representante.email,
        status: novaVinculacao.status.toLowerCase(),
        dataVinculacao: novaVinculacao.dataCriacao,
        configuracoes: {
          comissaoPercent: novaVinculacao.comissaoPercent,
          precoEspecial: novaVinculacao.precoEspecial,
          acessoRelatorios: novaVinculacao.acessoRelatorios
        }
      }
    });

  } catch (error) {
    console.error('Erro ao criar vinculação:', error);
    return res.status(500).json({ message: 'Erro ao criar vinculação' });
  }
}

/**
 * Atualizar vinculação existente
 */
async function atualizarVinculacao(req, res, papelUsuario) {
  const { id, comissaoPercent, precoEspecial, acessoRelatorios, status } = req.body;

  // Validação básica
  if (!id) {
    return res.status(400).json({ message: 'ID da vinculação é obrigatório.' });
  }

  // Verificar permissão
  if (papelUsuario !== 'FORNECEDOR' && papelUsuario !== 'ADMINISTRADOR') {
    return res.status(403).json({ 
      message: 'Apenas fornecedores podem atualizar vinculações.' 
    });
  }

  try {
    // Verificar se a vinculação existe
    const vinculacaoExistente = await prisma.vinculacao.findUnique({
      where: { id }
    });

    if (!vinculacaoExistente) {
      return res.status(404).json({ message: 'Vinculação não encontrada' });
    }

    // Preparar dados para atualização
    const dadosAtualizacao = {
      dataAtualizacao: new Date()
    };

    if (comissaoPercent !== undefined) dadosAtualizacao.comissaoPercent = comissaoPercent;
    if (precoEspecial !== undefined) dadosAtualizacao.precoEspecial = precoEspecial;
    if (acessoRelatorios !== undefined) dadosAtualizacao.acessoRelatorios = acessoRelatorios;
    if (status !== undefined) {
      // Validar status
      const statusValidos = ['ATIVO', 'INATIVO', 'SUSPENSO'];
      if (!statusValidos.includes(status.toUpperCase())) {
        return res.status(400).json({ 
          message: 'Status inválido. Use: ATIVO, INATIVO ou SUSPENSO' 
        });
      }
      dadosAtualizacao.status = status.toUpperCase();
    }

    // Atualizar vinculação
    const vinculacaoAtualizada = await prisma.vinculacao.update({
      where: { id },
      data: dadosAtualizacao,
      include: {
        fornecedor: {
          select: {
            id: true,
            nomeFantasia: true,
            razaoSocial: true
          }
        },
        representante: {
          select: {
            id: true,
            nome: true,
            email: true
          }
        }
      }
    });

    return res.status(200).json({
      message: 'Vinculação atualizada com sucesso',
      vinculacao: {
        id: vinculacaoAtualizada.id,
        fornecedorId: vinculacaoAtualizada.fornecedorId,
        fornecedorNome: vinculacaoAtualizada.fornecedor.nomeFantasia,
        representanteId: vinculacaoAtualizada.representanteId,
        representanteNome: vinculacaoAtualizada.representante.nome,
        representanteEmail: vinculacaoAtualizada.representante.email,
        status: vinculacaoAtualizada.status.toLowerCase(),
        dataVinculacao: vinculacaoAtualizada.dataCriacao,
        configuracoes: {
          comissaoPercent: vinculacaoAtualizada.comissaoPercent,
          precoEspecial: vinculacaoAtualizada.precoEspecial,
          acessoRelatorios: vinculacaoAtualizada.acessoRelatorios
        }
      }
    });

  } catch (error) {
    console.error('Erro ao atualizar vinculação:', error);
    return res.status(500).json({ message: 'Erro ao atualizar vinculação' });
  }
}

/**
 * Remover vinculação
 */
async function removerVinculacao(req, res, papelUsuario) {
  const { id } = req.query;

  // Validação básica
  if (!id) {
    return res.status(400).json({ message: 'ID da vinculação é obrigatório.' });
  }

  // Verificar permissão (apenas fornecedores podem remover vinculações)
  if (papelUsuario !== 'FORNECEDOR' && papelUsuario !== 'ADMINISTRADOR') {
    return res.status(403).json({ message: 'Apenas fornecedores podem remover vinculações.' });
  }

  try {
    // Verificar se a vinculação existe
    const vinculacao = await prisma.vinculacao.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            pedidos: true,
            comissoes: true
          }
        }
      }
    });

    if (!vinculacao) {
      return res.status(404).json({ message: 'Vinculação não encontrada' });
    }

    // Verificar se há dependências ativas
    if (vinculacao._count.pedidos > 0 || vinculacao._count.comissoes > 0) {
      // Soft delete - apenas inativar
      await prisma.vinculacao.update({
        where: { id },
        data: {
          status: 'INATIVO',
          dataAtualizacao: new Date()
        }
      });

      return res.status(200).json({
        message: 'Vinculação inativada com sucesso (possui pedidos ou comissões associadas)'
      });
    } else {
      // Hard delete se não há dependências
      await prisma.vinculacao.delete({
        where: { id }
      });

      return res.status(200).json({
        message: 'Vinculação removida com sucesso'
      });
    }

  } catch (error) {
     console.error('Erro ao remover vinculação:', error);
     return res.status(500).json({ message: 'Erro ao remover vinculação' });
   }
 }

// Fechar conexão Prisma quando o processo terminar
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});