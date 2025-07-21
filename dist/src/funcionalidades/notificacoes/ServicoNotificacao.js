"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicoNotificacao = void 0;
const RepositorioNotificacaoPrisma_1 = require("@src/infraestrutura/banco-de-dados/RepositorioNotificacaoPrisma");
class ServicoNotificacao {
    constructor() {
        this.repositorioNotificacao = new RepositorioNotificacaoPrisma_1.RepositorioNotificacaoPrisma();
    }
    async enviarNotificacao(notificacao) {
        // Lógica de negócio para enviar notificação (ex: integração com serviço de e-mail/SMS)
        return this.repositorioNotificacao.create(notificacao);
    }
    async buscarNotificacaoPorId(id) {
        return this.repositorioNotificacao.findById(id);
    }
    async buscarNotificacoesPorDestinatario(destinatarioId) {
        // Este método precisaria ser implementado no RepositorioNotificacaoPrisma
        // Por enquanto, retorna todas as notificações
        return this.repositorioNotificacao.findAll();
    }
    async marcarComoLida(id) {
        return this.repositorioNotificacao.update(id, { lida: true });
    }
}
exports.ServicoNotificacao = ServicoNotificacao;
//# sourceMappingURL=ServicoNotificacao.js.map