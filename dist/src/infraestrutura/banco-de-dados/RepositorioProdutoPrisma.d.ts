import { BaseRepositorioPrisma } from './BaseRepositorioPrisma';
import { IProduto } from '@src/compartilhado/tipos/IProduto';
export declare class RepositorioProdutoPrisma extends BaseRepositorioPrisma<IProduto> {
    constructor();
    create(item: IProduto): Promise<IProduto>;
    update(id: string, item: Partial<IProduto>): Promise<IProduto | null>;
    findById(id: string): Promise<IProduto | null>;
    findAll(): Promise<IProduto[]>;
}
