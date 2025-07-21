import { BaseRepositorioPrisma } from './BaseRepositorioPrisma';
import { INotificacao } from '@src/compartilhado/tipos/INotificacao';

export class RepositorioNotificacaoPrisma extends BaseRepositorioPrisma<INotificacao> {
  constructor() {
    super('notificacao'); // 'notificacao' é o nome do modelo no schema.prisma
  }

  // Métodos específicos do repositório de notificação podem ser adicionados aqui
}
