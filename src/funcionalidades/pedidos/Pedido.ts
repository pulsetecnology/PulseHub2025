import { IPedido } from '../../compartilhado/tipos/IPedido';
import { IProduto } from '@src/compartilhado/tipos/IProduto';
import { validarDados } from '../../compartilhado/utilitarios/validacao';

interface IItemPedido {
  produto: IProduto;
  quantidade: number;
  precoUnitario: number;
}

export class Pedido implements IPedido {
  id?: string;
  clienteId: string;
  dataPedido: Date;
  itens: IItemPedido[];
  status: 'pendente' | 'processando' | 'enviado' | 'entregue' | 'cancelado';
  valorTotal: number;

  constructor(clienteId: string, itens: IItemPedido[], id?: string) {
    this.id = id;
    this.clienteId = clienteId;
    this.dataPedido = new Date();
    this.itens = itens;
    this.status = 'pendente';
    this.valorTotal = this.calcularValorTotal();
  }

  private calcularValorTotal(): number {
    return this.itens.reduce((total, item) => total + (item.quantidade * item.precoUnitario), 0);
  }

  public adicionarItem(item: IItemPedido): void {
    this.itens.push(item);
    this.valorTotal = this.calcularValorTotal();
  }

  public validar(): boolean {
    if (!this.clienteId || this.clienteId.trim() === '') {
      console.error('ID do cliente é obrigatório.');
      return false;
    }
    if (this.itens.length === 0) {
      console.error('Pedido deve ter pelo menos um item.');
      return false;
    }
    for (const item of this.itens) {
      if (!item.produto || !item.produto.id) {
        console.error('Produto do item é inválido.');
        return false;
      }
      if (item.quantidade <= 0) {
        console.error('Quantidade do item deve ser maior que zero.');
        return false;
      }
      if (item.precoUnitario <= 0) {
        console.error('Preço unitário do item deve ser maior que zero.');
        return false;
      }
    }
    return validarDados(this);
  }
}
