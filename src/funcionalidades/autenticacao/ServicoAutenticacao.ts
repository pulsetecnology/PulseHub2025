import { IUsuario } from '../../compartilhado/tipos/IUsuario';
import { RepositorioUsuarioPrisma } from '../../infraestrutura/banco-de-dados/RepositorioUsuarioPrisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export class ServicoAutenticacao {
  private repositorioUsuario: RepositorioUsuarioPrisma;
  private jwtSecret: string;
  private jwtExpiresIn: string;

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

    const token = jwt.sign({ id: usuario.id, email: usuario.email }, this.jwtSecret, { expiresIn: this.jwtExpiresIn });
    return token;
  }
}
