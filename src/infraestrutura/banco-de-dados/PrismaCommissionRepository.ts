import { BasePrismaRepository } from './BasePrismaRepository';
import { IComissao } from '../../compartilhado/tipos/IComissao';

export class PrismaCommissionRepository extends BasePrismaRepository<IComissao> {
  constructor() {
    super('commission'); // 'commission' é o nome do modelo no schema.prisma
  }

  // Métodos específicos do repositório de comissão podem ser adicionados aqui
}
