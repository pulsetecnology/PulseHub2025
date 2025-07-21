import { INotificacao } from '@src/compartilhado/tipos/INotificacao';
import { validarDados } from '../../compartilhado/utilitarios/validacao';

export class Notificacao implements INotificacao {
  id?: string;
  destinatarioId: string;
  mensagem: string;
  dataEnvio: Date;
  lida: boolean;
  tipo: string;

  constructor(destinatarioId: string, mensagem: string, tipo: string, id?: string) {
    this.id = id;
    this.destinatarioId = destinatarioId;
    this.mensagem = mensagem;
    this.dataEnvio = new Date();
    this.lida = false;
    this.tipo = tipo;
  }

  public validar(): boolean {
    if (!this.destinatarioId || this.destinatarioId.trim() === '') {
      console.error('ID do destinatário é obrigatório.');
      return false;
    }
    if (!this.mensagem || this.mensagem.trim() === '') {
      console.error('Mensagem da notificação é obrigatória.');
      return false;
    }
    if (!this.tipo || this.tipo.trim() === '') {
      console.error('Tipo da notificação é obrigatório.');
      return false;
    }
    return validarDados(this);
  }
}
