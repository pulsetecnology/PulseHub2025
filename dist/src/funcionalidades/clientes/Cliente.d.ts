import { ICliente } from '@src/compartilhado/tipos/ICliente';
export declare class Cliente implements ICliente {
    id?: string;
    nome: string;
    email: string;
    cpfCnpj: string;
    constructor(nome: string, email: string, cpfCnpj: string, id?: string);
    validar(): boolean;
}
