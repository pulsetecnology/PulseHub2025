import { Representante } from './Representante';

describe('Representante', () => {
  it('deve criar uma instância de Representante', () => {
    const representante = new Representante('João Silva', 'joao@example.com', '11987654321');
    expect(representante).toBeInstanceOf(Representante);
  });

  it('deve validar um representante com dados válidos', () => {
    const representante = new Representante('Maria Souza', 'maria@example.com', '21998765432');
    expect(representante.validar()).toBe(true);
  });

  it('não deve validar um representante sem nome', () => {
    const representante = new Representante('', 'joao@example.com', '11987654321');
    expect(representante.validar()).toBe(false);
  });

  it('não deve validar um representante com email inválido', () => {
    const representante = new Representante('João Silva', 'emailinvalido', '11987654321');
    expect(representante.validar()).toBe(false);
  });

  it('não deve validar um representante com telefone muito curto', () => {
    const representante = new Representante('João Silva', 'joao@example.com', '123');
    expect(representante.validar()).toBe(false);
  });
});
