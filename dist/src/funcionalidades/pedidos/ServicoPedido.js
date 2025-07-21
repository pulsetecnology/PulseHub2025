"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicoPedido = void 0;
const RepositorioPedidoPrisma_1 = require("@src/infraestrutura/banco-de-dados/RepositorioPedidoPrisma");
class ServicoPedido {
    constructor() {
        this.repositorioPedido = new RepositorioPedidoPrisma_1.RepositorioPedidoPrisma();
    }
    async criarPedido(pedido) {
        // Lógica de negócio para criar pedido (ex: verificar disponibilidade de produtos)
        return this.repositorioPedido.create(pedido);
    }
    async buscarPedidoPorId(id) {
        return this.repositorioPedido.findById(id);
    }
    async buscarTodosPedidos() {
        return this.repositorioPedido.findAll();
    }
    async atualizarPedido(id, dados) {
        return this.repositorioPedido.update(id, dados);
    }
    async deletarPedido(id) {
        return this.repositorioPedido.delete(id);
    }
}
exports.ServicoPedido = ServicoPedido;
//# sourceMappingURL=ServicoPedido.js.map