import { IComissao } from '../../compartilhado/tipos/IComissao';
import { validarDados } from '../../compartilhado/utilitarios/validacao';

export class Comissao implements IComissao {
  id?: string;
  representanteId: string;
  pedidoId: string;
  percentual: number;
  valorCalculado: number;
  dataEfetivacao: Date;

  constructor(representanteId: string, pedidoId: string, percentual: number, valorCalculado: number, dataEfetivacao: Date, id?: string) {
    this.id = id;
    this.representanteId = representanteId;
    this.pedidoId = pedidoId;
    this.percentual = percentual;
    this.valorCalculado = valorCalculado;
    this.dataEfetivacao = dataEfetivacao;
  }

  public validar(): boolean {
    if (!this.representanteId || this.representanteId.trim() === '') {
      console.error('ID do representante é obrigatório.');
      return false;
    }
    if (!this.pedidoId || this.pedidoId.trim() === '') {
      console.error('ID do pedido é obrigatório.');
      return false;
    }
    if (this.percentual <= 0 || this.percentual > 100) {
      console.error('Percentual de comissão deve ser entre 0 e 100.');
      return false;
    }
    if (this.valorCalculado <= 0) {
      console.error('Valor calculado da comissão deve ser maior que zero.');
      return false;
    }
    if (!this.dataEfetivacao) {
      console.error('Data de efetivação é obrigatória.');
      return false;
    }
    return validarDados(this);
  }

  public isEfetiva(): boolean {
    // Exemplo de regra de negócio: comissão é efetiva se a data de efetivação já passou
    return this.dataEfetivacao <= new Date();
  }
}
