import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { ServicoAutenticacao } from '../../servicos/ServicoAutenticacao';

export default function LayoutPrincipal({ children, titulo, subtitulo, botaoVoltar, botaoAcao }) {
  const [tema, setTema] = useState('claro');
  const [usuario, setUsuario] = useState(null);
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
      />
      
      <div className="flex-1 ml-64">
        <div className="flex justify-between items-center bg-white dark:bg-gray-800 shadow-sm p-4">
          <div>
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{titulo}</h1>
            {subtitulo && <p className="text-sm text-gray-500 dark:text-gray-400">{subtitulo}</p>}
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="flex items-center space-x-2 focus:outline-none">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
                  {usuario?.nome?.charAt(0) || 'U'}
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden md:block">
                  {usuario?.nome || 'Usuário'}
                </span>
              </button>
            </div>
          </div>
        </div>
        
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}