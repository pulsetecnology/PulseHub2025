import React, { useState, useEffect } from 'react';
import FormularioLogin from '../componentes/autenticacao/FormularioLogin';
import Logotipo from '../componentes/Logotipo';
import { ServicoAutenticacao } from '../servicos/ServicoAutenticacao';

/**
 * Página de login
 */
export default function Login() {
  const [erro, setErro] = useState<string | null>(null);
  const [carregando, setCarregando] = useState<boolean>(false);
  const servicoAutenticacao = new ServicoAutenticacao();

  useEffect(() => {
    // Verificar se o usuário já está autenticado
    if (servicoAutenticacao.estaAutenticado()) {
      // Redirecionar para a página inicial
      window.location.href = '/painel';
    }
  }, []);

  const handleLogin = async (email: string, senha: string) => {
    setErro(null);
    setCarregando(true);

    try {
      await servicoAutenticacao.login(email, senha);
      // Redirecionar para a página inicial após o login bem-sucedido
      window.location.href = '/painel';
    } catch (error) {
      if (error instanceof Error) {
        setErro(error.message);
      } else {
        setErro('Ocorreu um erro durante o login. Tente novamente.');
      }
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mb-8">
        <Logotipo tamanho="lg" />
        <h1 className="mt-4 text-3xl font-extrabold text-gray-900 dark:text-white">
          PulseHub
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Plataforma de integração para fornecedores e representantes
        </p>
      </div>
      
      <FormularioLogin 
        aoSubmeter={handleLogin} 
        erro={erro} 
        carregando={carregando} 
      />
    </div>
  );
}