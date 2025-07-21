"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comissao = void 0;
const validacao_1 = require("../../compartilhado/utilitarios/validacao");
class Comissao {
    constructor(representanteId, pedidoId, percentual, valorCalculado, dataEfetivacao, id) {
        this.id = id;
        this.representanteId = representanteId;
        this.pedidoId = pedidoId;
        this.percentual = percentual;
        this.valorCalculado = valorCalculado;
        this.dataEfetivacao = dataEfetivacao;
    }
    validar() {
        if (!this.representanteId || this.representanteId.trim() === '') {
            console.error('ID do representante é obrigatório.');
            return false;
        }
        if (!this.pedidoId || this.pedidoId.trim() === '') {
            console.error('ID do pedido é obrigatório.');
            return false;
        }
        if (this.percentual <= 0 || this.percentual > 100) {
            console.error('Percentual de comissão deve ser entre 0 e 100.');
            return false;
        }
        if (this.valorCalculado <= 0) {
            console.error('Valor calculado da comissão deve ser maior que zero.');
            return false;
        }
        if (!this.dataEfetivacao) {
            console.error('Data de efetivação é obrigatória.');
            return false;
        }
        return (0, validacao_1.validarDados)(this);
    }
    isEfetiva() {
        // Exemplo de regra de negócio: comissão é efetiva se a data de efetivação já passou
        return this.dataEfetivacao <= new Date();
    }
}
exports.Comissao = Comissao;
//# sourceMappingURL=Comissao.js.map