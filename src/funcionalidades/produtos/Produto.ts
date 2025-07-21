import { IProduto } from '../../compartilhado/tipos/IProduto';
import { validarDados } from '../../compartilhado/utilitarios/validacao';

interface IVarianteProduto {
  sku: string;
  preco: number;
  estoque: number;
  atributos: { [key: string]: string };
}

export class Produto implements IProduto {
  id?: string;
  nome: string;
  descricao: string;
  precoBase: number;
  variantes: IVarianteProduto[];

  constructor(nome: string, descricao: string, precoBase: number, variantes: IVarianteProduto[] = [], id?: string) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.precoBase = precoBase;
    this.variantes = variantes;
  }

  public adicionarVariante(variante: IVarianteProduto): void {
    this.variantes.push(variante);
  }

  public validar(): boolean {
    if (!this.nome || this.nome.trim() === '') {
      console.error('Nome do produto é obrigatório.');
      return false;
    }
    if (this.precoBase <= 0) {
      console.error('Preço base do produto deve ser maior que zero.');
      return false;
    }
    if (this.variantes.length === 0) {
      console.error('Produto deve ter pelo menos uma variante.');
      return false;
    }
    for (const variante of this.variantes) {
      if (!variante.sku || variante.sku.trim() === '') {
        console.error('SKU da variante é obrigatório.');
        return false;
      }
      if (variante.preco <= 0) {
        console.error('Preço da variante deve ser maior que zero.');
        return false;
      }
      if (variante.estoque < 0) {
        console.error('Estoque da variante não pode ser negativo.');
        return false;
      }
    }
    return validarDados(this);
  }
}
