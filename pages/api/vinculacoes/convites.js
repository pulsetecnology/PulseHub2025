import { PrismaClient } from '../../../src/gerado/prisma';

const prisma = new PrismaClient();

/**
 * API para gerenciar convites de vinculação entre fornecedores e representantes
 * 
 * @param {import('next').NextApiRequest} req - Requisição Next.js
 * @param {import('next').NextApiResponse} res - Resposta Next.js
 */
export default async function handler(req, res) {
  try {
    // Simulação de autenticação e autorização (será integrada depois)
    const usuarioAutenticado = true;
    const papelUsuario = req.headers['x-user-role'] || 'FORNECEDOR';
    const usuarioId = req.headers['x-user-id'] || 'user_001';
    
    if (!usuarioAutenticado) {
      return res.status(401).json({ message: 'Não autorizado' });
    }

    // Roteamento baseado no método HTTP
    switch (req.method) {
      case 'GET':
        return await getConvites(req, res, papelUsuario, usuarioId);
      case 'POST':
        return await enviarConvite(req, res, papelUsuario, usuarioId);
      case 'PUT':
        return await responderConvite(req, res, papelUsuario, usuarioId);
      case 'DELETE':
        return await cancelarConvite(req, res, papelUsuario, usuarioId);
      default:
        return res.status(405).json({ message: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro na API de convites:', error);
    return res.status(500).json({ 
      message: 'Erro interno do servidor',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

/**
 * Obter convites (enviados e recebidos)
 */
async function getConvites(req, res, papelUsuario, usuarioId) {
  const { tipo, status } = req.query;
  
  try {
    // Construir filtros para a consulta
    let whereClause = {};
    
    // Filtrar por tipo (enviados ou recebidos)
    if (tipo === 'enviados') {
      whereClause.remetenteId = usuarioId;
    } else if (tipo === 'recebidos') {
      whereClause.destinatarioId = usuarioId;
    } else {
      // Retornar todos os convites relacionados ao usuário
      whereClause.OR = [
        { remetenteId: usuarioId },
        { destinatarioId: usuarioId }
      ];
    }

    // Filtrar por status
    if (status) {
      whereClause.status = status;
    }

    // Buscar convites no banco de dados com informações do remetente
    const convites = await prisma.convite.findMany({
      where: whereClause,
      include: {
        fornecedor: {
          include: {
            usuario: {
              select: {
                nome: true,
                email: true
              }
            }
          }
        },
        representante: {
          include: {
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
    });

    // Adicionar informação se é enviado ou recebido e dados do remetente
    const convitesComDirecao = convites.map(convite => {
      // Determinar informações do remetente baseado no tipo
      let remetenteNome = 'Usuário não encontrado';
      let remetenteEmail = '';
      let remetenteTipo = '';
      
      if (convite.tipoRemetente === 'FORNECEDOR' && convite.fornecedor) {
        remetenteNome = convite.fornecedor.usuario?.nome || convite.fornecedor.razaoSocial || 'Fornecedor';
        remetenteEmail = convite.fornecedor.usuario?.email || convite.fornecedor.email || '';
        remetenteTipo = 'Fornecedor';
      } else if (convite.tipoRemetente === 'REPRESENTANTE' && convite.representante) {
        remetenteNome = convite.representante.usuario?.nome || convite.representante.nome || 'Representante';
        remetenteEmail = convite.representante.usuario?.email || convite.representante.email || '';
        remetenteTipo = 'Representante';
      }
      
      return {
        ...convite,
        direcao: convite.remetenteId === usuarioId ? 'enviado' : 'recebido',
        dataEnvio: convite.dataEnvio || convite.createdAt,
        id: convite.id.toString(),
        tipo: convite.tipoRemetente === 'FORNECEDOR' ? 'fornecedor_para_representante' : 'representante_para_fornecedor',
        remetenteNome,
        remetenteEmail,
        remetenteTipo,
        // Remover dados sensíveis das relações
        fornecedor: undefined,
        representante: undefined
      };
    });

    return res.status(200).json(convitesComDirecao);
  } catch (error) {
    console.error('Erro ao buscar convites:', error);
    return res.status(500).json({ message: 'Erro ao buscar convites' });
  }
}

/**
 * Enviar novo convite
 */
async function enviarConvite(req, res, papelUsuario, usuarioId) {
  const { destinatarioId, destinatarioNome, destinatarioEmail, mensagem } = req.body;

  console.log('🔍 enviarConvite - Dados recebidos:', { destinatarioId, destinatarioNome, destinatarioEmail, mensagem, papelUsuario, usuarioId });

  // Validação básica
  if (!destinatarioId || !destinatarioNome) {
    return res.status(400).json({ message: 'Dados do destinatário são obrigatórios.' });
  }

  // Determinar tipo do convite baseado no papel do usuário
  let tipoConvite;
  if (papelUsuario === 'FORNECEDOR') {
    tipoConvite = 'fornecedor_para_representante';
  } else if (papelUsuario === 'REPRESENTANTE') {
    tipoConvite = 'representante_para_fornecedor';
  } else {
    return res.status(403).json({ message: 'Apenas fornecedores e representantes podem enviar convites.' });
  }

  try {
    // Verificar se os usuários existem no banco de dados
    console.log('🔍 Verificando se usuários existem...');
    const [usuarioRemetente, usuarioDestinatario] = await Promise.all([
      prisma.usuario.findUnique({ where: { id: usuarioId } }),
      prisma.usuario.findUnique({ where: { id: destinatarioId } })
    ]);
    
    // Para usuários de desenvolvimento, criar um usuário temporário se não existir
    let remetenteReal = usuarioRemetente;
    if (!usuarioRemetente && usuarioId.startsWith('user-')) {
      console.log('🔍 Usuário de desenvolvimento detectado, usando dados temporários');
      remetenteReal = {
        id: usuarioId,
        nome: 'Usuário Desenvolvimento',
        email: 'dev@exemplo.com',
        papel: papelUsuario
      };
    } else if (!usuarioRemetente) {
      return res.status(400).json({ message: 'Usuário remetente não encontrado.' });
    }
    
    // Para usuários de desenvolvimento destinatários, criar um usuário temporário se não existir
    let destinatarioReal = usuarioDestinatario;
    if (!usuarioDestinatario) {
      // Verificar se é um ID de representante (não de usuário)
      const representanteDestinatario = await prisma.representante.findUnique({
        where: { id: destinatarioId },
        include: { usuario: true }
      });
      
      if (representanteDestinatario) {
        console.log('🔍 Representante encontrado:', representanteDestinatario.usuario?.nome);
        destinatarioReal = representanteDestinatario.usuario;
      } else if (destinatarioId.startsWith('user-')) {
        console.log('🔍 Usuário destinatário de desenvolvimento detectado, usando dados temporários');
        destinatarioReal = {
          id: destinatarioId,
          nome: destinatarioNome || 'Usuário Desenvolvimento',
          email: destinatarioEmail || 'dev-destinatario@exemplo.com'
        };
      } else {
        return res.status(400).json({ message: 'Usuário destinatário não encontrado.' });
      }
    }
    
    // Buscar o remetente na tabela específica (fornecedor ou representante)
    let remetente;
    if (papelUsuario === 'FORNECEDOR') {
      remetente = await prisma.fornecedor.findFirst({ where: { usuarioId } });
    } else {
      remetente = await prisma.representante.findFirst({ where: { usuarioId } });
    }
    
    // Para usuários de desenvolvimento, criar dados temporários se não encontrar
    if (!remetente && usuarioId.startsWith('user-')) {
      console.log('🔍 Criando dados temporários para usuário de desenvolvimento');
      remetente = {
        id: `temp-${papelUsuario.toLowerCase()}-${usuarioId}`,
        nome: `${papelUsuario} Desenvolvimento`,
        usuarioId: usuarioId
      };
    } else if (!remetente) {
      return res.status(400).json({ message: `${papelUsuario.toLowerCase()} não encontrado.` });
    }
    
    console.log('🔍 Usuários encontrados:', { remetente: remetente.nome, destinatario: destinatarioReal.nome });

    // Verificar se já existe um convite pendente entre os mesmos usuários
    console.log('🔍 Verificando convite existente...');
    const conviteExistente = await prisma.convite.findFirst({
      where: {
        remetenteId: usuarioId,
        destinatarioId: destinatarioReal.id,
        status: 'PENDENTE'
      }
    });
    console.log('🔍 Convite existente:', conviteExistente);

    if (conviteExistente) {
      return res.status(400).json({ message: 'Já existe um convite pendente para este destinatário.' });
    }

    // Criar o convite no banco de dados
    const dadosConvite = {
      remetenteId: usuarioId,
      destinatarioId: destinatarioReal.id,
      tipoRemetente: papelUsuario === 'FORNECEDOR' ? 'FORNECEDOR' : 'REPRESENTANTE',
      status: 'PENDENTE',
      mensagem: mensagem || 'Convite para estabelecer parceria comercial.'
    };
    
    // Adicionar fornecedorId ou representanteId apenas se não for usuário temporário
    if (!remetente.id.startsWith('temp-')) {
      if (papelUsuario === 'FORNECEDOR') {
        dadosConvite.fornecedorId = remetente.id;
      } else {
        dadosConvite.representanteId = remetente.id;
      }
    }
    
    console.log('🔍 Criando convite com dados:', dadosConvite);
    const novoConvite = await prisma.convite.create({
      data: dadosConvite
    });
    console.log('🔍 Convite criado:', novoConvite);

    return res.status(201).json(novoConvite);
  } catch (error) {
    console.error('Erro ao enviar convite:', error);
    return res.status(500).json({ message: 'Erro ao enviar convite' });
  }
}

/**
 * Responder a um convite (aceitar ou recusar)
 */
async function responderConvite(req, res, papelUsuario, usuarioId) {
  const { id, acao, motivo } = req.body;

  // Validação básica
  if (!id || !acao) {
    return res.status(400).json({ message: 'ID do convite e ação são obrigatórios.' });
  }

  if (!['aceitar', 'recusar'].includes(acao)) {
    return res.status(400).json({ message: 'Ação deve ser "aceitar" ou "recusar".' });
  }

  try {
    // Buscar o convite no banco de dados
    const convite = await prisma.convite.findUnique({
      where: { id },
      include: {
        fornecedor: {
          include: {
            usuario: {
              select: {
                nome: true,
                email: true
              }
            }
          }
        },
        representante: {
          include: {
            usuario: {
              select: {
                nome: true,
                email: true
              }
            }
          }
        }
      }
    });

    if (!convite) {
      return res.status(404).json({ message: 'Convite não encontrado.' });
    }

    // Verificar se o usuário é o destinatário do convite
    if (convite.destinatarioId !== usuarioId) {
      return res.status(403).json({ message: 'Você não tem permissão para responder a este convite.' });
    }

    // Verificar se o convite ainda está pendente
    if (convite.status !== 'PENDENTE') {
      return res.status(400).json({ message: 'Este convite não está mais disponível para resposta.' });
    }

    // Atualizar status do convite no banco de dados
    const dadosAtualizacao = {
      status: acao === 'aceitar' ? 'ACEITO' : 'RECUSADO',
      dataResposta: new Date(),
      ...(acao === 'recusar' && motivo && { motivoRecusa: motivo })
    };

    const conviteAtualizado = await prisma.convite.update({
      where: { id },
      data: dadosAtualizacao
    });

    // Se aceito, criar vinculação no banco de dados
    let vinculacao = null;
    if (acao === 'aceitar') {
      const fornecedorId = convite.tipoRemetente === 'FORNECEDOR' ? convite.remetenteId : convite.destinatarioId;
      const representanteId = convite.tipoRemetente === 'REPRESENTANTE' ? convite.remetenteId : convite.destinatarioId;
      
      // Verificar se já existe vinculação
      const vinculacaoExistente = await prisma.vinculacao.findFirst({
        where: {
          fornecedorId,
          representanteId
        }
      });
      
      if (vinculacaoExistente) {
        // Se já existe, apenas reativar
        vinculacao = await prisma.vinculacao.update({
          where: { id: vinculacaoExistente.id },
          data: {
            status: 'ATIVO',
            configuracoes: {
              comissaoPersonalizada: convite.comissaoPercent || 5.0,
              precoEspecial: false,
              acessoRelatorios: true
            }
          }
        });
      } else {
        // Criar nova vinculação
        const dadosVinculacao = {
          fornecedorId,
          representanteId,
          status: 'ATIVO',
          configuracoes: {
            comissaoPersonalizada: convite.comissaoPercent || 5.0,
            precoEspecial: false,
            acessoRelatorios: true
          }
        };

        vinculacao = await prisma.vinculacao.create({
          data: dadosVinculacao
        });
      }
    }

    return res.status(200).json({
      convite: conviteAtualizado,
      vinculacao,
      message: acao === 'aceitar' 
        ? 'Convite aceito com sucesso! Vinculação criada.' 
        : 'Convite recusado.'
    });
  } catch (error) {
    console.error('Erro ao responder convite:', error);
    return res.status(500).json({ message: 'Erro ao responder convite' });
  }
}

/**
 * Cancelar convite enviado
 */
async function cancelarConvite(req, res, papelUsuario, usuarioId) {
  const { id } = req.query;

  try {
    // Validação básica
    if (!id) {
      return res.status(400).json({ message: 'ID do convite é obrigatório.' });
    }

    // Buscar o convite no banco de dados
    const convite = await prisma.convite.findUnique({
      where: { id }
    });

    if (!convite) {
      return res.status(404).json({ message: 'Convite não encontrado.' });
    }

    // Verificar se o usuário é o remetente do convite
    if (convite.remetenteId !== usuarioId) {
      return res.status(403).json({ message: 'Você só pode cancelar convites que enviou.' });
    }

    // Verificar se o convite ainda está pendente
    if (convite.status !== 'PENDENTE') {
      return res.status(400).json({ message: 'Apenas convites pendentes podem ser cancelados.' });
    }

    // Cancelar o convite (deletar do banco)
    await prisma.convite.delete({
      where: { id }
    });

    return res.status(200).json({ message: 'Convite cancelado com sucesso.' });
  } catch (error) {
    console.error('Erro ao cancelar convite:', error);
    return res.status(500).json({ message: 'Erro ao cancelar convite' });
  }
}