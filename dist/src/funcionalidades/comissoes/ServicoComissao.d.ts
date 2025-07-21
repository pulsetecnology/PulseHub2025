import { IComissao } from '@src/compartilhado/tipos/IComissao';
export declare class ServicoComissao {
    private repositorioComissao;
    constructor();
    criarComissao(comissao: IComissao): Promise<IComissao>;
    buscarComissaoPorId(id: string): Promise<IComissao | null>;
    buscarTodasComissoes(): Promise<IComissao[]>;
    atualizarComissao(id: string, dados: Partial<IComissao>): Promise<IComissao | null>;
    deletarComissao(id: string): Promise<boolean>;
    calcularComissao(valorVenda: number, percentual: number): number;
}
