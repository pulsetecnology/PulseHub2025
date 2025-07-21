import { IUsuario } from '../../compartilhado/tipos/IUsuario';
import { RepositorioUsuarioPrisma } from '../../infraestrutura/banco-de-dados/RepositorioUsuarioPrisma';

export class ServicoUsuario {
  private repositorioUsuario: RepositorioUsuarioPrisma;

  constructor() {
    this.repositorioUsuario = new RepositorioUsuarioPrisma();
  }

  public async criarUsuario(usuario: IUsuario): Promise<IUsuario | null> {
    // Lógica de negócio para criar usuário (ex: verificar duplicidade de email)
    const usuarioExistente = await this.repositorioUsuario.findByEmail(usuario.email);
    if (usuarioExistente) {
      console.error('Usuário com este e-mail já existe.');
      return null;
    }
    return this.repositorioUsuario.create(usuario);
  }

  public async buscarUsuarioPorId(id: string): Promise<IUsuario | null> {
    return this.repositorioUsuario.findById(id);
  }

  public async buscarTodosUsuarios(): Promise<IUsuario[]> {
    return this.repositorioUsuario.findAll();
  }

  public async atualizarUsuario(id: string, dados: Partial<IUsuario>): Promise<IUsuario | null> {
    return this.repositorioUsuario.update(id, dados);
  }

  public async deletarUsuario(id: string): Promise<boolean> {
    return this.repositorioUsuario.delete(id);
  }
}
