import React from 'react';
import LayoutPrincipal from '../src/front-end/componentes/layout/LayoutPrincipal';
import CatalogoProdutos from '../src/front-end/componentes/catalogo/CatalogoProdutos';

export default function PaginaCatalogo() {
  return (
    <LayoutPrincipal 
      titulo="Catálogo de Produtos" 
      subtitulo="Explore nosso catálogo completo de produtos"
    >
      <CatalogoProdutos />
    </LayoutPrincipal>
  );
}