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

    // Buscar convites no banco de dados
    const convites = await prisma.convite.findMany({
      where: whereClause,
      orderBy: {
        createdAt: 'desc'
      }
    });

    // Adicionar informação se é enviado ou recebido
    const convitesComDirecao = convites.map(convite => ({
      ...convite,
      direcao: convite.remetenteId === usuarioId ? 'enviado' : 'recebido',
      dataEnvio: convite.dataEnvio || convite.createdAt,
      id: convite.id.toString(),
      tipo: convite.tipoRemetente === 'FORNECEDOR' ? 'fornecedor_para_representante' : 'representante_para_fornecedor'
    }));

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
    // Verificar se já existe um convite pendente entre os mesmos usuários
    const conviteExistente = await prisma.convite.findFirst({
      where: {
        remetenteId: usuarioId,
        destinatarioId: destinatarioId,
        status: 'pendente'
      }
    });

    if (conviteExistente) {
      return res.status(400).json({ message: 'Já existe um convite pendente para este destinatário.' });
    }

    // Criar o convite no banco de dados
    const novoConvite = await prisma.convite.create({
      data: {
        remetenteId: usuarioId,
        destinatarioId,
        tipoRemetente: papelUsuario === 'FORNECEDOR' ? 'FORNECEDOR' : 'REPRESENTANTE',
        status: 'PENDENTE',
        mensagem: mensagem || 'Convite para estabelecer parceria comercial.',
        // Definir fornecedorId ou representanteId baseado no tipo
        ...(papelUsuario === 'FORNECEDOR' ? { fornecedorId: usuarioId } : { representanteId: usuarioId })
      }
    });

    return res.status(201).json(novoConvite);
  } catch (error) {
    console.error('Erro ao enviar convite:', error);
    return res.status(500).json({ message: 'Erro ao enviar convite' });
  }
}

/**
 * Responder a um convite (aceitar ou recusar)
 */
function responderConvite(req, res, papelUsuario, usuarioId) {
  const { id, acao, motivo } = req.body;

  // Validação básica
  if (!id || !acao) {
    return res.status(400).json({ message: 'ID do convite e ação são obrigatórios.' });
  }

  if (!['aceitar', 'recusar'].includes(acao)) {
    return res.status(400).json({ message: 'Ação deve ser "aceitar" ou "recusar".' });
  }

  // Simulação de busca do convite
  // Em uma implementação real, buscaria no banco de dados
  const convite = {
    id,
    tipo: 'fornecedor_para_representante',
    remetenteId: 'forn_001',
    remetenteNome: 'TechSupply Ltda',
    destinatarioId: usuarioId,
    destinatarioNome: 'Representante Exemplo',
    destinatarioEmail: 'representante@example.com',
    status: 'pendente',
    dataEnvio: '2024-01-22T16:20:00Z',
    dataExpiracao: '2024-02-21T16:20:00Z',
    mensagem: 'Convite para parceria comercial.'
  };

  // Verificar se o usuário é o destinatário do convite
  if (convite.destinatarioId !== usuarioId) {
    return res.status(403).json({ message: 'Você não tem permissão para responder a este convite.' });
  }

  // Verificar se o convite ainda está pendente
  if (convite.status !== 'pendente') {
    return res.status(400).json({ message: 'Este convite não está mais disponível para resposta.' });
  }

  // Verificar se o convite não expirou
  if (new Date(convite.dataExpiracao) < new Date()) {
    return res.status(400).json({ message: 'Este convite expirou.' });
  }

  // Atualizar status do convite
  const conviteAtualizado = {
    ...convite,
    status: acao === 'aceitar' ? 'aceito' : 'recusado',
    dataResposta: new Date().toISOString(),
    ...(acao === 'recusar' && motivo && { motivoRecusa: motivo })
  };

  // Se aceito, simular criação da vinculação
  let vinculacao = null;
  if (acao === 'aceitar') {
    vinculacao = {
      id: `vinc_${Date.now()}`,
      fornecedorId: convite.tipo === 'fornecedor_para_representante' ? convite.remetenteId : convite.destinatarioId,
      fornecedorNome: convite.tipo === 'fornecedor_para_representante' ? convite.remetenteNome : convite.destinatarioNome,
      representanteId: convite.tipo === 'fornecedor_para_representante' ? convite.destinatarioId : convite.remetenteId,
      representanteNome: convite.tipo === 'fornecedor_para_representante' ? convite.destinatarioNome : convite.remetenteNome,
      representanteEmail: convite.tipo === 'fornecedor_para_representante' ? convite.destinatarioEmail : convite.remetenteEmail,
      status: 'ativo',
      dataVinculacao: new Date().toISOString(),
      configuracoes: {
        comissaoPersonalizada: null,
        precoEspecial: false,
        acessoRelatorios: true
      },
      estatisticas: {
        pedidosRealizados: 0,
        valorTotalVendas: 0.00,
        ultimoPedido: null
      }
    };
  }

  return res.status(200).json({
    convite: conviteAtualizado,
    vinculacao,
    message: acao === 'aceitar' 
      ? 'Convite aceito com sucesso! Vinculação criada.' 
      : 'Convite recusado.'
  });
}

/**
 * Cancelar convite enviado
 */
function cancelarConvite(req, res, papelUsuario, usuarioId) {
  const { id } = req.query;

  // Validação básica
  if (!id) {
    return res.status(400).json({ message: 'ID do convite é obrigatório.' });
  }

  // Simulação de busca do convite
  // Em uma implementação real, buscaria no banco de dados
  const convite = {
    id,
    remetenteId: usuarioId,
    status: 'pendente'
  };

  // Verificar se o usuário é o remetente do convite
  if (convite.remetenteId !== usuarioId) {
    return res.status(403).json({ message: 'Você só pode cancelar convites que enviou.' });
  }

  // Verificar se o convite ainda está pendente
  if (convite.status !== 'pendente') {
    return res.status(400).json({ message: 'Apenas convites pendentes podem ser cancelados.' });
  }

  // Simulação de cancelamento
  return res.status(200).json({ message: 'Convite cancelado com sucesso.' });
}