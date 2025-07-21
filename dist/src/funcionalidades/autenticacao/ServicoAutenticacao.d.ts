import { IUsuario } from '@src/compartilhado/tipos/IUsuario';
export declare class ServicoAutenticacao {
    private repositorioUsuario;
    private jwtSecret;
    private jwtExpiresIn;
    constructor();
    registrar(usuario: IUsuario): Promise<IUsuario | null>;
    autenticar(email: string, senha: string): Promise<string | null>;
}
