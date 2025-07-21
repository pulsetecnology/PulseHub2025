import { BaseRepositorioPrisma } from './BaseRepositorioPrisma';
import { IUsuario } from '@src/compartilhado/tipos/IUsuario';
export declare class RepositorioUsuarioPrisma extends BaseRepositorioPrisma<IUsuario> {
    constructor();
    findByEmail(email: string): Promise<IUsuario | null>;
}
