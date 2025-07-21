import { BaseRepositorioPrisma } from './BaseRepositorioPrisma';
import { ICliente } from '@src/compartilhado/tipos/ICliente';

export class RepositorioClientePrisma extends BaseRepositorioPrisma<ICliente> {
  constructor() {
    super('cliente'); // 'cliente' é o nome do modelo no schema.prisma
  }

  // Métodos específicos do repositório de cliente podem ser adicionados aqui
}
