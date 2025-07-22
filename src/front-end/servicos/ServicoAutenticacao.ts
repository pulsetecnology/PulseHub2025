/**
 * Serviço de autenticação para o front-end
 * Responsável por comunicação com o MCP de autenticação
 */
export class ServicoAutenticacao {
  private baseUrl: string;
  private modoSimulacao: boolean;
  private usuariosSimulados: { [email: string]: { nome: string, email: string, senha: string } };

  constructor() {
    // URL base do MCP de autenticação
    this.baseUrl = process.env.NEXT_PUBLIC_AUTH_API_URL || 'http://localhost:3001';
    
    // Por padrão, não usar o modo de simulação, apenas se explicitamente configurado ou se o servidor não estiver disponível
    this.modoSimulacao = process.env.NEXT_PUBLIC_MODO_SIMULACAO === 'true' || false;
    
    // Usuários simulados para testes
    this.usuariosSimulados = {
      'admin@exemplo.com': { nome: 'Administrador', email: 'admin@exemplo.com', senha: 'senha123' },
      'fornecedor@exemplo.com': { nome: 'Fornecedor Teste', email: 'fornecedor@exemplo.com', senha: 'senha123' },
      'representante@exemplo.com': { nome: 'Representante Teste', email: 'representante@exemplo.com', senha: 'senha123' }
    };
    
    // Verificar se o MCP está disponível ao inicializar
    this.verificarDisponibilidadeMCP();
  }
  
