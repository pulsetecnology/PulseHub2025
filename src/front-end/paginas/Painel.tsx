import React, { useState, useEffect } from 'react';
import { usarAutenticacao } from '../hooks/usarAutenticacao';
import Logotipo from '../componentes/Logotipo';

interface EstatisticasPainel {
  totalPedidos: number;
  pedidosPendentes: number;
  valorTotal: number;
  clientesAtivos: number;
}

/**
 * Página principal do painel de controle
 */
export default function Painel() {
  const { usuario, carregando, autenticado, sair } = usarAutenticacao();
  const [estatisticas, setEstatisticas] = useState<EstatisticasPainel>({
    totalPedidos: 0,
    pedidosPendentes: 0,
    valorTotal: 0,
    clientesAtivos: 0
  });
  const [carregandoEstatisticas, setCarregandoEstatisticas] = useState<boolean>(true);

  useEffect(() => {
    // Carregar estatísticas do painel
    const carregarEstatisticas = async () => {
      if (!autenticado) return;

      try {
        const token = localStorage.getItem('token');
        const resposta = await fetch('/api/estatisticas/painel', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (resposta.ok) {
          const dados = await resposta.json();
          setEstatisticas(dados);
        }
      } catch (error) {
        console.error('Erro ao carregar estatísticas:', error);
      } finally {
        setCarregandoEstatisticas(false);
      }
    };

    carregarEstatisticas();
  }, [autenticado]);

  if (carregando) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="spinner w-12 h-12"></div>
      </div>
    );
  }

  if (!autenticado) {
    // Redirecionar para página de login
    // Na implementação real, usar o router do Next.js
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Logotipo tamanho="lg" />
        <p className="mt-4 text-gray-600">Você precisa estar autenticado para acessar esta página.</p>
        <button 
          className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-hover focus-ring"
          onClick={() => window.location.href = '/login'}
        >
          Ir para Login
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Cabeçalho */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Logotipo tamanho="sm" />
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 dark:text-gray-300">
              Olá, {usuario?.nome}
            </span>
            <button 
              onClick={sair}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Painel de Controle
        </h1>

        {/* Cards de estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Card de Total de Pedidos */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover-lift">
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Total de Pedidos
            </h2>
            <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
              {carregandoEstatisticas ? '...' : estatisticas.totalPedidos}
            </p>
          </div>

          {/* Card de Pedidos Pendentes */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover-lift">
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Pedidos Pendentes
            </h2>
            <p className="mt-2 text-3xl font-bold text-amber-600 dark:text-amber-500">
              {carregandoEstatisticas ? '...' : estatisticas.pedidosPendentes}
            </p>
          </div>

          {/* Card de Valor Total */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover-lift">
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Valor Total
            </h2>
            <p className="mt-2 text-3xl font-bold text-green-600 dark:text-green-500">
              {carregandoEstatisticas 
                ? '...' 
                : `R$ ${estatisticas.valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
              }
            </p>
          </div>

          {/* Card de Clientes Ativos */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover-lift">
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Clientes Ativos
            </h2>
            <p className="mt-2 text-3xl font-bold text-blue-600 dark:text-blue-500">
              {carregandoEstatisticas ? '...' : estatisticas.clientesAtivos}
            </p>
          </div>
        </div>

        {/* Seção de ações rápidas */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Ações Rápidas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 flex items-center justify-center text-primary hover:bg-gray-50 dark:hover:bg-gray-700 btn-press">
              Novo Pedido
            </button>
            <button className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 flex items-center justify-center text-primary hover:bg-gray-50 dark:hover:bg-gray-700 btn-press">
              Adicionar Cliente
            </button>
            <button className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 flex items-center justify-center text-primary hover:bg-gray-50 dark:hover:bg-gray-700 btn-press">
              Gerar Relatório
            </button>
          </div>
        </section>

        {/* Seção de atividades recentes */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Atividades Recentes
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
            {/* Lista de atividades simulada */}
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {[1, 2, 3, 4, 5].map((item) => (
                <li key={item} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-300 text-sm font-medium">
                        {item}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        Atividade de exemplo {item}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                        Descrição da atividade {item}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Há {item} hora{item > 1 ? 's' : ''}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}