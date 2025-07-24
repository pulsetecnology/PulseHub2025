import React from 'react';
import Link from 'next/link';

export default function CardAcaoRapida({ titulo, descricao, icone, url, cor = 'blue' }) {
  const corBotao = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    green: 'bg-green-600 hover:bg-green-700',
    purple: 'bg-purple-600 hover:bg-purple-700',
    orange: 'bg-orange-600 hover:bg-orange-700',
    red: 'bg-red-600 hover:bg-red-700',
    white: 'bg-white hover:bg-gray-100 text-purple-600 border border-purple-600',
  }[cor];

  const corIcone = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600',
    red: 'text-red-600',
    white: 'text-purple-600',
  }[cor];

  const textoBotao = cor === 'white' ? 'text-purple-600' : 'text-white';

  const corFundo = {
    blue: 'bg-blue-100 dark:bg-blue-900/30',
    green: 'bg-green-100 dark:bg-green-900/30',
    purple: 'bg-purple-100 dark:bg-purple-900/30',
    orange: 'bg-orange-100 dark:bg-orange-900/30',
    red: 'bg-red-100 dark:bg-red-900/30',
    white: 'bg-purple-100 dark:bg-purple-900/30',
  }[cor];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex items-center mb-4">
        <div className={`w-10 h-10 rounded-full ${corFundo} flex items-center justify-center mr-3`}>
          {icone || (
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${corIcone}`} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{titulo}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{descricao}</p>
        </div>
      </div>
      <Link href={url} legacyBehavior>
        <a className={`block w-full py-2 px-4 ${corBotao} ${textoBotao} text-center rounded-lg transition-colors duration-200`}>
          Acessar
        </a>
      </Link>
    </div>
  );
}