import { Fornecedor } from './Fornecedor';

describe('Fornecedor', () => {
  it('deve criar uma instância de Fornecedor', () => {
    const fornecedor = new Fornecedor('Loja Teste', 'Empresa Teste Ltda', '12345678901234', 'contato@lojateste.com');
    expect(fornecedor).toBeInstanceOf(Fornecedor);
  });

  it('deve validar um fornecedor com dados válidos', () => {
    const fornecedor = new Fornecedor('Loja Válida', 'Empresa Válida S.A.', '98765432109876', 'valido@empresa.com');
    expect(fornecedor.validar()).toBe(true);
  });

  it('não deve validar um fornecedor sem nome fantasia', () => {
    const fornecedor = new Fornecedor('', 'Empresa Teste Ltda', '12345678901234', 'contato@lojateste.com');
    expect(fornecedor.validar()).toBe(false);
  });

  it('não deve validar um fornecedor com CNPJ inválido', () => {
    const fornecedor = new Fornecedor('Loja Teste', 'Empresa Teste Ltda', '123', 'contato@lojateste.com');
    expect(fornecedor.validar()).toBe(false);
  });

  it('não deve validar um fornecedor com email inválido', () => {
    const fornecedor = new Fornecedor('Loja Teste', 'Empresa Teste Ltda', '12345678901234', 'emailinvalido');
    expect(fornecedor.validar()).toBe(false);
  });
});
