import React from 'react';
import LayoutPrincipal from '../../src/front-end/componentes/layout/LayoutPrincipal';
import FormularioCliente from '../../src/front-end/componentes/clientes/FormularioCliente';

export default function NovoClientePage() {
  return (
    <LayoutPrincipal
      titulo="Novo Cliente"
      subtitulo="Cadastre um novo cliente para começar a vender"
    >
      <FormularioCliente />
    </LayoutPrincipal>
  );
}
