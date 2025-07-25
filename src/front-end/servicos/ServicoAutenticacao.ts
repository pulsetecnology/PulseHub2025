/**
 * Serviço de autenticação para o front-end
 * Responsável por comunicação com o MCP de autenticação
 */
export class ServicoAutenticacao {
  private baseUrl: string;
  private modoSimulacao: boolean;
  private usuariosSimulados: { [email: string]: { nome: string, email: string, senha: string, papel?: string } };

  constructor() {
    // URL base do MCP de autenticação
    this.baseUrl = process.env.NEXT_PUBLIC_AUTH_API_URL || 'http://localhost:3001';
    
    // Por padrão, não usar o modo de simulação, apenas se explicitamente configurado ou se o servidor não estiver disponível
    this.modoSimulacao = process.env.NEXT_PUBLIC_MODO_SIMULACAO === 'true' || false;
    
    // Usuários simulados para testes
    this.usuariosSimulados = {
      // Usuários de demonstração principais
      'admin@pulsehub.com': { nome: 'Carlos Oliveira', email: 'admin@pulsehub.com', senha: 'admin123', papel: 'ADMINISTRADOR' },
      'fornecedor@exemplo.com': { nome: 'João Silva', email: 'fornecedor@exemplo.com', senha: 'fornecedor123', papel: 'FORNECEDOR' },
      'representante@exemplo.com': { nome: 'Maria Santos', email: 'representante@exemplo.com', senha: 'representante123', papel: 'REPRESENTANTE' },
      
      // Usuários antigos para compatibilidade
      'admin@exemplo.com': { nome: 'Administrador', email: 'admin@exemplo.com', senha: 'senha123', papel: 'ADMINISTRADOR' },
      'usuario@gmail.com': { nome: 'Usuário Google', email: 'usuario@gmail.com', senha: 'google-auth', papel: 'REPRESENTANTE' }
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
      
      // Gerar um token simulado que inclui o papel do usuário e email
      const papel = usuario.papel || 'FORNECEDOR';
      const emailHash = btoa(email).substring(0, 8); // Base64 do email para identificação
      const token = `simulado-${papel}-${emailHash}-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
      
      // Debug apenas em desenvolvimento
      if (process.env.NODE_ENV === 'development') {
        console.log('Token gerado:', token);
        console.log('Papel do usuário:', papel);
        console.log('Email do usuário:', email);
      }
      
      // Armazenar o token no localStorage e em cookies
      localStorage.setItem('token', token);
      document.cookie = `token=${token}; path=/; max-age=${60 * 60 * 24 * 7}`; // 7 dias
      localStorage.setItem('usuario', JSON.stringify({
        id: `user-${Math.random().toString(36).substring(2, 9)}`,
        nome: usuario.nome,
        email: usuario.email,
        papel: papel
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

      // Armazenar o token no localStorage e em cookies
      localStorage.setItem('token', dados.token);
      document.cookie = `token=${dados.token}; path=/; max-age=${60 * 60 * 24 * 7}`; // 7 dias
      
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
    
    // Remover do localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    
    // Remover dos cookies
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
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
  
  /**
   * Realiza o login do usuário com o Google
   * @returns Token JWT em caso de sucesso
   * @throws Error em caso de falha
   */
  public async loginComGoogle(): Promise<string> {
    // Se estiver em modo de simulação, usar dados simulados
    if (this.modoSimulacao) {
      console.log('Usando modo de simulação para login com Google');
      
      // Simular um pequeno atraso para parecer uma requisição real
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const usuario = this.usuariosSimulados['usuario@gmail.com'];
      
      // Gerar um token simulado
      const token = `google-simulado-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
      
      // Armazenar o token no localStorage e em cookies
      localStorage.setItem('token', token);
      document.cookie = `token=${token}; path=/; max-age=${60 * 60 * 24 * 7}`; // 7 dias
      localStorage.setItem('usuario', JSON.stringify({
        id: `google-user-${Math.random().toString(36).substring(2, 9)}`,
        nome: usuario.nome,
        email: usuario.email,
        papel: usuario.papel,
        fotoUrl: 'https://lh3.googleusercontent.com/a/default-user'
      }));
      
      return token;
    }
    
    // Se não estiver em modo de simulação, tentar conectar ao servidor real
    try {
      // Em um cenário real, aqui seria implementada a integração com a API do Google
      // Por enquanto, vamos simular uma resposta bem-sucedida
      
      const resposta = await fetch(`${this.baseUrl}/login-google`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ provider: 'google' }),
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(dados.message || 'Erro ao realizar login com Google');
      }

      // Armazenar o token no localStorage e em cookies
      localStorage.setItem('token', dados.token);
      document.cookie = `token=${dados.token}; path=/; max-age=${60 * 60 * 24 * 7}`; // 7 dias
      localStorage.setItem('usuario', JSON.stringify(dados.usuario));
      
      return dados.token;
    } catch (erro) {
      console.error('Erro no login com Google:', erro);
      
      // Se o erro for de conexão, tentar usar o modo de simulação
      if (erro instanceof TypeError && erro.message.includes('Failed to fetch')) {
        console.log('Servidor indisponível, alternando para modo de simulação');
        this.modoSimulacao = true;
        return this.loginComGoogle();
      }
      
      throw erro;
    }
  }
}