import React from 'react';
import LayoutPrincipal from '../../src/front-end/componentes/layout/LayoutPrincipal';
import ListaClientes from '../../src/front-end/componentes/clientes/ListaClientes';

export default function ClientesPage() {
  return (
    <LayoutPrincipal 
      titulo="Clientes" 
      subtitulo="Gerencie sua carteira de clientes"
    >
      <ListaClientes />
    </LayoutPrincipal>
  );
}