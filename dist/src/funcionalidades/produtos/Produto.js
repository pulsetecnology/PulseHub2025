"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
const validacao_1 = require("../../compartilhado/utilitarios/validacao");
class Produto {
    constructor(nome, descricao, precoBase, variantes = [], id) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.precoBase = precoBase;
        this.variantes = variantes;
    }
    adicionarVariante(variante) {
        this.variantes.push(variante);
    }
    validar() {
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
        return (0, validacao_1.validarDados)(this);
    }
}
exports.Produto = Produto;
//# sourceMappingURL=Produto.js.map