import React from 'react';
import LayoutPrincipal from '../src/front-end/componentes/layout/LayoutPrincipal';
import GestorCategorias from '../src/front-end/componentes/categorias/GestorCategorias';

export default function PaginaCategorias() {
  return (
    <LayoutPrincipal 
      titulo="Gestão de Categorias" 
      subtitulo="Gerencie as categorias de produtos"
    >
      <GestorCategorias />
    </LayoutPrincipal>
  );
}