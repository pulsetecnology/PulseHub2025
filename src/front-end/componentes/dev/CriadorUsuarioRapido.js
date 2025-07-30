import React, { useState } from 'react';

const CriadorUsuarioRapido = ({ onUsuarioCriado }) => {
  const [carregando, setCarregando] = useState(false);
  const [mensagem, setMensagem] = useState('');
  const [mostrarPainel, setMostrarPainel] = useState(false);

  const baseUrl = process.env.NEXT_PUBLIC_AUTH_API_URL || 'http://localhost:3001';

  const usuariosRapidos = [
    {
      nome: 'Admin Desenvolvimento',
      email: 'admin@dev.local',
      senha: 'admin123',
      papel: 'ADMINISTRADOR',
      icone: '👨‍💼',
      cor: 'bg-red-500 hover:bg-red-600'
    },
    {
      nome: 'Fornecedor Desenvolvimento',
      email: 'fornecedor@dev.local',
      senha: 'fornecedor123',
      papel: 'FORNECEDOR',
      icone: '🏭',
      cor: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      nome: 'Representante Desenvolvimento',
      email: 'representante@dev.local',
      senha: 'representante123',
      papel: 'REPRESENTANTE',
      icone: '🤝',
      cor: 'bg-green-500 hover:bg-green-600'
    }
  ];

  const criarUsuarioRapido = async (usuario) => {
    setCarregando(true);
    setMensagem('');

    try {
      const response = await fetch(`${baseUrl}/dev/criar-usuario`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });

      const data = await response.json();

      if (response.ok) {
        setMensagem(`✅ ${usuario.nome} criado com sucesso!`);
        if (onUsuarioCriado) {
          onUsuarioCriado(usuario);
        }
      } else {
        if (data.message && data.message.includes('já em uso')) {
          setMensagem(`ℹ️ ${usuario.nome} já existe - pode usar as credenciais`);
          if (onUsuarioCriado) {
            onUsuarioCriado(usuario);
          }
        } else {
          setMensagem(`❌ Erro: ${data.message}`);
        }
      }
    } catch (error) {
      setMensagem('❌ Erro ao conectar com o servidor');
    } finally {
      setCarregando(false);
      setTimeout(() => setMensagem(''), 3000);
    }
  };

  const criarTodosUsuarios = async () => {
    setCarregando(true);
    setMensagem('Criando usuários de desenvolvimento...');

    for (const usuario of usuariosRapidos) {
      await criarUsuarioRapido(usuario);
      await new Promise(resolve => setTimeout(resolve, 500)); // Pequeno delay entre criações
    }

    setMensagem('✅ Todos os usuários de desenvolvimento foram criados!');
    setCarregando(false);
  };

  if (process.env.NODE_ENV !== 'development') {
    return null; // Não mostrar em produção
  }

  return (
    <div className="mt-6 border-t pt-6">
      <button
        onClick={() => setMostrarPainel(!mostrarPainel)}
        className="text-sm text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-2"
      >
        🛠️ Ferramentas de Desenvolvimento
        <span className={`transform transition-transform ${mostrarPainel ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {mostrarPainel && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            🚀 Criação Rápida de Usuários de Teste
          </h3>
          
          {mensagem && (
            <div className="mb-3 p-2 bg-blue-50 border border-blue-200 rounded text-sm text-blue-700">
              {mensagem}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            {usuariosRapidos.map((usuario, index) => (
              <button
                key={index}
                onClick={() => criarUsuarioRapido(usuario)}
                disabled={carregando}
                className={`${usuario.cor} text-white p-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <div className="text-lg mb-1">{usuario.icone}</div>
                <div className="text-xs font-medium">{usuario.papel}</div>
                <div className="text-xs opacity-90">{usuario.email}</div>
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={criarTodosUsuarios}
              disabled={carregando}
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {carregando ? '⏳ Criando...' : '🎯 Criar Todos'}
            </button>
            
            <a
              href="/dev/usuarios"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm transition-colors"
            >
              🛠️ Gerenciar Usuários
            </a>
          </div>

          <div className="mt-3 text-xs text-gray-500">
            💡 <strong>Dica:</strong> Após criar, use as credenciais acima para fazer login e testar diferentes fluxos.
          </div>
        </div>
      )}
    </div>
  );
};

export default CriadorUsuarioRapido;