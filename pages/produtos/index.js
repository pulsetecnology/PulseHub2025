import React from 'react';
import LayoutPrincipal from '../../src/front-end/componentes/layout/LayoutPrincipal';
import ListaProdutos from '../../src/front-end/componentes/produtos/ListaProdutos';

export default function ProdutosPage() {
  return (
    <LayoutPrincipal 
      titulo="Produtos" 
      subtitulo="Gerencie seu catálogo de produtos"
    >
      <ListaProdutos />
    </LayoutPrincipal>
  );
}