import React, { useState, useEffect } from 'react';
import { usarCorTema } from '../../utils/coresTema';
import ServicoCarrinho from '../../servicos/ServicoCarrinho';

/**
 * Ícone do carrinho com contador de itens
 * Exibe no header/navbar para acesso rápido
 */
// Instância singleton do serviço de carrinho
const servicoCarrinho = new ServicoCarrinho();

export default function IconeCarrinho({ onClick }) {
  const { classes } = usarCorTema();
  const [resumoCarrinho, setResumoCarrinho] = useState({ totalItens: 0, subtotal: 0, quantidadeProdutos: 0 });

  useEffect(() => {
    // Carregar resumo inicial
    atualizarResumo();

    // Adicionar listener para mudanças no carrinho
    const handleCarrinhoChange = (novoResumo) => {
      setResumoCarrinho(novoResumo);
    };

    servicoCarrinho.adicionarListener(handleCarrinhoChange);

    // Cleanup
    return () => {
      servicoCarrinho.removerListener(handleCarrinhoChange);
    };
  }, []);

  const atualizarResumo = () => {
    const resumo = servicoCarrinho.obterResumo();
    setResumoCarrinho(resumo);
  };

  const formatarMoeda = (valor) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  };

  return (
    <button
      onClick={onClick}
      className="icone-carrinho relative p-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
      title={`Carrinho - ${resumoCarrinho.quantidadeProdutos} produtos (${formatarMoeda(resumoCarrinho.subtotal)})`}
    >
      {/* Ícone do carrinho */}
      <svg 
        className="h-6 w-6" 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      </svg>
      
      {/* Badge com quantidade */}
      {resumoCarrinho.quantidadeProdutos > 0 && (
        <span className={`absolute -top-1 -right-1 ${classes.bg} text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium`}>
          {resumoCarrinho.quantidadeProdutos > 99 ? '99+' : resumoCarrinho.quantidadeProdutos}
        </span>
      )}
    </button>
  );
}