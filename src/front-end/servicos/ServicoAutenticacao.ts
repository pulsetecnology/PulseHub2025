/**
 * Serviço de autenticação para o front-end
 * Responsável por comunicação com a API de autenticação PostgreSQL
 */
export class ServicoAutenticacao {
  private baseUrl: string;
  private modoSimulacao: boolean;
  private usuariosSimulados: { [email: string]: { nome: string, email: string, senha: string, papel?: string } };

  constructor() {
    // URL base do MCP de autenticação
    this.baseUrl = process.env.NEXT_PUBLIC_AUTH_API_URL || 'http://localhost:3001';
    
    // Por padrão, não usar o modo de simulação
    this.modoSimulacao = process.env.NEXT_PUBLIC_MODO_SIMULACAO === 'true' || false;
    
    // Usuários simulados para fallback
    this.usuariosSimulados = {
      'admin@pulsehub.com': { nome: 'Carlos Oliveira', email: 'admin@pulsehub.com', senha: 'admin123', papel: 'ADMINISTRADOR' },
      'fornecedor@exemplo.com': { nome: 'João Silva', email: 'fornecedor@exemplo.com', senha: 'fornecedor123', papel: 'FORNECEDOR' },
      'representante@exemplo.com': { nome: 'Maria Santos', email: 'representante@exemplo.com', senha: 'representante123', papel: 'REPRESENTANTE' },
      'admin@exemplo.com': { nome: 'Administrador', email: 'admin@exemplo.com', senha: 'senha123', papel: 'ADMINISTRADOR' },
      'usuario@gmail.com': { nome: 'Usuário Google', email: 'usuario@gmail.com', senha: 'google-auth', papel: 'REPRESENTANTE' }
    };
  }
  
