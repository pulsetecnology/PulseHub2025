import { INotificacao } from '@src/compartilhado/tipos/INotificacao';
export declare class ServicoNotificacao {
    private repositorioNotificacao;
    constructor();
    enviarNotificacao(notificacao: INotificacao): Promise<INotificacao>;
    buscarNotificacaoPorId(id: string): Promise<INotificacao | null>;
    buscarNotificacoesPorDestinatario(destinatarioId: string): Promise<INotificacao[]>;
    marcarComoLida(id: string): Promise<INotificacao | null>;
}
