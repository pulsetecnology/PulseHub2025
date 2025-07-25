import React from 'react';
import LayoutPrincipal from '../../src/front-end/componentes/layout/LayoutPrincipal';
import ListaPedidos from '../../src/front-end/componentes/pedidos/ListaPedidos';

export default function PedidosPage() {
  return (
    <LayoutPrincipal 
      titulo="Pedidos" 
      subtitulo="Gerencie todos os pedidos dos seus clientes"
    >
      <ListaPedidos />
    </LayoutPrincipal>
  );
}