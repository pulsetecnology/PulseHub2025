import { Comissao } from './Comissao';

describe('Comissao', () => {
  it('deve criar uma instância de Comissão', () => {
    const comissao = new Comissao('rep123', 'ped456', 10, 100.00, new Date());
    expect(comissao).toBeInstanceOf(Comissao);
  });

  it('deve validar uma comissão com dados válidos', () => {
    const comissao = new Comissao('rep123', 'ped456', 10, 100.00, new Date());
    expect(comissao.validar()).toBe(true);
  });

  it('não deve validar uma comissão sem representanteId', () => {
    const comissao = new Comissao('', 'ped456', 10, 100.00, new Date());
    expect(comissao.validar()).toBe(false);
  });

  it('não deve validar uma comissão sem pedidoId', () => {
    const comissao = new Comissao('rep123', '', 10, 100.00, new Date());
    expect(comissao.validar()).toBe(false);
  });

  it('não deve validar uma comissão com percentual inválido', () => {
    const comissao = new Comissao('rep123', 'ped456', 0, 100.00, new Date());
    expect(comissao.validar()).toBe(false);

    const comissaoMaior = new Comissao('rep123', 'ped456', 101, 100.00, new Date());
    expect(comissaoMaior.validar()).toBe(false);
  });

  it('não deve validar uma comissão com valor calculado zero ou negativo', () => {
    const comissao = new Comissao('rep123', 'ped456', 10, 0, new Date());
    expect(comissao.validar()).toBe(false);

    const comissaoNegativa = new Comissao('rep123', 'ped456', 10, -10, new Date());
    expect(comissaoNegativa.validar()).toBe(false);
  });

  it('não deve validar uma comissão sem data de efetivação', () => {
    const comissao = new Comissao('rep123', 'ped456', 10, 100.00, null as any);
    expect(comissao.validar()).toBe(false);
  });

  it('deve retornar true para comissão efetiva se a data já passou', () => {
    const comissao = new Comissao('rep123', 'ped456', 10, 100.00, new Date(2023, 1, 1)); // Data no passado
    expect(comissao.isEfetiva()).toBe(true);
  });

  it('deve retornar false para comissão não efetiva se a data ainda não chegou', () => {
    const comissao = new Comissao('rep123', 'ped456', 10, 100.00, new Date(2099, 1, 1)); // Data no futuro
    expect(comissao.isEfetiva()).toBe(false);
  });
});
