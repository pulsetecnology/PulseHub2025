"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicoAutenticacao = void 0;
const RepositorioUsuarioPrisma_1 = require("@src/infraestrutura/banco-de-dados/RepositorioUsuarioPrisma");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class ServicoAutenticacao {
    constructor() {
        this.repositorioUsuario = new RepositorioUsuarioPrisma_1.RepositorioUsuarioPrisma();
        this.jwtSecret = process.env.JWT_SECRET || 'sua-chave-secreta-padrao';
        this.jwtExpiresIn = process.env.JWT_EXPIRES_IN || '1h';
    }
    async registrar(usuario) {
        const emailNormalizado = usuario.email.toLowerCase();
        const usuarioExistente = await this.repositorioUsuario.findByEmail(emailNormalizado);
        if (usuarioExistente) {
            console.error('Usuário com este e-mail já existe.');
            return null;
        }
        const senhaHash = await bcryptjs_1.default.hash(usuario.senha, 10);
        const usuarioParaCriar = { ...usuario, email: emailNormalizado, senha: senhaHash };
        const novoUsuario = await this.repositorioUsuario.create(usuarioParaCriar);
        return novoUsuario;
    }
    async autenticar(email, senha) {
        const emailNormalizado = email.toLowerCase();
        const usuario = await this.repositorioUsuario.findByEmail(emailNormalizado);
        if (!usuario || !usuario.id) {
            console.error('Usuário não encontrado ou ID ausente.');
            return null;
        }
        const senhaValida = await bcryptjs_1.default.compare(senha, usuario.senha);
        if (!senhaValida) {
            console.error('Senha inválida.');
            return null;
        }
        const token = jsonwebtoken_1.default.sign({ id: usuario.id, email: usuario.email }, this.jwtSecret, { expiresIn: this.jwtExpiresIn });
        return token;
    }
}
exports.ServicoAutenticacao = ServicoAutenticacao;
//# sourceMappingURL=ServicoAutenticacao.js.map