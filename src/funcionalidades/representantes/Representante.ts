import { IRepresentante } from '@src/compartilhado/tipos/IRepresentante';
import { validarDados } from '../../compartilhado/utilitarios/validacao';

export class Representante implements IRepresentante {
  id?: string;
  nome: string;
  email: string;
  telefone: string;

  constructor(nome: string, email: string, telefone: string, id?: string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
  }

  public validar(): boolean {
    if (!this.nome || this.nome.trim() === '') {
      console.error('Nome do representante é obrigatório.');
      return false;
    }
    if (!this.email || !this.email.includes('@')) {
      console.error('Email do representante é inválido.');
      return false;
    }
    if (!this.telefone || this.telefone.length < 8) { // Exemplo de validação simples para telefone
      console.error('Telefone do representante inválido.');
      return false;
    }
    return validarDados(this);
  }
}
