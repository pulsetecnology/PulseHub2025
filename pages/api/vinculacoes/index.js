import { NextApiRequest, NextApiResponse } from 'next';

/**
 * API para gerenciar vinculações entre fornecedores e representantes
 * 
 * @param {NextApiRequest} req - Requisição Next.js
 * @param {NextApiResponse} res - Resposta Next.js
 */
export default function handler(req, res) {
  // Simulação de autenticação e autorização
  const usuarioAutenticado = true;
  const papelUsuario = req.headers['x-user-role'] || 'FORNECEDOR';
  
  if (!usuarioAutenticado) {
    return res.status(401).json({ message: 'Não autorizado' });
  }

  // Roteamento baseado no método HTTP
  switch (req.method) {
    case 'GET':
      return getVinculacoes(req, res, papelUsuario);
    case 'POST':
      return criarVinculacao(req, res, papelUsuario);
    case 'PUT':
      return atualizarVinculacao(req, res, papelUsuario);
    case 'DELETE':
      return removerVinculacao(req, res, papelUsuario);
    default:
      return res.status(405).json({ message: 'Método não permitido' });
  }
}

/**
 * Obter vinculações
 */
function getVinculacoes(req, res, papelUsuario) {
  const { fornecedorId, representanteId, status } = req.query;
  
  // Simulação de dados
  let vinculacoes = [
    {
      id: 'vinc_001',
      fornecedorId: 'forn_001',
      fornecedorNome: 'TechSupply Ltda',
      representanteId: 'repr_001',
      representanteNome: 'João Silva',
      representanteEmail: 'joao@example.com',
      status: 'ativo',
      dataVinculacao: '2024-01-15T10:00:00Z',
      configuracoes: {
        comissaoPersonalizada: 5.5,
        precoEspecial: false,
        acessoRelatorios: true
      },
      estatisticas: {
        pedidosRealizados: 12,
        valorTotalVendas: 45600.00,
        ultimoPedido: '2024-01-20T14:30:00Z'
      }
    },
    {
      id: 'vinc_002',
      fornecedorId: 'forn_001',
      fornecedorNome: 'TechSupply Ltda',
      representanteId: 'repr_002',
      representanteNome: 'Maria Santos',
      representanteEmail: 'maria@example.com',
      status: 'ativo',
      dataVinculacao: '2024-01-10T09:15:00Z',
      configuracoes: {
        comissaoPersonalizada: 6.0,
        precoEspecial: true,
        acessoRelatorios: false
      },
      estatisticas: {
        pedidosRealizados: 8,
        valorTotalVendas: 32100.00,
        ultimoPedido: '2024-01-18T11:45:00Z'
      }
    }
  ];

  // Aplicar filtros
  if (fornecedorId) {
    vinculacoes = vinculacoes.filter(v => v.fornecedorId === fornecedorId);
  }

  if (representanteId) {
    vinculacoes = vinculacoes.filter(v => v.representanteId === representanteId);
  }

  if (status) {
    vinculacoes = vinculacoes.filter(v => v.status === status);
  }

  return res.status(200).json(vinculacoes);
}

/**
 * Criar nova vinculação
 */
function criarVinculacao(req, res, papelUsuario) {
  const { fornecedorId, fornecedorNome, representanteId, representanteNome, representanteEmail, configuracoes } = req.body;

  // Validação básica
  if (!fornecedorId || !representanteId) {
    return res.status(400).json({ message: 'Dados incompletos. Fornecedor e representante são obrigatórios.' });
  }

  // Verificar permissão (apenas fornecedores podem criar vinculações diretamente)
  if (papelUsuario !== 'FORNECEDOR' && papelUsuario !== 'ADMINISTRADOR') {
    return res.status(403).json({ message: 'Apenas fornecedores podem criar vinculações diretamente.' });
  }

  // Simulação de criação
  const novaVinculacao = {
    id: `vinc_${Date.now()}`,
    fornecedorId,
    fornecedorNome,
    representanteId,
    representanteNome,
    representanteEmail,
    status: 'ativo',
    dataVinculacao: new Date().toISOString(),
    configuracoes: configuracoes || {
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

  return res.status(201).json(novaVinculacao);
}

/**
 * Atualizar vinculação existente
 */
function atualizarVinculacao(req, res, papelUsuario) {
  const { id, configuracoes, status } = req.body;

  // Validação básica
  if (!id) {
    return res.status(400).json({ message: 'ID da vinculação é obrigatório.' });
  }

  // Simulação de atualização
  const vinculacaoAtualizada = {
    id,
    fornecedorId: 'forn_001',
    fornecedorNome: 'TechSupply Ltda',
    representanteId: 'repr_001',
    representanteNome: 'João Silva',
    representanteEmail: 'joao@example.com',
    status: status || 'ativo',
    dataVinculacao: '2024-01-15T10:00:00Z',
    configuracoes: configuracoes || {
      comissaoPersonalizada: 5.5,
      precoEspecial: false,
      acessoRelatorios: true
    },
    estatisticas: {
      pedidosRealizados: 12,
      valorTotalVendas: 45600.00,
      ultimoPedido: '2024-01-20T14:30:00Z'
    }
  };

  return res.status(200).json(vinculacaoAtualizada);
}

/**
 * Remover vinculação
 */
function removerVinculacao(req, res, papelUsuario) {
  const { id } = req.query;

  // Validação básica
  if (!id) {
    return res.status(400).json({ message: 'ID da vinculação é obrigatório.' });
  }

  // Verificar permissão (apenas fornecedores podem remover vinculações)
  if (papelUsuario !== 'FORNECEDOR' && papelUsuario !== 'ADMINISTRADOR') {
    return res.status(403).json({ message: 'Apenas fornecedores podem remover vinculações.' });
  }

  // Simulação de remoção (soft delete)
  return res.status(200).json({ message: 'Vinculação removida com sucesso.' });
}