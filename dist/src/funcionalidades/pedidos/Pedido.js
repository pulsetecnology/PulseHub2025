"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
const validacao_1 = require("../../compartilhado/utilitarios/validacao");
class Pedido {
    constructor(clienteId, itens, id) {
        this.id = id;
        this.clienteId = clienteId;
        this.dataPedido = new Date();
        this.itens = itens;
        this.status = 'pendente';
        this.valorTotal = this.calcularValorTotal();
    }
    calcularValorTotal() {
        return this.itens.reduce((total, item) => total + (item.quantidade * item.precoUnitario), 0);
    }
    adicionarItem(item) {
        this.itens.push(item);
        this.valorTotal = this.calcularValorTotal();
    }
    validar() {
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
        return (0, validacao_1.validarDados)(this);
    }
}
exports.Pedido = Pedido;
//# sourceMappingURL=Pedido.js.map