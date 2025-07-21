"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioProdutoPrisma = void 0;
const BaseRepositorioPrisma_1 = require("./BaseRepositorioPrisma");
const prismaClient_1 = __importDefault(require("./prismaClient"));
class RepositorioProdutoPrisma extends BaseRepositorioPrisma_1.BaseRepositorioPrisma {
    constructor() {
        super('produto'); // 'produto' é o nome do modelo no schema.prisma
    }
    async create(item) {
        const { variantes, ...productData } = item;
        const createdProduct = await prismaClient_1.default.produto.create({
            data: {
                ...productData,
                variantes: {
                    create: variantes.map((v) => ({
                        sku: v.sku,
                        preco: v.preco,
                        estoque: v.estoque,
                        atributos: v.atributos,
                    })),
                },
            },
            include: { variantes: true },
        });
        return createdProduct;
    }
    async update(id, item) {
        const { variantes, ...productData } = item;
        const updatedProduct = await prismaClient_1.default.produto.update({
            where: { id },
            data: {
                ...productData,
                ...(variantes && {
                    variantes: {
                        deleteMany: { productId: id }, // Remove as variantes existentes
                        create: variantes.map((v) => ({
                            sku: v.sku,
                            preco: v.preco,
                            estoque: v.estoque,
                            atributos: v.atributos,
                        })),
                    },
                }),
            },
            include: { variantes: true },
        });
        return updatedProduct;
    }
    async findById(id) {
        const product = await prismaClient_1.default.produto.findUnique({
            where: { id },
            include: { variantes: true },
        });
        return product;
    }
    async findAll() {
        const products = await prismaClient_1.default.produto.findMany({
            include: { variantes: true },
        });
        return products;
    }
}
exports.RepositorioProdutoPrisma = RepositorioProdutoPrisma;
//# sourceMappingURL=RepositorioProdutoPrisma.js.map