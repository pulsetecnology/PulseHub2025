import React, { useState } from 'react';
import LayoutPrincipal from '../src/front-end/componentes/layout/LayoutPrincipal';
import Carrinho from '../src/front-end/componentes/carrinho/Carrinho';

/**
 * Página do carrinho de compras
 * Permite visualizar e gerenciar itens do carrinho
 */
export default function PaginaCarrinho() {
  return (
    <LayoutPrincipal 
      titulo="Carrinho de Compras" 
      subtitulo="Gerencie seus produtos e gere pedidos"
    >
      <div className="max-w-6xl mx-auto">
        <Carrinho />
      </div>
    </LayoutPrincipal>
  );
}