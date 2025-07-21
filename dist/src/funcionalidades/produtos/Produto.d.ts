import { IProduto } from '@src/compartilhado/tipos/IProduto';
interface IVarianteProduto {
    sku: string;
    preco: number;
    estoque: number;
    atributos: {
        [key: string]: string;
    };
}
export declare class Produto implements IProduto {
    id?: string;
    nome: string;
    descricao: string;
    precoBase: number;
    variantes: IVarianteProduto[];
    constructor(nome: string, descricao: string, precoBase: number, variantes?: IVarianteProduto[], id?: string);
    adicionarVariante(variante: IVarianteProduto): void;
    validar(): boolean;
}
export {};
