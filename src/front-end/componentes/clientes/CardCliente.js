import React from 'react';
import { usarCorTema } from '../../utils/coresTema';
import ServicoClientes from '../../servicos/ServicoClientes';

export default function CardCliente({ cliente, visualizacao = 'grid', onStatusChange }) {
  const { classes } = usarCorTema();

  const handleAlternarStatus = async (id) => {
    try {
      const servicoClientes = new ServicoClientes();
      const clienteAtualizado = servicoClientes.alternarStatus(id);
      
      if (clienteAtualizado && onStatusChange) {
        onStatusChange(clienteAtualizado);
      }
      
      // Recarregar a página para atualizar a lista
      window.location.reload();
    } catch (error) {
      console.error('Erro ao alterar status do cliente:', error);
      alert('Erro ao alterar status do cliente');
    }
  };

  const formatarData = (data) => {
    if (!data) return 'Nunca';
    return new Date(data).toLocaleDateString('pt-BR');
  };

  const formatarMoeda = (valor) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor || 0);
  };

  const getStatusColor = (status) => {
    return status === 'ativo' 
      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
  };

  const getTipoColor = (tipo) => {
    return tipo === 'pessoa_fisica'
      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
  };

  const getTipoLabel = (tipo) => {
    return tipo === 'pessoa_fisica' ? 'PF' : 'PJ';
  };

  if (visualizacao === 'lista') {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 p-4">
        {/* Layout mobile */}
        <div className="block lg:hidden">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-full ${classes.bg} flex items-center justify-center text-white font-semibold text-sm`}>
                {(cliente.nomeFantasia || cliente.razaoSocial || 'C').charAt(0).toUpperCase()}
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-900 dark:text-white">
                  {cliente.nomeFantasia || cliente.razaoSocial}
                </h3>
                <div className="flex items-center space-x-2 mt-1">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTipoColor(cliente.tipo)}`}>
                    {getTipoLabel(cliente.tipo)}
                  </span>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(cliente.status)}`}>
                    {cliente.status === 'ativo' ? 'Ativo' : 'Inativo'}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => window.location.href = `/clientes/${cliente.id}`}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                title="Ver detalhes"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
              
              <button
                onClick={() => window.location.href = `/clientes/${cliente.id}/editar`}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                title="Editar"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>

              <button
                onClick={() => handleAlternarStatus(cliente.id)}
                className={`${cliente.status === 'ativo' 
                  ? 'text-red-400 hover:text-red-600 dark:hover:text-red-300' 
                  : 'text-green-400 hover:text-green-600 dark:hover:text-green-300'
                }`}
                title={cliente.status === 'ativo' ? 'Inativar cliente' : 'Ativar cliente'}
              >
                {cliente.status === 'ativo' ? (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
            <div>{cliente.cidade}, {cliente.estado}</div>
            <div>{cliente.emailComercial}</div>
            <div>{cliente.telefoneComercial}</div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 text-sm">
            <div className="text-center">
              <div className="font-medium text-gray-900 dark:text-white">
                {cliente.totalCompras || 0}
              </div>
              <div className="text-gray-500 dark:text-gray-400">Compras</div>
            </div>
            
            <div className="text-center">
              <div className="font-medium text-gray-900 dark:text-white">
                {formatarMoeda(cliente.valorTotal)}
              </div>
              <div className="text-gray-500 dark:text-gray-400">Total</div>
            </div>
            
            <div className="text-center">
              <div className="font-medium text-gray-900 dark:text-white">
                {formatarData(cliente.ultimaCompra)}
              </div>
              <div className="text-gray-500 dark:text-gray-400">Última</div>
            </div>
          </div>
        </div>

        {/* Layout desktop */}
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="flex-shrink-0">
              <div className={`w-12 h-12 rounded-full ${classes.bg} flex items-center justify-center text-white font-semibold`}>
                {(cliente.nomeFantasia || cliente.razaoSocial || 'C').charAt(0).toUpperCase()}
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white truncate">
                  {cliente.nomeFantasia || cliente.razaoSocial}
                </h3>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTipoColor(cliente.tipo)}`}>
                  {getTipoLabel(cliente.tipo)}
                </span>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(cliente.status)}`}>
                  {cliente.status === 'ativo' ? 'Ativo' : 'Inativo'}
                </span>
              </div>
              
              <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <span>{cliente.cidade}, {cliente.estado}</span>
                <span>•</span>
                <span>{cliente.emailComercial}</span>
                <span>•</span>
                <span>{cliente.telefoneComercial}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <div className="text-center">
              <div className="font-medium text-gray-900 dark:text-white">
                {cliente.totalCompras || 0}
              </div>
              <div className="text-gray-500 dark:text-gray-400">Compras</div>
            </div>
            
            <div className="text-center">
              <div className="font-medium text-gray-900 dark:text-white">
                {formatarMoeda(cliente.valorTotal)}
              </div>
              <div className="text-gray-500 dark:text-gray-400">Total</div>
            </div>
            
            <div className="text-center">
              <div className="font-medium text-gray-900 dark:text-white">
                {formatarData(cliente.ultimaCompra)}
              </div>
              <div className="text-gray-500 dark:text-gray-400">Última compra</div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => window.location.href = `/clientes/${cliente.id}`}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                title="Ver detalhes"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
              
              <button
                onClick={() => window.location.href = `/clientes/${cliente.id}/editar`}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                title="Editar"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>

              <button
                onClick={() => handleAlternarStatus(cliente.id)}
                className={`${cliente.status === 'ativo' 
                  ? 'text-red-400 hover:text-red-600 dark:hover:text-red-300' 
                  : 'text-green-400 hover:text-green-600 dark:hover:text-green-300'
                }`}
                title={cliente.status === 'ativo' ? 'Inativar cliente' : 'Ativar cliente'}
              >
                {cliente.status === 'ativo' ? (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Visualização em grid
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-full ${classes.bg} flex items-center justify-center text-white font-semibold`}>
            {(cliente.nomeFantasia || cliente.razaoSocial || 'C').charAt(0).toUpperCase()}
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              {cliente.nomeFantasia || cliente.razaoSocial}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {cliente.nomeContato}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTipoColor(cliente.tipo)}`}>
            {getTipoLabel(cliente.tipo)}
          </span>
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(cliente.status)}`}>
            {cliente.status === 'ativo' ? 'Ativo' : 'Inativo'}
          </span>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
          <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {cliente.cidade}, {cliente.estado}
        </div>
        
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
          <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {cliente.emailComercial}
        </div>
        
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
          <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {cliente.telefoneComercial}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between text-sm">
          <div>
            <span className="text-gray-500 dark:text-gray-400">Total em compras:</span>
            <span className="ml-1 font-medium text-gray-900 dark:text-white">
              {formatarMoeda(cliente.valorTotal)}
            </span>
          </div>
          
          <div>
            <span className="text-gray-500 dark:text-gray-400">Compras:</span>
            <span className="ml-1 font-medium text-gray-900 dark:text-white">
              {cliente.totalCompras || 0}
            </span>
          </div>
        </div>
        
        <div className="mt-2 text-sm">
          <span className="text-gray-500 dark:text-gray-400">Última compra:</span>
          <span className="ml-1 font-medium text-gray-900 dark:text-white">
            {formatarData(cliente.ultimaCompra)}
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Cliente desde {formatarData(cliente.dataCadastro)}
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => window.location.href = `/clientes/${cliente.id}`}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            title="Ver detalhes"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
          
          <button
            onClick={() => window.location.href = `/clientes/${cliente.id}/editar`}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            title="Editar"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>

          <button
            onClick={() => handleAlternarStatus(cliente.id)}
            className={`${cliente.status === 'ativo' 
              ? 'text-red-400 hover:text-red-600 dark:hover:text-red-300' 
              : 'text-green-400 hover:text-green-600 dark:hover:text-green-300'
            }`}
            title={cliente.status === 'ativo' ? 'Inativar cliente' : 'Ativar cliente'}
          >
            {cliente.status === 'ativo' ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}