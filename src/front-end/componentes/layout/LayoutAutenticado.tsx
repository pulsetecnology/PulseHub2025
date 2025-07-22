import React, { ReactNode, useEffect, useState } from 'react';
import { ServicoAutenticacao } from '../../servicos/ServicoAutenticacao';
import Logotipo from '../Logotipo';

interface LayoutAutenticadoProps {
  children: ReactNode;
  titulo: string;
}

/**
 * Layout para páginas que requerem autenticação
 */
export default function LayoutAutenticado({ children, titulo }: LayoutAutenticadoProps) {
  const [carregando, setCarregando] = useState<boolean>(true);
  const servicoAutenticacao = new ServicoAutenticacao();

  useEffect(() => {
    // Verificar se o usuário está autenticado
    if (!servicoAutenticacao.estaAutenticado()) {
      // Redirecionar para a página de login
      window.location.href = '/login';
      return;
    }
    
    setCarregando(false);
  }, []);

  const handleLogout = () => {
    servicoAutenticacao.logout();
    window.location.href = '/login';
  };

  if (carregando) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="spinner w-12 h-12"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      {/* Cabeçalho */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Logotipo tamanho="sm" />
            <h1 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">
              {titulo}
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleLogout}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>

      {/* Rodapé */}
      <footer className="bg-white dark:bg-gray-800 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} PulseHub B2B. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}