"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioUsuarioPrisma = void 0;
const BaseRepositorioPrisma_1 = require("./BaseRepositorioPrisma");
class RepositorioUsuarioPrisma extends BaseRepositorioPrisma_1.BaseRepositorioPrisma {
    constructor() {
        super('usuario'); // 'usuario' é o nome do modelo no schema.prisma
    }
    // Métodos específicos do repositório de usuário podem ser adicionados aqui
    async findByEmail(email) {
        return this.model.findUnique({ where: { email } });
    }
}
exports.RepositorioUsuarioPrisma = RepositorioUsuarioPrisma;
//# sourceMappingURL=RepositorioUsuarioPrisma.js.map