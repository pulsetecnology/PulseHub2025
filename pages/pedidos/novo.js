import React from 'react';
import LayoutPrincipal from '../../src/front-end/componentes/layout/LayoutPrincipal';
import CriarPedido from '../../src/front-end/componentes/pedidos/CriarPedido';

export default function NovoPedido() {
  return (
    <LayoutPrincipal
      titulo="Novo Pedido"
      subtitulo="Criar um novo pedido para cliente"
      botaoVoltar={{
        texto: 'Voltar para Pedidos',
        href: '/pedidos'
      }}
    >
      <CriarPedido />
    </LayoutPrincipal>
  );
}