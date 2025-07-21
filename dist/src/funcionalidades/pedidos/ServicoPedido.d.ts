import { IPedido } from '@src/compartilhado/tipos/IPedido';
export declare class ServicoPedido {
    private repositorioPedido;
    constructor();
    criarPedido(pedido: IPedido): Promise<IPedido>;
    buscarPedidoPorId(id: string): Promise<IPedido | null>;
    buscarTodosPedidos(): Promise<IPedido[]>;
    atualizarPedido(id: string, dados: Partial<IPedido>): Promise<IPedido | null>;
    deletarPedido(id: string): Promise<boolean>;
}
