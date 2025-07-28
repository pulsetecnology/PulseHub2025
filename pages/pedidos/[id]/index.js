import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ServicoPedidos from '../../../src/front-end/servicos/ServicoPedidos';
import LayoutPrincipal from '../../../src/front-end/componentes/layout/LayoutPrincipal';

const DetalhesPedido = () => {
  const router = useRouter();
  const { id } = router.query;
  const [pedido, setPedido] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const carregarPedido = async () => {
      if (id) {
        const servicoPedidos = new ServicoPedidos();
        try {
          const pedidoEncontrado = await servicoPedidos.obterPorId(id);
          setPedido(pedidoEncontrado);
        } catch (error) {
          console.error('Erro ao carregar pedido:', error);
        } finally {
          setCarregando(false);
        }
      }
    };
    carregarPedido();
  }, [id]);

  if (carregando) {
    return (
      <LayoutPrincipal titulo="Carregando...">
        <div>Carregando detalhes do pedido...</div>
      </LayoutPrincipal>
    );
  }

  if (!pedido) {
    return (
      <LayoutPrincipal titulo="Pedido não encontrado">
        <div>Pedido não encontrado.</div>
      </LayoutPrincipal>
    );
  }

  const handleExcluir = async () => {
    if (window.confirm('Tem certeza que deseja excluir este pedido?')) {
      try {
        await servicoPedidos.excluir(id);
        router.push('/pedidos');
      } catch (error) {
        console.error('Erro ao excluir pedido:', error);
        alert('Erro ao excluir pedido: ' + error.message);
      }
    }
  };

  const isDeletable = pedido && (pedido.status === 'rascunho' || pedido.status === 'em_aberto');

  const isEditable = pedido && !['aprovado', 'recusado', 'cancelado'].includes(pedido.status);
  const isCancellable = pedido && !['aprovado', 'recusado', 'cancelado'].includes(pedido.status);

  const handleCancelar = async () => {
    if (window.confirm('Tem certeza que deseja cancelar este pedido?')) {
      try {
        await servicoPedidos.atualizarStatus(id, 'cancelado');
        router.reload(); // Recarrega a página para refletir o novo status
      } catch (error) {
        console.error('Erro ao cancelar pedido:', error);
        alert('Erro ao cancelar pedido: ' + error.message);
      }
    }
  };

  return (
    <LayoutPrincipal
      titulo={`Pedido #${pedido.numero}`}
      subtitulo="Detalhes completos do pedido"
      botaoVoltar={{
        texto: 'Voltar para Pedidos',
        href: '/pedidos'
      }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Informações do Pedido</h3>
          <p><strong>ID:</strong> {pedido.id}</p>
          <p><strong>Número:</strong> {pedido.numero}</p>
          <p><strong>Status:</strong> {pedido.status}</p>
          <p><strong>Valor Total:</strong> R$ {pedido.total ? pedido.total.toFixed(2) : '0.00'}</p>
          <p><strong>Data de Criação:</strong> {new Date(pedido.dataCreacao).toLocaleString()}</p>
        </div>

        {pedido.cliente && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Informações do Cliente</h3>
            <p><strong>Cliente:</strong> {pedido.cliente.nomeFantasia || pedido.cliente.razaoSocial}</p>
            {pedido.cliente.nomeFantasia && pedido.cliente.razaoSocial && (
              <p><strong>Razão Social:</strong> {pedido.cliente.razaoSocial}</p>
            )}
            <p><strong>CNPJ:</strong> {pedido.cliente.cnpj}</p>
            <p><strong>Email Comercial:</strong> {pedido.cliente.emailComercial}</p>
            <p><strong>Telefone Comercial:</strong> {pedido.cliente.telefoneComercial}</p>
          </div>
        )}

        {pedido.itens && pedido.itens.length > 0 && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Itens do Pedido</h3>
            <ul>
              {pedido.itens.map((item, index) => (
                <li key={index}>
                  {item.produto?.nome || item.produto} - Quantidade: {item.quantidade} - Preço Unitário: R$ {item.precoUnitario.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        )}

        {pedido.observacoes && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Observações</h3>
            <p>{pedido.observacoes}</p>
          </div>
        )}

        <div className="flex gap-2 mt-4">
          {isEditable && (
            <button
              onClick={() => router.push(`/pedidos/${pedido.id}/editar`)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Editar Pedido
            </button>
          )}
          {isDeletable && (
            <button
              onClick={handleExcluir}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Excluir Pedido
            </button>
          )}
          {isCancellable && (
            <button
              onClick={handleCancelar}
              className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
            >
              Cancelar Pedido
            </button>
          )}
        </div>
      </div>
    </LayoutPrincipal>
  );
};

export default DetalhesPedido;