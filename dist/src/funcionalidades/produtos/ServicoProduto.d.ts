import { IProduto } from '@src/compartilhado/tipos/IProduto';
export declare class ServicoProduto {
    private repositorioProduto;
    constructor();
    criarProduto(produto: IProduto): Promise<IProduto>;
    buscarProdutoPorId(id: string): Promise<IProduto | null>;
    buscarTodosProdutos(): Promise<IProduto[]>;
    atualizarProduto(id: string, dados: Partial<IProduto>): Promise<IProduto | null>;
    deletarProduto(id: string): Promise<boolean>;
}
