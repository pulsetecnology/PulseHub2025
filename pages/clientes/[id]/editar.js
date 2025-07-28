import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LayoutPrincipal from '../../../src/front-end/componentes/layout/LayoutPrincipal';
import FormularioCliente from '../../../src/front-end/componentes/clientes/FormularioCliente';
import ServicoClientes from '../../../src/front-end/servicos/ServicoClientes';

export default function EditarClientePage() {
  const router = useRouter();
  const { id } = router.query;
  const [cliente, setCliente] = useState(null);

  useEffect(() => {
    if (id) {
      const servicoClientes = new ServicoClientes();
      const clienteEncontrado = servicoClientes.obterPorId(id);
      setCliente(clienteEncontrado);
    }
  }, [id]);

  if (!cliente) {
    return <div>Carregando...</div>;
  }

  return (
    <LayoutPrincipal
      titulo="Editar Cliente"
      subtitulo="Atualize os dados do cliente"
    >
      <FormularioCliente clienteExistente={cliente} />
    </LayoutPrincipal>
  );
}
