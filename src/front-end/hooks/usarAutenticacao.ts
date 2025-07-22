import { useState, useEffect } from 'react';

interface Usuario {
  id: string;
  nome: string;
  email: string;
  tipo: 'administrador' | 'fornecedor' | 'representante';
}

interface ResultadoAutenticacao {
  usuario: Usuario | null;
  carregando: boolean;
  erro: string | null;
  autenticado: boolean;
  entrar: (email: string, senha: string) => Promise<boolean>;
  sair: () => void;
}

/**
 * Hook para gerenciar autenticação do usuário
 * @returns Objeto com estado e funções de autenticação
 */
export function usarAutenticacao(): ResultadoAutenticacao {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [carregando, setCarregando] = useState<boolean>(true);
  const [erro, setErro] = useState<string | null>(null);
  const [autenticado, setAutenticado] = useState<boolean>(false);

  useEffect(() => {
    // Verificar se o usuário já está autenticado (token no localStorage)
    const verificarAutenticacao = async () => {
      try {
        const token = localStorage.getItem('token');
        
        if (!token) {
          setCarregando(false);
          return;
        }

        // Fazer requisição para validar o token
        const resposta = await fetch('/api/autenticacao/validar', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (resposta.ok) {
          const dadosUsuario = await resposta.json();
          setUsuario(dadosUsuario);
          setAutenticado(true);
        } else {
          // Token inválido, remover do localStorage
          localStorage.removeItem('token');
        }
      } catch (error) {
        setErro('Erro ao verificar autenticação');
        console.error('Erro ao verificar autenticação:', error);
      } finally {
        setCarregando(false);
      }
    };

    verificarAutenticacao();
  }, []);

  /**
   * Função para autenticar o usuário
   * @param email Email do usuário
   * @param senha Senha do usuário
   * @returns true se autenticação foi bem-sucedida, false caso contrário
   */
  const entrar = async (email: string, senha: string): Promise<boolean> => {
    setCarregando(true);
    setErro(null);

    try {
      const resposta = await fetch('/api/autenticacao/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha })
      });

      if (resposta.ok) {
        const { token, usuario } = await resposta.json();
        
        // Salvar token no localStorage
        localStorage.setItem('token', token);
        
        setUsuario(usuario);
        setAutenticado(true);
        return true;
      } else {
        const { mensagem } = await resposta.json();
        setErro(mensagem || 'Credenciais inválidas');
        return false;
      }
    } catch (error) {
      setErro('Erro ao realizar login');
      console.error('Erro ao realizar login:', error);
      return false;
    } finally {
      setCarregando(false);
    }
  };

  /**
   * Função para deslogar o usuário
   */
  const sair = () => {
    localStorage.removeItem('token');
    setUsuario(null);
    setAutenticado(false);
  };

  return {
    usuario,
    carregando,
    erro,
    autenticado,
    entrar,
    sair
  };
}