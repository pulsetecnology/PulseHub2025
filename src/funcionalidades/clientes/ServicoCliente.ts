import { ICliente } from '../../compartilhado/tipos/ICliente';
import { RepositorioClientePrisma } from '../../infraestrutura/banco-de-dados/RepositorioClientePrisma';

export class ServicoCliente {
  private repositorioCliente: RepositorioClientePrisma;

  constructor() {
    this.repositorioCliente = new RepositorioClientePrisma();
  }

  public async criarCliente(cliente: ICliente): Promise<ICliente> {
    // Lógica de negócio para criar cliente
    return this.repositorioCliente.create(cliente);
  }

  public async buscarClientePorId(id: string): Promise<ICliente | null> {
    return this.repositorioCliente.findById(id);
  }

  public async buscarTodosClientes(): Promise<ICliente[]> {
    return this.repositorioCliente.findAll();
  }

  public async atualizarCliente(id: string, dados: Partial<ICliente>): Promise<ICliente | null> {
    return this.repositorioCliente.update(id, dados);
  }

  public async deletarCliente(id: string): Promise<boolean> {
    return this.repositorioCliente.delete(id);
  }
}
