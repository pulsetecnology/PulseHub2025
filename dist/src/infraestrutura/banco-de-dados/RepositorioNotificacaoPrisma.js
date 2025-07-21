"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioNotificacaoPrisma = void 0;
const BaseRepositorioPrisma_1 = require("./BaseRepositorioPrisma");
class RepositorioNotificacaoPrisma extends BaseRepositorioPrisma_1.BaseRepositorioPrisma {
    constructor() {
        super('notificacao'); // 'notificacao' é o nome do modelo no schema.prisma
    }
}
exports.RepositorioNotificacaoPrisma = RepositorioNotificacaoPrisma;
//# sourceMappingURL=RepositorioNotificacaoPrisma.js.map