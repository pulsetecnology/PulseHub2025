"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicoComissao = void 0;
const RepositorioComissaoPrisma_1 = require("@src/infraestrutura/banco-de-dados/RepositorioComissaoPrisma");
class ServicoComissao {
    constructor() {
        this.repositorioComissao = new RepositorioComissaoPrisma_1.RepositorioComissaoPrisma();
    }
    async criarComissao(comissao) {
        // Lógica de negócio para criar comissão
        return this.repositorioComissao.create(comissao);
    }
    async buscarComissaoPorId(id) {
        return this.repositorioComissao.findById(id);
    }
    async buscarTodasComissoes() {
        return this.repositorioComissao.findAll();
    }
    async atualizarComissao(id, dados) {
        return this.repositorioComissao.update(id, dados);
    }
    async deletarComissao(id) {
        return this.repositorioComissao.delete(id);
    }
    calcularComissao(valorVenda, percentual) {
        return valorVenda * (percentual / 100);
    }
}
exports.ServicoComissao = ServicoComissao;
//# sourceMappingURL=ServicoComissao.js.map