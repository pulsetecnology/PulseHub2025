import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { usarCorTema } from '../../utils/coresTema';
import { obterPapelUsuario, PAPEIS } from '../../utils/papelUsuario';
import servicoNotificacoes from '../../servicos/ServicoNotificacoes';
import ServicoPedidos from '../../servicos/ServicoPedidos';
import BotaoCarregando from '../comum/BotaoCarregando';
import ModalConfirmacao from '../comum/ModalConfirmacao';
import TimelinePedido from './TimelinePedido';
import HeaderPedido from './HeaderPedido';
import InformacoesCliente from './InformacoesCliente';
import GerenciadorItens from './GerenciadorItens';
import ResumoFinanceiro from './ResumoFinanceiro';
import HistoricoStatusPedido from './HistoricoStatusPedido';

export default function DetalhesPedido({ pedidoId }) {
  const router = useRouter();
  const { classes } = usarCorTema();
  const [pedido, setPedido] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [carregandoStatus, setCarregandoStatus] = useState(false);
  const [papelUsuario, setPapelUsuario] = useState(null);
  const [erro, setErro] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [modalCancelamento, setModalCancelamento] = useState(false);
  const [mostrarHistorico, setMostrarHistorico] = useState(false);

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

  const cancelarPedido = async () => {
    console.log('Função cancelarPedido chamada');
    setCarregandoStatus(true);
    try {
      await servicoPedidos.atualizarStatus(pedidoId, 'cancelado');
      
      // Atualizar o pedido local
      setPedido(prev => ({ ...prev, status: 'cancelado' }));
      
      // Notificar sobre o cancelamento
      servicoNotificacoes.notificarPedido(
        'Pedido Cancelado',
        `Pedido ${pedido.numero} foi cancelado com sucesso`,
        pedido.id
      );
      
      // Simular notificação ao fornecedor
      console.log('Notificação enviada ao fornecedor sobre cancelamento do pedido:', pedido.id);
      
      setModalCancelamento(false);
      
    } catch (error) {
      console.error('Erro ao cancelar pedido:', error);
      servicoNotificacoes.notificarErro(
        'Erro',
        'Não foi possível cancelar o pedido'
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header do Pedido */}
        <HeaderPedido 
          pedido={pedido} 
          onVoltar={() => router.push('/pedidos')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Coluna Principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Informações do Cliente */}
            <InformacoesCliente 
              cliente={pedido.cliente}
              readonly={true}
            />

            {/* Itens do Pedido */}
            <GerenciadorItens
              itens={pedido.itens || []}
              produtos={[]}
              onItensChange={() => {}}
              readonly={true}
            />

            {/* Resumo Financeiro */}
            <ResumoFinanceiro
              subtotal={pedido.subtotal || 0}
              desconto={pedido.desconto || 0}
              frete={pedido.frete || 0}
              readonly={true}
            />

            {/* Observações */}
            {pedido.observacoes && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <svg className="h-5 w-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  Observações
                </h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                    {pedido.observacoes}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Coluna Lateral */}
          <div className="space-y-6">
            {/* Timeline do Pedido */}
            <TimelinePedido
              status={pedido.status}
              dataCreacao={pedido.dataCreacao}
              dataFinalizacao={pedido.dataFinalizacao}
              dataAtualizacao={pedido.dataAtualizacao}
            />

            {/* Ações do Pedido */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <svg className="h-5 w-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
                Ações
              </h3>

              <div className="space-y-3">
                {/* Botões para Representante */}
                {papelUsuario === PAPEIS.REPRESENTANTE && (
                  <>
                    {pedido.status === 'rascunho' && (
                      <button
                        onClick={() => router.push(`/pedidos/${pedido.id}/editar`)}
                        className="w-full px-4 py-2 text-sm border border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Editar Pedido
                      </button>
                    )}
                    
                    {/* Botão Cancelar - só para pedidos pendentes */}
                    {pedido.status === 'pendente' && (
                      <button
                        onClick={() => {
                          console.log('Botão cancelar clicado');
                          setModalCancelamento(true);
                        }}
                        className="w-full px-4 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Cancelar Pedido
                      </button>
                    )}
                  </>
                )}

                {/* Botões para Fornecedor */}
                {papelUsuario === PAPEIS.FORNECEDOR && (pedido.status === 'pendente' || pedido.status === 'em_analise') && (
                  <>
                    <BotaoCarregando
                      onClick={() => alterarStatusPedido('aprovado')}
                      carregando={carregandoStatus}
                      className="w-full px-4 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
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
                        className="w-full px-4 py-2 text-sm bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors flex items-center justify-center gap-2"
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
                      className="w-full px-4 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Recusar Pedido
                    </BotaoCarregando>
                  </>
                )}

                {/* Botão Histórico de Status */}
                <button
                  onClick={() => setMostrarHistorico(true)}
                  className="w-full px-4 py-2 text-sm border border-blue-300 text-blue-700 dark:text-blue-300 dark:border-blue-600 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Ver Histórico de Status
                </button>

                {/* Botão Voltar */}
                <button
                  onClick={() => router.push('/pedidos')}
                  className="w-full px-4 py-2 text-sm border border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Voltar para Lista
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Modal de Confirmação de Cancelamento */}
      <ModalConfirmacao
        aberto={modalCancelamento}
        onFechar={() => {
          console.log('Modal fechado');
          setModalCancelamento(false);
        }}
        onConfirmar={() => {
          console.log('Modal confirmado');
          cancelarPedido();
        }}
        titulo="Cancelar Pedido"
        mensagem={`Tem certeza que deseja cancelar o pedido ${pedido?.numero}? Esta ação não pode ser desfeita e o fornecedor será notificado sobre o cancelamento.`}
        textoBotaoConfirmar="Sim, Cancelar"
        textoBotaoCancelar="Não, Manter"
        tipoConfirmacao="perigo"
        carregando={carregandoStatus}
      />

      {/* Modal de Histórico de Status */}
      <HistoricoStatusPedido
        pedidoId={pedidoId}
        mostrar={mostrarHistorico}
        onFechar={() => setMostrarHistorico(false)}
      />
    </div>
  );
}