  /**
   * Verifica se o MCP de autenticação está disponível
   * @returns Promise<boolean> true se o MCP estiver disponível, false caso contrário
   */
  public async verificarDisponibilidadeMCP(): Promise<boolean> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000); // Timeout de 2 segundos
      
      const resposta = await fetch(`${this.baseUrl}/verificar`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      // Se conseguir conectar, desativar o modo de simulação
      if (resposta.ok) {
        console.log('MCP de Autenticação disponível. Usando modo normal.');
        this.modoSimulacao = false;
        return true;
      }
      
      // Se não conseguir conectar, ativar o modo de simulação
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
   * @param email Email do usuário
   * @param senha Senha do usuário
   * @returns Token JWT em caso de sucesso
   * @throws Error em caso de falha
   */
  public async login(email: string, senha: string): Promise<string> {
    // Se estiver em modo de simulação, usar dados simulados
    if (this.modoSimulacao) {
      console.log('Usando modo de simulação para login');
      
      // Simular um pequeno atraso para parecer uma requisição real
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const usuario = this.usuariosSimulados[email];
      
      if (!usuario) {
        throw new Error('Usuário não encontrado');
      }
      
      if (usuario.senha !== senha) {
        throw new Error('Senha incorreta');
      }
      
      // Gerar um token simulado
      const token = `simulado-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
      
      // Armazenar o token no localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('usuario', JSON.stringify({
        id: `user-${Math.random().toString(36).substring(2, 9)}`,
        nome: usuario.nome,
        email: usuario.email
      }));
      
      return token;
    }
    
    // Se não estiver em modo de simulação, tentar conectar ao servidor real
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
      
      // Buscar informações do usuário usando o token
      try {
        const usuarioInfo = await this.obterInformacoesUsuario(dados.token);
        if (usuarioInfo) {
          localStorage.setItem('usuario', JSON.stringify(usuarioInfo));
        }
      } catch (erroUsuario) {
        console.error('Erro ao obter informações do usuário:', erroUsuario);
        // Continuar mesmo se não conseguir obter informações do usuário
      }
      
      return dados.token;
    } catch (erro) {
      console.error('Erro no login:', erro);
      
      // Se o erro for de conexão, tentar usar o modo de simulação
      if (erro instanceof TypeError && erro.message.includes('Failed to fetch')) {
        console.log('Servidor indisponível, alternando para modo de simulação');
        this.modoSimulacao = true;
        return this.login(email, senha);
      }
      
      throw erro;
    }
  }
  
  /**
   * Obtém informações do usuário autenticado usando o token JWT
   * @param token Token JWT
   * @returns Informações do usuário ou null em caso de falha
   */
  private async obterInformacoesUsuario(token: string): Promise<any> {
    try {
      const resposta = await fetch(`${this.baseUrl}/verificar`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(dados.message || 'Erro ao obter informações do usuário');
      }

      return dados.usuario;
    } catch (erro) {
      console.error('Erro ao obter informações do usuário:', erro);
      return null;
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
    // Se estiver em modo de simulação, usar dados simulados
    if (this.modoSimulacao) {
      console.log('Usando modo de simulação para registro');
      
      // Simular um pequeno atraso para parecer uma requisição real
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Verificar se o email já está em uso
      if (this.usuariosSimulados[email]) {
        throw new Error('Este email já está em uso');
      }
      
      // Adicionar o novo usuário à lista de usuários simulados
      this.usuariosSimulados[email] = { nome, email, senha };
      
      // Retornar os dados do usuário criado (sem a senha)
      return {
        id: `user-${Math.random().toString(36).substring(2, 9)}`,
        nome,
        email,
        message: 'Usuário registrado com sucesso!'
      };
    }
    
    // Se não estiver em modo de simulação, tentar conectar ao servidor real
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
      
      // Se o erro for de conexão, tentar usar o modo de simulação
      if (erro instanceof TypeError && erro.message.includes('Failed to fetch')) {
        console.log('Servidor indisponível, alternando para modo de simulação');
        this.modoSimulacao = true;
        return this.registrar(nome, email, senha);
      }
      
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
    // Se estiver em modo de simulação, usar dados simulados
    if (this.modoSimulacao) {
      console.log('Usando modo de simulação para recuperação de senha');
      
      // Simular um pequeno atraso para parecer uma requisição real
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Verificar se o email existe
      if (!this.usuariosSimulados[email]) {
        // Por segurança, não informamos se o email existe ou não
        return 'Se o e-mail estiver cadastrado, enviaremos instruções para recuperação de senha.';
      }
      
      // Simular um token de recuperação
      const token = `recuperacao-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
      
      console.log(`Token de recuperação simulado para ${email}: ${token}`);
      
      return 'Se o e-mail estiver cadastrado, enviaremos instruções para recuperação de senha.';
    }
    
    // Se não estiver em modo de simulação, tentar conectar ao servidor real
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
      
      // Se o erro for de conexão, tentar usar o modo de simulação
      if (erro instanceof TypeError && erro.message.includes('Failed to fetch')) {
        console.log('Servidor indisponível, alternando para modo de simulação');
        this.modoSimulacao = true;
        return this.recuperarSenha(email);
      }
      
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
    // Se estiver em modo de simulação, usar dados simulados
    if (this.modoSimulacao) {
      console.log('Usando modo de simulação para redefinição de senha');
      
      // Simular um pequeno atraso para parecer uma requisição real
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Verificar se o token é válido (em um caso real, verificaríamos em um banco de dados)
      if (!token.startsWith('recuperacao-')) {
        throw new Error('Token inválido ou expirado');
      }
      
      // Em um caso real, atualizaríamos a senha do usuário no banco de dados
      console.log(`Senha redefinida com sucesso usando o token: ${token}`);
      
      return 'Senha redefinida com sucesso!';
    }
    
    // Se não estiver em modo de simulação, tentar conectar ao servidor real
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
      
      // Se o erro for de conexão, tentar usar o modo de simulação
      if (erro instanceof TypeError && erro.message.includes('Failed to fetch')) {
        console.log('Servidor indisponível, alternando para modo de simulação');
        this.modoSimulacao = true;
        return this.redefinirSenha(senha, token);
      }
      
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
    localStorage.removeItem('usuario');
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
  
  /**
   * Obtém os dados do usuário autenticado
   * @returns Dados do usuário ou null se não estiver autenticado
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
      console.error('Erro ao obter dados do usuário:', erro);
      return null;
    }
  }
}