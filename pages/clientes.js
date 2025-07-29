import React from 'react';
import LayoutPrincipal from '../src/front-end/componentes/layout/LayoutPrincipal';
import ListaClientes from '../src/front-end/componentes/clientes/ListaClientes';

export default function PaginaClientes() {
  return (
    <LayoutPrincipal 
      titulo="Gerenciar Clientes" 
      subtitulo="Gerencie sua base de clientes"
    >
      <ListaClientes />
    </LayoutPrincipal>
  );
}