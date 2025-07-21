import { ICliente } from '@src/compartilhado/tipos/ICliente';
export declare class ServicoCliente {
    private repositorioCliente;
    constructor();
    criarCliente(cliente: ICliente): Promise<ICliente>;
    buscarClientePorId(id: string): Promise<ICliente | null>;
    buscarTodosClientes(): Promise<ICliente[]>;
    atualizarCliente(id: string, dados: Partial<ICliente>): Promise<ICliente | null>;
    deletarCliente(id: string): Promise<boolean>;
}
