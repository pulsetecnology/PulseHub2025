"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Representante = void 0;
const validacao_1 = require("../../compartilhado/utilitarios/validacao");
class Representante {
    constructor(nome, email, telefone, id) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
    validar() {
        if (!this.nome || this.nome.trim() === '') {
            console.error('Nome do representante é obrigatório.');
            return false;
        }
        if (!this.email || !this.email.includes('@')) {
            console.error('Email do representante é inválido.');
            return false;
        }
        if (!this.telefone || this.telefone.length < 8) { // Exemplo de validação simples para telefone
            console.error('Telefone do representante inválido.');
            return false;
        }
        return (0, validacao_1.validarDados)(this);
    }
}
exports.Representante = Representante;
//# sourceMappingURL=Representante.js.map