import React, { useState } from 'react';
import { validarEmail, validarSenha } from '../../utils/validadores';

interface FormularioRegistroProps {
  aoSubmeter: (nome: string, email: string, senha: string) => Promise<void>;
  erro: string | null;
  carregando: boolean;
}

/**
 * Componente de formulário de registro
 */
export default function FormularioRegistro({ aoSubmeter, erro, carregando }: FormularioRegistroProps) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [errosValidacao, setErrosValidacao] = useState<{ 
    nome?: string; 
    email?: string; 
    senha?: string;
    confirmarSenha?: string;
  }>({});

  const validarFormulario = (): boolean => {
    const novosErros: { 
      nome?: string; 
      email?: string; 
      senha?: string;
      confirmarSenha?: string;
    } = {};
    
    if (!nome) {
      novosErros.nome = 'Nome é obrigatório';
    } else if (nome.length < 3) {
      novosErros.nome = 'Nome deve ter pelo menos 3 caracteres';
    }
    
    if (!email) {
      novosErros.email = 'E-mail é obrigatório';
    } else if (!validarEmail(email)) {
      novosErros.email = 'E-mail inválido';
    }
    
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
      await aoSubmeter(nome, email, senha);
    }
  };

  return (
    <div className="w-full max-w-md">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white dark:bg-gray-800 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Criar Conta
        </h2>
        
        {erro && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {erro}
          </div>
        )}
        
        <div className="mb-4">
          <label 
            className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" 
            htmlFor="nome"
          >
            Nome Completo
          </label>
          <input
            id="nome"
            type="text"
            placeholder="Seu nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errosValidacao.nome ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            }`}
          />
          {errosValidacao.nome && (
            <p className="text-red-500 text-xs italic mt-1">{errosValidacao.nome}</p>
          )}
        </div>
        
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
        
        <div className="mb-4">
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
        
        <div className="mb-6">
          <label 
            className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" 
            htmlFor="confirmarSenha"
          >
            Confirmar Senha
          </label>
          <input
            id="confirmarSenha"
            type="password"
            placeholder="********"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errosValidacao.confirmarSenha ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            }`}
          />
          {errosValidacao.confirmarSenha && (
            <p className="text-red-500 text-xs italic mt-1">{errosValidacao.confirmarSenha}</p>
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
                <span>Registrando...</span>
              </div>
            ) : (
              'Registrar'
            )}
          </button>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Já tem uma conta?{' '}
            <a
              href="/login"
              className="font-bold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Faça login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}