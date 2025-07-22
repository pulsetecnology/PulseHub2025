/**
 * Serviço de autenticação para o front-end
 * Responsável por comunicação com o MCP de autenticação
 */
export class ServicoAutenticacao {
  private baseUrl: string;

  constructor() {
    // URL base do MCP de autenticação
    this.baseUrl = process.env.NEXT_PUBLIC_AUTH_API_URL || 'http://localhost:3001';
  }

  /**
   * Realiza o login do usuário
   * @param email Email do usuário
   * @param senha Senha do usuário
   * @returns Token JWT em caso de sucesso
   * @throws Error em caso de falha
   */
  public async login(email: string, senha: string): Promise<string> {
    try {
      const resposta = await fetch(`${this.baseUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(dados.message || 'Erro ao realizar login');
      }

      // Armazenar o token no localStorage
      localStorage.setItem('token', dados.token);
      
      return dados.token;
    } catch (erro) {
      console.error('Erro no login:', erro);
      throw erro;
    }
  }

  /**
   * Registra um novo usuário
   * @param nome Nome do usuário
   * @param email Email do usuário
   * @param senha Senha do usuário
   * @returns Dados do usuário criado
   * @throws Error em caso de falha
   */
  public async registrar(nome: string, email: string, senha: string): Promise<any> {
    try {
      const resposta = await fetch(`${this.baseUrl}/registrar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, senha }),
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(dados.message || 'Erro ao registrar usuário');
      }

      return dados;
    } catch (erro) {
      console.error('Erro no registro:', erro);
      throw erro;
    }
  }

  /**
   * Solicita recuperação de senha
   * @param email Email do usuário
   * @returns Mensagem de sucesso
   * @throws Error em caso de falha
   */
  public async recuperarSenha(email: string): Promise<string> {
    try {
      const resposta = await fetch(`${this.baseUrl}/recuperar-senha`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(dados.message || 'Erro ao solicitar recuperação de senha');
      }

      return dados.message;
    } catch (erro) {
      console.error('Erro na recuperação de senha:', erro);
      throw erro;
    }
  }

  /**
   * Redefine a senha do usuário
   * @param senha Nova senha
   * @param token Token de redefinição de senha
   * @returns Mensagem de sucesso
   * @throws Error em caso de falha
   */
  public async redefinirSenha(senha: string, token: string): Promise<string> {
    try {
      const resposta = await fetch(`${this.baseUrl}/redefinir-senha`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ senha, token }),
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(dados.message || 'Erro ao redefinir senha');
      }

      return dados.message;
    } catch (erro) {
      console.error('Erro na redefinição de senha:', erro);
      throw erro;
    }
  }

  /**
   * Verifica se o usuário está autenticado
   * @returns true se o usuário estiver autenticado, false caso contrário
   */
  public estaAutenticado(): boolean {
    if (typeof window === 'undefined') {
      return false;
    }
    
    const token = localStorage.getItem('token');
    return !!token;
  }

  /**
   * Realiza o logout do usuário
   */
  public logout(): void {
    if (typeof window === 'undefined') {
      return;
    }
    
    localStorage.removeItem('token');
  }

  /**
   * Obtém o token JWT armazenado
   * @returns Token JWT ou null se não estiver autenticado
   */
  public obterToken(): string | null {
    if (typeof window === 'undefined') {
      return null;
    }
    
    return localStorage.getItem('token');
  }
}