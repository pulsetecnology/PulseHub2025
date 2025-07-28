import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ServicoPedidos from '../../../src/front-end/servicos/ServicoPedidos';
import ServicoProdutos from '../../../src/front-end/servicos/ServicoProdutos';
import ServicoClientes from '../../../src/front-end/servicos/ServicoClientes';
import LayoutPrincipal from '../../../src/front-end/componentes/layout/LayoutPrincipal';
import BotaoCarregando from '../../../src/front-end/componentes/comum/BotaoCarregando';
import IndicadorCarregamento from '../../../src/front-end/componentes/comum/IndicadorCarregamento';
import FeedbackVisual from '../../../src/front-end/componentes/comum/FeedbackVisual';
import StatusAutoSave from '../../../src/front-end/componentes/comum/StatusAutoSave';
import ModalConfirmacao from '../../../src/front-end/componentes/comum/ModalConfirmacao';
import { useAutoSave } from '../../../src/front-end/hooks/useAutoSave';
import HeaderPedido from '../../../src/front-end/componentes/pedidos/HeaderPedido';
import InformacoesCliente from '../../../src/front-end/componentes/pedidos/InformacoesCliente';
import GerenciadorItens from '../../../src/front-end/componentes/pedidos/GerenciadorItens';
import ResumoFinanceiro from '../../../src/front-end/componentes/pedidos/ResumoFinanceiro';
import { usarCorTema } from '../../../src/front-end/utils/coresTema';
import servicoNotificacoes from '../../../src/front-end/servicos/ServicoNotificacoes';

