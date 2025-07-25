import React from 'react';
import { useRouter } from 'next/router';
import LayoutPrincipal from '../../src/front-end/componentes/layout/LayoutPrincipal';
import DetalheProduto from '../../src/front-end/componentes/catalogo/DetalheProduto';

export default function PaginaDetalheProduto() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <LayoutPrincipal titulo="Detalhes do Produto">
      <DetalheProduto produtoId={id} />
    </LayoutPrincipal>
  );
}