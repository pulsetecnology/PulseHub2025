import { BaseRepositorioPrisma } from './BaseRepositorioPrisma';
import { IComissao } from '@src/compartilhado/tipos/IComissao';

export class RepositorioComissaoPrisma extends BaseRepositorioPrisma<IComissao> {
  constructor() {
    super('comissao'); // 'comissao' é o nome do modelo no schema.prisma
  }

  // Métodos específicos do repositório de comissão podem ser adicionados aqui
}
