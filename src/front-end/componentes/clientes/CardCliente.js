import React from 'react';

export default function CardCliente({ cliente }) {
  const formatarPreco = (preco) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco);
  };

  const formatarData = (data) => {
    if (!data) return 'Nunca';
    return new Date(data).toLocaleDateString('pt-BR');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ativo':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'inativo':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'prospecto':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getPotencialColor = (potencial) => {
    switch (potencial) {
      case 'alto':
        return 'text-green-600 dark:text-green-400';
      case 'medio':
        return 'text-yellow-600 dark:text-yellow-400';
      case 'baixo':
        return 'text-red-600 dark:text-red-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getPotencialIcon = (potencial) => {
    switch (potencial) {
      case 'alto':
        return (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        );
      case 'medio':
        return (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        );
      case 'baixo':
        return (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
      {/* Cabeçalho do card */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
            {cliente.nome}
          </h3>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(cliente.status)}`}>
            {cliente.status.charAt(0).toUpperCase() + cliente.status.slice(1)}
          </span>
        </div>
        
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {cliente.segmento}
        </p>
      </div>

      {/* Conteúdo do card */}
      <div className="p-4">
        {/* Informações de contato */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <svg className="h-4 w-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {cliente.email}
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <svg className="h-4 w-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {cliente.telefone}
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <svg className="h-4 w-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {cliente.cidade}, {cliente.estado}
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {cliente.totalPedidos}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Pedidos</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              {formatarPreco(cliente.valorTotal)}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Total</p>
          </div>
        </div>

        {/* Potencial e último pedido */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <span className="text-xs text-gray-500 dark:text-gray-400 mr-1">Potencial:</span>
            <div className={`flex items-center ${getPotencialColor(cliente.potencial)}`}>
              {getPotencialIcon(cliente.potencial)}
              <span className="ml-1 text-xs font-medium capitalize">
                {cliente.potencial}
              </span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Último pedido: {formatarData(cliente.ultimoPedido)}
          </p>
        </div>

        {/* Ações */}
        <div className="flex gap-2">
          <button
            onClick={() => window.location.href = `/clientes/${cliente.id}`}
            className="flex-1 px-3 py-2 text-sm bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Ver Detalhes
          </button>
          <button
            onClick={() => window.location.href = `/pedidos/novo?cliente=${cliente.id}`}
            className="px-3 py-2 text-sm border border-green-300 text-green-700 dark:text-green-400 dark:border-green-600 rounded-md hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
          <button
            onClick={() => window.location.href = `/clientes/${cliente.id}/editar`}
            className="px-3 py-2 text-sm border border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}