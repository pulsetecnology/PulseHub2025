import React from 'react';
import { usarCorTema } from '../../utils/coresTema';

const TimelinePedido = ({ status, dataCreacao, dataFinalizacao, dataAtualizacao }) => {
  const { classes } = usarCorTema();

  const etapas = [
    {
      id: 'rascunho',
      titulo: 'Rascunho',
      descricao: 'Pedido em elaboração',
      icone: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      data: dataCreacao
    },
    {
      id: 'pendente',
      titulo: 'Enviado',
      descricao: 'Aguardando aprovação do fornecedor',
      icone: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      data: dataFinalizacao
    },
    {
      id: 'em_analise',
      titulo: 'Em Análise',
      descricao: 'Sendo analisado pelo fornecedor',
      icone: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      data: null
    },
    {
      id: 'aprovado',
      titulo: 'Aprovado',
      descricao: 'Pedido aprovado pelo fornecedor',
      icone: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      data: null
    },
    {
      id: 'em_producao',
      titulo: 'Em Produção',
      descricao: 'Pedido em produção',
      icone: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      data: null
    },
    {
      id: 'enviado',
      titulo: 'Enviado',
      descricao: 'Pedido enviado para entrega',
      icone: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      data: null
    },
    {
      id: 'entregue',
      titulo: 'Entregue',
      descricao: 'Pedido entregue com sucesso',
      icone: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      data: null
    }
  ];

  const obterIndiceStatus = (status) => {
    return etapas.findIndex(etapa => etapa.id === status);
  };

  const statusAtual = obterIndiceStatus(status);
  const statusCancelado = status === 'cancelado';
  const statusRecusado = status === 'recusado';

  const obterClasseEtapa = (index) => {
    if (statusCancelado || statusRecusado) {
      if (index <= statusAtual) {
        return 'bg-red-500 text-white';
      }
      return 'bg-gray-200 text-gray-400';
    }

    if (index < statusAtual) {
      return `${classes.bg} text-white`;
    } else if (index === statusAtual) {
      return `${classes.bg} text-white animate-pulse`;
    } else {
      return 'bg-gray-200 text-gray-400';
    }
  };

  const obterClasseLinha = (index) => {
    if (statusCancelado || statusRecusado) {
      return index < statusAtual ? 'bg-red-500' : 'bg-gray-200';
    }
    return index < statusAtual ? classes.bg : 'bg-gray-200';
  };

  const formatarData = (data) => {
    if (!data) return null;
    return new Date(data).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Filtrar etapas relevantes baseado no status
  let etapasRelevantes = etapas;
  if (statusCancelado) {
    etapasRelevantes = etapas.slice(0, statusAtual + 1);
  } else if (statusRecusado) {
    etapasRelevantes = etapas.slice(0, 3); // Até "Em Análise"
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
        <svg className="h-5 w-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
        Status do Pedido
      </h3>

      {/* Status especiais */}
      {statusCancelado && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <div className="flex items-center">
            <svg className="h-5 w-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-red-800 dark:text-red-200 font-medium">Pedido Cancelado</span>
          </div>
          <p className="text-red-600 dark:text-red-300 text-sm mt-1">
            Este pedido foi cancelado em {formatarData(dataAtualizacao)}
          </p>
        </div>
      )}

      {statusRecusado && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <div className="flex items-center">
            <svg className="h-5 w-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="text-red-800 dark:text-red-200 font-medium">Pedido Recusado</span>
          </div>
          <p className="text-red-600 dark:text-red-300 text-sm mt-1">
            Este pedido foi recusado pelo fornecedor
          </p>
        </div>
      )}

      {/* Timeline */}
      <div className="relative">
        {etapasRelevantes.map((etapa, index) => (
          <div key={etapa.id} className="relative flex items-start mb-8 last:mb-0">
            {/* Linha conectora */}
            {index < etapasRelevantes.length - 1 && (
              <div className={`absolute left-4 top-8 w-0.5 h-8 ${obterClasseLinha(index)}`}></div>
            )}

            {/* Ícone da etapa */}
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${obterClasseEtapa(index)}`}>
              {etapa.icone}
            </div>

            {/* Conteúdo da etapa */}
            <div className="ml-4 flex-1">
              <div className="flex items-center justify-between">
                <h4 className={`text-sm font-medium ${
                  index <= statusAtual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {etapa.titulo}
                </h4>
                {etapa.data && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {formatarData(etapa.data)}
                  </span>
                )}
              </div>
              <p className={`text-sm ${
                index <= statusAtual ? 'text-gray-600 dark:text-gray-300' : 'text-gray-400 dark:text-gray-500'
              }`}>
                {etapa.descricao}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelinePedido;