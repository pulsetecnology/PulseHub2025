import React from 'react';
import { useRouter } from 'next/router';
import LayoutPrincipal from '../../src/front-end/componentes/layout/LayoutPrincipal';
import DetalhesPedido from '../../src/front-end/componentes/pedidos/DetalhesPedido';

export default function PedidoDetalhes() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return (
      <LayoutPrincipal titulo="Carregando...">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        </div>
      </LayoutPrincipal>
    );
  }

  return (
    <LayoutPrincipal
      titulo="Detalhes do Pedido"
      subtitulo="Visualizar informações completas do pedido"
      botaoVoltar={{
        texto: 'Voltar para Pedidos',
        href: '/pedidos'
      }}
    >
      <DetalhesPedido pedidoId={id} />
    </LayoutPrincipal>
  );
}