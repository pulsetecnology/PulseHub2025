import React from 'react';
import { usarCorTema } from '../../utils/coresTema';

export default function HeaderPedido({ pedido, onVoltar, statusAutoSave }) {
  const { classes } = usarCorTema();

  const getStatusColor = (status) => {
    switch (status) {
      case 'rascunho':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      case 'pendente':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'em_analise':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      case 'aprovado':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'recusado':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'cancelado':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getStatusLabel = (status) => {
    const labels = {
      'rascunho': 'Rascunho',
      'pendente': 'Pendente',
      'em_analise': 'Em Análise',
      'aprovado': 'Aprovado',
      'recusado': 'Recusado',
      'cancelado': 'Cancelado'
    };
    return labels[status] || status;
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'rascunho':
        return (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        );
      case 'pendente':
        return (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'aprovado':
        return (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
      case 'cancelado':
        return (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
      {/* Breadcrumb */}
      <nav className="flex mb-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <button
              onClick={onVoltar}
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0L2.586 11H16a1 1 0 110 2H2.586l3.707 3.707a1 1 0 01-1.414 1.414l-5.414-5.414a1 1 0 010-1.414L4.879 6.465a1 1 0 011.414 1.414L2.586 11H16a1 1 0 110 2H2.586l3.707 3.707z" clipRule="evenodd" />
              </svg>
              Pedidos
            </button>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                Editar Pedido
              </span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Header Principal */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center space-x-4">
          {/* Ícone do Pedido */}
          <div className={`flex-shrink-0 w-12 h-12 ${classes.bg} rounded-lg flex items-center justify-center`}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>

          {/* Informações do Pedido */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Pedido {pedido.numero}
            </h1>
            <div className="flex items-center space-x-4 mt-1">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Criado em {new Date(pedido.dataCreacao).toLocaleDateString('pt-BR')}
              </span>
              {pedido.dataAtualizacao !== pedido.dataCreacao && (
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  • Atualizado em {new Date(pedido.dataAtualizacao).toLocaleDateString('pt-BR')}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Status Badge e Auto-save */}
        <div className="mt-4 sm:mt-0 flex flex-col items-end space-y-2">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(pedido.status)}`}>
            {getStatusIcon(pedido.status)}
            <span className="ml-2">{getStatusLabel(pedido.status)}</span>
          </span>
          {statusAutoSave && (
            <div>
              {statusAutoSave}
            </div>
          )}
        </div>
      </div>

      {/* Informações Adicionais */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Valor Total</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                R$ {pedido.total?.toFixed(2) || '0,00'}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Itens</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {pedido.itens?.length || 0}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Cliente</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                {pedido.cliente?.nomeFantasia || pedido.cliente?.razaoSocial || 'N/A'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}