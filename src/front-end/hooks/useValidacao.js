import { useState, useCallback } from 'react';

export const useValidacao = (validacoes = {}) => {
  const [erros, setErros] = useState({});
  const [tocados, setTocados] = useState({});

  const validarCampo = useCallback((campo, valor) => {
    const validacao = validacoes[campo];
    if (!validacao) return null;

    if (validacao.obrigatorio && (!valor || valor.toString().trim() === '')) {
      return 'Este campo é obrigatório';
    }

    if (validacao.minimo && valor < validacao.minimo) {
      return `Valor mínimo: ${validacao.minimo}`;
    }

    if (validacao.maximo && valor > validacao.maximo) {
      return `Valor máximo: ${validacao.maximo}`;
    }

    if (validacao.regex && !validacao.regex.test(valor)) {
      return validacao.mensagem || 'Formato inválido';
    }

    if (validacao.customizada) {
      return validacao.customizada(valor);
    }

    return null;
  }, [validacoes]);

  const validarTodos = useCallback((dados) => {
    const novosErros = {};
    let temErros = false;

    Object.keys(validacoes).forEach(campo => {
      const erro = validarCampo(campo, dados[campo]);
      if (erro) {
        novosErros[campo] = erro;
        temErros = true;
      }
    });

    setErros(novosErros);
    setTocados(Object.keys(validacoes).reduce((acc, campo) => {
      acc[campo] = true;
      return acc;
    }, {}));

    return !temErros;
  }, [validacoes, validarCampo]);

  const validarCampoEAtualizar = useCallback((campo, valor) => {
    const erro = validarCampo(campo, valor);
    
    setErros(prev => ({
      ...prev,
      [campo]: erro
    }));

    setTocados(prev => ({
      ...prev,
      [campo]: true
    }));

    return !erro;
  }, [validarCampo]);

  const marcarComoTocado = useCallback((campo) => {
    setTocados(prev => ({
      ...prev,
      [campo]: true
    }));
  }, []);

  const limparErros = useCallback(() => {
    setErros({});
    setTocados({});
  }, []);

  const temErros = Object.keys(erros).some(campo => erros[campo] && tocados[campo]);

  return {
    erros,
    tocados,
    validarCampo: validarCampoEAtualizar,
    validarTodos,
    marcarComoTocado,
    limparErros,
    temErros
  };
};

// Validações pré-definidas para pedidos
export const validacoesPedido = {
  clienteId: {
    obrigatorio: true
  },
  itens: {
    customizada: (itens) => {
      if (!itens || itens.length === 0) {
        return 'O pedido deve ter pelo menos um item';
      }
      
      for (let i = 0; i < itens.length; i++) {
        const item = itens[i];
        if (!item.quantidade || item.quantidade <= 0) {
          return `Item ${i + 1}: Quantidade deve ser maior que zero`;
        }
        if (!item.preco || item.preco <= 0) {
          return `Item ${i + 1}: Preço deve ser maior que zero`;
        }
      }
      
      return null;
    }
  },
  desconto: {
    minimo: 0,
    maximo: 100
  },
  frete: {
    minimo: 0
  }
};

export const validacoesItem = {
  quantidade: {
    obrigatorio: true,
    minimo: 1,
    customizada: (valor) => {
      if (!Number.isInteger(Number(valor))) {
        return 'Quantidade deve ser um número inteiro';
      }
      return null;
    }
  },
  preco: {
    obrigatorio: true,
    minimo: 0.01
  }
};