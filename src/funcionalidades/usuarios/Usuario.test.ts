import { Usuario } from './Usuario';

describe('Usuario', () => {
  it('deve criar uma instância de Usuário', () => {
    const usuario = new Usuario('Teste', 'teste@example.com', 'senha123');
    expect(usuario).toBeInstanceOf(Usuario);
  });

  it('deve validar um usuário com dados válidos', () => {
    const usuario = new Usuario('Nome Válido', 'valido@example.com', 'senhaSegura123');
    expect(usuario.validar()).toBe(true);
  });

  it('não deve validar um usuário sem nome', () => {
    const usuario = new Usuario('', 'teste@example.com', 'senha123');
    expect(usuario.validar()).toBe(false);
  });

  it('não deve validar um usuário com email inválido', () => {
    const usuario = new Usuario('Teste', 'emailinvalido', 'senha123');
    expect(usuario.validar()).toBe(false);
  });

  it('não deve validar um usuário com senha muito curta', () => {
    const usuario = new Usuario('Teste', 'teste@example.com', '123');
    expect(usuario.validar()).toBe(false);
  });
});
