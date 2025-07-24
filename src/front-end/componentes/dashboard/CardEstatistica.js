import React from 'react';

export default function CardEstatistica({ titulo, valor, variacao, icone, cor = 'blue' }) {
  const corFundo = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-600',
    orange: 'bg-orange-500',
    red: 'bg-red-500',
  }[cor];

  const corTexto = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600',
    red: 'text-red-600',
  }[cor];

  const corVariacaoPositiva = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600',
    red: 'text-red-600',
  }[cor];

  const corVariacaoNegativa = 'text-red-600';

  const isPositivo = variacao && variacao > 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{titulo}</h3>
        <div className={`w-10 h-10 rounded-lg ${corFundo} bg-opacity-20 flex items-center justify-center`}>
          {icone || (
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${corTexto}`} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2h10a1 1 0 100-2H3zm0 4a1 1 0 000 2h6a1 1 0 100-2H3zm0 4a1 1 0 100 2h10a1 1 0 100-2H3z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">{valor}</span>
        {variacao !== undefined && (
          <div className="flex items-center mt-2">
            <span className={isPositivo ? corVariacaoPositiva : corVariacaoNegativa}>
              {isPositivo ? '↑' : '↓'} {Math.abs(variacao)}%
            </span>
            <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">
              {isPositivo ? 'este mês' : 'este mês'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}