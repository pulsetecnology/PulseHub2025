import React from 'react';

export default function CardEstatistica({ titulo, valor, crescimento, icone, cor }) {
  const coresConfig = {
    green: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
    purple: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
    orange: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800',
    red: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
    gray: 'bg-gray-50 dark:bg-gray-900/20 border-gray-200 dark:border-gray-800'
  };

  const corFundo = coresConfig[cor] || coresConfig.gray;
  const crescimentoPositivo = crescimento > 0;
  const crescimentoNeutro = crescimento === 0;

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow border ${corFundo} p-6 hover:shadow-md transition-shadow`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
            {titulo}
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {valor}
          </p>
          
          {/* Indicador de crescimento */}
          {typeof crescimento === 'number' && !crescimentoNeutro && (
            <div className="flex items-center mt-2">
              <div className={`flex items-center ${
                crescimentoPositivo 
                  ? 'text-green-600 dark:text-green-400' 
                  : 'text-red-600 dark:text-red-400'
              }`}>
                <svg 
                  className={`h-4 w-4 mr-1 ${crescimentoPositivo ? '' : 'transform rotate-180'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" 
                    clipRule="evenodd" 
                  />
                </svg>
                <span className="text-sm font-medium">
                  {Math.abs(crescimento).toFixed(1)}%
                </span>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                vs período anterior
              </span>
            </div>
          )}
        </div>
        
        {/* Ícone */}
        <div className="flex-shrink-0 ml-4">
          <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center text-2xl shadow-sm">
            {icone}
          </div>
        </div>
      </div>
    </div>
  );
}