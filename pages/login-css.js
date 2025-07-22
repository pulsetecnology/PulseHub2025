import React, { useState } from 'react';
import { ServicoAutenticacao } from '../src/front-end/servicos/ServicoAutenticacao';

export default function LoginCSS() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const servicoAutenticacao = new ServicoAutenticacao();

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
    <div className="container" style={{ maxWidth: '400px', marginTop: '50px' }}>
      <div className="text-center mb-4">
        <h1 style={{ color: '#2563eb' }}>PulseHub B2B</h1>
        <p>Plataforma de integração para fornecedores e representantes</p>
      </div>
      
      <div className="card">
        <div className="card-body">
          <h2 className="text-center mb-4">Login</h2>
          
          {erro && (
            <div className="alert alert-danger">
              {erro}
            </div>
          )}
          
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="senha">Senha</label>
              <input
                id="senha"
                type="password"
                className="form-control"
                placeholder="********"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={carregando}
              >
                {carregando ? (
                  <>
                    <span className="spinner" style={{ marginRight: '8px' }}></span>
                    Entrando...
                  </>
                ) : (
                  'Entrar'
                )}
              </button>
              
              <a
                href="/recuperar-senha"
                style={{ color: '#2563eb', textDecoration: 'none' }}
              >
                Esqueceu a senha?
              </a>
            </div>
            
            <div className="text-center mt-4">
              <p>
                Não tem uma conta?{' '}
                <a
                  href="/registrar"
                  style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 'bold' }}
                >
                  Registre-se
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}