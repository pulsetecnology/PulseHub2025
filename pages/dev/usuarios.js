import React, { useState, useEffect } from 'react';
import LayoutPrincipal from '../../src/front-end/componentes/layout/LayoutPrincipal';
import { usarCorTema } from '../../src/front-end/utils/coresTema';

export default function GerenciamentoUsuariosDev() {
  const { classes } = usarCorTema();
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [novoUsuario, setNovoUsuario] = useState({
    nome: '',
    email: '',
    senha: '',
    papel: 'REPRESENTANTE'
  });
  const [mensagem, setMensagem] = useState('');
  const [tipoMensagem, setTipoMensagem] = useState(''); // 'sucesso' ou 'erro'

  const baseUrl = process.env.NEXT_PUBLIC_AUTH_API_URL || 'http://localhost:3001';

  // Carregar usuários existentes
  const carregarUsuarios = async () => {
    setCarregando(true);
    try {
      const response = await fetch(`${baseUrl}/dev/usuarios`);
      if (response.ok) {
        const data = await response.json();
        setUsuarios(data.usuarios || []);
      } else {
        console.error('Erro ao carregar usuários');
      }
    } catch (error) {
      console.error('Erro ao conectar com o servidor:', error);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    carregarUsuarios();
  }, []);

  // Criar novo usuário
  const criarUsuario = async (e) => {
    e.preventDefault();
    
    if (!novoUsuario.nome || !novoUsuario.email || !novoUsuario.senha) {
      mostrarMensagem('Todos os campos são obrigatórios!', 'erro');
      return;
    }

    try {
      const response = await fetch(`${baseUrl}/dev/criar-usuario`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoUsuario),
      });

      const data = await response.json();

      if (response.ok) {
        mostrarMensagem('Usuário criado com sucesso!', 'sucesso');
        setNovoUsuario({ nome: '', email: '', senha: '', papel: 'REPRESENTANTE' });
        setMostrarFormulario(false);
        carregarUsuarios();
      } else {
        mostrarMensagem(data.message || 'Erro ao criar usuário', 'erro');
      }
    } catch (error) {
      mostrarMensagem('Erro ao conectar com o servidor', 'erro');
    }
  };

  // Deletar usuário
  const deletarUsuario = async (email) => {
    if (!confirm(`Tem certeza que deseja deletar o usuário ${email}?`)) {
      return;
    }

    try {
      const response = await fetch(`${baseUrl}/dev/usuarios/${encodeURIComponent(email)}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (response.ok) {
        mostrarMensagem('Usuário deletado com sucesso!', 'sucesso');
        carregarUsuarios();
      } else {
        mostrarMensagem(data.message || 'Erro ao deletar usuário', 'erro');
      }
    } catch (error) {
      mostrarMensagem('Erro ao conectar com o servidor', 'erro');
    }
  };

  // Mostrar mensagem temporária
  const mostrarMensagem = (texto, tipo) => {
    setMensagem(texto);
    setTipoMensagem(tipo);
    setTimeout(() => {
      setMensagem('');
      setTipoMensagem('');
    }, 5000);
  };

  // Gerar usuários de exemplo
  const gerarUsuariosExemplo = async () => {
    const usuariosExemplo = [
      { nome: 'Admin Teste', email: 'admin.teste@dev.com', senha: 'admin123', papel: 'ADMINISTRADOR' },
      { nome: 'Fornecedor Teste', email: 'fornecedor.teste@dev.com', senha: 'fornecedor123', papel: 'FORNECEDOR' },
      { nome: 'Representante Teste', email: 'representante.teste@dev.com', senha: 'representante123', papel: 'REPRESENTANTE' },
    ];

    for (const usuario of usuariosExemplo) {
      try {
        await fetch(`${baseUrl}/dev/criar-usuario`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(usuario),
        });
      } catch (error) {
        console.error('Erro ao criar usuário de exemplo:', error);
      }
    }

    mostrarMensagem('Usuários de exemplo criados!', 'sucesso');
    carregarUsuarios();
  };

  const getPapelCor = (papel) => {
    switch (papel) {
      case 'ADMINISTRADOR': return 'bg-red-100 text-red-800';
      case 'FORNECEDOR': return 'bg-blue-100 text-blue-800';
      case 'REPRESENTANTE': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <LayoutPrincipal>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            🛠️ Gerenciamento de Usuários - Desenvolvimento
          </h1>
          <p className="text-gray-600">
            Ferramenta para criar e gerenciar usuários de teste durante o desenvolvimento.
          </p>
        </div>

        {/* Mensagem de feedback */}
        {mensagem && (
          <div className={`mb-4 p-4 rounded-lg ${
            tipoMensagem === 'sucesso' 
              ? 'bg-green-100 border border-green-400 text-green-700'
              : 'bg-red-100 border border-red-400 text-red-700'
          }`}>
            {mensagem}
          </div>
        )}

        {/* Botões de ação */}
        <div className="mb-6 flex gap-4">
          <button
            onClick={() => setMostrarFormulario(!mostrarFormulario)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            {mostrarFormulario ? '❌ Cancelar' : '➕ Novo Usuário'}
          </button>
          
          <button
            onClick={gerarUsuariosExemplo}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            🎯 Gerar Usuários de Exemplo
          </button>
          
          <button
            onClick={carregarUsuarios}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            🔄 Atualizar Lista
          </button>
        </div>

        {/* Formulário de criação */}
        {mostrarFormulario && (
          <div className="mb-6 bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-semibold mb-4">Criar Novo Usuário</h2>
            <form onSubmit={criarUsuario} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  value={novoUsuario.nome}
                  onChange={(e) => setNovoUsuario({ ...novoUsuario, nome: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ex: João Silva"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={novoUsuario.email}
                  onChange={(e) => setNovoUsuario({ ...novoUsuario, email: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ex: joao@exemplo.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Senha
                </label>
                <input
                  type="text"
                  value={novoUsuario.senha}
                  onChange={(e) => setNovoUsuario({ ...novoUsuario, senha: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ex: senha123"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de Usuário
                </label>
                <select
                  value={novoUsuario.papel}
                  onChange={(e) => setNovoUsuario({ ...novoUsuario, papel: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="REPRESENTANTE">🤝 Representante</option>
                  <option value="FORNECEDOR">🏭 Fornecedor</option>
                  <option value="ADMINISTRADOR">👨‍💼 Administrador</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  ✅ Criar Usuário
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Lista de usuários */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Usuários Cadastrados ({usuarios.length})</h2>
          </div>
          
          {carregando ? (
            <div className="p-6 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <p className="mt-2 text-gray-600">Carregando usuários...</p>
            </div>
          ) : usuarios.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              <p>Nenhum usuário encontrado.</p>
              <p className="text-sm mt-1">Clique em "Gerar Usuários de Exemplo" para começar.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Usuário
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tipo
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {usuarios.map((usuario) => (
                    <tr key={usuario.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{usuario.nome}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{usuario.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPapelCor(usuario.papel)}`}>
                          {usuario.papel}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500 font-mono">{usuario.id}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => deletarUsuario(usuario.email)}
                          className="text-red-600 hover:text-red-900 transition-colors"
                        >
                          🗑️ Deletar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Informações de desenvolvimento */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">ℹ️ Informações de Desenvolvimento</h3>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Esta ferramenta é apenas para desenvolvimento e não deve ser usada em produção</li>
            <li>• Os usuários criados aqui são armazenados em memória e serão perdidos ao reiniciar o servidor</li>
            <li>• Use os usuários criados para testar diferentes fluxos da aplicação</li>
            <li>• As senhas são visíveis aqui para facilitar os testes</li>
          </ul>
        </div>
      </div>
    </LayoutPrincipal>
  );
}