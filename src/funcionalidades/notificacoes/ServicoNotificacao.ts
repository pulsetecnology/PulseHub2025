import { INotificacao } from '../../compartilhado/tipos/INotificacao';
import { RepositorioNotificacaoPrisma } from '../../infraestrutura/banco-de-dados/RepositorioNotificacaoPrisma';

export class ServicoNotificacao {
  private repositorioNotificacao: RepositorioNotificacaoPrisma;

  constructor() {
    this.repositorioNotificacao = new RepositorioNotificacaoPrisma();
  }

  public async enviarNotificacao(notificacao: INotificacao): Promise<INotificacao> {
    // Lógica de negócio para enviar notificação (ex: integração com serviço de e-mail/SMS)
    return this.repositorioNotificacao.create(notificacao);
  }

  public async buscarNotificacaoPorId(id: string): Promise<INotificacao | null> {
    return this.repositorioNotificacao.findById(id);
  }

  public async buscarNotificacoesPorDestinatario(destinatarioId: string): Promise<INotificacao[]> {
    // Este método precisaria ser implementado no RepositorioNotificacaoPrisma
    // Por enquanto, retorna todas as notificações
    return this.repositorioNotificacao.findAll();
  }

  public async marcarComoLida(id: string): Promise<INotificacao | null> {
    return this.repositorioNotificacao.update(id, { lida: true });
  }
}
