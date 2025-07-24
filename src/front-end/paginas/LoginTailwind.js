import React, { useState, useEffect } from 'react';
import { ServicoAutenticacao } from '../servicos/ServicoAutenticacao';

export default function LoginTailwind() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [carregandoGoogle, setCarregandoGoogle] = useState(false);
  const [mcpDisponivel, setMcpDisponivel] = useState(false);
  const servicoAutenticacao = new ServicoAutenticacao();

  useEffect(() => {
    // Verificar se o MCP está disponível ao carregar a página
    const verificarMCP = async () => {
      const disponivel = await servicoAutenticacao.verificarDisponibilidadeMCP();
      setMcpDisponivel(disponivel);
    };
    
    verificarMCP();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErro(null);
    setCarregando(true);

    try {
      await servicoAutenticacao.login(email, senha);
      // Redirecionar para a página inicial após o login bem-sucedido
      window.location.href = '/painel';
    } catch (error) {
      setErro(error.message || 'Ocorreu um erro durante o login. Tente novamente.');
    } finally {
      setCarregando(false);
    }
  };

  const handleGoogleLogin = async () => {
    setErro(null);
    setCarregandoGoogle(true);

    try {
      await servicoAutenticacao.loginComGoogle();
      // Redirecionar para a página inicial após o login bem-sucedido
      window.location.href = '/painel';
    } catch (error) {
      setErro(error.message || 'Falha ao entrar com Google. Tente novamente.');
    } finally {
      setCarregandoGoogle(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative overflow-hidden">
        {/* Barra colorida no topo */}
        <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
        
        <div className="p-8">
          {/* Seção do logo */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center relative">
              <div className="w-8 h-8 bg-white rounded-full absolute"></div>
              <div className="absolute inset-0 rounded-full bg-blue-600 opacity-30 animate-ping-slow"></div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">PulseHub</h1>
            <p className="text-sm text-gray-500 mt-1">Plataforma B2B para fornecedores e representantes</p>
          </div>
          
          <h2 className="text-2xl font-semibold text-center mb-6">Entrar na sua conta</h2>
          
          {/* Status do MCP - apenas em desenvolvimento */}
          {process.env.NODE_ENV === 'development' && (
            <div className={`text-xs mb-4 text-center ${mcpDisponivel ? 'text-green-600' : 'text-amber-600'}`}>
              {mcpDisponivel 
                ? 'Conectado ao servidor de autenticação' 
                : 'Usando modo de simulação (servidor offline)'}
            </div>
          )}
          
          {/* Mensagem de erro */}
          {erro && (
            <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6 text-sm border border-red-200 flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span>{erro}</span>
            </div>
          )}
          
          {/* Botão de login com Google */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={carregandoGoogle}
            className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow-sm py-3 px-4 text-gray-700 hover:bg-gray-50 mb-6 transition duration-300 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {carregandoGoogle ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-gray-500 border-t-transparent rounded-full animate-spin mr-2"></div>
                <span>Conectando...</span>
              </div>
            ) : (
              <>
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Entrar com Google
              </>
            )}
          </button>
          
          <div className="relative flex items-center justify-center my-6">
            <div className="border-t border-gray-200 w-full"></div>
            <span className="bg-white px-3 text-sm text-gray-500 absolute">ou</span>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium text-gray-700" htmlFor="senha">
                  Senha
                </label>
                <a href="/recuperar-senha" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                  Esqueceu?
                </a>
              </div>
              <input
                id="senha"
                type="password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg hover:shadow-lg transition duration-300 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={carregando}
            >
              {carregando ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  <span>Entrando...</span>
                </div>
              ) : (
                'Entrar'
              )}
            </button>
          </form>
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              Não tem uma conta?{' '}
              <a href="/registrar" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                Criar conta gratuita
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}