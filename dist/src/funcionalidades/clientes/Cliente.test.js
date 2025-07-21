"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("./Cliente");
describe('Cliente', () => {
    it('deve criar uma instância de Cliente', () => {
        const cliente = new Cliente_1.Cliente('Ana Paula', 'ana@example.com', '123.456.789-00');
        expect(cliente).toBeInstanceOf(Cliente_1.Cliente);
    });
    it('deve validar um cliente com dados válidos', () => {
        const cliente = new Cliente_1.Cliente('Carlos Eduardo', 'carlos@example.com', '987.654.321-99');
        expect(cliente.validar()).toBe(true);
    });
    it('não deve validar um cliente sem nome', () => {
        const cliente = new Cliente_1.Cliente('', 'ana@example.com', '123.456.789-00');
        expect(cliente.validar()).toBe(false);
    });
    it('não deve validar um cliente com email inválido', () => {
        const cliente = new Cliente_1.Cliente('Ana Paula', 'emailinvalido', '123.456.789-00');
        expect(cliente.validar()).toBe(false);
    });
    it('não deve validar um cliente sem CPF/CNPJ', () => {
        const cliente = new Cliente_1.Cliente('Ana Paula', 'ana@example.com', '');
        expect(cliente.validar()).toBe(false);
    });
});
//# sourceMappingURL=Cliente.test.js.map