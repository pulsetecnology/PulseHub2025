import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { usarCorTema } from '../../utils/coresTema';
import { obterPapelUsuario, PAPEIS } from '../../utils/papelUsuario';
import servicoNotificacoes from '../../servicos/ServicoNotificacoes';
import ServicoPedidos from '../../servicos/ServicoPedidos';
import BotaoCarregando from '../comum/BotaoCarregando';

export default function DetalhesPedido({ pedidoId }) {
  const router = useRouter();
  const { classes } = usarCorTema();
  const [pedido, setPedido] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [carregandoStatus, setCarregandoStatus] = useState(false);
  const [papelUsuario, setPapelUsuario] = useState(null);
  const [erro, setErro] = useState(null);
  const [mounted, setMounted] = useState(false);

  const servicoPedidos = new ServicoPedidos();

  const formatarValor = (valor) => {
    if (!mounted || !valor) return 'R$ 0,00';
    return `R$ ${valor.toFixed(2)}`;
  };

  useEffect(() => {
    setMounted(true);
    setPapelUsuario(obterPapelUsuario());
    carregarPedido();
  }, [pedidoId]);

  const carregarPedido = async () => {
    try {
      setCarregando(true);
      const pedidoData = await servicoPedidos.obterPorId(pedidoId);
      setPedido(pedidoData);
    } catch (error) {
      console.error('Erro ao carregar pedido:', error);
      setErro('Pedido não encontrado');
    } finally {
      setCarregando(false);
    }
  };

  const alterarStatusPedido = async (novoStatus) => {
    setCarregandoStatus(true);
    try {
      await servicoPedidos.atualizarStatus(pedidoId, novoStatus);
      
      // Atualizar o pedido local
      setPedido(prev => ({ ...prev, status: novoStatus }));
      
      // Notificar sobre a mudança de status
      const statusLabels = {
        'aprovado': 'aprovado',
        'recusado': 'recusado',
        'em_analise': 'colocado em análise'
      };
      
      servicoNotificacoes.notificarPedido(
        'Status do Pedido Alterado',
        `Pedido ${pedido.numero} foi ${statusLabels[novoStatus]}`,
        pedido.id
      );
      
    } catch (error) {
      console.error('Erro ao alterar status:', error);
      servicoNotificacoes.notificarErro(
        'Erro',
        'Não foi possível alterar o status do pedido'
      );
    } finally {
      setCarregandoStatus(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'rascunho':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      case 'pendente':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'em_analise':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      case 'aprovado':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'recusado':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'em_producao':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'enviado':
        return `${classes.bgLight} ${classes.textLight} dark:${classes.bgLightDark} dark:${classes.textLightDark}`;
      case 'entregue':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      case 'cancelado':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getStatusLabel = (status) => {
    const labels = {
      'rascunho': 'Rascunho',
      'pendente': 'Pendente',
      'em_analise': 'Em Análise',
      'aprovado': 'Aprovado',
      'recusado': 'Recusado',
      'em_producao': 'Em Produção',
      'enviado': 'Enviado',
      'entregue': 'Entregue',
      'cancelado': 'Cancelado'
    };
    return labels[status] || status;
  };

  if (carregando) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (erro || !pedido) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 dark:text-red-400 mb-4">
          <svg className="mx-auto h-12 w-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <p className="text-lg font-medium">{erro || 'Pedido não encontrado'}</p>
        </div>
        <button
          onClick={() => router.push('/pedidos')}
          className={`px-3 py-2 ${classes.bg} text-white rounded-md hover:opacity-90`}
        >
          Voltar para Pedidos
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header do Pedido */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Pedido {pedido.numero}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Criado em {mounted ? new Date(pedido.dataCreacao).toLocaleDateString('pt-BR') : ''}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(pedido.status)}`}>
              {getStatusLabel(pedido.status)}
            </span>
          </div>
        </div>

        {/* Informações do Cliente */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Informações do Cliente
            </h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Nome:</span> {pedido.cliente?.nomeFantasia || pedido.cliente?.razaoSocial || pedido.cliente?.nome}</p>
              <p><span className="font-medium">Email:</span> {pedido.cliente?.emailComercial || pedido.cliente?.email}</p>
              <p><span className="font-medium">Telefone:</span> {pedido.cliente?.telefoneComercial || pedido.cliente?.telefone}</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Resumo Financeiro
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>{formatarValor(pedido.subtotal)}</span>
              </div>
              {pedido.desconto > 0 && (
                <div className="flex justify-between text-red-600">
                  <span>Desconto:</span>
                  <span>- {formatarValor(pedido.desconto)}</span>
                </div>
              )}
              {pedido.frete > 0 && (
                <div className="flex justify-between">
                  <span>Frete:</span>
                  <span>{formatarValor(pedido.frete)}</span>
                </div>
              )}
              <div className="border-t pt-2 flex justify-between font-medium text-lg">
                <span>Total:</span>
                <span className={classes.text}>{formatarValor(pedido.total)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Observações */}
        {pedido.observacoes && (
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Observações
            </h3>
            <p className="text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
              {pedido.observacoes}
            </p>
          </div>
        )}
      </div>

      {/* Itens do Pedido */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Itens do Pedido
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                  Produto
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                  SKU
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                  Quantidade
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                  Preço Unit.
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {pedido.itens?.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    {item.produto?.nome}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                    {item.produto?.sku}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    {item.quantidade}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    {formatarValor(item.precoUnitario)}
                  </td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                    {formatarValor(item.subtotal)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ações do Pedido */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Ações
        </h3>
        <div className="flex flex-wrap gap-3">
          {/* Botões para Representante */}
          {papelUsuario === PAPEIS.REPRESENTANTE && (
            <>
              {/* Botão Editar - só para pedidos em rascunho */}
              {pedido.status === 'rascunho' && (
                <button
                  onClick={() => router.push(`/pedidos/${pedido.id}/editar`)}
                  className="px-3 py-2 text-sm border border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Editar Pedido
                </button>
              )}
              
              {/* Botão Cancelar - só para pedidos pendentes */}
              {pedido.status === 'pendente' && (
                <BotaoCarregando
                  onClick={() => alterarStatusPedido('cancelado')}
                  carregando={carregandoStatus}
                  className="px-3 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center gap-2"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Cancelar Pedido
                </BotaoCarregando>
              )}
            </>
          )}

          {/* Botões para Fornecedor */}
          {papelUsuario === PAPEIS.FORNECEDOR && (pedido.status === 'pendente' || pedido.status === 'em_analise') && (
            <>
              <BotaoCarregando
                onClick={() => alterarStatusPedido('aprovado')}
                carregando={carregandoStatus}
                className="px-3 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Aprovar Pedido
              </BotaoCarregando>

              {/* Botão "Colocar em Análise" só aparece se status for "pendente" */}
              {pedido.status === 'pendente' && (
                <BotaoCarregando
                  onClick={() => alterarStatusPedido('em_analise')}
                  carregando={carregandoStatus}
                  className="px-3 py-2 text-sm bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors flex items-center gap-2"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Colocar em Análise
                </BotaoCarregando>
              )}

              <BotaoCarregando
                onClick={() => alterarStatusPedido('recusado')}
                carregando={carregandoStatus}
                className="px-3 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center gap-2"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Recusar Pedido
              </BotaoCarregando>
            </>
          )}

          {/* Botão Voltar */}
          <button
            onClick={() => router.push('/pedidos')}
            className="px-3 py-2 text-sm border border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            Voltar para Lista
          </button>
        </div>
      </div>
    </div>
  );
}