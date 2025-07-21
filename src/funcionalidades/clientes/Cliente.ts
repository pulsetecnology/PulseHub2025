import { ICliente } from '@src/compartilhado/tipos/ICliente';
import { validarDados } from '../../compartilhado/utilitarios/validacao';

export class Cliente implements ICliente {
  id?: string;
  nome: string;
  email: string;
  cpfCnpj: string;

  constructor(nome: string, email: string, cpfCnpj: string, id?: string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.cpfCnpj = cpfCnpj;
  }

  public validar(): boolean {
    if (!this.nome || this.nome.trim() === '') {
      console.error('Nome do cliente é obrigatório.');
      return false;
    }
    if (!this.email || !this.email.includes('@')) {
      console.error('Email do cliente é inválido.');
      return false;
    }
    // Validação simples para CPF/CNPJ (apenas verifica se não está vazio)
    if (!this.cpfCnpj || this.cpfCnpj.trim() === '') {
      console.error('CPF/CNPJ do cliente é obrigatório.');
      return false;
    }
    return validarDados(this);
  }
}
