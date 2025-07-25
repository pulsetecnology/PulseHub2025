import React, { useState, useEffect } from 'react';
import LayoutPrincipal from '../../src/front-end/componentes/layout/LayoutPrincipal';

export default function RelatoriosAdministrativos() {
  const [dadosRelatorios, setDadosRelatorios] = useState({
    vendas: {
      totalMes: 'R$ 2.847.320',
      crescimentoMes: 18.5,
      totalAno: 'R$ 28.473.200',
      crescimentoAno: 24.3,
      pedidosMes: 1247,
      ticketMedio: 'R$ 2.284'
    },
    usuarios: {
      totalFornecedores: 89,
      fornecedoresAtivos: 76,
      totalRepresentantes: 342,
      representantesAtivos: 298,
      novosMes: 23
    },
    produtos: {
      totalProdutos: 15847,
      produtosAtivos: 14523,
      novosProdutosMes: 234,
      categoriasPopulares: [
        { nome: 'Vestidos', vendas: 1247 },
        { nome: 'Calças', vendas: 987 },
        { nome: 'Blusas', vendas: 856 },
        { nome: 'Sapatos', vendas: 743 },
        { nome: 'Acessórios', vendas: 621 }
      ]
    },
    comissoes: {
      totalPagoMes: 'R$ 142.366',
      mediaComissao: 8.2,
      maiorComissao: 'R$ 12.450',
      representantesComComissao: 187
    }
  });

  const [filtros, setFiltros] = useState({
    periodo: '30',
    tipoRelatorio: 'vendas',
    fornecedor: '',
    representante: ''
  });

  const [carregando, setCarregando] = useState(true);
  const [exportando, setExportando] = useState(false);

  useEffect(() => {
    // Simular carregamento dos dados
    setTimeout(() => {
      setCarregando(false);
    }, 1000);
  }, []);

  const handleExportarRelatorio = async (formato) => {
    setExportando(true);
    
    // Simular exportação
    setTimeout(() => {
      setExportando(false);
      alert(`Relatório exportado em formato ${formato.toUpperCase()}!`);
    }, 2000);
  };

  const formatarMoeda = (valor) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  };

  const formatarPorcentagem = (valor) => {
    return `${valor > 0 ? '+' : ''}${valor.toFixed(1)}%`;
  };

  const getCorVariacao = (valor) => {
    return valor > 0 ? 'text-green-600' : valor < 0 ? 'text-red-600' : 'text-gray-600';
  };

  const tiposRelatorio = [
    { id: 'vendas', nome: 'Vendas e Faturamento' },
    { id: 'usuarios', nome: 'Usuários e Atividade' },
    { id: 'produtos', nome: 'Produtos e Catálogo' },
    { id: 'comissoes', nome: 'Comissões e Pagamentos' }
  ];

  const periodosDisponiveis = [
    { id: '7', nome: 'Últimos 7 dias' },
    { id: '30', nome: 'Últimos 30 dias' },
    { id: '90', nome: 'Últimos 90 dias' },
    { id: '365', nome: 'Último ano' }
  ];

  if (carregando) {
    return (
      <LayoutPrincipal titulo="Relatórios Administrativos" subtitulo="Carregando dados...">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        </div>
      </LayoutPrincipal>
    );
  }

  return (
    <LayoutPrincipal 
      titulo="Relatórios Administrativos" 
      subtitulo="Análises e métricas detalhadas da plataforma"
    >
      {/* Filtros */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-3 flex-1">
            <select
              value={filtros.tipoRelatorio}
              onChange={(e) => setFiltros(prev => ({ ...prev, tipoRelatorio: e.target.value }))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              {tiposRelatorio.map(tipo => (
                <option key={tipo.id} value={tipo.id}>{tipo.nome}</option>
              ))}
            </select>

            <select
              value={filtros.periodo}
              onChange={(e) => setFiltros(prev => ({ ...prev, periodo: e.target.value }))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              {periodosDisponiveis.map(periodo => (
                <option key={periodo.id} value={periodo.id}>{periodo.nome}</option>
              ))}
            </select>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => handleExportarRelatorio('pdf')}
              disabled={exportando}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 transition-colors flex items-center gap-2"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              PDF
            </button>
            <button
              onClick={() => handleExportarRelatorio('excel')}
              disabled={exportando}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors flex items-center gap-2"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Excel
            </button>
          </div>
        </div>
      </div>

      {/* Relatório de Vendas */}
      {filtros.tipoRelatorio === 'vendas' && (
        <div className="space-y-6">
          {/* Métricas Principais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Faturamento Mensal</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{dadosRelatorios.vendas.totalMes}</p>
                  <p className={`text-sm ${getCorVariacao(dadosRelatorios.vendas.crescimentoMes)}`}>
                    {formatarPorcentagem(dadosRelatorios.vendas.crescimentoMes)} vs mês anterior
                  </p>
                </div>
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pedidos no Mês</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{dadosRelatorios.vendas.pedidosMes.toLocaleString()}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Ticket médio: {dadosRelatorios.vendas.ticketMedio}
                  </p>
                </div>
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Faturamento Anual</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{dadosRelatorios.vendas.totalAno}</p>
                  <p className={`text-sm ${getCorVariacao(dadosRelatorios.vendas.crescimentoAno)}`}>
                    {formatarPorcentagem(dadosRelatorios.vendas.crescimentoAno)} vs ano anterior
                  </p>
                </div>
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Gráfico Placeholder */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Evolução de Vendas - Últimos 12 Meses
            </h3>
            <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Gráfico de vendas seria exibido aqui</p>
            </div>
          </div>
        </div>
      )}

      {/* Relatório de Usuários */}
      {filtros.tipoRelatorio === 'usuarios' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Fornecedores</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{dadosRelatorios.usuarios.totalFornecedores}</p>
                  <p className="text-sm text-green-600">{dadosRelatorios.usuarios.fornecedoresAtivos} ativos</p>
                </div>
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Representantes</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{dadosRelatorios.usuarios.totalRepresentantes}</p>
                  <p className="text-sm text-green-600">{dadosRelatorios.usuarios.representantesAtivos} ativos</p>
                </div>
                <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-full">
                  <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Novos Usuários</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{dadosRelatorios.usuarios.novosMes}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Este mês</p>
                </div>
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Taxa de Atividade</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">87%</p>
                  <p className="text-sm text-green-600">+3% vs mês anterior</p>
                </div>
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Relatório de Produtos */}
      {filtros.tipoRelatorio === 'produtos' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total de Produtos</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{dadosRelatorios.produtos.totalProdutos.toLocaleString()}</p>
                  <p className="text-sm text-green-600">{dadosRelatorios.produtos.produtosAtivos.toLocaleString()} ativos</p>
                </div>
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Novos Produtos</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{dadosRelatorios.produtos.novosProdutosMes}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Este mês</p>
                </div>
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Taxa de Conversão</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">12.4%</p>
                  <p className="text-sm text-green-600">+2.1% vs mês anterior</p>
                </div>
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Categorias Populares */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Categorias Mais Vendidas
            </h3>
            <div className="space-y-3">
              {dadosRelatorios.produtos.categoriasPopulares.map((categoria, index) => (
                <div key={categoria.nome} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-900 dark:text-white w-4 text-center">
                      {index + 1}
                    </span>
                    <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">
                      {categoria.nome}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-3">
                      <div 
                        className="bg-purple-600 h-2 rounded-full" 
                        style={{ width: `${(categoria.vendas / dadosRelatorios.produtos.categoriasPopulares[0].vendas) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {categoria.vendas}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Relatório de Comissões */}
      {filtros.tipoRelatorio === 'comissoes' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Pago</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{dadosRelatorios.comissoes.totalPagoMes}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Este mês</p>
                </div>
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Média de Comissão</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{dadosRelatorios.comissoes.mediaComissao}%</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Taxa média</p>
                </div>
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Maior Comissão</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{dadosRelatorios.comissoes.maiorComissao}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Individual</p>
                </div>
                <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-full">
                  <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Representantes</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{dadosRelatorios.comissoes.representantesComComissao}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Com comissão</p>
                </div>
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Estado de Exportação */}
      {exportando && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 flex items-center space-x-3">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"></div>
            <span className="text-gray-900 dark:text-white">Exportando relatório...</span>
          </div>
        </div>
      )}
    </LayoutPrincipal>
  );
}