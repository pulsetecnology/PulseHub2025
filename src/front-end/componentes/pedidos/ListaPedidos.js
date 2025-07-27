import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CardPedido from './CardPedido';
import { usarCorTema } from '../../utils/coresTema';
import { obterPapelUsuario, PAPEIS } from '../../utils/papelUsuario';
import ServicoPedidos from '../../servicos/ServicoPedidos';

export default function ListaPedidos() {
  const router = useRouter();
  const { classes } = usarCorTema();
  const [pedidos, setPedidos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [filtro, setFiltro] = useState('');
  const [statusFiltro, setStatusFiltro] = useState('');
  const [papelUsuario, setPapelUsuario] = useState(null);
  const [mounted, setMounted] = useState(false);

  const servicoPedidos = new ServicoPedidos();

  useEffect(() => {
    setMounted(true);
    setPapelUsuario(obterPapelUsuario());
    carregarPedidos();
  }, []);



  const carregarPedidos = async () => {
    try {
      setCarregando(true);
      const pedidosData = await servicoPedidos.listar();
      // Adaptar os dados para o formato esperado pelo CardPedido
      const pedidosAdaptados = pedidosData.map(pedido => ({
        ...pedido,
        valor: pedido.total,
        data: pedido.dataCreacao
      }));
      setPedidos(pedidosAdaptados);
    } catch (error) {
      console.error('Erro ao carregar pedidos:', error);
    } finally {
      setCarregando(false);
    }
  };

  // Recarregar pedidos quando a tela ficar visível ou quando navegar de volta
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        carregarPedidos();
      }
    };

    const handlePopState = () => {
      // Pequeno delay para garantir que a página foi carregada
      setTimeout(() => {
        carregarPedidos();
      }, 100);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const pedidosFiltrados = pedidos.filter(pedido => {
    const matchNumero = pedido.numero.toLowerCase().includes(filtro.toLowerCase());
    const matchCliente = pedido.cliente.nome.toLowerCase().includes(filtro.toLowerCase());
    const matchStatus = statusFiltro === '' || pedido.status === statusFiltro;
    return (matchNumero || matchCliente) && matchStatus;
  });

  const statusOptions = [
    { value: '', label: 'Todos os status' },
    { value: 'pendente', label: 'Pendente' },
    { value: 'aprovado', label: 'Aprovado' },
    { value: 'em_producao', label: 'Em Produção' },
    { value: 'enviado', label: 'Enviado' },
    { value: 'entregue', label: 'Entregue' },
    { value: 'cancelado', label: 'Cancelado' }
  ];

  if (carregando) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className={`animate-spin rounded-full h-12 w-12 border-b-2 ${classes.border}`}></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Cabeçalho com filtros */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Pedidos
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Gerencie todos os pedidos dos seus clientes
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Filtro por número/cliente */}
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar pedidos..."
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
                className={`pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:${classes.ring} focus:${classes.border} bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Filtro por status */}
            <select
              value={statusFiltro}
              onChange={(e) => setStatusFiltro(e.target.value)}
              className={`px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:${classes.ring} focus:${classes.border} bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
            >
              {statusOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* Botão atualizar */}
            <button
              onClick={carregarPedidos}
              disabled={carregando}
              className="px-3 py-2 border border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
              title="Atualizar lista"
            >
              <svg className={`h-5 w-5 ${carregando ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              {carregando ? 'Atualizando...' : 'Atualizar'}
            </button>

            {/* Botão novo pedido - apenas para representantes */}
            {papelUsuario === PAPEIS.REPRESENTANTE && (
              <button
                onClick={() => router.push('/pedidos/novo')}
                className={`px-4 py-2 ${classes.bg} text-white rounded-lg ${classes.bgHover} transition-colors flex items-center gap-2`}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Novo Pedido
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Lista de pedidos */}
      {pedidosFiltrados.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-12 text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
            Nenhum pedido encontrado
          </h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {filtro || statusFiltro 
              ? 'Tente ajustar os filtros de busca.' 
              : 'Comece criando seu primeiro pedido.'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {pedidosFiltrados.map(pedido => (
            <CardPedido 
              key={pedido.id} 
              pedido={pedido} 
            />
          ))}
        </div>
      )}
    </div>
  );
}
