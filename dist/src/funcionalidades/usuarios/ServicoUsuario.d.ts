import { IUsuario } from '@src/compartilhado/tipos/IUsuario';
export declare class ServicoUsuario {
    private repositorioUsuario;
    constructor();
    criarUsuario(usuario: IUsuario): Promise<IUsuario | null>;
    buscarUsuarioPorId(id: string): Promise<IUsuario | null>;
    buscarTodosUsuarios(): Promise<IUsuario[]>;
    atualizarUsuario(id: string, dados: Partial<IUsuario>): Promise<IUsuario | null>;
    deletarUsuario(id: string): Promise<boolean>;
}
