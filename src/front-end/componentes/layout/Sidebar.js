import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logotipo from '../Logotipo';
import { ServicoAutenticacao } from '../../servicos/ServicoAutenticacao';

export default function Sidebar({ temaSidebar = 'claro', alternarTema, tipoUsuario = 'Fornecedor' }) {
  const router = useRouter();
  const servicoAutenticacao = new ServicoAutenticacao();
  const isActive = (path) => router.pathname === path;
  
  const handleLogout = () => {
    servicoAutenticacao.logout();
    window.location.href = '/login';
  };

  return (
    <div className={`w-64 min-h-screen flex flex-col fixed left-0 top-0 ${temaSidebar === 'escuro' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} shadow-lg`}>
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <Logotipo tamanho="sm" />
        </div>
      </div>
      
      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          <li>
            <Link href="/painel" legacyBehavior>
              <a className={`flex items-center px-4 py-3 ${isActive('/painel') ? 'bg-purple-50 text-purple-600 border-l-4 border-purple-600 dark:bg-purple-900/20 dark:text-purple-400' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
                <span className="inline-flex items-center justify-center w-6 h-6 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </span>
                Dashboard
              </a>
            </Link>
          </li>
          <li>
            <Link href="/produtos" legacyBehavior>
              <a className={`flex items-center px-4 py-3 ${isActive('/produtos') ? 'bg-purple-50 text-purple-600 border-l-4 border-purple-600 dark:bg-purple-900/20 dark:text-purple-400' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
                <span className="inline-flex items-center justify-center w-6 h-6 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                  </svg>
                </span>
                Meus Produtos
              </a>
            </Link>
          </li>
          <li>
            <Link href="/categorias" legacyBehavior>
              <a className={`flex items-center px-4 py-3 ${isActive('/categorias') ? 'bg-purple-50 text-purple-600 border-l-4 border-purple-600 dark:bg-purple-900/20 dark:text-purple-400' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
                <span className="inline-flex items-center justify-center w-6 h-6 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                </span>
                Categorias
              </a>
            </Link>
          </li>
          <li>
            <Link href="/pedidos" legacyBehavior>
              <a className={`flex items-center px-4 py-3 ${isActive('/pedidos') ? 'bg-purple-50 text-purple-600 border-l-4 border-purple-600 dark:bg-purple-900/20 dark:text-purple-400' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
                <span className="inline-flex items-center justify-center w-6 h-6 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </span>
                Pedidos
              </a>
            </Link>
          </li>
          <li>
            <Link href="/revendedores" legacyBehavior>
              <a className={`flex items-center px-4 py-3 ${isActive('/revendedores') ? 'bg-purple-50 text-purple-600 border-l-4 border-purple-600 dark:bg-purple-900/20 dark:text-purple-400' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
                <span className="inline-flex items-center justify-center w-6 h-6 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </span>
                Revendedores
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="mb-3 text-xs text-gray-500 dark:text-gray-400">
          {tipoUsuario}
        </div>
        <div className="flex items-center justify-between">
          <button 
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="Ajuda"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </button>
          <button 
            onClick={alternarTema}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="Alternar tema"
          >
            {temaSidebar === 'claro' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          <button 
            onClick={handleLogout}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="Sair"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}