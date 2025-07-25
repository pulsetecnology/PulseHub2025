import React, { useState, useEffect } from 'react';
import CardPedido from './CardPedido';

export default function ListaPedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [filtro, setFiltro] = useState('');
  const [statusFiltro, setStatusFiltro] = useState('');

  // Dados simulados para demonstração
  useEffect(() => {
    const pedidosSimulados = [
      {
        id: 1,
        numero: 'PED-2024-001',
        cliente: {
          id: 1,
          nome: 'Tech Solutions Ltda',
          email: 'contato@techsolutions.com'
        },
        representante: 'João Silva',
        valor: 15420.50,
        status: 'pendente',
        data: '2024-01-15',
        itens: [
          { produto: 'Smartphone Galaxy Pro', quantidade: 5, preco: 2499.99 },
          { produto: 'Fone Bluetooth Premium', quantidade: 10, preco: 599.99 }
        ],
        observacoes: 'Cliente solicitou entrega expressa'
      },
      {
        id: 2,
        numero: 'PED-2024-002',
        cliente: {
          id: 2,
          nome: 'Inovação Digital',
          email: 'vendas@inovacaodigital.com'
        },
        representante: 'Maria Santos',
        valor: 8750.00,
        status: 'aprovado',
        data: '2024-01-14',
        itens: [
          { produto: 'Notebook Ultrabook', quantidade: 2, preco: 3299.99 },
          { produto: 'Tablet Design Pro', quantidade: 1, preco: 1899.99 }
        ],
        observacoes: ''
      },
      {
        id: 3,
        numero: 'PED-2024-003',
        cliente: {
          id: 1,
          nome: 'Tech Solutions Ltda',
          email: 'contato@techsolutions.com'
        },
        representante: 'Carlos Oliveira',
        valor: 12300.75,
        status: 'em_producao',
        data: '2024-01-13',
        itens: [
          { produto: 'Smartphone Galaxy Pro', quantidade: 3, preco: 2499.99 },
          { produto: 'Fone Bluetooth Premium', quantidade: 8, preco: 599.99 }
        ],
        observacoes: 'Pedido prioritário'
      },
      {
        id: 4,
        numero: 'PED-2024-004',
        cliente: {
          id: 3,
          nome: 'StartUp Tech',
          email: 'hello@startuptech.com'
        },
        representante: 'Ana Costa',
        valor: 5200.00,
        status: 'enviado',
        data: '2024-01-12',
        itens: [
          { produto: 'Tablet Design Pro', quantidade: 2, preco: 1899.99 },
          { produto: 'Fone Bluetooth Premium', quantidade: 2, preco: 599.99 }
        ],
        observacoes: ''
      },
      {
        id: 5,
        numero: 'PED-2024-005',
        cliente: {
          id: 4,
          nome: 'Consultoria Empresarial',
          email: 'contato@consultoria.com'
        },
        representante: 'Pedro Lima',
        valor: 3299.99,
        status: 'entregue',
        data: '2024-01-10',
        itens: [
          { produto: 'Notebook Ultrabook', quantidade: 1, preco: 3299.99 }
        ],
        observacoes: 'Cliente satisfeito com a entrega'
      }
    ];

    // Simular carregamento
    setTimeout(() => {
      setPedidos(pedidosSimulados);
      setCarregando(false);
    }, 1000);
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
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
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
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              {statusOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* Botão novo pedido */}
            <button
              onClick={() => window.location.href = '/pedidos/novo'}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Novo Pedido
            </button>
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
            <CardPedido key={pedido.id} pedido={pedido} />
          ))}
        </div>
      )}
    </div>
  );
}