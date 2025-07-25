import React from 'react';
import LayoutPrincipal from '../src/front-end/componentes/layout/LayoutPrincipal';
import CatalogoProdutos from '../src/front-end/componentes/catalogo/CatalogoProdutos';

export default function PaginaCatalogo() {
  return (
    <LayoutPrincipal 
      titulo="Catálogo de Produtos" 
      subtitulo="Explore nossa coleção completa de produtos"
    >
      <CatalogoProdutos />
    </LayoutPrincipal>
  );
}