import React, { useState, useEffect } from 'react';
import LayoutPrincipal from '../../src/front-end/componentes/layout/LayoutPrincipal';
import ModalUsuario from '../../src/front-end/componentes/admin/ModalUsuario';
import { usarCorTema } from '../../src/front-end/utils/coresTema';

export default function GerenciamentoUsuarios() {
  const { classes } = usarCorTema();
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [filtro, setFiltro] = useState('');
  const [tipoFiltro, setTipoFiltro] = useState('');
  const [statusFiltro, setStatusFiltro] = useState('');
  const [mostrarModal, setMostrarModal] = useState(false);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState(null);

  useEffect(() => {
    // Simular carregamento de usuários
    setTimeout(() => {
      setUsuarios([
        {
          id: 1,
          nome: 'João Silva',
          email: 'joao.silva@exemplo.com',
          tipo: 'Fornecedor',
          empresa: 'Moda Elegante Ltda',
          status: 'ativo',
          ultimoAcesso: '2024-01-15T10:30:00Z',
          dataCriacao: '2023-06-15T09:00:00Z'
        },
        {
          id: 2,
          nome: 'Maria Santos',
          email: 'maria.santos@exemplo.com',
          tipo: 'Representante',
          empresa: 'Vendas Premium',
          status: 'ativo',
          ultimoAcesso: '2024-01-15T08:15:00Z',
          dataCriacao: '2023-08-22T14:30:00Z'
        },
        {
          id: 3,
          nome: 'Carlos Oliveira',
          email: 'carlos.oliveira@exemplo.com',
          tipo: 'Administrador',
          empresa: 'PulseHub',
          status: 'ativo',
          ultimoAcesso: '2024-01-15T11:45:00Z',
          dataCriacao: '2023-01-10T10:00:00Z'
        },
        {
          id: 4,
          nome: 'Ana Costa',
          email: 'ana.costa@exemplo.com',
          tipo: 'Representante',
          empresa: 'Vendas Sul',
          status: 'inativo',
          ultimoAcesso: '2024-01-10T16:20:00Z',
          dataCriacao: '2023-09-05T11:15:00Z'
        },
        {
          id: 5,
          nome: 'Pedro Lima',
          email: 'pedro.lima@exemplo.com',
          tipo: 'Fornecedor',
          empresa: 'Fashion Store',
          status: 'pendente',
          ultimoAcesso: null,
          dataCriacao: '2024-01-14T13:45:00Z'
        }
      ]);
      setCarregando(false);
    }, 1000);
  }, []);

  const usuariosFiltrados = usuarios.filter(usuario => {
    const matchNome = usuario.nome.toLowerCase().includes(filtro.toLowerCase()) ||
                     usuario.email.toLowerCase().includes(filtro.toLowerCase());
    const matchTipo = tipoFiltro === '' || usuario.tipo === tipoFiltro;
    const matchStatus = statusFiltro === '' || usuario.status === statusFiltro;
    return matchNome && matchTipo && matchStatus;
  });

  const formatarData = (timestamp) => {
    if (!timestamp) return 'Nunca';
    return new Date(timestamp).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ativo':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'inativo':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'pendente':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getTipoColor = (tipo) => {
    switch (tipo) {
      case 'Administrador':
        return `${classes.bgLight} ${classes.textLight} dark:${classes.bgLightDark} dark:${classes.textLightDark}`;
      case 'Fornecedor':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Representante':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const handleEditarUsuario = (usuario) => {
    setUsuarioSelecionado(usuario);
    setMostrarModal(true);
  };

  const handleAlterarStatus = (usuarioId, novoStatus) => {
    setUsuarios(usuarios.map(usuario => 
      usuario.id === usuarioId 
        ? { ...usuario, status: novoStatus }
        : usuario
    ));
  };

  const handleSalvarUsuario = (dadosUsuario) => {
    if (dadosUsuario.id) {
      // Editando usuário existente
      setUsuarios(usuarios.map(usuario => 
        usuario.id === dadosUsuario.id 
          ? { ...usuario, ...dadosUsuario, ultimoAcesso: usuario.ultimoAcesso, dataCriacao: usuario.dataCriacao }
          : usuario
      ));
    } else {
      // Criando novo usuário
      const novoUsuario = {
        ...dadosUsuario,
        id: Math.max(...usuarios.map(u => u.id)) + 1,
        ultimoAcesso: null,
        dataCriacao: new Date().toISOString()
      };
      setUsuarios([...usuarios, novoUsuario]);
    }
  };

  const tiposUsuario = ['Administrador', 'Fornecedor', 'Representante'];
  const statusOptions = ['ativo', 'inativo', 'pendente'];

  if (carregando) {
    return (
      <LayoutPrincipal titulo="Gerenciamento de Usuários" subtitulo="Carregando usuários...">
        <div className="flex justify-center items-center h-64">
          <div className={`animate-spin rounded-full h-12 w-12 border-b-2 ${classes.border}`}></div>
        </div>
      </LayoutPrincipal>
    );
  }

  return (
    <LayoutPrincipal 
      titulo="Gerenciamento de Usuários" 
      subtitulo={`${usuarios.length} usuários cadastrados no sistema`}
    >
      {/* Filtros e Ações */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-3 flex-1">
            {/* Busca */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Buscar por nome ou email..."
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:${classes.ring} focus:${classes.border} dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
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

            {/* Filtro por tipo */}
            <select
              value={tipoFiltro}
              onChange={(e) => setTipoFiltro(e.target.value)}
              className={`px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:${classes.ring} focus:${classes.border} dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
            >
              <option value="">Todos os tipos</option>
              {tiposUsuario.map(tipo => (
                <option key={tipo} value={tipo}>{tipo}</option>
              ))}
            </select>

            {/* Filtro por status */}
            <select
              value={statusFiltro}
              onChange={(e) => setStatusFiltro(e.target.value)}
              className={`px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:${classes.ring} focus:${classes.border} dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
            >
              <option value="">Todos os status</option>
              {statusOptions.map(status => (
                <option key={status} value={status}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Botão Novo Usuário */}
          <button
            onClick={() => {
              setUsuarioSelecionado(null);
              setMostrarModal(true);
            }}
            className={`px-4 py-2 ${classes.bg} text-white rounded-lg ${classes.bgHover} transition-colors flex items-center gap-2`}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Novo Usuário
          </button>
        </div>
      </div>

      {/* Tabela de Usuários */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Usuário
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Tipo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Último Acesso
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {usuariosFiltrados.map((usuario) => (
                <tr key={usuario.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className={`h-10 w-10 rounded-full ${classes.bg} flex items-center justify-center text-white font-medium`}>
                          {usuario.nome.charAt(0)}
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {usuario.nome}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {usuario.email}
                        </div>
                        <div className="text-xs text-gray-400 dark:text-gray-500">
                          {usuario.empresa}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTipoColor(usuario.tipo)}`}>
                      {usuario.tipo}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(usuario.status)}`}>
                      {usuario.status.charAt(0).toUpperCase() + usuario.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {formatarData(usuario.ultimoAcesso)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEditarUsuario(usuario)}
                        className={`${classes.text} hover:${classes.textLight} dark:${classes.textDark} dark:hover:${classes.textLightDark}`}>
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      
                      {usuario.status === 'ativo' ? (
                        <button
                          onClick={() => handleAlterarStatus(usuario.id, 'inativo')}
                          className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                          title="Desativar usuário"
                        >
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                          </svg>
                        </button>
                      ) : (
                        <button
                          onClick={() => handleAlterarStatus(usuario.id, 'ativo')}
                          className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"
                          title="Ativar usuário"
                        >
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {usuariosFiltrados.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
              Nenhum usuário encontrado
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Tente ajustar os filtros de busca.
            </p>
          </div>
        )}
      </div>

      {/* Modal de Edição/Criação */}
      <ModalUsuario
        mostrar={mostrarModal}
        usuario={usuarioSelecionado}
        onFechar={() => {
          setMostrarModal(false);
          setUsuarioSelecionado(null);
        }}
        onSalvar={handleSalvarUsuario}
      />
    </LayoutPrincipal>
  );
}
