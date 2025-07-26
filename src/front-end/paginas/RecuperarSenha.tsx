import React, { useState, useEffect } from 'react';
import FormularioRecuperarSenha from '../componentes/autenticacao/FormularioRecuperarSenha';
import Logotipo from '../componentes/Logotipo';
import { ServicoAutenticacao } from '../servicos/ServicoAutenticacao';

/**
 * Página de recuperação de senha
 */
export default function RecuperarSenha() {
  const [erro, setErro] = useState<string | null>(null);
  const [sucesso, setSucesso] = useState<string | null>(null);
  const [carregando, setCarregando] = useState<boolean>(false);
  const servicoAutenticacao = new ServicoAutenticacao();

  useEffect(() => {
    // Verificar se o usuário já está autenticado
    if (servicoAutenticacao.estaAutenticado()) {
      // Redirecionar para a página inicial
      window.location.href = '/painel';
    }
  }, []);

  const handleRecuperarSenha = async (email: string) => {
    setErro(null);
    setSucesso(null);
    setCarregando(true);

    try {
      const mensagem = await servicoAutenticacao.recuperarSenha(email);
      setSucesso(mensagem);
    } catch (error) {
      if (error instanceof Error) {
        setErro(error.message);
      } else {
        setErro('Ocorreu um erro ao solicitar a recuperação de senha. Tente novamente.');
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
          Recupere o acesso à sua conta
        </p>
      </div>
      
      <FormularioRecuperarSenha 
        aoSubmeter={handleRecuperarSenha} 
        erro={erro}
        sucesso={sucesso}
        carregando={carregando} 
      />
    </div>
  );
}