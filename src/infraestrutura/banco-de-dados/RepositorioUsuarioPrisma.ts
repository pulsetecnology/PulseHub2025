import { BaseRepositorioPrisma } from './BaseRepositorioPrisma';
import { IUsuario } from '@src/compartilhado/tipos/IUsuario';

export class RepositorioUsuarioPrisma extends BaseRepositorioPrisma<IUsuario> {
  constructor() {
    super('usuario'); // 'usuario' é o nome do modelo no schema.prisma
  }

  // Métodos específicos do repositório de usuário podem ser adicionados aqui
  async findByEmail(email: string): Promise<IUsuario | null> {
    return this.model.findUnique({ where: { email } });
  }
}
