import { NextApiRequest, NextApiResponse } from 'next';

/**
 * API para gerenciar convites de vinculação entre fornecedores e representantes
 * 
 * @param {NextApiRequest} req - Requisição Next.js
 * @param {NextApiResponse} res - Resposta Next.js
 */
export default function handler(req, res) {
  // Simulação de autenticação e autorização
  const usuarioAutenticado = true;
  const papelUsuario = req.headers['x-user-role'] || 'FORNECEDOR';
  const usuarioId = req.headers['x-user-id'] || 'user_001';
  
  if (!usuarioAutenticado) {
    return res.status(401).json({ message: 'Não autorizado' });
  }

  // Roteamento baseado no método HTTP
  switch (req.method) {
    case 'GET':
      return getConvites(req, res, papelUsuario, usuarioId);
    case 'POST':
      return enviarConvite(req, res, papelUsuario, usuarioId);
    case 'PUT':
      return responderConvite(req, res, papelUsuario, usuarioId);
    case 'DELETE':
      return cancelarConvite(req, res, papelUsuario, usuarioId);
    default:
      return res.status(405).json({ message: 'Método não permitido' });
  }
}

/**
 * Obter convites (enviados e recebidos)
 */
function getConvites(req, res, papelUsuario, usuarioId) {
  const { tipo, status } = req.query;
  
  // Simulação de dados de convites
  let convites = [
    {
      id: 'conv_001',
      tipo: 'fornecedor_para_representante',
      remetenteId: 'forn_002',
      remetenteNome: 'InnovaTech Solutions',
      destinatarioId: 'repr_003',
      destinatarioNome: 'Carlos Oliveira',
      destinatarioEmail: 'carlos@example.com',
      status: 'pendente',
      dataEnvio: '2024-01-22T16:20:00Z',
      dataExpiracao: '2024-02-21T16:20:00Z',
      mensagem: 'Gostaríamos de convidá-lo para representar nossos produtos de tecnologia.'
    },
    {
      id: 'conv_002',
      tipo: 'representante_para_fornecedor',
      remetenteId: 'repr_004',
      remetenteNome: 'Ana Costa',
      destinatarioId: 'forn_003',
      destinatarioNome: 'Digital Pro Ltda',
      destinatarioEmail: 'contato@digitalpro.com',
      status: 'pendente',
      dataEnvio: '2024-01-21T14:10:00Z',
      dataExpiracao: '2024-02-20T14:10:00Z',
      mensagem: 'Tenho interesse em representar seus produtos na região Sul.'
    },
    {
      id: 'conv_003',
      tipo: 'fornecedor_para_representante',
      remetenteId: 'forn_001',
      remetenteNome: 'TechSupply Ltda',
      destinatarioId: 'repr_005',
      destinatarioNome: 'Pedro Santos',
      destinatarioEmail: 'pedro@example.com',
      status: 'aceito',
      dataEnvio: '2024-01-18T10:30:00Z',
      dataExpiracao: '2024-02-17T10:30:00Z',
      dataResposta: '2024-01-19T09:15:00Z',
      mensagem: 'Convite para parceria comercial em nossa linha de produtos.'
    }
  ];

  // Filtrar por tipo (enviados ou recebidos)
  if (tipo === 'enviados') {
    convites = convites.filter(c => c.remetenteId === usuarioId);
  } else if (tipo === 'recebidos') {
    convites = convites.filter(c => c.destinatarioId === usuarioId);
  } else {
    // Retornar todos os convites relacionados ao usuário
    convites = convites.filter(c => c.remetenteId === usuarioId || c.destinatarioId === usuarioId);
  }

  // Filtrar por status
  if (status) {
    convites = convites.filter(c => c.status === status);
  }

  // Adicionar informação se é enviado ou recebido
  convites = convites.map(convite => ({
    ...convite,
    direcao: convite.remetenteId === usuarioId ? 'enviado' : 'recebido'
  }));

  return res.status(200).json(convites);
}

/**
 * Enviar novo convite
 */
function enviarConvite(req, res, papelUsuario, usuarioId) {
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

  // Simulação de verificação de convite existente
  // Em uma implementação real, verificaria no banco de dados
  
  // Simulação de criação do convite
  const novoConvite = {
    id: `conv_${Date.now()}`,
    tipo: tipoConvite,
    remetenteId: usuarioId,
    remetenteNome: papelUsuario === 'FORNECEDOR' ? 'Fornecedor Exemplo' : 'Representante Exemplo',
    destinatarioId,
    destinatarioNome,
    destinatarioEmail,
    status: 'pendente',
    dataEnvio: new Date().toISOString(),
    dataExpiracao: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 dias
    mensagem: mensagem || 'Convite para estabelecer parceria comercial.'
  };

  return res.status(201).json(novoConvite);
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