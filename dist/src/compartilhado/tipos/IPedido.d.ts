export interface IPedido {
    id?: string;
    clienteId: string;
    dataPedido: Date;
    itens: any[];
    status: 'pendente' | 'processando' | 'enviado' | 'entregue' | 'cancelado';
    valorTotal: number;
}
