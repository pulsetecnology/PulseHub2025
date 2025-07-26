import React from 'react';
import { usarCorTema } from '../../utils/coresTema';

export default function CardAcaoRapida({ titulo, descricao, icone, url }) {
  const { classes } = usarCorTema();

  const handleClick = () => {
    if (url) {
      window.location.href = url;
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg border-2 p-6 cursor-pointer transition-all duration-200 ${classes.borderLight} dark:${classes.borderLight} hover:${classes.bgLight} hover:${classes.bgLightDark}`}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className={`p-2 rounded-lg ${classes.bgLight} ${classes.bgLightDark}`}>
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
            <span className={`inline-flex items-center text-sm font-medium ${classes.text} ${classes.textDark}`}>
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