import { Pedido } from './Pedido';
import { Produto } from '../produtos/Produto';

describe('Pedido', () => {
  const produto1 = new Produto('Produto A', 'Descrição A', 10.00, [{ sku: 'PA1', preco: 10.00, estoque: 100, atributos: {} }]);
  const produto2 = new Produto('Produto B', 'Descrição B', 20.00, [{ sku: 'PB1', preco: 20.00, estoque: 50, atributos: {} }]);

  it('deve criar uma instância de Pedido', () => {
    const pedido = new Pedido('cliente123', [
      { produto: produto1, quantidade: 2, precoUnitario: 10.00 }
    ]);
    expect(pedido).toBeInstanceOf(Pedido);
  });

  it('deve calcular o valor total corretamente', () => {
    const pedido = new Pedido('cliente123', [
      { produto: produto1, quantidade: 2, precoUnitario: 10.00 },
      { produto: produto2, quantidade: 1, precoUnitario: 20.00 }
    ]);
    expect(pedido.valorTotal).toBe(40.00);
  });

  it('deve adicionar um item e recalcular o valor total', () => {
    const pedido = new Pedido('cliente123', [
      { produto: produto1, quantidade: 1, precoUnitario: 10.00 }
    ]);
    pedido.adicionarItem({ produto: produto2, quantidade: 1, precoUnitario: 20.00 });
    expect(pedido.itens.length).toBe(2);
    expect(pedido.valorTotal).toBe(30.00);
  });

  it('deve validar um pedido com dados válidos', () => {
    const pedido = new Pedido('cliente123', [
      { produto: produto1, quantidade: 1, precoUnitario: 10.00 }
    ]);
    expect(pedido.validar()).toBe(true);
  });

  it('não deve validar um pedido sem clienteId', () => {
    const pedido = new Pedido('', [
      { produto: produto1, quantidade: 1, precoUnitario: 10.00 }
    ]);
    expect(pedido.validar()).toBe(false);
  });

  it('não deve validar um pedido sem itens', () => {
    const pedido = new Pedido('cliente123', []);
    expect(pedido.validar()).toBe(false);
  });

  it('não deve validar um item com quantidade zero ou negativa', () => {
    const pedido = new Pedido('cliente123', [
      { produto: produto1, quantidade: 0, precoUnitario: 10.00 }
    ]);
    expect(pedido.validar()).toBe(false);

    const pedidoNegativo = new Pedido('cliente123', [
      { produto: produto1, quantidade: -1, precoUnitario: 10.00 }
    ]);
    expect(pedidoNegativo.validar()).toBe(false);
  });

  it('não deve validar um item com preço unitário zero ou negativo', () => {
    const pedido = new Pedido('cliente123', [
      { produto: produto1, quantidade: 1, precoUnitario: 0 }
    ]);
    expect(pedido.validar()).toBe(false);

    const pedidoNegativo = new Pedido('cliente123', [
      { produto: produto1, quantidade: 1, precoUnitario: -5 }
    ]);
    expect(pedidoNegativo.validar()).toBe(false);
  });
});
