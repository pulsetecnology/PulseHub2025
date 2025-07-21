"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notificacao = void 0;
const validacao_1 = require("../../compartilhado/utilitarios/validacao");
class Notificacao {
    constructor(destinatarioId, mensagem, tipo, id) {
        this.id = id;
        this.destinatarioId = destinatarioId;
        this.mensagem = mensagem;
        this.dataEnvio = new Date();
        this.lida = false;
        this.tipo = tipo;
    }
    validar() {
        if (!this.destinatarioId || this.destinatarioId.trim() === '') {
            console.error('ID do destinatário é obrigatório.');
            return false;
        }
        if (!this.mensagem || this.mensagem.trim() === '') {
            console.error('Mensagem da notificação é obrigatória.');
            return false;
        }
        if (!this.tipo || this.tipo.trim() === '') {
            console.error('Tipo da notificação é obrigatório.');
            return false;
        }
        return (0, validacao_1.validarDados)(this);
    }
}
exports.Notificacao = Notificacao;
//# sourceMappingURL=Notificacao.js.map