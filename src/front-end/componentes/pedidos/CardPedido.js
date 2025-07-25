import React, { useState } from 'react';

export default function CardPedido({ pedido }) {
  const [expandido, setExpandido] = useState(false);

  const formatarPreco = (preco) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco);
  };

  const formatarData = (data) => {
    return new Date(data).toLocaleDateString('pt-BR');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pendente':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'aprovado':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'em_producao':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'enviado':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'entregue':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      case 'cancelado':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getStatusLabel = (status) => {
    const labels = {
      'pendente': 'Pendente',
      'aprovado': 'Aprovado',
      'em_producao': 'Em Produção',
      'enviado': 'Enviado',
      'entregue': 'Entregue',
      'cancelado': 'Cancelado'
    };
    return labels[status] || status;
  };

  const getStatusIcon = (status) => {
    switch (status) {
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
      case 'em_producao':
        return (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'enviado':
        return (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        );
      case 'entregue':
        return (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'cancelado':
        return (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
      {/* Cabeçalho do pedido */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {pedido.numero}
            </h3>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(pedido.status)}`}>
              {getStatusIcon(pedido.status)}
              <span className="ml-1">{getStatusLabel(pedido.status)}</span>
            </span>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {formatarPreco(pedido.valor)}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {formatarData(pedido.data)}
            </p>
          </div>
        </div>

        {/* Informações do cliente */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Cliente</p>
            <p className="font-medium text-gray-900 dark:text-white">
              {pedido.cliente.nome}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {pedido.cliente.email}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Representante</p>
            <p className="font-medium text-gray-900 dark:text-white">
              {pedido.representante}
            </p>
          </div>
        </div>

        {/* Observações */}
        {pedido.observacoes && (
          <div className="mb-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">Observações</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {pedido.observacoes}
            </p>
          </div>
        )}

        {/* Botão expandir/recolher itens */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setExpandido(!expandido)}
            className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            <span className="text-sm font-medium">
              {expandido ? 'Ocultar itens' : `Ver itens (${pedido.itens.length})`}
            </span>
            <svg
              className={`ml-1 h-4 w-4 transform transition-transform ${expandido ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Ações */}
          <div className="flex gap-2">
            <button
              onClick={() => window.location.href = `/pedidos/${pedido.id}`}
              className="px-3 py-2 text-sm bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              Ver Detalhes
            </button>
            <button
              onClick={() => window.location.href = `/pedidos/${pedido.id}/editar`}
              className="px-3 py-2 text-sm border border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Lista de itens (expandível) */}
      {expandido && (
        <div className="border-t border-gray-200 dark:border-gray-700 p-6">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
            Itens do Pedido
          </h4>
          <div className="space-y-3">
            {pedido.itens.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-white">
                    {item.produto}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Quantidade: {item.quantidade} • Preço unitário: {formatarPreco(item.preco)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900 dark:text-white">
                    {formatarPreco(item.quantidade * item.preco)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}