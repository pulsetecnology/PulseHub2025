/**
 * API Endpoint para Limpeza de Dados
 * 
 * Endpoint administrativo para executar a limpeza completa dos dados
 * preparando o sistema para a implementação das vinculações.
 * 
 * Métodos suportados:
 * - GET: Verificar dados existentes
 * - POST: Executar limpeza
 * - DELETE: Confirmar e executar limpeza
 */

import { LimpezaDados, verificarDadosExistentes } from '../../../src/api/limpeza/limparDados';
import { verificarAutenticacao } from '../../../src/infraestrutura/middleware/auth';
import { verificarPermissaoAdmin } from '../../../src/infraestrutura/middleware/permissions';

/**
 * Handler principal da API
 */
export default async function handler(req, res) {
  try {
    // Verificar autenticação
    const usuario = await verificarAutenticacao(req);
    if (!usuario) {
      return res.status(401).json({
        erro: 'Não autenticado',
        codigo: 'NAO_AUTENTICADO'
      });
    }

    // Verificar se é administrador
    if (!verificarPermissaoAdmin(usuario)) {
      return res.status(403).json({
        erro: 'Acesso negado. Apenas administradores podem executar limpeza de dados.',
        codigo: 'ACESSO_NEGADO'
      });
    }

    // Verificar ambiente
    if (process.env.NODE_ENV === 'production') {
      return res.status(403).json({
        erro: 'Limpeza de dados não permitida em ambiente de produção',
        codigo: 'AMBIENTE_PRODUCAO'
      });
    }

    switch (req.method) {
      case 'GET':
        return await handleGet(req, res);
      case 'POST':
        return await handlePost(req, res);
      case 'DELETE':
        return await handleDelete(req, res);
      default:
        return res.status(405).json({
          erro: 'Método não permitido',
          metodosPermitidos: ['GET', 'POST', 'DELETE']
        });
    }

  } catch (error) {
    console.error('Erro na API de limpeza:', error);
    return res.status(500).json({
      erro: 'Erro interno do servidor',
      mensagem: error.message,
      codigo: 'ERRO_INTERNO'
    });
  }
}

/**
 * GET - Verificar dados existentes
 */
