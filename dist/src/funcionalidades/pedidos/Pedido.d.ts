import { IPedido } from '../../compartilhado/tipos/IPedido';
import { IProduto } from '@src/compartilhado/tipos/IProduto';
interface IItemPedido {
    produto: IProduto;
    quantidade: number;
    precoUnitario: number;
}
export declare class Pedido implements IPedido {
    id?: string;
    clienteId: string;
    dataPedido: Date;
    itens: IItemPedido[];
    status: 'pendente' | 'processando' | 'enviado' | 'entregue' | 'cancelado';
    valorTotal: number;
    constructor(clienteId: string, itens: IItemPedido[], id?: string);
    private calcularValorTotal;
    adicionarItem(item: IItemPedido): void;
    validar(): boolean;
}
export {};
