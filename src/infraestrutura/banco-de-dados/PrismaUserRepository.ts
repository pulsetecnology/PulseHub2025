import { BasePrismaRepository } from './BasePrismaRepository';
import { IUsuario } from '../../compartilhado/tipos/IUsuario';

export class PrismaUserRepository extends BasePrismaRepository<IUsuario> {
  constructor() {
    super('user'); // 'user' é o nome do modelo no schema.prisma
  }

  // Métodos específicos do repositório de usuário podem ser adicionados aqui
  async findByEmail(email: string): Promise<IUsuario | null> {
    return this.model.findUnique({ where: { email } });
  }
}
