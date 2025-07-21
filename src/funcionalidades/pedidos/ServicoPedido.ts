import { IPedido } from '../../compartilhado/tipos/IPedido';
import { RepositorioPedidoPrisma } from '../../infraestrutura/banco-de-dados/RepositorioPedidoPrisma';

export class ServicoPedido {
  private repositorioPedido: RepositorioPedidoPrisma;

  constructor() {
    this.repositorioPedido = new RepositorioPedidoPrisma();
  }

  public async criarPedido(pedido: IPedido): Promise<IPedido> {
    // Lógica de negócio para criar pedido (ex: verificar disponibilidade de produtos)
    return this.repositorioPedido.create(pedido);
  }

  public async buscarPedidoPorId(id: string): Promise<IPedido | null> {
    return this.repositorioPedido.findById(id);
  }

  public async buscarTodosPedidos(): Promise<IPedido[]> {
    return this.repositorioPedido.findAll();
  }

  public async atualizarPedido(id: string, dados: Partial<IPedido>): Promise<IPedido | null> {
    return this.repositorioPedido.update(id, dados);
  }

  public async deletarPedido(id: string): Promise<boolean> {
    return this.repositorioPedido.delete(id);
  }
}
