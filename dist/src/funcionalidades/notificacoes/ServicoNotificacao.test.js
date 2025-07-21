"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServicoNotificacao_1 = require("./ServicoNotificacao");
const RepositorioNotificacaoPrisma_1 = require("@src/infraestrutura/banco-de-dados/RepositorioNotificacaoPrisma");
// Mock do RepositorioNotificacaoPrisma
jest.mock('../../infraestrutura/banco-de-dados/RepositorioNotificacaoPrisma');
describe('ServicoNotificacao', () => {
    let servicoNotificacao;
    let mockRepositorioNotificacao;
    beforeEach(() => {
        servicoNotificacao = new ServicoNotificacao_1.ServicoNotificacao();
        mockRepositorioNotificacao = new RepositorioNotificacaoPrisma_1.RepositorioNotificacaoPrisma();
        jest.clearAllMocks();
    });
    const mockNotificacao = {
        id: '1',
        destinatarioId: 'user1',
        mensagem: 'Teste de notificação',
        dataEnvio: new Date(),
        lida: false,
        tipo: 'sistema',
    };
    describe('enviarNotificacao', () => {
        it('deve enviar uma nova notificação', async () => {
            mockRepositorioNotificacao.create.mockResolvedValue(mockNotificacao);
            const resultado = await servicoNotificacao.enviarNotificacao(mockNotificacao);
            expect(mockRepositorioNotificacao.create).toHaveBeenCalledWith(mockNotificacao);
            expect(resultado).toEqual(mockNotificacao);
        });
    });
    describe('buscarNotificacaoPorId', () => {
        it('deve retornar uma notificação pelo ID', async () => {
            mockRepositorioNotificacao.findById.mockResolvedValue(mockNotificacao);
            const resultado = await servicoNotificacao.buscarNotificacaoPorId('1');
            expect(mockRepositorioNotificacao.findById).toHaveBeenCalledWith('1');
            expect(resultado).toEqual(mockNotificacao);
        });
    });
    describe('buscarNotificacoesPorDestinatario', () => {
        it('deve retornar todas as notificações para um destinatário (mocked findAll)', async () => {
            mockRepositorioNotificacao.findAll.mockResolvedValue([mockNotificacao]);
            const resultado = await servicoNotificacao.buscarNotificacoesPorDestinatario('user1');
            expect(mockRepositorioNotificacao.findAll).toHaveBeenCalledTimes(1);
            expect(resultado).toEqual([mockNotificacao]);
        });
    });
    describe('marcarComoLida', () => {
        it('deve marcar uma notificação como lida', async () => {
            const notificacaoLida = { ...mockNotificacao, lida: true };
            mockRepositorioNotificacao.update.mockResolvedValue(notificacaoLida);
            const resultado = await servicoNotificacao.marcarComoLida('1');
            expect(mockRepositorioNotificacao.update).toHaveBeenCalledWith('1', { lida: true });
            expect(resultado).toEqual(notificacaoLida);
        });
    });
});
//# sourceMappingURL=ServicoNotificacao.test.js.map