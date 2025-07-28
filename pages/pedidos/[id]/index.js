import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ServicoPedidos from '../../../src/front-end/servicos/ServicoPedidos';
import LayoutPrincipal from '../../../src/front-end/componentes/layout/LayoutPrincipal';
import DetalhesPedido from '../../../src/front-end/componentes/pedidos/DetalhesPedido';

const PaginaDetalhesPedido = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <LayoutPrincipal>
      <DetalhesPedido pedidoId={id} />
    </LayoutPrincipal>
  );
};

export default PaginaDetalhesPedido;