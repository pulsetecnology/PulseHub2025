import React from 'react';
import { usarCorTema } from '../../utils/coresTema';

export default function InformacoesCliente({ 
  cliente, 
  clientes = [], 
  onClienteChange, 
  readonly = false 
}) {
  const { classes } = usarCorTema();

  const getInitials = (nome) => {
    if (!nome) return 'CL';
    return nome
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  const formatarTelefone = (telefone) => {
    if (!telefone) return '';
    return telefone.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
  };

  const formatarCNPJ = (cnpj) => {
    if (!cnpj) return '';
    return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <svg className="h-5 w-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Informações do Cliente
        </h3>
        {!readonly && (
          <button className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center">
            <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Alterar Cliente
          </button>
        )}
      </div>

      {cliente ? (
        <div className="flex items-start space-x-4">
          {/* Avatar do Cliente */}
          <div className={`flex-shrink-0 w-16 h-16 ${classes.bg} rounded-full flex items-center justify-center`}>
            <span className="text-lg font-semibold text-white">
              {getInitials(cliente.nomeFantasia || cliente.razaoSocial)}
            </span>
          </div>

          {/* Informações Principais */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white truncate">
                {cliente.nomeFantasia || cliente.razaoSocial}
              </h4>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                Ativo
              </span>
            </div>

            {cliente.nomeFantasia && cliente.razaoSocial && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Razão Social: {cliente.razaoSocial}
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {/* Coluna 1 - Contato */}
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400">
                    {cliente.emailComercial || cliente.email || 'Email não informado'}
                  </span>
                </div>

                <div className="flex items-center text-sm">
                  <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400">
                    {formatarTelefone(cliente.telefoneComercial || cliente.telefone) || 'Telefone não informado'}
                  </span>
                </div>

                {cliente.cnpj && (
                  <div className="flex items-center text-sm">
                    <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">
                      CNPJ: {formatarCNPJ(cliente.cnpj)}
                    </span>
                  </div>
                )}
              </div>

              {/* Coluna 2 - Endereço */}
              <div className="space-y-3">
                {(cliente.rua || cliente.cidade) && (
                  <div className="flex items-start text-sm">
                    <svg className="h-4 w-4 text-gray-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className="text-gray-600 dark:text-gray-400">
                      {cliente.rua && (
                        <div>
                          {cliente.rua}
                          {cliente.numero && `, ${cliente.numero}`}
                        </div>
                      )}
                      {cliente.bairro && (
                        <div>{cliente.bairro}</div>
                      )}
                      {cliente.cidade && (
                        <div>{cliente.cidade} - {cliente.estado}</div>
                      )}
                      {cliente.cep && (
                        <div>CEP: {cliente.cep}</div>
                      )}
                    </div>
                  </div>
                )}

                {(cliente.limiteCredito !== undefined && cliente.limiteCredito !== null) && (
                  <div className="flex items-center text-sm">
                    <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">
                      Limite de Crédito: R$ {cliente.limiteCredito.toFixed(2)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Estado quando não há cliente selecionado
        <div className="text-center py-8">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">Nenhum cliente selecionado</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Selecione um cliente para continuar com o pedido.
          </p>
          {!readonly && onClienteChange && (
            <div className="mt-6">
              <select
                onChange={(e) => onClienteChange(e.target.value)}
                className="w-full max-w-xs px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">Selecione um cliente</option>
                {clientes.map(cliente => (
                  <option key={cliente.id} value={cliente.id}>
                    {cliente.nomeFantasia || cliente.razaoSocial}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      )}
    </div>
  );
}