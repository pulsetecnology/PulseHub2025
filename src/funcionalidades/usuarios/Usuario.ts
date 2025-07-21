import { IUsuario } from '@src/compartilhado/tipos/IUsuario';
import { validarDados } from '../../compartilhado/utilitarios/validacao';

export class Usuario implements IUsuario {
  id?: string;
  nome: string;
  email: string;
  senha: string;

  constructor(nome: string, email: string, senha: string, id?: string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  public validar(): boolean {
    // Exemplo de validação básica
    if (!this.nome || this.nome.trim() === '') {
      console.error('Nome do usuário é obrigatório.');
      return false;
    }
    if (!this.email || !this.email.includes('@')) {
      console.error('Email do usuário é inválido.');
      return false;
    }
    if (!this.senha || this.senha.length < 6) {
      console.error('Senha do usuário deve ter pelo menos 6 caracteres.');
      return false;
    }
    // Usar a função de validação genérica se necessário
    return validarDados(this);
  }
}
