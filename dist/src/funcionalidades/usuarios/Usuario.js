"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const validacao_1 = require("../../compartilhado/utilitarios/validacao");
class Usuario {
    constructor(nome, email, senha, id) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
    validar() {
        // Exemplo de validação básica
        if (!this.nome || this.nome.trim() === '') {
            console.error('Nome do usuário é obrigatório.');
            return false;
        }
        if (!this.email || !this.email.includes('@')) {
            console.error('Email do usuário é inválido.');
            return false;
        }
        if (!this.senha || this.senha.length < 6) {
            console.error('Senha do usuário deve ter pelo menos 6 caracteres.');
            return false;
        }
        // Usar a função de validação genérica se necessário
        return (0, validacao_1.validarDados)(this);
    }
}
exports.Usuario = Usuario;
//# sourceMappingURL=Usuario.js.map