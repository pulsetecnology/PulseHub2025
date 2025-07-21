import { INotificacao } from '@src/compartilhado/tipos/INotificacao';
export declare class Notificacao implements INotificacao {
    id?: string;
    destinatarioId: string;
    mensagem: string;
    dataEnvio: Date;
    lida: boolean;
    tipo: string;
    constructor(destinatarioId: string, mensagem: string, tipo: string, id?: string);
    validar(): boolean;
}
