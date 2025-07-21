import { IFornecedor } from '../../compartilhado/tipos/IFornecedor';
import { validarDados } from '../../compartilhado/utilitarios/validacao';

export class Fornecedor implements IFornecedor {
  id?: string;
  nomeFantasia: string;
  razaoSocial: string;
  cnpj: string;
  email: string;

  constructor(nomeFantasia: string, razaoSocial: string, cnpj: string, email: string, id?: string) {
    this.id = id;
    this.nomeFantasia = nomeFantasia;
    this.razaoSocial = razaoSocial;
    this.cnpj = cnpj;
    this.email = email;
  }

  public validar(): boolean {
    if (!this.nomeFantasia || this.nomeFantasia.trim() === '') {
      console.error('Nome fantasia do fornecedor é obrigatório.');
      return false;
    }
    if (!this.cnpj || this.cnpj.length !== 14) { // Exemplo de validação simples para CNPJ
      console.error('CNPJ do fornecedor inválido.');
      return false;
    }
    if (!this.email || !this.email.includes('@')) {
      console.error('Email do fornecedor é inválido.');
      return false;
    }
    return validarDados(this);
  }
}
