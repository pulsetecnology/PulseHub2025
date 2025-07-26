import React from 'react';
import { usarCorTema } from '../../utils/coresTema';

export default function CardEstatistica({ titulo, valor, variacao, icone, usarCorTemaAtual = true }) {
  const { classes } = usarCorTema();

  const getVariacaoColor = (variacao) => {
    if (variacao > 0) return 'text-green-600 dark:text-green-400';
    if (variacao < 0) return 'text-red-600 dark:text-red-400';
    return 'text-gray-600 dark:text-gray-400';
  };

  const getVariacaoIcon = (variacao) => {
    if (variacao > 0) {
      return (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
        </svg>
      );
    }
    if (variacao < 0) {
      return (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-9.2 9.2M7 7v10h10" />
        </svg>
      );
    }
    return (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
      </svg>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 truncate">
            {titulo}
          </p>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">
            {valor}
          </p>
          {variacao !== undefined && (
            <div className={`flex items-center mt-2 ${getVariacaoColor(variacao)}`}>
              {getVariacaoIcon(variacao)}
              <span className="ml-1 text-sm font-medium">
                {Math.abs(variacao)}%
              </span>
              <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">
                vs mês anterior
              </span>
            </div>
          )}
        </div>
        <div className={`flex-shrink-0 p-3 rounded-lg ${usarCorTemaAtual ? `${classes.bgLight} ${classes.bgLightDark}` : 'bg-gray-50 dark:bg-gray-700'}`}>
          {icone}
        </div>
      </div>
    </div>
  );
}