  /**
   * Verifica se o MCP de autenticação está disponível
   */
  public async verificarDisponibilidadeMCP(): Promise<boolean> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);
      
      const resposta = await fetch(`${this.baseUrl}/verificar`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (resposta.ok) {
        console.log('MCP de Autenticação disponível. Usando modo normal.');
        this.modoSimulacao = false;
        return true;
      }
      
      console.log('MCP de Autenticação indisponível. Usando modo de simulação.');
      this.modoSimulacao = true;
      return false;
    } catch (erro) {
      console.log('Erro ao verificar disponibilidade do MCP:', erro);
      console.log('Usando modo de simulação como fallback.');
      this.modoSimulacao = true;
      return false;
    }
  }

  /**
   * Realiza o login do usuário
   */
  public async login(email: string, senha: string): Promise<{ token: string; usuario: any } | string> {
    try {
      // Tentar fazer login via API do PostgreSQL
      const resposta = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha })
      });

      if (resposta.ok) {
        const dados = await resposta.json();
        
        // Salvar token e dados do usuário no localStorage e cookies
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', dados.token);
          localStorage.setItem('usuario', JSON.stringify(dados.usuario));
          
          // Salvar token nos cookies para o middleware
          document.cookie = `token=${dados.token}; path=/; max-age=86400; SameSite=Lax`;
        }
        
        console.log('Login realizado com sucesso via PostgreSQL');
        return {
          token: dados.token,
          usuario: dados.usuario
        };
      } else {
        const erro = await resposta.json();
        throw new Error(erro.message || 'Erro no login');
      }
    } catch (error) {
      console.log('Erro no login via PostgreSQL, tentando modo simulação:', error);
      
      // Fallback para modo simulação se a API falhar
      return this.loginSimulado(email, senha);
    }
  }

  /**
   * Login simulado como fallback
   */
  private async loginSimulado(email: string, senha: string): Promise<{ token: string; usuario: any }> {
    console.log('Usando modo de simulação para login');
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const usuario = this.usuariosSimulados[email];
    
    if (!usuario) {
      throw new Error('Usuário não encontrado');
    }
    
    if (usuario.senha !== senha) {
      throw new Error('Senha incorreta');
    }
    
    const papel = usuario.papel || 'FORNECEDOR';
    const emailHash = btoa(email).substring(0, 8);
    const token = `simulado-${papel}-${emailHash}-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
    
    if (process.env.NODE_ENV === 'development') {
      console.log('Token simulado gerado:', token);
    }
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token);
      localStorage.setItem('usuario', JSON.stringify({
        nome: usuario.nome,
        email: usuario.email,
        papel: papel
      }));
      
      // Salvar token nos cookies para o middleware
      document.cookie = `token=${token}; path=/; max-age=86400; SameSite=Lax`;
    }
    
    return {
      token,
      usuario: {
        nome: usuario.nome,
        email: usuario.email,
        papel: papel
      }
    };
  }

  /**
   * Registra um novo usuário
   */
  public async registrar(nome: string, email: string, senha: string): Promise<any> {
    if (this.modoSimulacao) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (this.usuariosSimulados[email]) {
        throw new Error('Usuário já existe');
      }
      
      this.usuariosSimulados[email] = { nome, email, senha, papel: 'FORNECEDOR' };
      return { message: 'Usuário registrado com sucesso (simulação)' };
    }

    try {
      const resposta = await fetch(`${this.baseUrl}/registrar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, senha })
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(dados.message || 'Erro ao registrar usuário');
      }

      return dados;
    } catch (erro) {
      console.error('Erro no registro:', erro);
      throw new Error('Serviço de registro indisponível. Tente novamente mais tarde.');
    }
  }

  /**
   * Solicita recuperação de senha
   */
  public async recuperarSenha(email: string): Promise<string> {
    if (this.modoSimulacao) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (!this.usuariosSimulados[email]) {
        throw new Error('Usuário não encontrado');
      }
      
      return 'Email de recuperação enviado (simulação)';
    }

    try {
      const resposta = await fetch(`${this.baseUrl}/recuperar-senha`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(dados.message || 'Erro ao solicitar recuperação de senha');
      }

      return dados.message;
    } catch (erro) {
      console.error('Erro na recuperação de senha:', erro);
      throw new Error('Serviço de recuperação indisponível. Tente novamente mais tarde.');
    }
  }

  /**
   * Redefine a senha usando token
   */
  public async redefinirSenha(senha: string, token: string): Promise<string> {
    if (this.modoSimulacao) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return 'Senha redefinida com sucesso (simulação)';
    }

    try {
      const resposta = await fetch(`${this.baseUrl}/redefinir-senha`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ senha, token })
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(dados.message || 'Erro ao redefinir senha');
      }

      return dados.message;
    } catch (erro) {
      console.error('Erro na redefinição de senha:', erro);
      throw new Error('Serviço de redefinição indisponível. Tente novamente mais tarde.');
    }
  }

  /**
   * Verifica se o usuário está autenticado
   */
  public estaAutenticado(): boolean {
    if (typeof window === 'undefined') {
      return false;
    }
    
    const token = localStorage.getItem('token');
    return !!token;
  }

  /**
   * Faz logout do usuário
   */
  public logout(): void {
    if (typeof window === 'undefined') {
      return;
    }
    
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
  }

  /**
   * Obtém o token do usuário
   */
  public obterToken(): string | null {
    if (typeof window === 'undefined') {
      return null;
    }
    
    return localStorage.getItem('token');
  }

  /**
   * Obtém dados do usuário
   */
  public obterUsuario(): any {
    if (typeof window === 'undefined') {
      return null;
    }
    
    const usuarioJson = localStorage.getItem('usuario');
    if (!usuarioJson) {
      return null;
    }
    
    try {
      return JSON.parse(usuarioJson);
    } catch (erro) {
      console.error('Erro ao parsear dados do usuário:', erro);
      return null;
    }
  }

  /**
   * Login com Google (simulado)
   */
  public async loginComGoogle(): Promise<string> {
    if (this.modoSimulacao) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const usuario = this.usuariosSimulados['usuario@gmail.com'];
      const token = `simulado-REPRESENTANTE-google-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
      
      localStorage.setItem('token', token);
      localStorage.setItem('usuario', JSON.stringify({
        nome: usuario.nome,
        email: usuario.email,
        papel: usuario.papel
      }));
      
      return token;
    }

    throw new Error('Login com Google não implementado ainda');
  }

  /**
   * Obtém informações do usuário através do token
   */
  async obterInformacoesUsuario(token: string): Promise<any> {
    try {
      const response = await fetch('/api/auth/verificar-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      if (response.ok) {
        const data = await response.json();
        return data.valido ? data.usuario : null;
      }
    } catch (error) {
      console.error('Erro ao obter informações do usuário:', error);
    }
    return null;
  }
}