import React, { useState, useEffect } from 'react';

export default function ModalUsuario({ mostrar, usuario, onFechar, onSalvar }) {
  const [dadosUsuario, setDadosUsuario] = useState({
    nome: '',
    email: '',
    tipo: 'Representante',
    empresa: '',
    telefone: '',
    status: 'ativo',
    senha: '',
    confirmarSenha: ''
  });

  const [erros, setErros] = useState({});
  const [salvando, setSalvando] = useState(false);

  useEffect(() => {
    if (usuario) {
      // Editando usuário existente
      setDadosUsuario({
        nome: usuario.nome || '',
        email: usuario.email || '',
        tipo: usuario.tipo || 'Representante',
        empresa: usuario.empresa || '',
        telefone: usuario.telefone || '',
        status: usuario.status || 'ativo',
        senha: '',
        confirmarSenha: ''
      });
    } else {
      // Novo usuário
      setDadosUsuario({
        nome: '',
        email: '',
        tipo: 'Representante',
        empresa: '',
        telefone: '',
        status: 'ativo',
        senha: '',
        confirmarSenha: ''
      });
    }
    setErros({});
  }, [usuario, mostrar]);

  const validarFormulario = () => {
    const novosErros = {};

    if (!dadosUsuario.nome.trim()) {
      novosErros.nome = 'Nome é obrigatório';
    }

    if (!dadosUsuario.email.trim()) {
      novosErros.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dadosUsuario.email)) {
      novosErros.email = 'Email inválido';
    }

    if (!dadosUsuario.empresa.trim()) {
      novosErros.empresa = 'Empresa é obrigatória';
    }

    if (!usuario) {
      // Validações apenas para novo usuário
      if (!dadosUsuario.senha) {
        novosErros.senha = 'Senha é obrigatória';
      } else if (dadosUsuario.senha.length < 6) {
        novosErros.senha = 'Senha deve ter pelo menos 6 caracteres';
      }

      if (dadosUsuario.senha !== dadosUsuario.confirmarSenha) {
        novosErros.confirmarSenha = 'Senhas não coincidem';
      }
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validarFormulario()) {
      return;
    }

    setSalvando(true);

    try {
      // Simular salvamento
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const dadosParaSalvar = { ...dadosUsuario };
      if (usuario) {
        dadosParaSalvar.id = usuario.id;
      }
      
      onSalvar(dadosParaSalvar);
      onFechar();
    } catch (error) {
      console.error('Erro ao salvar usuário:', error);
    } finally {
      setSalvando(false);
    }
  };

  const handleInputChange = (campo, valor) => {
    setDadosUsuario(prev => ({
      ...prev,
      [campo]: valor
    }));

    // Limpar erro do campo quando usuário começar a digitar
    if (erros[campo]) {
      setErros(prev => ({
        ...prev,
        [campo]: ''
      }));
    }
  };

  const tiposUsuario = [
    { value: 'Administrador', label: 'Administrador' },
    { value: 'Fornecedor', label: 'Fornecedor' },
    { value: 'Representante', label: 'Representante' }
  ];

  const statusOptions = [
    { value: 'ativo', label: 'Ativo' },
    { value: 'inativo', label: 'Inativo' },
    { value: 'pendente', label: 'Pendente' }
  ];

  if (!mostrar) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <form onSubmit={handleSubmit}>
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              {usuario ? 'Editar Usuário' : 'Novo Usuário'}
            </h3>
            <button
              type="button"
              onClick={onFechar}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-4">
            {/* Nome */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nome Completo *
              </label>
              <input
                type="text"
                value={dadosUsuario.nome}
                onChange={(e) => handleInputChange('nome', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white ${
                  erros.nome 
                    ? 'border-red-300 dark:border-red-600' 
                    : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="Digite o nome completo"
              />
              {erros.nome && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{erros.nome}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email *
              </label>
              <input
                type="email"
                value={dadosUsuario.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white ${
                  erros.email 
                    ? 'border-red-300 dark:border-red-600' 
                    : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="email@exemplo.com"
              />
              {erros.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{erros.email}</p>
              )}
            </div>

            {/* Tipo de Usuário */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Tipo de Usuário *
              </label>
              <select
                value={dadosUsuario.tipo}
                onChange={(e) => handleInputChange('tipo', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                {tiposUsuario.map(tipo => (
                  <option key={tipo.value} value={tipo.value}>
                    {tipo.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Empresa */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Empresa *
              </label>
              <input
                type="text"
                value={dadosUsuario.empresa}
                onChange={(e) => handleInputChange('empresa', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white ${
                  erros.empresa 
                    ? 'border-red-300 dark:border-red-600' 
                    : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="Nome da empresa"
              />
              {erros.empresa && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{erros.empresa}</p>
              )}
            </div>

            {/* Telefone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Telefone
              </label>
              <input
                type="tel"
                value={dadosUsuario.telefone}
                onChange={(e) => handleInputChange('telefone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="(11) 99999-9999"
              />
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Status
              </label>
              <select
                value={dadosUsuario.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                {statusOptions.map(status => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Senha (apenas para novo usuário) */}
            {!usuario && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Senha *
                  </label>
                  <input
                    type="password"
                    value={dadosUsuario.senha}
                    onChange={(e) => handleInputChange('senha', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white ${
                      erros.senha 
                        ? 'border-red-300 dark:border-red-600' 
                        : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="Mínimo 6 caracteres"
                  />
                  {erros.senha && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{erros.senha}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Confirmar Senha *
                  </label>
                  <input
                    type="password"
                    value={dadosUsuario.confirmarSenha}
                    onChange={(e) => handleInputChange('confirmarSenha', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white ${
                      erros.confirmarSenha 
                        ? 'border-red-300 dark:border-red-600' 
                        : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="Confirme a senha"
                  />
                  {erros.confirmarSenha && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{erros.confirmarSenha}</p>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="flex justify-end space-x-3 p-6 border-t border-gray-200 dark:border-gray-700">
            <button
              type="button"
              onClick={onFechar}
              className="px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={salvando}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            >
              {salvando && (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              )}
              {salvando ? 'Salvando...' : (usuario ? 'Atualizar' : 'Criar Usuário')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}