import { IFornecedor } from '@src/compartilhado/tipos/IFornecedor';
export declare class Fornecedor implements IFornecedor {
    id?: string;
    nomeFantasia: string;
    razaoSocial: string;
    cnpj: string;
    email: string;
    constructor(nomeFantasia: string, razaoSocial: string, cnpj: string, email: string, id?: string);
    validar(): boolean;
}
