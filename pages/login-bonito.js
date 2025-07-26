import React, { useState } from 'react';
import { ServicoAutenticacao } from '../src/front-end/servicos/ServicoAutenticacao';

export default function LoginBonito() {
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
    <>
      <style jsx>{`
        .login-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          font-family: 'Poppins', sans-serif;
        }

        .login-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          padding: 40px;
          width: 100%;
          max-width: 400px;
          position: relative;
          overflow: hidden;
        }

        .login-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #2563eb, #10b981);
        }

        .logo-section {
          text-align: center;
          margin-bottom: 32px;
        }

        .logo {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #2563eb, #10b981);
          border-radius: 50%;
          margin: 0 auto 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .logo::after {
          content: '';
          width: 24px;
          height: 24px;
          background: white;
          border-radius: 50%;
          position: absolute;
        }

        .logo-title {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }

        .logo-subtitle {
          color: #6b7280;
          font-size: 14px;
          margin: 8px 0 0 0;
        }

        .form-title {
          font-size: 24px;
          font-weight: 600;
          color: #1f2937;
          text-align: center;
          margin-bottom: 24px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-label {
          display: block;
          font-weight: 500;
          color: #374151;
          margin-bottom: 6px;
          font-size: 14px;
        }

        .form-input {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 16px;
          transition: all 0.2s ease;
          background: #f9fafb;
          box-sizing: border-box;
        }

        .form-input:focus {
          outline: none;
          border-color: #2563eb;
          background: white;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .form-input::placeholder {
          color: #9ca3af;
        }

        .btn-primary {
          width: 100%;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: white;
          border: none;
          padding: 14px 20px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3);
        }

        .btn-primary:active {
          transform: translateY(0);
        }

        .btn-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .form-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          font-size: 14px;
        }

        .link {
          color: #2563eb;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .link:hover {
          color: #1d4ed8;
          text-decoration: underline;
        }

        .divider {
          margin: 24px 0;
          text-align: center;
          position: relative;
          color: #6b7280;
          font-size: 14px;
        }

        .alert {
          padding: 12px 16px;
          border-radius: 8px;
          margin-bottom: 20px;
          font-size: 14px;
          border: 1px solid;
          background: #fef2f2;
          color: #b91c1c;
          border-color: #fecaca;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          display: inline-block;
          margin-right: 8px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 480px) {
          .login-container {
            padding: 10px;
          }
          
          .login-card {
            padding: 24px;
          }
          
          .logo-title {
            font-size: 24px;
          }
          
          .form-title {
            font-size: 20px;
          }
        }
      `}</style>
      
      <div className="login-container">
        <div className="login-card">
          <div className="logo-section">
            <div className="logo"></div>
            <h1 className="logo-title">PulseHub</h1>
            <p className="logo-subtitle">Plataforma para fornecedores e representantes</p>
          </div>
          
          <h2 className="form-title">Entrar na sua conta</h2>
          
          {erro && (
            <div className="alert">
              {erro}
            </div>
          )}
          
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                className="form-input"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="senha">
                Senha
              </label>
              <input
                id="senha"
                type="password"
                className="form-input"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
            
            <button
              type="submit"
              className="btn-primary"
              disabled={carregando}
            >
              {carregando ? (
                <>
                  <span className="spinner"></span>
                  Entrando...
                </>
              ) : (
                'Entrar'
              )}
            </button>
            
            <div className="form-footer">
              <a href="/recuperar-senha" className="link">
                Esqueceu a senha?
              </a>
            </div>
            
            <div className="divider">
              <span>Não tem uma conta?</span>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <a href="/registrar" className="link" style={{ fontWeight: '600' }}>
                Criar conta gratuita
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}