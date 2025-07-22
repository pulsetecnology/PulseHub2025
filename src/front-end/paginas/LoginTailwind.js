import React, { useState, useEffect } from 'react';
import { ServicoAutenticacao } from '../servicos/ServicoAutenticacao';

export default function LoginTailwind() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(false);
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md relative overflow-hidden">
        {/* Barra colorida no topo */}
        <div className="h-1 bg-gradient-to-r from-blue-600 to-green-500"></div>
        
        <div className="p-8">
          {/* Seção do logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center relative">
              <div className="w-6 h-6 bg-white rounded-full absolute"></div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">PulseHub</h1>
            <p className="text-sm text-gray-500">Plataforma B2B para fornecedores e representantes</p>
          </div>
          
          <h2 className="text-xl font-semibold text-center mb-6">Entrar na sua conta</h2>
          
          {/* Status do MCP */}
          <div className={`text-xs mb-4 text-center ${mcpDisponivel ? 'text-green-600' : 'text-amber-600'}`}>
            {mcpDisponivel 
              ? 'Conectado ao servidor de autenticação' 
              : 'Usando modo de simulação (servidor offline)'}
          </div>
          
          {/* Mensagem de erro */}
          {erro && (
            <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-4 text-sm border border-red-200">
              {erro}
            </div>
          )}
          
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="senha">
                Senha
              </label>
              <input
                id="senha"
                type="password"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
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
            
            <div className="flex justify-between mt-4 text-sm">
              <a href="/recuperar-senha" className="text-blue-600 hover:text-blue-800 transition-colors">
                Esqueceu a senha?
              </a>
            </div>
            
            <div className="relative flex items-center justify-center mt-6">
              <div className="border-t border-gray-200 w-full"></div>
              <span className="bg-white px-3 text-sm text-gray-500 absolute">Não tem uma conta?</span>
            </div>
            
            <div className="text-center mt-8">
              <a href="/registrar" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                Criar conta gratuita
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}