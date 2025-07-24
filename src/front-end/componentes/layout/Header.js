import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Header({ titulo, subtitulo, botaoVoltar, botaoAcao }) {
  const router = useRouter();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm py-4 px-6 mb-6">
      <div className="flex justify-between items-center">
        <div>
          {botaoVoltar && (
            <Link href={botaoVoltar.url} legacyBehavior>
              <a className="inline-flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                {botaoVoltar.texto || 'Voltar'}
              </a>
            </Link>
          )}
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{titulo}</h1>
          {subtitulo && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{subtitulo}</p>}
        </div>
        
        {botaoAcao && (
          <button
            onClick={botaoAcao.onClick || (() => router.push(botaoAcao.url))}
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {botaoAcao.icone && (
              <span className="mr-2">{botaoAcao.icone}</span>
            )}
            {botaoAcao.texto}
          </button>
        )}
      </div>
    </header>
  );
}