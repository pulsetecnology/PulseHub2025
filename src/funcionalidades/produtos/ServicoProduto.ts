import { IProduto } from '../../compartilhado/tipos/IProduto';
import { RepositorioProdutoPrisma } from '../../infraestrutura/banco-de-dados/RepositorioProdutoPrisma';

export class ServicoProduto {
  private repositorioProduto: RepositorioProdutoPrisma;

  constructor() {
    this.repositorioProduto = new RepositorioProdutoPrisma();
  }

  public async criarProduto(produto: IProduto): Promise<IProduto> {
    // Lógica de negócio para criar produto
    return this.repositorioProduto.create(produto);
  }

  public async buscarProdutoPorId(id: string): Promise<IProduto | null> {
    return this.repositorioProduto.findById(id);
  }

  public async buscarTodosProdutos(): Promise<IProduto[]> {
    return this.repositorioProduto.findAll();
  }

  public async atualizarProduto(id: string, dados: Partial<IProduto>): Promise<IProduto | null> {
    return this.repositorioProduto.update(id, dados);
  }

  public async deletarProduto(id: string): Promise<boolean> {
    return this.repositorioProduto.delete(id);
  }
}
