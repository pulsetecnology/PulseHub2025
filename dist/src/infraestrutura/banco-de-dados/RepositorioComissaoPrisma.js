"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioComissaoPrisma = void 0;
const BaseRepositorioPrisma_1 = require("./BaseRepositorioPrisma");
class RepositorioComissaoPrisma extends BaseRepositorioPrisma_1.BaseRepositorioPrisma {
    constructor() {
        super('comissao'); // 'comissao' é o nome do modelo no schema.prisma
    }
}
exports.RepositorioComissaoPrisma = RepositorioComissaoPrisma;
//# sourceMappingURL=RepositorioComissaoPrisma.js.map