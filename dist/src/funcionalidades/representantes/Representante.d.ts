import { IRepresentante } from '@src/compartilhado/tipos/IRepresentante';
export declare class Representante implements IRepresentante {
    id?: string;
    nome: string;
    email: string;
    telefone: string;
    constructor(nome: string, email: string, telefone: string, id?: string);
    validar(): boolean;
}
