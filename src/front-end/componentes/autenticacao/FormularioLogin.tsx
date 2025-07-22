import React, { useState } from 'react';
import { validarEmail } from '../../utils/validadores';

interface FormularioLoginProps {
  aoSubmeter: (email: string, senha: string) => Promise<void>;
  erro: string | null;
  carregando: boolean;
}

/**
 * Componente de formulário de login
 */
export default function FormularioLogin({ aoSubmeter, erro, carregando }: FormularioLoginProps) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errosValidacao, setErrosValidacao] = useState<{ email?: string; senha?: string }>({});

  const validarFormulario = (): boolean => {
    const novosErros: { email?: string; senha?: string } = {};
    
    if (!email) {
      novosErros.email = 'E-mail é obrigatório';
    } else if (!validarEmail(email)) {
      novosErros.email = 'E-mail inválido';
    }
    
    if (!senha) {
      novosErros.senha = 'Senha é obrigatória';
    } else if (senha.length < 6) {
      novosErros.senha = 'Senha deve ter pelo menos 6 caracteres';
    }
    
    setErrosValidacao(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validarFormulario()) {
      await aoSubmeter(email, senha);
    }
  };

  return (
    <div className="w-full max-w-md">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white dark:bg-gray-800 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Entrar
        </h2>
        
        {erro && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {erro}
          </div>
        )}
        
        <div className="mb-4">
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
        
        <div className="mb-6">
          <label 
            className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" 
            htmlFor="senha"
          >
            Senha
          </label>
          <input
            id="senha"
            type="password"
            placeholder="********"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errosValidacao.senha ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            }`}
          />
          {errosValidacao.senha && (
            <p className="text-red-500 text-xs italic mt-1">{errosValidacao.senha}</p>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={carregando}
            className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              carregando ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {carregando ? (
              <div className="flex items-center">
                <div className="spinner w-4 h-4 mr-2"></div>
                <span>Entrando...</span>
              </div>
            ) : (
              'Entrar'
            )}
          </button>
          
          <a
            href="/recuperar-senha"
            className="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Esqueceu a senha?
          </a>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Não tem uma conta?{' '}
            <a
              href="/registrar"
              className="font-bold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Registre-se
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}