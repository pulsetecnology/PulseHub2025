import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ServicoClientes from '../../servicos/ServicoClientes';
import { usarCorTema } from '../../utils/coresTema';

export default function FormularioCliente({ clienteExistente = null }) {
  const router = useRouter();
  const isEdicao = !!clienteExistente;
  const { classes } = usarCorTema();

  const [dadosCliente, setDadosCliente] = useState({
    razaoSocial: '',
    nomeFantasia: '',
    cnpj: '',
    inscricaoEstadual: '',
    telefoneComercial: '',
    emailComercial: '',
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    nomeContato: '',
    emailContato: '',
    telefoneContato: '',
    limiteCredito: 0.00,
    condicoesPagamento: '',
  });

  const [salvando, setSalvando] = useState(false);
  const [erros, setErros] = useState({});

  useEffect(() => {
    if (clienteExistente) {
      setDadosCliente({
        razaoSocial: clienteExistente.razaoSocial || '',
        nomeFantasia: clienteExistente.nomeFantasia || '',
        cnpj: clienteExistente.cnpj || '',
        inscricaoEstadual: clienteExistente.inscricaoEstadual || '',
        telefoneComercial: clienteExistente.telefoneComercial || '',
        emailComercial: clienteExistente.emailComercial || '',
        cep: clienteExistente.cep || '',
        rua: clienteExistente.rua || '',
        numero: clienteExistente.numero || '',
        complemento: clienteExistente.complemento || '',
        bairro: clienteExistente.bairro || '',
        cidade: clienteExistente.cidade || '',
        estado: clienteExistente.estado || '',
        nomeContato: clienteExistente.nomeContato || '',
        emailContato: clienteExistente.emailContato || '',
        telefoneContato: clienteExistente.telefoneContato || '',
        limiteCredito: clienteExistente.limiteCredito || 0.00,
        condicoesPagamento: clienteExistente.condicoesPagamento || '',
      });
    }
  }, [clienteExistente]);

  const handleInputChange = (campo, valor) => {
    setDadosCliente(prev => ({
      ...prev,
      [campo]: valor
    }));

    if (erros[campo]) {
      setErros(prev => ({
        ...prev,
        [campo]: null
      }));
    }
  };

  const validarFormulario = () => {
    const novosErros = {};

    if (!dadosCliente.razaoSocial.trim()) {
      novosErros.razaoSocial = 'Razão Social é obrigatória';
    }
    if (!dadosCliente.cnpj.trim()) {
      novosErros.cnpj = 'CNPJ é obrigatório';
    }
    if (!dadosCliente.emailComercial.trim()) {
      novosErros.emailComercial = 'Email Comercial é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dadosCliente.emailComercial)) {
      novosErros.emailComercial = 'Email Comercial inválido';
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validarFormulario()) {
      return;
    }

    setSalvando(true);
    const servicoClientes = new ServicoClientes();

    try {
      if (isEdicao) {
        servicoClientes.atualizar({ ...clienteExistente, ...dadosCliente });
        console.log('Cliente atualizado com sucesso!');
      } else {
        servicoClientes.adicionar(dadosCliente);
        console.log('Cliente criado com sucesso!');
      }
      router.push('/clientes');
    } catch (error) {
      console.error('Erro ao salvar cliente:', error);
      alert('Erro ao salvar cliente: ' + error.message);
    } finally {
      setSalvando(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => router.push('/clientes')}
        className="flex items-center text-indigo-600 hover:text-indigo-700 transition-colors mb-6"
      >
        <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Voltar para Clientes
      </button>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Informações Básicas */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Informações Básicas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Razão Social *
              </label>
              <input
                type="text"
                value={dadosCliente.razaoSocial}
                onChange={(e) => handleInputChange('razaoSocial', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white ${
                  erros.razaoSocial ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="Ex: Empresa Exemplo Ltda."
              />
              {erros.razaoSocial && (
                <p className="mt-1 text-sm text-red-600">{erros.razaoSocial}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nome Fantasia
              </label>
              <input
                type="text"
                value={dadosCliente.nomeFantasia}
                onChange={(e) => handleInputChange('nomeFantasia', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
                placeholder="Ex: Exemplo Comércio"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                CNPJ *
              </label>
              <input
                type="text"
                value={dadosCliente.cnpj}
                onChange={(e) => handleInputChange('cnpj', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white ${
                  erros.cnpj ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="00.000.000/0000-00"
              />
              {erros.cnpj && (
                <p className="mt-1 text-sm text-red-600">{erros.cnpj}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Inscrição Estadual (IE)
              </label>
              <input
                type="text"
                value={dadosCliente.inscricaoEstadual}
                onChange={(e) => handleInputChange('inscricaoEstadual', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Telefone Comercial
              </label>
              <input
                type="text"
                value={dadosCliente.telefoneComercial}
                onChange={(e) => handleInputChange('telefoneComercial', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Comercial *
              </label>
              <input
                type="email"
                value={dadosCliente.emailComercial}
                onChange={(e) => handleInputChange('emailComercial', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white ${
                  erros.emailComercial ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="contato@empresa.com"
              />
              {erros.emailComercial && (
                <p className="mt-1 text-sm text-red-600">{erros.emailComercial}</p>
              )}
            </div>
          </div>
        </div>

        {/* Endereço */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Endereço
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                CEP
              </label>
              <input
                type="text"
                value={dadosCliente.cep}
                onChange={(e) => handleInputChange('cep', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Rua
              </label>
              <input
                type="text"
                value={dadosCliente.rua}
                onChange={(e) => handleInputChange('rua', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Número
              </label>
              <input
                type="text"
                value={dadosCliente.numero}
                onChange={(e) => handleInputChange('numero', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Complemento
              </label>
              <input
                type="text"
                value={dadosCliente.complemento}
                onChange={(e) => handleInputChange('complemento', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Bairro
              </label>
              <input
                type="text"
                value={dadosCliente.bairro}
                onChange={(e) => handleInputChange('bairro', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Cidade
              </label>
              <input
                type="text"
                value={dadosCliente.cidade}
                onChange={(e) => handleInputChange('cidade', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Estado
              </label>
              <input
                type="text"
                value={dadosCliente.estado}
                onChange={(e) => handleInputChange('estado', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Informações de Contato */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Informações de Contato (Pessoa Responsável)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nome do Contato
              </label>
              <input
                type="text"
                value={dadosCliente.nomeContato}
                onChange={(e) => handleInputChange('nomeContato', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email do Contato
              </label>
              <input
                type="email"
                value={dadosCliente.emailContato}
                onChange={(e) => handleInputChange('emailContato', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Telefone do Contato
              </label>
              <input
                type="text"
                value={dadosCliente.telefoneContato}
                onChange={(e) => handleInputChange('telefoneContato', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Informações de Pagamento/Crédito */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Informações de Pagamento/Crédito
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Limite de Crédito
              </label>
              <input
                type="number"
                step="0.01"
                value={dadosCliente.limiteCredito}
                onChange={(e) => handleInputChange('limiteCredito', parseFloat(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Condições de Pagamento
              </label>
              <input
                type="text"
                value={dadosCliente.condicoesPagamento}
                onChange={(e) => handleInputChange('condicoesPagamento', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Ações */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 p-6">
          <div className="space-y-3">
            <button
              type="submit"
              disabled={salvando}
              className={`w-full px-4 py-3 ${classes.bg} text-white rounded-lg ${classes.bgHover} transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center`}
            >
              {salvando ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  {isEdicao ? 'Atualizando...' : 'Salvando...'}
                </>
              ) : (
                <>
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {isEdicao ? 'Atualizar Cliente' : 'Salvar Cliente'}
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => router.push('/clientes')}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}