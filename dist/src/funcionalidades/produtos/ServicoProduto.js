"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicoProduto = void 0;
const RepositorioProdutoPrisma_1 = require("@src/infraestrutura/banco-de-dados/RepositorioProdutoPrisma");
class ServicoProduto {
    constructor() {
        this.repositorioProduto = new RepositorioProdutoPrisma_1.RepositorioProdutoPrisma();
    }
    async criarProduto(produto) {
        // Lógica de negócio para criar produto
        return this.repositorioProduto.create(produto);
    }
    async buscarProdutoPorId(id) {
        return this.repositorioProduto.findById(id);
    }
    async buscarTodosProdutos() {
        return this.repositorioProduto.findAll();
    }
    async atualizarProduto(id, dados) {
        return this.repositorioProduto.update(id, dados);
    }
    async deletarProduto(id) {
        return this.repositorioProduto.delete(id);
    }
}
exports.ServicoProduto = ServicoProduto;
//# sourceMappingURL=ServicoProduto.js.map