import { IUsuario } from '@src/compartilhado/tipos/IUsuario';
export declare class Usuario implements IUsuario {
    id?: string;
    nome: string;
    email: string;
    senha: string;
    constructor(nome: string, email: string, senha: string, id?: string);
    validar(): boolean;
}
