"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioClientePrisma = void 0;
const BaseRepositorioPrisma_1 = require("./BaseRepositorioPrisma");
class RepositorioClientePrisma extends BaseRepositorioPrisma_1.BaseRepositorioPrisma {
    constructor() {
        super('cliente'); // 'cliente' é o nome do modelo no schema.prisma
    }
}
exports.RepositorioClientePrisma = RepositorioClientePrisma;
//# sourceMappingURL=RepositorioClientePrisma.js.map