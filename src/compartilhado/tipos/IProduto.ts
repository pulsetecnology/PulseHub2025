// Interface para o modelo de Produto
export interface IProduto {
  id?: string;
  nome: string;
  descricao: string;
  precoBase: number;
  variantes: any[]; // Temporário, será refinado
}
