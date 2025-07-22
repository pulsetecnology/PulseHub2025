import React, { useState, useEffect } from 'react';
import FormularioRegistro from '../componentes/autenticacao/FormularioRegistro';
import Logotipo from '../componentes/Logotipo';
import { ServicoAutenticacao } from '../servicos/ServicoAutenticacao';

/**
 * Página de registro
 */
export default function Registro() {
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

  const handleRegistro = async (nome: string, email: string, senha: string) => {
    setErro(null);
    setCarregando(true);

    try {
      await servicoAutenticacao.registrar(nome, email, senha);
      // Redirecionar para a página de login após o registro bem-sucedido
      window.location.href = '/login?registrado=true';
    } catch (error) {
      if (error instanceof Error) {
        setErro(error.message);
      } else {
        setErro('Ocorreu um erro durante o registro. Tente novamente.');
      }
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mb-8">
        <Logotipo tamanho="lg" />
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Crie sua conta para acessar a plataforma
        </p>
      </div>
      <FormularioRegistro 
        aoSubmeter={handleRegistro} 
        erro={erro} 
        carregando={carregando} 
      />
    </div>
  );
}