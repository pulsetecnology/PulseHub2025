import { IUsuario } from '@src/compartilhado/tipos/IUsuario';
import { RepositorioUsuarioPrisma } from '@src/infraestrutura/banco-de-dados/RepositorioUsuarioPrisma';
import bcrypt from 'bcryptjs';
import jwt, { SignOptions, JwtPayload } from 'jsonwebtoken';
import crypto from 'crypto';

interface TokenRecuperacao {
  token: string;
  email: string;
  expiracao: Date;
}

export class ServicoAutenticacao {
  private repositorioUsuario: RepositorioUsuarioPrisma;
  private jwtSecret: string;
  private jwtExpiresIn: string;
  // Em um ambiente real, isso seria armazenado em um banco de dados
  private tokensRecuperacao: TokenRecuperacao[] = [];

  constructor() {
    this.repositorioUsuario = new RepositorioUsuarioPrisma();
    this.jwtSecret = process.env.JWT_SECRET || 'sua-chave-secreta-padrao';
    this.jwtExpiresIn = process.env.JWT_EXPIRES_IN || '1h';
  }

  public async registrar(usuario: IUsuario): Promise<IUsuario | null> {
    const emailNormalizado = usuario.email.toLowerCase();
    const usuarioExistente = await this.repositorioUsuario.findByEmail(emailNormalizado);
    if (usuarioExistente) {
      console.error('Usuário com este e-mail já existe.');
      return null;
    }

    const senhaHash = await bcrypt.hash(usuario.senha, 10);
    const usuarioParaCriar = { ...usuario, email: emailNormalizado, senha: senhaHash };

    const novoUsuario = await this.repositorioUsuario.create(usuarioParaCriar);
    return novoUsuario;
  }

  public async autenticar(email: string, senha: string): Promise<string | null> {
    const emailNormalizado = email.toLowerCase();
    const usuario = await this.repositorioUsuario.findByEmail(emailNormalizado);
    if (!usuario || !usuario.id) {
      console.error('Usuário não encontrado ou ID ausente.');
      return null;
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      console.error('Senha inválida.');
      return null;
    }

    const token = jwt.sign({ id: usuario.id, email: usuario.email }, this.jwtSecret, { expiresIn: this.jwtExpiresIn } as SignOptions);
    return token;
  }

  public async buscarUsuarioPorEmail(email: string): Promise<IUsuario | null> {
    const emailNormalizado = email.toLowerCase();
    return this.repositorioUsuario.findByEmail(emailNormalizado);
  }

  public async gerarTokenRecuperacaoSenha(email: string): Promise<string> {
    const token = crypto.randomBytes(20).toString('hex');
    const expiracao = new Date();
    expiracao.setHours(expiracao.getHours() + 1); // Token válido por 1 hora
    
    // Remover tokens antigos para o mesmo email
    this.tokensRecuperacao = this.tokensRecuperacao.filter(t => t.email !== email);
    
    // Adicionar novo token
    this.tokensRecuperacao.push({
      token,
      email,
      expiracao
    });
    
    return token;
  }

  public async redefinirSenha(token: string, novaSenha: string): Promise<boolean> {
    // Encontrar o token de recuperação
    const tokenInfo = this.tokensRecuperacao.find(t => t.token === token);
    
    if (!tokenInfo) {
      console.error('Token de recuperação não encontrado.');
      return false;
    }
    
    // Verificar se o token expirou
    if (tokenInfo.expiracao < new Date()) {
      console.error('Token de recuperação expirado.');
      return false;
    }
    
    // Buscar o usuário pelo email
    const usuario = await this.repositorioUsuario.findByEmail(tokenInfo.email);
    
    if (!usuario || !usuario.id) {
      console.error('Usuário não encontrado.');
      return false;
    }
    
    // Atualizar a senha
    const senhaHash = await bcrypt.hash(novaSenha, 10);
    await this.repositorioUsuario.update(usuario.id, { senha: senhaHash });
    
    // Remover o token usado
    this.tokensRecuperacao = this.tokensRecuperacao.filter(t => t.token !== token);
    
    return true;
  }

  public verificarToken(token: string): { id: string; email: string } {
    try {
      const decoded = jwt.verify(token, this.jwtSecret) as JwtPayload;
      return { id: decoded.id as string, email: decoded.email as string };
    } catch (error) {
      throw new Error('Token inválido ou expirado');
    }
  }
}
