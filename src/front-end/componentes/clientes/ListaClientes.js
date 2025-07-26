import React, { useState, useEffect } from 'react';
import CardCliente from './CardCliente';
import { usarCorTema } from '../../utils/coresTema';

export default function ListaClientes() {
  const { classes } = usarCorTema();
  const [clientes, setClientes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [filtro, setFiltro] = useState('');
  const [segmentoFiltro, setSegmentoFiltro] = useState('');

  // Dados simulados para demonstração
  useEffect(() => {
    const clientesSimulados = [
      {
        id: 1,
        nome: 'Tech Solutions Ltda',
        email: 'contato@techsolutions.com',
        telefone: '(11) 99999-9999',
        segmento: 'Tecnologia',
        cidade: 'São Paulo',
        estado: 'SP',
        status: 'ativo',
        ultimoPedido: '2024-01-15',
        totalPedidos: 15,
        valorTotal: 45000.00,
        potencial: 'alto'
      },
      {
        id: 2,
        nome: 'Inovação Digital',
        email: 'vendas@inovacaodigital.com',
        telefone: '(11) 88888-8888',
        segmento: 'Marketing',
        cidade: 'Rio de Janeiro',
        estado: 'RJ',
        status: 'ativo',
        ultimoPedido: '2024-01-10',
        totalPedidos: 8,
        valorTotal: 22000.00,
        potencial: 'medio'
      },
      {
        id: 3,
        nome: 'StartUp Tech',
        email: 'hello@startuptech.com',
        telefone: '(11) 77777-7777',
        segmento: 'Tecnologia',
        cidade: 'Belo Horizonte',
        estado: 'MG',
        status: 'prospecto',
        ultimoPedido: null,
        totalPedidos: 0,
        valorTotal: 0,
        potencial: 'alto'
      },
      {
        id: 4,
        nome: 'Consultoria Empresarial',
        email: 'contato@consultoria.com',
        telefone: '(11) 66666-6666',
        segmento: 'Consultoria',
        cidade: 'Curitiba',
        estado: 'PR',
        status: 'inativo',
        ultimoPedido: '2023-12-01',
        totalPedidos: 3,
        valorTotal: 8500.00,
        potencial: 'baixo'
      }
    ];

    // Simular carregamento
    setTimeout(() => {
      setClientes(clientesSimulados);
      setCarregando(false);
    }, 1000);
  }, []);

  const clientesFiltrados = clientes.filter(cliente => {
    const matchNome = cliente.nome.toLowerCase().includes(filtro.toLowerCase());
    const matchSegmento = segmentoFiltro === '' || cliente.segmento === segmentoFiltro;
    return matchNome && matchSegmento;
  });

  const segmentos = [...new Set(clientes.map(cliente => cliente.segmento))];

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
              Meus Clientes
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Gerencie sua carteira de clientes
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Filtro por nome */}
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar clientes..."
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
                className={`pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:${classes.ring} focus:${classes.border} dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
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

            {/* Filtro por segmento */}
            <select
              value={segmentoFiltro}
              onChange={(e) => setSegmentoFiltro(e.target.value)}
              className={`px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:${classes.ring} focus:${classes.border} dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
            >
              <option value="">Todos os segmentos</option>
              {segmentos.map(segmento => (
                <option key={segmento} value={segmento}>
                  {segmento}
                </option>
              ))}
            </select>

            {/* Botão adicionar cliente */}
            <button
              onClick={() => window.location.href = '/clientes/novo'}
              className={`px-4 py-2 ${classes.bg} text-white rounded-lg ${classes.bgHover} transition-colors flex items-center gap-2`}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Novo Cliente
            </button>
          </div>
        </div>
      </div>

      {/* Lista de clientes */}
      {clientesFiltrados.length === 0 ? (
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
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
            Nenhum cliente encontrado
          </h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {filtro || segmentoFiltro 
              ? 'Tente ajustar os filtros de busca.' 
              : 'Comece adicionando seu primeiro cliente.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientesFiltrados.map(cliente => (
            <CardCliente key={cliente.id} cliente={cliente} />
          ))}
        </div>
      )}
    </div>
  );
}
