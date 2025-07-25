import React from 'react';

export default function CardAcaoRapida({ titulo, descricao, icone, url, cor = 'purple' }) {
  const getCorClasses = (cor) => {
    const cores = {
      purple: 'hover:bg-purple-50 dark:hover:bg-purple-900/20 border-purple-200 dark:border-purple-800',
      green: 'hover:bg-green-50 dark:hover:bg-green-900/20 border-green-200 dark:border-green-800',
      blue: 'hover:bg-blue-50 dark:hover:bg-blue-900/20 border-blue-200 dark:border-blue-800',
      orange: 'hover:bg-orange-50 dark:hover:bg-orange-900/20 border-orange-200 dark:border-orange-800',
      white: 'hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700'
    };
    return cores[cor] || cores.purple;
  };

  const handleClick = () => {
    if (url) {
      window.location.href = url;
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow border-2 p-6 cursor-pointer transition-all duration-200 ${getCorClasses(cor)}`}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
            {icone}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {titulo}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            {descricao}
          </p>
          <div className="mt-3">
            <span className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400">
              Acessar
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}