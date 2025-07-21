"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServicoPedido_1 = require("./ServicoPedido");
const RepositorioPedidoPrisma_1 = require("@src/infraestrutura/banco-de-dados/RepositorioPedidoPrisma");
// Mock do RepositorioPedidoPrisma
jest.mock('../../infraestrutura/banco-de-dados/RepositorioPedidoPrisma');
describe('ServicoPedido', () => {
    let servicoPedido;
    let mockRepositorioPedido;
    beforeEach(() => {
        servicoPedido = new ServicoPedido_1.ServicoPedido();
        mockRepositorioPedido = new RepositorioPedidoPrisma_1.RepositorioPedidoPrisma();
        jest.clearAllMocks();
    });
    const mockPedido = {
        id: '1',
        clienteId: 'cliente1',
        dataPedido: new Date(),
        itens: [],
        status: 'pendente',
        valorTotal: 100,
    };
    describe('criarPedido', () => {
        it('deve criar um novo pedido', async () => {
            mockRepositorioPedido.create.mockResolvedValue(mockPedido);
            const resultado = await servicoPedido.criarPedido(mockPedido);
            expect(mockRepositorioPedido.create).toHaveBeenCalledWith(mockPedido);
            expect(resultado).toEqual(mockPedido);
        });
    });
    describe('buscarPedidoPorId', () => {
        it('deve retornar um pedido pelo ID', async () => {
            mockRepositorioPedido.findById.mockResolvedValue(mockPedido);
            const resultado = await servicoPedido.buscarPedidoPorId('1');
            expect(mockRepositorioPedido.findById).toHaveBeenCalledWith('1');
            expect(resultado).toEqual(mockPedido);
        });
    });
    describe('buscarTodosPedidos', () => {
        it('deve retornar todos os pedidos', async () => {
            mockRepositorioPedido.findAll.mockResolvedValue([mockPedido]);
            const resultado = await servicoPedido.buscarTodosPedidos();
            expect(mockRepositorioPedido.findAll).toHaveBeenCalledTimes(1);
            expect(resultado).toEqual([mockPedido]);
        });
    });
    describe('atualizarPedido', () => {
        it('deve atualizar um pedido existente', async () => {
            const dadosAtualizados = { status: 'enviado' };
            const pedidoAtualizado = { ...mockPedido, ...dadosAtualizados };
            mockRepositorioPedido.update.mockResolvedValue(pedidoAtualizado);
            const resultado = await servicoPedido.atualizarPedido('1', dadosAtualizados);
            expect(mockRepositorioPedido.update).toHaveBeenCalledWith('1', dadosAtualizados);
            expect(resultado).toEqual(pedidoAtualizado);
        });
    });
    describe('deletarPedido', () => {
        it('deve deletar um pedido existente', async () => {
            mockRepositorioPedido.delete.mockResolvedValue(true);
            const resultado = await servicoPedido.deletarPedido('1');
            expect(mockRepositorioPedido.delete).toHaveBeenCalledWith('1');
            expect(resultado).toBe(true);
        });
    });
});
//# sourceMappingURL=ServicoPedido.test.js.map