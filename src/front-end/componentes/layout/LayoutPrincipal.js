import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { ServicoAutenticacao } from '../../servicos/ServicoAutenticacao';
import { usarCorTema } from '../../utils/coresTema';

export default function LayoutPrincipal({ children, titulo, subtitulo, botaoVoltar, botaoAcao }) {
  const [tema, setTema] = useState('claro');
  const { classes } = usarCorTema();
  const [usuario, setUsuario] = useState(null);
  const [mostrarDropdownUsuario, setMostrarDropdownUsuario] = useState(false);
  const [sidebarRecolhido, setSidebarRecolhido] = useState(() => {
    // Recuperar estado do sidebar do localStorage
    if (typeof window !== 'undefined') {
      const estadoSalvo = localStorage.getItem('sidebarRecolhido');
      return estadoSalvo === 'true';
    }
    return false;
  });
  const servicoAutenticacao = new ServicoAutenticacao();

  useEffect(() => {
    // Verificar tema salvo
    const temaSalvo = localStorage.getItem('tema') || 'claro';
    setTema(temaSalvo);
    
    // Aplicar classe ao HTML para tema escuro
    if (temaSalvo === 'escuro') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Obter dados do usuário
    const dadosUsuario = servicoAutenticacao.obterUsuario();
    if (dadosUsuario) {
      setUsuario(dadosUsuario);
    }

    // Fechar dropdown quando clicar fora
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-usuario')) {
        setMostrarDropdownUsuario(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const alternarTema = () => {
    const novoTema = tema === 'claro' ? 'escuro' : 'claro';
    setTema(novoTema);
    localStorage.setItem('tema', novoTema);
    
    if (novoTema === 'escuro') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar 
        temaSidebar={tema} 
        alternarTema={alternarTema} 
        tipoUsuario={usuario?.papel || 'Fornecedor'}
        estadoInicialRecolhido={sidebarRecolhido}
        onToggleRecolhido={(novoEstado) => {
          setSidebarRecolhido(novoEstado);
          localStorage.setItem('sidebarRecolhido', novoEstado.toString());
        }}
      />
      
      <div className={`flex-1 transition-all duration-300 ${sidebarRecolhido ? 'ml-16' : 'ml-56'}`}>
        {/* Header fixo no topo alinhado com a área do logo */}
        <div className={`fixed top-0 right-0 z-10 flex justify-between items-center bg-white dark:bg-gray-800 p-4 h-16 transition-all duration-300 ${sidebarRecolhido ? 'left-16' : 'left-56'}`} style={{boxShadow: '0 8px 15px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.1)'}}>
          <div>
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{titulo}</h1>
            {subtitulo && <p className="text-sm text-gray-500 dark:text-gray-400">{subtitulo}</p>}
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Botões de ação movidos do sidebar */}
            <button 
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Ajuda"
              title="Ajuda"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </button>
            
            <button 
              onClick={alternarTema}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Alternar tema"
              title="Alternar tema"
            >
              {tema === 'claro' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              )}
            </button>

            {/* Separador visual */}
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>

            {/* Dropdown do usuário */}
            <div className="relative dropdown-usuario">
              <button
                onClick={() => setMostrarDropdownUsuario(!mostrarDropdownUsuario)}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none"
              >
                <div className="text-right hidden md:block">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {usuario?.nome || 'Usuário'}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {usuario?.papel || 'Fornecedor'}
                  </p>
                </div>
                <div className={`w-8 h-8 rounded-full ${classes.bg} flex items-center justify-center text-white font-medium`}>
                  {usuario?.nome?.charAt(0) || 'U'}
                </div>
                <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown menu */}
              {mostrarDropdownUsuario && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 z-50" style={{boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 10px 20px -5px rgba(0, 0, 0, 0.1)'}}>
                  <div className="py-1">
                    <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {usuario?.nome || 'Usuário'}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {usuario?.email || 'usuario@exemplo.com'}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        // Implementar perfil do usuário
                        console.log('Abrir perfil');
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
                    >
                      <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Meu Perfil
                    </button>
                    <button
                      onClick={() => {
                        window.location.href = '/configuracoes';
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
                    >
                      <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Configurações
                    </button>
                    <div className="border-t border-gray-200 dark:border-gray-700"></div>
                    <button
                      onClick={() => {
                        servicoAutenticacao.logout();
                        window.location.href = '/login';
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center"
                    >
                      <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Sair
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Conteúdo principal com padding-top para compensar o header fixo */}
        <main className="pt-20 p-6" style={{boxShadow: '-2px 0 4px -1px rgba(0, 0, 0, 0.1)'}}>
          {children}
        </main>
      </div>
    </div>
  );
}