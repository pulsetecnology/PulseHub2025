"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioPedidoPrisma = void 0;
const BaseRepositorioPrisma_1 = require("./BaseRepositorioPrisma");
const prismaClient_1 = __importDefault(require("./prismaClient"));
class RepositorioPedidoPrisma extends BaseRepositorioPrisma_1.BaseRepositorioPrisma {
    constructor() {
        super('pedido'); // 'pedido' é o nome do modelo no schema.prisma
    }
    async create(item) {
        const { itens, ...orderData } = item;
        const createdOrder = await prismaClient_1.default.pedido.create({
            data: {
                ...orderData,
                itens: {
                    create: itens.map((i) => ({
                        produtoId: i.produto.id,
                        quantidade: i.quantidade,
                        precoUnitario: i.precoUnitario,
                    })),
                },
            },
            include: { itens: true },
        });
        return createdOrder;
    }
    async update(id, item) {
        const { itens, ...orderData } = item;
        const updatedOrder = await prismaClient_1.default.pedido.update({
            where: { id },
            data: {
                ...orderData,
                ...(itens && {
                    itens: {
                        deleteMany: { orderId: id }, // Remove os itens existentes
                        create: itens.map((i) => ({
                            produtoId: i.produto.id,
                            quantidade: i.quantidade,
                            precoUnitario: i.precoUnitario,
                        })),
                    },
                }),
            },
            include: { itens: true },
        });
        return updatedOrder;
    }
    async findById(id) {
        const order = await prismaClient_1.default.pedido.findUnique({
            where: { id },
            include: { itens: true },
        });
        return order;
    }
    async findAll() {
        const orders = await prismaClient_1.default.pedido.findMany({
            include: { itens: true },
        });
        return orders;
    }
}
exports.RepositorioPedidoPrisma = RepositorioPedidoPrisma;
//# sourceMappingURL=RepositorioPedidoPrisma.js.map