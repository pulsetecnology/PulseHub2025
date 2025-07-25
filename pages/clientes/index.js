import React, { useState, useEffect } from 'react';
import LayoutPrincipal from '../../src/front-end/componentes/layout/LayoutPrincipal';
import ListaClientes from '../../src/front-end/componentes/clientes/ListaClientes';

export default function PaginaClientes() {
  return (
    <LayoutPrincipal 
      titulo="Meus Clientes" 
      subtitulo="Gerencie seu portfólio de clientes e relacionamentos"
    >
      <ListaClientes />
    </LayoutPrincipal>
  );
}