// Interface para o modelo de Notificação
export interface INotificacao {
  id?: string;
  destinatarioId: string;
  mensagem: string;
  dataEnvio: Date;
  lida: boolean;
  tipo: string; // Ex: 'pedido', 'promocao', 'sistema'
}
