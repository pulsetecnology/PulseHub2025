"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Notificacao_1 = require("./Notificacao");
describe('Notificacao', () => {
    it('deve criar uma instância de Notificação', () => {
        const notificacao = new Notificacao_1.Notificacao('user123', 'Seu pedido foi enviado.', 'pedido');
        expect(notificacao).toBeInstanceOf(Notificacao_1.Notificacao);
    });
    it('deve validar uma notificação com dados válidos', () => {
        const notificacao = new Notificacao_1.Notificacao('user123', 'Seu pedido foi enviado.', 'pedido');
        expect(notificacao.validar()).toBe(true);
    });
    it('não deve validar uma notificação sem destinatarioId', () => {
        const notificacao = new Notificacao_1.Notificacao('', 'Seu pedido foi enviado.', 'pedido');
        expect(notificacao.validar()).toBe(false);
    });
    it('não deve validar uma notificação sem mensagem', () => {
        const notificacao = new Notificacao_1.Notificacao('user123', '', 'pedido');
        expect(notificacao.validar()).toBe(false);
    });
    it('não deve validar uma notificação sem tipo', () => {
        const notificacao = new Notificacao_1.Notificacao('user123', 'Seu pedido foi enviado.', '');
        expect(notificacao.validar()).toBe(false);
    });
});
//# sourceMappingURL=Notificacao.test.js.map