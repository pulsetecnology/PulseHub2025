import { BaseRepositorioPrisma } from './BaseRepositorioPrisma';
import { IPedido } from '@src/compartilhado/tipos/IPedido';
export declare class RepositorioPedidoPrisma extends BaseRepositorioPrisma<IPedido> {
    constructor();
    create(item: IPedido): Promise<IPedido>;
    update(id: string, item: Partial<IPedido>): Promise<IPedido | null>;
    findById(id: string): Promise<IPedido | null>;
    findAll(): Promise<IPedido[]>;
}
