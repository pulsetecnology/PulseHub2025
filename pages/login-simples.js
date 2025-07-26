import React, { useState } from 'react';
import { ServicoAutenticacao } from '../src/front-end/servicos/ServicoAutenticacao';

export default function LoginSimples() {
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
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px'
    }}>
      <h1 style={{ color: '#2563eb', textAlign: 'center' }}>PulseHub</h1>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      
      {erro && (
        <div style={{ 
          backgroundColor: '#fee2e2', 
          color: '#b91c1c', 
          padding: '10px', 
          borderRadius: '4px',
          marginBottom: '20px'
        }}>
          {erro}
        </div>
      )}
      
      <form onSubmit={handleLogin} style={{ 
        backgroundColor: '#f3f4f6', 
        padding: '20px', 
        borderRadius: '8px'
      }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '5px', 
            fontWeight: 'bold' 
          }}>
            E-mail
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '8px', 
              borderRadius: '4px', 
              border: '1px solid #d1d5db' 
            }}
            placeholder="seu@email.com"
            required
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '5px', 
            fontWeight: 'bold' 
          }}>
            Senha
          </label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '8px', 
              borderRadius: '4px', 
              border: '1px solid #d1d5db' 
            }}
            placeholder="********"
            required
          />
        </div>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <button
            type="submit"
            disabled={carregando}
            style={{ 
              backgroundColor: '#2563eb', 
              color: 'white', 
              padding: '10px 16px', 
              borderRadius: '4px', 
              border: 'none',
              cursor: carregando ? 'not-allowed' : 'pointer',
              opacity: carregando ? 0.7 : 1
            }}
          >
            {carregando ? 'Entrando...' : 'Entrar'}
          </button>
          
          <a 
            href="/recuperar-senha"
            style={{ 
              color: '#2563eb', 
              textDecoration: 'none',
              fontSize: '14px'
            }}
          >
            Esqueceu a senha?
          </a>
        </div>
        
        <div style={{ 
          marginTop: '20px', 
          textAlign: 'center',
          fontSize: '14px'
        }}>
          Não tem uma conta?{' '}
          <a 
            href="/registrar"
            style={{ 
              color: '#2563eb', 
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
          >
            Registre-se
          </a>
        </div>
      </form>
    </div>
  );
}