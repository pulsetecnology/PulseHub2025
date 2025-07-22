import React, { useState } from 'react';
import { validarSenha } from '../../utils/validadores';

interface FormularioRedefinirSenhaProps {
  aoSubmeter: (senha: string, token: string) => Promise<void>;
  token: string;
  erro: string | null;
  sucesso: string | null;
  carregando: boolean;
}

/**
 * Componente de formulário de redefinição de senha
 */
export default function FormularioRedefinirSenha({ 
  aoSubmeter, 
  token,
  erro, 
  sucesso, 
  carregando 
}: FormularioRedefinirSenhaProps) {
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [errosValidacao, setErrosValidacao] = useState<{ 
    senha?: string;
    confirmarSenha?: string;
  }>({});

  const validarFormulario = (): boolean => {
    const novosErros: { 
      senha?: string;
      confirmarSenha?: string;
    } = {};
    
    if (!senha) {
      novosErros.senha = 'Senha é obrigatória';
    } else if (!validarSenha(senha)) {
      novosErros.senha = 'Senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma minúscula e um número';
    }
    
    if (!confirmarSenha) {
      novosErros.confirmarSenha = 'Confirmação de senha é obrigatória';
    } else if (senha !== confirmarSenha) {
      novosErros.confirmarSenha = 'As senhas não coincidem';
    }
    
    setErrosValidacao(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validarFormulario()) {
      await aoSubmeter(senha, token);
    }
  };

  return (
    <div className="w-full max-w-md">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white dark:bg-gray-800 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Redefinir Senha
        </h2>
        
        <p className="mb-6 text-gray-600 dark:text-gray-400 text-center">
          Digite sua nova senha abaixo.
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
        
        <div className="mb-4">
          <label 
            className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" 
            htmlFor="senha"
          >
            Nova Senha
          </label>
          <input
            id="senha"
            type="password"
            placeholder="********"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            disabled={!!sucesso}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errosValidacao.senha ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } ${sucesso ? 'opacity-50 cursor-not-allowed' : ''}`}
          />
          {errosValidacao.senha && (
            <p className="text-red-500 text-xs italic mt-1">{errosValidacao.senha}</p>
          )}
        </div>
        
        <div className="mb-6">
          <label 
            className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" 
            htmlFor="confirmarSenha"
          >
            Confirmar Nova Senha
          </label>
          <input
            id="confirmarSenha"
            type="password"
            placeholder="********"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            disabled={!!sucesso}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errosValidacao.confirmarSenha ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } ${sucesso ? 'opacity-50 cursor-not-allowed' : ''}`}
          />
          {errosValidacao.confirmarSenha && (
            <p className="text-red-500 text-xs italic mt-1">{errosValidacao.confirmarSenha}</p>
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
                <span>Redefinindo...</span>
              </div>
            ) : (
              'Redefinir Senha'
            )}
          </button>
          
          {sucesso && (
            <a
              href="/login"
              className="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Ir para Login
            </a>
          )}
        </div>
      </form>
    </div>
  );
}