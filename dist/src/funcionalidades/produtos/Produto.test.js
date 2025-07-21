"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Produto_1 = require("./Produto");
describe('Produto', () => {
    it('deve criar uma instância de Produto', () => {
        const produto = new Produto_1.Produto('Camiseta', 'Camiseta de algodão', 29.90, [
            { sku: 'CAM-P-AZ', preco: 29.90, estoque: 10, atributos: { cor: 'azul', tamanho: 'P' } }
        ]);
        expect(produto).toBeInstanceOf(Produto_1.Produto);
    });
    it('deve validar um produto com dados válidos', () => {
        const produto = new Produto_1.Produto('Calça Jeans', 'Calça jeans slim fit', 99.90, [
            { sku: 'CAL-M-PR', preco: 99.90, estoque: 5, atributos: { cor: 'preta', tamanho: 'M' } }
        ]);
        expect(produto.validar()).toBe(true);
    });
    it('não deve validar um produto sem nome', () => {
        const produto = new Produto_1.Produto('', 'Descrição', 10.00, [
            { sku: 'SKU1', preco: 10.00, estoque: 5, atributos: {} }
        ]);
        expect(produto.validar()).toBe(false);
    });
    it('não deve validar um produto com preço base zero ou negativo', () => {
        const produto = new Produto_1.Produto('Produto Teste', 'Descrição', 0, [
            { sku: 'SKU1', preco: 10.00, estoque: 5, atributos: {} }
        ]);
        expect(produto.validar()).toBe(false);
        const produtoNegativo = new Produto_1.Produto('Produto Teste', 'Descrição', -5, [
            { sku: 'SKU1', preco: 10.00, estoque: 5, atributos: {} }
        ]);
        expect(produtoNegativo.validar()).toBe(false);
    });
    it('não deve validar um produto sem variantes', () => {
        const produto = new Produto_1.Produto('Produto Teste', 'Descrição', 10.00, []);
        expect(produto.validar()).toBe(false);
    });
    it('não deve validar uma variante sem SKU', () => {
        const produto = new Produto_1.Produto('Produto Teste', 'Descrição', 10.00, [
            { sku: '', preco: 10.00, estoque: 5, atributos: {} }
        ]);
        expect(produto.validar()).toBe(false);
    });
    it('não deve validar uma variante com preço zero ou negativo', () => {
        const produto = new Produto_1.Produto('Produto Teste', 'Descrição', 10.00, [
            { sku: 'SKU1', preco: 0, estoque: 5, atributos: {} }
        ]);
        expect(produto.validar()).toBe(false);
        const produtoNegativo = new Produto_1.Produto('Produto Teste', 'Descrição', 10.00, [
            { sku: 'SKU1', preco: -5, estoque: 5, atributos: {} }
        ]);
        expect(produtoNegativo.validar()).toBe(false);
    });
    it('não deve validar uma variante com estoque negativo', () => {
        const produto = new Produto_1.Produto('Produto Teste', 'Descrição', 10.00, [
            { sku: 'SKU1', preco: 10.00, estoque: -1, atributos: {} }
        ]);
        expect(produto.validar()).toBe(false);
    });
});
//# sourceMappingURL=Produto.test.js.map