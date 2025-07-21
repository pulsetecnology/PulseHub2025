"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Fornecedor_1 = require("./Fornecedor");
describe('Fornecedor', () => {
    it('deve criar uma instância de Fornecedor', () => {
        const fornecedor = new Fornecedor_1.Fornecedor('Loja Teste', 'Empresa Teste Ltda', '12345678901234', 'contato@lojateste.com');
        expect(fornecedor).toBeInstanceOf(Fornecedor_1.Fornecedor);
    });
    it('deve validar um fornecedor com dados válidos', () => {
        const fornecedor = new Fornecedor_1.Fornecedor('Loja Válida', 'Empresa Válida S.A.', '98765432109876', 'valido@empresa.com');
        expect(fornecedor.validar()).toBe(true);
    });
    it('não deve validar um fornecedor sem nome fantasia', () => {
        const fornecedor = new Fornecedor_1.Fornecedor('', 'Empresa Teste Ltda', '12345678901234', 'contato@lojateste.com');
        expect(fornecedor.validar()).toBe(false);
    });
    it('não deve validar um fornecedor com CNPJ inválido', () => {
        const fornecedor = new Fornecedor_1.Fornecedor('Loja Teste', 'Empresa Teste Ltda', '123', 'contato@lojateste.com');
        expect(fornecedor.validar()).toBe(false);
    });
    it('não deve validar um fornecedor com email inválido', () => {
        const fornecedor = new Fornecedor_1.Fornecedor('Loja Teste', 'Empresa Teste Ltda', '12345678901234', 'emailinvalido');
        expect(fornecedor.validar()).toBe(false);
    });
});
//# sourceMappingURL=Fornecedor.test.js.map