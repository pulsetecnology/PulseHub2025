import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ServicoClientes from '../../servicos/ServicoClientes';

export default function ListaClientes() {
  const router = useRouter();
  const [clientes, setClientes] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const servicoClientes = new ServicoClientes();

  const carregarClientes = () => {
    setCarregando(true);
    setClientes(servicoClientes.listar());
    setCarregando(false);
  };

  useEffect(() => {
    carregarClientes();
  }, []);

  const handleExcluir = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este cliente?')) {
      servicoClientes.excluir(id);
      carregarClientes();
    }
  };

  if (carregando) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Clientes
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Gerencie todos os seus clientes
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => router.push('/clientes/novo')}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
            >
              Novo Cliente
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {clientes.map(cliente => (
            <li key={cliente.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{cliente.razaoSocial} {cliente.nomeFantasia ? `(${cliente.nomeFantasia})` : ''}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">CNPJ: {cliente.cnpj}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email: {cliente.emailComercial} | Telefone: {cliente.telefoneComercial}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{cliente.cidade} - {cliente.estado}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => router.push(`/clientes/${cliente.id}/editar`)}
                  className="px-3 py-1 text-sm text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleExcluir(cliente.id)}
                  className="px-3 py-1 text-sm text-red-600 border border-red-600 rounded-md hover:bg-red-50"
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}