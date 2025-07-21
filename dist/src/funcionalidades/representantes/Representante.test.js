"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Representante_1 = require("./Representante");
describe('Representante', () => {
    it('deve criar uma instância de Representante', () => {
        const representante = new Representante_1.Representante('João Silva', 'joao@example.com', '11987654321');
        expect(representante).toBeInstanceOf(Representante_1.Representante);
    });
    it('deve validar um representante com dados válidos', () => {
        const representante = new Representante_1.Representante('Maria Souza', 'maria@example.com', '21998765432');
        expect(representante.validar()).toBe(true);
    });
    it('não deve validar um representante sem nome', () => {
        const representante = new Representante_1.Representante('', 'joao@example.com', '11987654321');
        expect(representante.validar()).toBe(false);
    });
    it('não deve validar um representante com email inválido', () => {
        const representante = new Representante_1.Representante('João Silva', 'emailinvalido', '11987654321');
        expect(representante.validar()).toBe(false);
    });
    it('não deve validar um representante com telefone muito curto', () => {
        const representante = new Representante_1.Representante('João Silva', 'joao@example.com', '123');
        expect(representante.validar()).toBe(false);
    });
});
//# sourceMappingURL=Representante.test.js.map