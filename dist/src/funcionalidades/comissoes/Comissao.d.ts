import { IComissao } from '@src/compartilhado/tipos/IComissao';
export declare class Comissao implements IComissao {
    id?: string;
    representanteId: string;
    pedidoId: string;
    percentual: number;
    valorCalculado: number;
    dataEfetivacao: Date;
    constructor(representanteId: string, pedidoId: string, percentual: number, valorCalculado: number, dataEfetivacao: Date, id?: string);
    validar(): boolean;
    isEfetiva(): boolean;
}