async function handleGet(req, res) {
  try {
    const dados = await verificarDadosExistentes();
    
    const totalRegistros = Object.values(dados).reduce((total, count) => total + count, 0) - dados.usuarios;
    
    return res.status(200).json({
      sucesso: true,
      dados,
      resumo: {
        totalRegistros,
        temDadosParaLimpar: totalRegistros > 0,
        usuarios: dados.usuarios
      },
      ambiente: process.env.NODE_ENV,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    return res.status(500).json({
      erro: 'Erro ao verificar dados',
      mensagem: error.message
    });
  }
}

/**
 * POST - Executar limpeza (com confirmação)
 */
async function handlePost(req, res) {
  try {
    const { confirmar, motivo } = req.body;

    // Verificar confirmação
    if (!confirmar) {
      return res.status(400).json({
        erro: 'Confirmação necessária',
        mensagem: 'Para executar a limpeza, envie { "confirmar": true, "motivo": "razão da limpeza" }'
      });
    }

    // Verificar motivo
    if (!motivo || motivo.trim().length < 10) {
      return res.status(400).json({
        erro: 'Motivo obrigatório',
        mensagem: 'Forneça um motivo detalhado (mínimo 10 caracteres) para a limpeza'
      });
    }

    // Verificar dados existentes antes da limpeza
    const dadosAntes = await verificarDadosExistentes();
    const totalAntes = Object.values(dadosAntes).reduce((total, count) => total + count, 0) - dadosAntes.usuarios;

    if (totalAntes === 0) {
      return res.status(400).json({
        erro: 'Nenhum dado para limpar',
        mensagem: 'Não existem dados para serem removidos'
      });
    }

    // Executar limpeza
    const limpeza = new LimpezaDados();
    const resultado = await limpeza.executarLimpeza();

    // Verificar dados após limpeza
    const dadosDepois = await verificarDadosExistentes();
    const totalDepois = Object.values(dadosDepois).reduce((total, count) => total + count, 0) - dadosDepois.usuarios;

    // Registrar ação no log de auditoria
    await registrarAuditoria({
      acao: 'limpeza_dados',
      usuario_id: req.usuario?.id,
      motivo,
      dados_antes: dadosAntes,
      dados_depois: dadosDepois,
      resultado
    });

    return res.status(200).json({
      sucesso: true,
      mensagem: 'Limpeza executada com sucesso',
      resultado,
      estatisticas: {
        antes: dadosAntes,
        depois: dadosDepois,
        removidos: {
          notificacoes: dadosAntes.notificacoes,
          pedidos: dadosAntes.pedidos,
          itensPedido: dadosAntes.itensPedido,
          produtos: dadosAntes.produtos,
          categorias: dadosAntes.categorias,
          clientes: dadosAntes.clientes,
          total: totalAntes
        }
      },
      motivo,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    return res.status(500).json({
      erro: 'Erro ao executar limpeza',
      mensagem: error.message
    });
  }
}

/**
 * DELETE - Executar limpeza forçada (emergência)
 */
async function handleDelete(req, res) {
  try {
    const { codigo_emergencia, motivo_emergencia } = req.body;

    // Verificar código de emergência
    const codigoValido = process.env.CODIGO_EMERGENCIA_LIMPEZA || 'EMERGENCIA_2024';
    if (codigo_emergencia !== codigoValido) {
      return res.status(403).json({
        erro: 'Código de emergência inválido',
        mensagem: 'Código de emergência necessário para limpeza forçada'
      });
    }

    // Verificar motivo de emergência
    if (!motivo_emergencia || motivo_emergencia.trim().length < 20) {
      return res.status(400).json({
        erro: 'Motivo de emergência obrigatório',
        mensagem: 'Forneça um motivo detalhado (mínimo 20 caracteres) para a limpeza de emergência'
      });
    }

    // Executar limpeza de emergência
    const limpeza = new LimpezaDados();
    const resultado = await limpeza.executarLimpeza();

    // Registrar ação crítica
    await registrarAuditoria({
      acao: 'limpeza_emergencia',
      usuario_id: req.usuario?.id,
      motivo: motivo_emergencia,
      codigo_usado: codigo_emergencia,
      resultado,
      criticidade: 'ALTA'
    });

    return res.status(200).json({
      sucesso: true,
      mensagem: 'Limpeza de emergência executada',
      resultado,
      tipo: 'emergencia',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    return res.status(500).json({
      erro: 'Erro na limpeza de emergência',
      mensagem: error.message
    });
  }
}

/**
 * Registra ação de limpeza no log de auditoria
 */
async function registrarAuditoria(dados) {
  try {
    // Implementar registro de auditoria
    // Por enquanto, apenas log no console
    console.log('=== AUDITORIA LIMPEZA DE DADOS ===');
    console.log(JSON.stringify(dados, null, 2));
    console.log('================================');
    
    // TODO: Implementar salvamento em banco de auditoria
    // await prisma.auditoria.create({ data: dados });
    
  } catch (error) {
    console.error('Erro ao registrar auditoria:', error);
    // Não falha a operação principal
  }
}

/**
 * Middleware para verificar permissão de administrador
 */
function verificarPermissaoAdmin(usuario) {
  return usuario && (usuario.tipo === 'admin' || usuario.role === 'admin');
}

/**
 * Middleware básico de autenticação
 * TODO: Substituir pela implementação real do sistema
 */
async function verificarAutenticacao(req) {
  try {
    // Implementação simplificada - substituir pela real
    const token = req.headers.authorization?.replace('Bearer ', '');
    
    if (!token) {
      return null;
    }

    // TODO: Verificar token JWT real
    // Por enquanto, simular usuário admin
    return {
      id: 1,
      tipo: 'admin',
      nome: 'Administrador'
    };
    
  } catch (error) {
    console.error('Erro na autenticação:', error);
    return null;
  }
}

/**
 * Configuração do endpoint
 */
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}