export default function EditarPedidoPage() {
  const router = useRouter();
  const { id } = router.query;
  const { classes } = usarCorTema();

  const [pedido, setPedido] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [erros, setErros] = useState({});
  const [salvando, setSalvando] = useState(false);
  const [feedback, setFeedback] = useState({ visivel: false, tipo: 'sucesso', mensagem: '' });

  const [produtoSelecionado, setProdutoSelecionado] = useState('');
  const [quantidadeProduto, setQuantidadeProduto] = useState(1);
  const [mostrarModalConfirmacao, setMostrarModalConfirmacao] = useState(false);
  const [mostrarModalExclusao, setMostrarModalExclusao] = useState(false);

  const servicoPedidos = new ServicoPedidos();
  const servicoProdutos = new ServicoProdutos();
  const servicoClientes = new ServicoClientes();

  // Função para auto-save
  const salvarAutomaticamente = async (dadosPedido) => {
    console.log('🔄 Auto-save chamado para pedido:', dadosPedido.id, 'Status:', dadosPedido.status);
    if (dadosPedido.status !== 'rascunho') {
      console.log('⏭️ Auto-save ignorado - pedido não é rascunho');
      return; // Só salva rascunhos automaticamente
    }
    
    const totais = calcularTotais();
    const pedidoParaSalvar = {
      ...dadosPedido,
      ...totais,
    };
    
    console.log('💾 Auto-save executando...');
    await servicoPedidos.atualizar(dadosPedido.id, pedidoParaSalvar);
  };

  // Hook de auto-save
  const autoSaveHabilitado = pedido?.status === 'rascunho' && !salvando;
  console.log('🔧 Auto-save habilitado:', autoSaveHabilitado, 'Status:', pedido?.status, 'Salvando:', salvando);
  
  const {
    salvandoAuto,
    ultimoSalvamento,
    erro: erroAutoSave,
    formatarUltimoSalvamento
  } = useAutoSave(
    pedido,
    salvarAutomaticamente,
    3000, // 3 segundos de delay
    autoSaveHabilitado // Só habilita para rascunhos e quando não está salvando manualmente
  );

  useEffect(() => {
    const carregarDados = async () => {
      if (id) {
        try {
          const pedidoData = await servicoPedidos.obterPorId(id);
          setPedido(pedidoData);

          const produtosData = servicoProdutos.listar();
          setProdutos(produtosData);

          const clientesData = servicoClientes.listar();
          setClientes(clientesData);
        } catch (error) {
          console.error('Erro ao carregar dados do pedido:', error);
          setErros({ geral: 'Erro ao carregar dados do pedido.' });
        } finally {
          setCarregando(false);
        }
      }
    };
    carregarDados();
  }, [id]);

  const isEditDisabled = pedido && pedido.status !== 'rascunho';

  const handleInputChange = (campo, valor) => {
    setPedido(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  const adicionarProduto = () => {
    if (!produtoSelecionado || quantidadeProduto <= 0) return;

    const produto = produtos.find(p => p.id === parseInt(produtoSelecionado));
    if (!produto) return;

    const itemExistente = pedido.itens.find(item => item.produtoId === produto.id);
    
    if (itemExistente) {
      const novosItens = pedido.itens.map(item =>
        item.produtoId === produto.id
          ? { ...item, quantidade: item.quantidade + quantidadeProduto }
          : item
      );
      setPedido({ ...pedido, itens: novosItens });
    } else {
      const novoItem = {
        produtoId: produto.id,
        produto: produto,
        quantidade: quantidadeProduto,
        precoUnitario: produto.preco,
        subtotal: produto.preco * quantidadeProduto
      };
      setPedido({ ...pedido, itens: [...pedido.itens, novoItem] });
    }

    setProdutoSelecionado('');
    setQuantidadeProduto(1);
  };

  const removerProduto = (produtoId) => {
    const novosItens = pedido.itens.filter(item => item.produtoId !== produtoId);
    setPedido({ ...pedido, itens: novosItens });
  };

  const atualizarQuantidade = (produtoId, novaQuantidade) => {
    if (novaQuantidade <= 0) {
      removerProduto(produtoId);
      return;
    }

    const novosItens = pedido.itens.map(item =>
      item.produtoId === produtoId
        ? { 
            ...item, 
            quantidade: novaQuantidade,
            subtotal: item.precoUnitario * novaQuantidade
          }
        : item
    );
    setPedido({ ...pedido, itens: novosItens });
  };

  const calcularTotais = () => {
    const subtotal = pedido.itens.reduce((total, item) => total + item.subtotal, 0);
    const desconto = pedido.desconto || 0;
    const frete = pedido.frete || 0;
    const total = subtotal - desconto + frete;

    return { subtotal, desconto, frete, total };
  };

  const handleSalvar = async () => {
    setSalvando(true);
    try {
      const totais = calcularTotais();
      const pedidoParaSalvar = {
        ...pedido,
        ...totais,
        status: pedido.status, // Mantém o status atual
      };
      await servicoPedidos.atualizar(pedido.id, pedidoParaSalvar);
      // Notificação de sucesso
      servicoNotificacoes.notificarPedido(
        'Pedido Salvo',
        `Pedido ${pedido.numero} foi salvo como rascunho`,
        pedido.id
      );
      
      setFeedback({ 
        visivel: true, 
        tipo: 'sucesso', 
        mensagem: 'Pedido salvo com sucesso!' 
      });
      setTimeout(() => router.push('/pedidos'), 1500);
    } catch (error) {
      console.error('Erro ao salvar pedido:', error);
      
      // Notificação de erro
      servicoNotificacoes.notificarErro(
        'Erro ao Salvar',
        'Não foi possível salvar o pedido. Tente novamente.'
      );
      
      setErros({ geral: 'Erro ao salvar pedido. Tente novamente.' });
    } finally {
      setSalvando(false);
    }
  };

  const handleFinalizar = async () => {
    // Validações antes de finalizar
    const errosValidacao = {};
    
    if (!pedido.clienteId) {
      errosValidacao.geral = 'Selecione um cliente para o pedido';
    }
    
    if (!pedido.itens || pedido.itens.length === 0) {
      errosValidacao.geral = 'Adicione pelo menos um item ao pedido';
    }
    
    // Validar itens
    if (pedido.itens) {
      for (let i = 0; i < pedido.itens.length; i++) {
        const item = pedido.itens[i];
        if (!item.quantidade || item.quantidade <= 0) {
          errosValidacao.geral = `Item ${i + 1}: Quantidade deve ser maior que zero`;
          break;
        }
        if (!item.precoUnitario || item.precoUnitario <= 0) {
          errosValidacao.geral = `Item ${i + 1}: Preço deve ser maior que zero`;
          break;
        }
      }
    }
    
    if (Object.keys(errosValidacao).length > 0) {
      setErros(errosValidacao);
      return;
    }

    // Confirmar finalização
    setMostrarModalConfirmacao(true);
  };

  const confirmarFinalizacao = async () => {
    setMostrarModalConfirmacao(false);
    setSalvando(true);
    try {
      const totais = calcularTotais();
      const pedidoParaFinalizar = {
        ...pedido,
        ...totais,
        status: 'pendente',
        dataFinalizacao: new Date().toISOString(),
      };
      
      console.log('🔄 Finalizando pedido:', pedidoParaFinalizar.id, 'Status:', pedidoParaFinalizar.status);
      const pedidoAtualizado = await servicoPedidos.atualizar(pedido.id, pedidoParaFinalizar);
      console.log('✅ Pedido atualizado:', pedidoAtualizado.id, 'Novo status:', pedidoAtualizado.status);
      
      // Atualizar o estado local
      setPedido(pedidoAtualizado);
      
      // Notificar fornecedor sobre novo pedido
      servicoNotificacoes.notificarPedido(
        'Novo Pedido Recebido',
        `Pedido ${pedido.numero} foi finalizado e está aguardando aprovação`,
        pedido.id,
        'fornecedor'
      );
      
      // Notificar representante sobre finalização
      servicoNotificacoes.notificarPedido(
        'Pedido Finalizado',
        `Pedido ${pedido.numero} foi finalizado com sucesso`,
        pedido.id
      );
      
      // Mostrar mensagem de sucesso e redirecionar
      setFeedback({ 
        visivel: true, 
        tipo: 'sucesso', 
        mensagem: 'Pedido finalizado com sucesso! O fornecedor foi notificado.' 
      });
      setTimeout(() => router.push('/pedidos'), 2000);
    } catch (error) {
      console.error('Erro ao finalizar pedido:', error);
      
      // Notificação de erro
      servicoNotificacoes.notificarErro(
        'Erro ao Finalizar',
        'Não foi possível finalizar o pedido. Tente novamente.'
      );
      
      setErros({ geral: 'Erro ao finalizar pedido. Tente novamente.' });
    } finally {
      setSalvando(false);
    }
  };

  const handleExcluir = async () => {
    setMostrarModalExclusao(true);
  };

  const confirmarExclusao = async () => {
    setMostrarModalExclusao(false);
    setSalvando(true);
    try {
      await servicoPedidos.excluir(pedido.id);
      router.push('/pedidos');
    } catch (error) {
      console.error('Erro ao excluir pedido:', error);
      setErros({ geral: 'Erro ao excluir pedido. Tente novamente.' });
    } finally {
      setSalvando(false);
    }
  };

  if (carregando) {
    return (
      <LayoutPrincipal titulo="Carregando...">
        <div className="flex items-center justify-center h-64">
          <IndicadorCarregamento tamanho="grande" texto="Carregando pedido..." />
        </div>
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

  const clienteDoPedido = clientes.find(c => c.id === pedido.clienteId);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header do Pedido */}
        <HeaderPedido 
          pedido={pedido} 
          onVoltar={() => router.push('/pedidos')}
          statusAutoSave={
            <StatusAutoSave
              salvandoAuto={salvandoAuto}
              ultimoSalvamento={ultimoSalvamento}
              erro={erroAutoSave}
              formatarUltimoSalvamento={formatarUltimoSalvamento}
            />
          }
        />

        <div className="space-y-6">
          {erros.geral && (
            <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
              <p className="text-sm text-red-600 dark:text-red-400">{erros.geral}</p>
            </div>
          )}

          {/* Informações do Cliente */}
          <InformacoesCliente 
            cliente={clienteDoPedido}
            clientes={clientes}
            onClienteChange={(clienteId) => handleInputChange('clienteId', clienteId)}
            readonly={isEditDisabled}
          />

          {/* Gerenciador de Itens */}
          <GerenciadorItens
            itens={pedido.itens || []}
            produtos={produtos}
            onItensChange={(novosItens) => setPedido(prev => ({ ...prev, itens: novosItens }))}
            readonly={isEditDisabled}
          />

          {/* Resumo Financeiro */}
          <ResumoFinanceiro
            subtotal={calcularTotais().subtotal}
            desconto={pedido.desconto || 0}
            frete={pedido.frete || 0}
            onDescontoChange={(valor) => handleInputChange('desconto', valor)}
            onFreteChange={(valor) => handleInputChange('frete', valor)}
            readonly={isEditDisabled}
          />

          {/* Observações do Pedido */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <svg className="h-5 w-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              Observações do Pedido
            </h3>
            <textarea
              value={pedido.observacoes || ''}
              onChange={(e) => handleInputChange('observacoes', e.target.value)}
              disabled={isEditDisabled}
              rows={4}
              placeholder="Adicione observações sobre o pedido..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Botões de Ação */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex justify-between items-center">
              {/* Botão de Exclusão - só para pedidos em rascunho */}
              <div>
                {!isEditDisabled && pedido.status === 'rascunho' && (
                  <BotaoCarregando
                    onClick={handleExcluir}
                    carregando={salvando}
                    className="px-4 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center gap-2"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Excluir Pedido
              </BotaoCarregando>
            )}
          </div>

          {/* Botões principais */}
          <div className="flex gap-3">
            {!isEditDisabled && (
              <>
                <BotaoCarregando
                  onClick={handleSalvar}
                  carregando={salvando}
                  className={`px-4 py-2 text-sm border border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors`}
                >
                  Salvar Rascunho
                </BotaoCarregando>
                {pedido.status === 'rascunho' && (
                  <BotaoCarregando
                    onClick={handleFinalizar}
                    carregando={salvando}
                    className={`px-4 py-2 text-sm ${classes.bg} text-white rounded-md hover:opacity-90 transition-colors flex items-center gap-2`}
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Finalizar Pedido
                  </BotaoCarregando>
                )}
              </>
            )}
            {isEditDisabled && (
              <button
                onClick={() => router.push('/pedidos')}
                className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Voltar
              </button>
            )}
          </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal de Confirmação - Finalizar */}
      <ModalConfirmacao
        aberto={mostrarModalConfirmacao}
        titulo="Finalizar Pedido"
        mensagem="Tem certeza que deseja finalizar este pedido? Após finalizado, ele será enviado para aprovação do fornecedor."
        textoBotaoConfirmar="Finalizar Pedido"
        textoBotaoCancelar="Cancelar"
        onConfirmar={confirmarFinalizacao}
        onCancelar={() => setMostrarModalConfirmacao(false)}
        carregando={salvando}
      />

      {/* Modal de Confirmação - Excluir */}
      <ModalConfirmacao
        aberto={mostrarModalExclusao}
        titulo="Excluir Pedido"
        mensagem="Tem certeza que deseja excluir este pedido? Esta ação não pode ser desfeita."
        textoBotaoConfirmar="Excluir Pedido"
        textoBotaoCancelar="Cancelar"
        onConfirmar={confirmarExclusao}
        onCancelar={() => setMostrarModalExclusao(false)}
        carregando={salvando}
        tipo="perigo"
      />

      {/* Feedback Visual */}
      <FeedbackVisual
        tipo={feedback.tipo}
        mensagem={feedback.mensagem}
        visivel={feedback.visivel}
        onFechar={() => setFeedback({ ...feedback, visivel: false })}
      />
    </div>
  );
}