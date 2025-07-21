export interface INotificacao {
    id?: string;
    destinatarioId: string;
    mensagem: string;
    dataEnvio: Date;
    lida: boolean;
    tipo: string;
}
