import React, { useState, useEffect } from 'react';
import FormularioRedefinirSenha from '../componentes/autenticacao/FormularioRedefinirSenha';
import Logotipo from '../componentes/Logotipo';
import { ServicoAutenticacao } from '../servicos/ServicoAutenticacao';

/**
 * Página de redefinição de senha
 */
export default function RedefinirSenha() {
  const [erro, setErro] = useState<string | null>(null);
  const [sucesso, setSucesso] = useState<string | null>(null);
  const [carregando, setCarregando] = useState<boolean>(false);
  const [token, setToken] = useState<string>('');
  const servicoAutenticacao = new ServicoAutenticacao();

  useEffect(() => {
    // Verificar se o usuário já está autenticado
    if (servicoAutenticacao.estaAutenticado()) {
      // Redirecionar para a página inicial
      window.location.href = '/painel';
      return;
    }

    // Obter o token da URL
    const urlParams = new URLSearchParams(window.location.search);
    const tokenParam = urlParams.get('token');
    
    if (!tokenParam) {
      setErro('Token de redefinição de senha não fornecido. Verifique o link ou solicite uma nova recuperação de senha.');
      return;
    }
    
    setToken(tokenParam);
  }, []);

  const handleRedefinirSenha = async (senha: string, token: string) => {
    setErro(null);
    setSucesso(null);
    setCarregando(true);

    try {
      const mensagem = await servicoAutenticacao.redefinirSenha(senha, token);
      setSucesso(mensagem);
    } catch (error) {
      if (error instanceof Error) {
        setErro(error.message);
      } else {
        setErro('Ocorreu um erro ao redefinir a senha. Tente novamente.');
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
          Redefina sua senha
        </p>
      </div>
      
      <FormularioRedefinirSenha 
        aoSubmeter={handleRedefinirSenha} 
        token={token}
        erro={erro}
        sucesso={sucesso}
        carregando={carregando} 
      />
    </div>
  );
}