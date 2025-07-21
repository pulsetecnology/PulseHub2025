"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fornecedor = void 0;
const validacao_1 = require("../../compartilhado/utilitarios/validacao");
class Fornecedor {
    constructor(nomeFantasia, razaoSocial, cnpj, email, id) {
        this.id = id;
        this.nomeFantasia = nomeFantasia;
        this.razaoSocial = razaoSocial;
        this.cnpj = cnpj;
        this.email = email;
    }
    validar() {
        if (!this.nomeFantasia || this.nomeFantasia.trim() === '') {
            console.error('Nome fantasia do fornecedor é obrigatório.');
            return false;
        }
        if (!this.cnpj || this.cnpj.length !== 14) { // Exemplo de validação simples para CNPJ
            console.error('CNPJ do fornecedor inválido.');
            return false;
        }
        if (!this.email || !this.email.includes('@')) {
            console.error('Email do fornecedor é inválido.');
            return false;
        }
        return (0, validacao_1.validarDados)(this);
    }
}
exports.Fornecedor = Fornecedor;
//# sourceMappingURL=Fornecedor.js.map