import React, { useState } from 'react';
import { validarEmail } from '../../utils/validadores';

interface FormularioRecuperarSenhaProps {
  aoSubmeter: (email: string) => Promise<void>;
  erro: string | null;
  sucesso: string | null;
  carregando: boolean;
}

/**
 * Componente de formulário de recuperação de senha
 */
export default function FormularioRecuperarSenha({ 
  aoSubmeter, 
  erro, 
  sucesso, 
  carregando 
}: FormularioRecuperarSenhaProps) {
  const [email, setEmail] = useState('');
  const [errosValidacao, setErrosValidacao] = useState<{ email?: string }>({});

  const validarFormulario = (): boolean => {
    const novosErros: { email?: string } = {};
    
    if (!email) {
      novosErros.email = 'E-mail é obrigatório';
    } else if (!validarEmail(email)) {
      novosErros.email = 'E-mail inválido';
    }
    
    setErrosValidacao(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validarFormulario()) {
      await aoSubmeter(email);
    }
  };

  return (
    <div className="w-full max-w-md">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white dark:bg-gray-800 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Recuperar Senha
        </h2>
        
        <p className="mb-6 text-gray-600 dark:text-gray-400 text-center">
          Informe seu e-mail e enviaremos instruções para redefinir sua senha.
        </p>
        
        {erro && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {erro}
          </div>
        )}
        
        {sucesso && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            {sucesso}
          </div>
        )}
        
        <div className="mb-6">
          <label 
            className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" 
            htmlFor="email"
          >
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errosValidacao.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            }`}
          />
          {errosValidacao.email && (
            <p className="text-red-500 text-xs italic mt-1">{errosValidacao.email}</p>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={carregando || !!sucesso}
            className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              (carregando || !!sucesso) ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {carregando ? (
              <div className="flex items-center">
                <div className="spinner w-4 h-4 mr-2"></div>
                <span>Enviando...</span>
              </div>
            ) : (
              'Enviar Instruções'
            )}
          </button>
          
          <a
            href="/login"
            className="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Voltar ao Login
          </a>
        </div>
      </form>
    </div>
  );
}