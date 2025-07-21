"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepositorioPrisma = void 0;
const prismaClient_1 = __importDefault(require("./prismaClient"));
class BaseRepositorioPrisma {
    constructor(modelName) {
        this.prisma = prismaClient_1.default;
        this.model = this.prisma[modelName];
    }
    async findById(id) {
        return this.model.findUnique({ where: { id } });
    }
    async findAll() {
        return this.model.findMany();
    }
    async create(item) {
        return this.model.create({ data: item });
    }
    async update(id, item) {
        return this.model.update({
            where: { id },
            data: item,
        });
    }
    async delete(id) {
        try {
            await this.model.delete({ where: { id } });
            return true;
        }
        catch (error) {
            console.error(`Erro ao deletar item com ID ${id}:`, error);
            return false;
        }
    }
}
exports.BaseRepositorioPrisma = BaseRepositorioPrisma;
//# sourceMappingURL=BaseRepositorioPrisma.js.map