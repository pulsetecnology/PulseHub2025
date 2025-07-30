import React, { useState, useEffect } from 'react';
import servicoStatusPedido from '../../servicos/ServicoStatusPedido';
import { usarCorTema } from '../../utils/coresTema';

/**
 * Componente para exibir histórico de mudanças de status de um pedido
 */
export default function HistoricoStatusPedido({ pedidoId, mostrar, onFechar }) {
  const [historico, setHistorico] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const { classes } = usarCorTema();

  useEffect(() => {
    if (mostrar && pedidoId) {
      carregarHistorico();
    }
  }, [mostrar, pedidoId]);

  const carregarHistorico = async () => {
    setCarregando(true);
    try {
      const dados = servicoStatusPedido.obterHistoricoStatus(pedidoId);
      setHistorico(dados);
    } catch (error) {
      console.error('Erro ao carregar histórico:', error);
    } finally {
      setCarregando(false);
    }
  };

  const formatarData = (timestamp) => {
    const data = new Date(timestamp);
    return data.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const obterLabelStatus = (status) => {
    const labels = {
      'rascunho': 'Rascunho',
      'pendente': 'Pendente',
      'em_analise': 'Em Análise',
      'aprovado': 'Aprovado',
      'recusado': 'Recusado',
      'em_producao': 'Em Produção',
      'enviado': 'Enviado',
      'entregue': 'Entregue',
      'cancelado': 'Cancelado'
    };
    return labels[status] || status;
  };

  const obterCorStatus = (status) => {
    const cores = {
      'rascunho': 'bg-gray-100 text-gray-800',
      'pendente': 'bg-yellow-100 text-yellow-800',
      'em_analise': 'bg-orange-100 text-orange-800',
      'aprovado': 'bg-green-100 text-green-800',
      'recusado': 'bg-red-100 text-red-800',
      'em_producao': 'bg-blue-100 text-blue-800',
      'enviado': 'bg-purple-100 text-purple-800',
      'entregue': 'bg-green-100 text-green-800',
      'cancelado': 'bg-red-100 text-red-800'
    };
    return cores[status] || 'bg-gray-100 text-gray-800';
  };

  const obterIconePapel = (papel) => {
    const icones = {
      'ADMINISTRADOR': '👑',
      'FORNECEDOR': '🏭',
      'REPRESENTANTE': '👤',
      'sistema': '🤖'
    };
    return icones[papel] || '👤';
  };

  if (!mostrar) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <svg className="h-5 w-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Histórico de Status
            </h3>
            <button
              onClick={onFechar}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {carregando ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : historico.length === 0 ? (
            <div className="text-center py-8">
              <svg className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-gray-500 dark:text-gray-400">Nenhum histórico de status encontrado</p>
            </div>
          ) : (
            <div className="space-y-4">
              {historico.map((entrada, index) => (
                <div key={entrada.id} className="relative">
                  {/* Linha conectora */}
                  {index < historico.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-8 bg-gray-200 dark:bg-gray-600"></div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    {/* Ícone do papel */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-lg">
                      {obterIconePapel(entrada.papelUsuario)}
                    </div>
                    
                    {/* Conteúdo */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${obterCorStatus(entrada.statusAnterior)}`}>
                          {obterLabelStatus(entrada.statusAnterior)}
                        </span>
                        <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${obterCorStatus(entrada.statusNovo)}`}>
                          {obterLabelStatus(entrada.statusNovo)}
                        </span>
                        {entrada.automatico && (
                          <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                            🤖 Automático
                          </span>
                        )}
                      </div>
                      
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        <p className="mb-1">
                          <span className="font-medium">{entrada.papelUsuario}</span>
                          {entrada.automatico ? 
                            ' (Sistema aplicou regra automática)' : 
                            ' alterou o status'
                          }
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          {formatarData(entrada.timestamp)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
          <div className="flex justify-end">
            <button
              onClick={onFechar}
              className={`px-4 py-2 text-sm font-medium rounded-md ${classes.bg} ${classes.text} hover:opacity-90 transition-opacity`}
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}