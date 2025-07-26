import React, { useState, useEffect } from 'react';
import { ServicoAutenticacao } from '../servicos/ServicoAutenticacao';
import Logotipo from '../componentes/Logotipo';
import { usarCorTema } from '../utils/coresTema';

export default function LoginTailwind() {
  const { classes } = usarCorTema();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [carregandoGoogle, setCarregandoGoogle] = useState(false);
  const [mcpDisponivel, setMcpDisponivel] = useState(false);
  const [mostrarUsuariosDemo, setMostrarUsuariosDemo] = useState(false);
  const [tema, setTema] = useState('claro');
  const servicoAutenticacao = new ServicoAutenticacao();

  // Usuários de demonstração
  const usuariosDemo = [
    {
      tipo: 'Administrador',
      nome: 'Carlos Oliveira',
      email: 'admin@pulsehub.com',
      senha: 'admin123',
      cor: 'purple',
      descricao: 'Acesso completo ao sistema'
    },
    {
      tipo: 'Fornecedor',
      nome: 'João Silva',
      email: 'fornecedor@exemplo.com',
      senha: 'fornecedor123',
      cor: 'blue',
      descricao: 'Gerenciar produtos e pedidos'
    },
    {
      tipo: 'Representante',
      nome: 'Maria Santos',
      email: 'representante@exemplo.com',
      senha: 'representante123',
      cor: 'orange',
      descricao: 'Gerenciar clientes e vendas'
    }
  ];

  useEffect(() => {
    // Verificar se estamos no cliente antes de acessar localStorage
    if (typeof window !== 'undefined') {
      // Verificar tema salvo e aplicar
      const temaSalvo = localStorage.getItem('tema') || 'claro';
      setTema(temaSalvo);
      
      if (temaSalvo === 'escuro') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      // Verificar se o MCP está disponível ao carregar a página
      const verificarMCP = async () => {
        const disponivel = await servicoAutenticacao.verificarDisponibilidadeMCP();
        setMcpDisponivel(disponivel);
      };
      
      verificarMCP();
    }
  }, []);

  const alternarTema = () => {
    if (typeof window !== 'undefined') {
      const novoTema = tema === 'claro' ? 'escuro' : 'claro';
      setTema(novoTema);
      localStorage.setItem('tema', novoTema);
      
      if (novoTema === 'escuro') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

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

  const handleLoginDemo = (usuario) => {
    setEmail(usuario.email);
    setSenha(usuario.senha);
    setMostrarUsuariosDemo(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      {/* Container principal com layout similar ao sistema */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Lado esquerdo - Informações do sistema */}
        <div className="hidden lg:block">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <Logotipo tamanho="xl" />
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Plataforma completa para fornecedores e representantes de moda
            </p>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 max-w-sm mx-auto">
              <div className="flex items-center">
                <svg className={`h-5 w-5 ${classes.text} flex-shrink-0 mr-3`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Gestão completa de catálogos e produtos</span>
              </div>
              <div className="flex items-center">
                <svg className={`h-5 w-5 ${classes.text} flex-shrink-0 mr-3`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Controle de pedidos e comissões</span>
              </div>
              <div className="flex items-center">
                <svg className={`h-5 w-5 ${classes.text} flex-shrink-0 mr-3`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Relatórios e análises em tempo real</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lado direito - Formulário de login */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            {/* Header do card */}
            <div className={`${classes.bg} px-6 py-4 relative`}>
              {/* Botão de tema no canto superior direito */}
              <button
                onClick={alternarTema}
                className={`absolute top-4 right-4 p-2 rounded-lg ${classes.bgHover} text-white transition-colors`}
                title={tema === 'claro' ? 'Ativar tema escuro' : 'Ativar tema claro'}
              >
                {tema === 'claro' ? (
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </button>

              <div className="flex items-center justify-center lg:hidden mb-4">
                <Logotipo tamanho="sm" />
              </div>
              <h2 className="text-xl font-semibold text-white text-center">
                Entrar na sua conta
              </h2>
              <p className="text-purple-100 text-sm text-center mt-1">
                Acesse sua plataforma e Pulse
              </p>
            </div>

            <div className="p-5">
              {/* Status do MCP - apenas em desenvolvimento */}
              {process.env.NODE_ENV === 'development' && (
                <div className={`text-xs mb-4 text-center p-2 rounded-lg ${
                  mcpDisponivel 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' 
                    : 'bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400'
                }`}>
                  {mcpDisponivel 
                    ? '🟢 Conectado ao servidor de autenticação' 
                    : '🟡 Usando modo de simulação (servidor offline)'}
                </div>
              )}
          
              {/* Mensagem de erro */}
              {erro && (
                <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 p-4 rounded-lg mb-6 text-sm border border-red-200 dark:border-red-800 flex items-start">
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
                className="w-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm py-2.5 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 mb-5 transition duration-300 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed"
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
                <div className="border-t border-gray-200 dark:border-gray-600 w-full"></div>
                <span className="bg-white dark:bg-gray-800 px-3 text-sm text-gray-500 dark:text-gray-400 absolute">ou</span>
              </div>
          
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:${classes.ring} focus:${classes.border} bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400`}
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="senha">
                      Senha
                    </label>
                    <a href="/recuperar-senha" className={`text-sm ${classes.text} ${classes.textDark} hover:${classes.textLight} dark:hover:${classes.textLightDark} transition-colors`}>
                      Esqueceu?
                    </a>
                  </div>
                  <input
                    id="senha"
                    type="password"
                    className={`w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:${classes.ring} focus:${classes.border} bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400`}
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className={`w-full ${classes.bg} ${classes.bgHover} text-white font-semibold py-3 px-4 rounded-lg hover:shadow-lg transition duration-300 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed`}
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
          
              {/* Usuários de Demonstração */}
              <div className="mt-6 border-t border-gray-200 dark:border-gray-600 pt-6">
                <button
                  type="button"
                  onClick={() => setMostrarUsuariosDemo(!mostrarUsuariosDemo)}
                  className={`w-full text-sm text-gray-600 dark:text-gray-400 hover:${classes.text} dark:hover:${classes.textDark} transition-colors flex items-center justify-center p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700`}
                >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              {mostrarUsuariosDemo ? 'Ocultar' : 'Mostrar'} usuários de demonstração
              <svg className={`w-4 h-4 ml-2 transition-transform ${mostrarUsuariosDemo ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

                {mostrarUsuariosDemo && (
                  <div className="mt-4 space-y-3">
                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center mb-3">
                      Clique em um usuário para preencher automaticamente
                    </p>
                    {usuariosDemo.map((usuario, index) => {
                      const corClasses = {
                        purple: 'border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30',
                        blue: 'border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30',
                        orange: 'border-orange-200 dark:border-orange-700 bg-orange-50 dark:bg-orange-900/20 hover:bg-orange-100 dark:hover:bg-orange-900/30'
                      };
                      
                      const indicadorCores = {
                        purple: 'bg-purple-500',
                        blue: 'bg-blue-500',
                        orange: 'bg-orange-500'
                      };
                      
                      return (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleLoginDemo(usuario)}
                          className={`w-full p-3 rounded-lg border-2 ${corClasses[usuario.cor]} transition-colors text-left`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="flex items-center">
                                <span className={`inline-block w-3 h-3 rounded-full ${indicadorCores[usuario.cor]} mr-2`}></span>
                                <span className="font-medium text-gray-900 dark:text-white">{usuario.tipo}</span>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{usuario.nome}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">{usuario.descricao}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-gray-500 dark:text-gray-400">Email:</p>
                              <p className="text-xs font-mono text-gray-700 dark:text-gray-300">{usuario.email}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Senha:</p>
                              <p className="text-xs font-mono text-gray-700 dark:text-gray-300">{usuario.senha}</p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Footer do card */}
              <div className="text-center mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Não tem uma conta?{' '}
                  <a href="/registrar" className={`${classes.text} ${classes.textDark} font-semibold hover:${classes.textLight} dark:hover:${classes.textLightDark} transition-colors`}>
                    Criar conta gratuita
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
