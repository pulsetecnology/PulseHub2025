import { IComissao } from '../../compartilhado/tipos/IComissao';
import { RepositorioComissaoPrisma } from '../../infraestrutura/banco-de-dados/RepositorioComissaoPrisma';

export class ServicoComissao {
  private repositorioComissao: RepositorioComissaoPrisma;

  constructor() {
    this.repositorioComissao = new RepositorioComissaoPrisma();
  }

  public async criarComissao(comissao: IComissao): Promise<IComissao> {
    // Lógica de negócio para criar comissão
    return this.repositorioComissao.create(comissao);
  }

  public async buscarComissaoPorId(id: string): Promise<IComissao | null> {
    return this.repositorioComissao.findById(id);
  }

  public async buscarTodasComissoes(): Promise<IComissao[]> {
    return this.repositorioComissao.findAll();
  }

  public async atualizarComissao(id: string, dados: Partial<IComissao>): Promise<IComissao | null> {
    return this.repositorioComissao.update(id, dados);
  }

  public async deletarComissao(id: string): Promise<boolean> {
    return this.repositorioComissao.delete(id);
  }

  public calcularComissao(valorVenda: number, percentual: number): number {
    return valorVenda * (percentual / 100);
  }
}
