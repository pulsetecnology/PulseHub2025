"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicoUsuario = void 0;
const RepositorioUsuarioPrisma_1 = require("@src/infraestrutura/banco-de-dados/RepositorioUsuarioPrisma");
class ServicoUsuario {
    constructor() {
        this.repositorioUsuario = new RepositorioUsuarioPrisma_1.RepositorioUsuarioPrisma();
    }
    async criarUsuario(usuario) {
        // Lógica de negócio para criar usuário (ex: verificar duplicidade de email)
        const usuarioExistente = await this.repositorioUsuario.findByEmail(usuario.email);
        if (usuarioExistente) {
            console.error('Usuário com este e-mail já existe.');
            return null;
        }
        return this.repositorioUsuario.create(usuario);
    }
    async buscarUsuarioPorId(id) {
        return this.repositorioUsuario.findById(id);
    }
    async buscarTodosUsuarios() {
        return this.repositorioUsuario.findAll();
    }
    async atualizarUsuario(id, dados) {
        return this.repositorioUsuario.update(id, dados);
    }
    async deletarUsuario(id) {
        return this.repositorioUsuario.delete(id);
    }
}
exports.ServicoUsuario = ServicoUsuario;
//# sourceMappingURL=ServicoUsuario.js.map