import React from 'react';
import LayoutPrincipal from '../../src/front-end/componentes/layout/LayoutPrincipal';
import FormularioProduto from '../../src/front-end/componentes/produtos/FormularioProduto';

export default function NovoProduto() {
  return (
    <LayoutPrincipal 
      titulo="Novo Produto" 
      subtitulo="Adicione um novo produto ao seu catálogo"
    >
      <FormularioProduto />
    </LayoutPrincipal>
  );
}