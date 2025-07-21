// Interface para o modelo de Pedido
export interface IPedido {
  id?: string;
  clienteId: string;
  dataPedido: Date;
  itens: any[]; // Temporário, será refinado
  status: 'pendente' | 'processando' | 'enviado' | 'entregue' | 'cancelado';
  valorTotal: number;
}
