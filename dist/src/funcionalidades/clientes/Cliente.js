"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const validacao_1 = require("../../compartilhado/utilitarios/validacao");
class Cliente {
    constructor(nome, email, cpfCnpj, id) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.cpfCnpj = cpfCnpj;
    }
    validar() {
        if (!this.nome || this.nome.trim() === '') {
            console.error('Nome do cliente é obrigatório.');
            return false;
        }
        if (!this.email || !this.email.includes('@')) {
            console.error('Email do cliente é inválido.');
            return false;
        }
        // Validação simples para CPF/CNPJ (apenas verifica se não está vazio)
        if (!this.cpfCnpj || this.cpfCnpj.trim() === '') {
            console.error('CPF/CNPJ do cliente é obrigatório.');
            return false;
        }
        return (0, validacao_1.validarDados)(this);
    }
}
exports.Cliente = Cliente;
//# sourceMappingURL=Cliente.js.map