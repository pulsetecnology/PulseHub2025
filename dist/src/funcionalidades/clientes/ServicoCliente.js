"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicoCliente = void 0;
const RepositorioClientePrisma_1 = require("@src/infraestrutura/banco-de-dados/RepositorioClientePrisma");
class ServicoCliente {
    constructor() {
        this.repositorioCliente = new RepositorioClientePrisma_1.RepositorioClientePrisma();
    }
    async criarCliente(cliente) {
        // Lógica de negócio para criar cliente
        return this.repositorioCliente.create(cliente);
    }
    async buscarClientePorId(id) {
        return this.repositorioCliente.findById(id);
    }
    async buscarTodosClientes() {
        return this.repositorioCliente.findAll();
    }
    async atualizarCliente(id, dados) {
        return this.repositorioCliente.update(id, dados);
    }
    async deletarCliente(id) {
        return this.repositorioCliente.delete(id);
    }
}
exports.ServicoCliente = ServicoCliente;
//# sourceMappingURL=ServicoCliente.js.map