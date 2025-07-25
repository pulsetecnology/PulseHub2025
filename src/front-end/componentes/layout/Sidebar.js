import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logotipo from '../Logotipo';
import { obterPapelUsuario, PAPEIS } from '../../utils/papelUsuario';

export default function Sidebar({ temaSidebar = 'claro', alternarTema, tipoUsuario = 'Fornecedor', onToggleRecolhido }) {
  const router = useRouter();
  const [papelUsuario, setPapelUsuario] = useState(PAPEIS.REPRESENTANTE);
  const [menuRecolhido, setMenuRecolhido] = useState(false);

  useEffect(() => {
    // Obter o papel do usuário logado
    const papel = obterPapelUsuario();
    setPapelUsuario(papel);
  }, []);

  const isActive = (path) => {
    if (path === '/painel' && (router.pathname === '/painel' || router.pathname === '/painel-representante' || router.pathname === '/admin')) {
      return true;
    }
    return router.pathname.startsWith(path);
  };

  // Configuração de menus por papel do usuário
  const getMenuItems = () => {
    const baseItems = [
      {
        href: getDashboardUrl(),
        label: 'Dashboard',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        ),
        always: true
      }
    ];

    switch (papelUsuario) {
      case PAPEIS.ADMINISTRADOR:
        return [
          ...baseItems,
          {
            href: '/admin/usuarios',
            label: 'Usuários',
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            )
          },
          {
            href: '/admin/relatorios',
            label: 'Relatórios',
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            )
          },
          {
            href: '/admin/configuracoes',
            label: 'Configurações',
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            )
          }
        ];

      case PAPEIS.FORNECEDOR:
        return [
          ...baseItems,
          {
            href: '/produtos',
            label: 'Produtos',
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
            )
          },
          {
            href: '/pedidos',
            label: 'Pedidos',
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            )
          },
          {
            href: '/representantes',
            label: 'Representantes',
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
              </svg>
            )
          }
        ];

      case PAPEIS.REPRESENTANTE:
        return [
          ...baseItems,
          {
            href: '/produtos',
            label: 'Catálogo',
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
            )
          },
          {
            href: '/clientes',
            label: 'Clientes',
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            )
          },
          {
            href: '/pedidos',
            label: 'Pedidos',
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            )
          }
        ];

      default:
        return baseItems;
    }
  };

  const getDashboardUrl = () => {
    switch (papelUsuario) {
      case PAPEIS.ADMINISTRADOR:
        return '/admin';
      case PAPEIS.FORNECEDOR:
        return '/painel';
      case PAPEIS.REPRESENTANTE:
        return '/painel-representante';
      default:
        return '/painel';
    }
  };

  const menuItems = getMenuItems();

  return (
    <div className={`${menuRecolhido ? 'w-16' : 'w-56'} min-h-screen flex flex-col fixed left-0 top-0 z-20 transition-all duration-300 ${temaSidebar === 'escuro' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`} style={{boxShadow: '2px 0 8px -2px rgba(0, 0, 0, 0.1)'}}>
      
      {/* Header com Logo e Botão de Recolher */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          {!menuRecolhido && (
            <div className="flex items-center">
              <Logotipo tamanho="sm" />
            </div>
          )}
          <button
            onClick={() => {
              const novoEstado = !menuRecolhido;
              setMenuRecolhido(novoEstado);
              if (onToggleRecolhido) {
                onToggleRecolhido(novoEstado);
              }
            }}
            className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            title={menuRecolhido ? 'Expandir menu' : 'Recolher menu'}
          >
            <svg 
              className={`h-4 w-4 transition-transform ${menuRecolhido ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>
        </div>
        
        {/* Indicador do Tipo de Usuário */}
        {!menuRecolhido && (
          <div className="mt-3 px-2 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
            <p className="text-xs font-medium text-purple-700 dark:text-purple-300">
              {papelUsuario === PAPEIS.ADMINISTRADOR && '👨‍💼 Administrador'}
              {papelUsuario === PAPEIS.FORNECEDOR && '🏭 Fornecedor'}
              {papelUsuario === PAPEIS.REPRESENTANTE && '🤝 Representante'}
            </p>
          </div>
        )}
      </div>
      
      {/* Menu de Navegação */}
      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} legacyBehavior>
                <a 
                  className={`flex items-center px-4 py-3 transition-colors ${
                    isActive(item.href) 
                      ? 'bg-purple-50 text-purple-600 border-l-4 border-purple-600 dark:bg-purple-900/20 dark:text-purple-400' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  title={menuRecolhido ? item.label : ''}
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-3">
                    {item.icon}
                  </span>
                  {!menuRecolhido && (
                    <span className="font-medium">{item.label}</span>
                  )}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Footer com informações do usuário */}
      {!menuRecolhido && (
        <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            <p>Menu otimizado por papel</p>
            <p>Funcionalidades específicas no dashboard</p>
          </div>
        </div>
      )}
    </div>
  );
}