import React from 'react';
import Modal from './Modal';

const ModalConfirmacao = ({ 
  aberto, 
  onFechar, 
  onConfirmar, 
  titulo, 
  mensagem, 
  textoBotaoConfirmar = 'Confirmar',
  textoBotaoCancelar = 'Cancelar',
  tipoConfirmacao = 'padrao', // 'padrao', 'perigo', 'sucesso'
  carregando = false
}) => {
  const obterClassesBotao = () => {
    switch (tipoConfirmacao) {
      case 'perigo':
        return 'bg-red-600 hover:bg-red-700 text-white';
      case 'sucesso':
        return 'bg-green-600 hover:bg-green-700 text-white';
      default:
        return 'bg-blue-600 hover:bg-blue-700 text-white';
    }
  };

  const obterIcone = () => {
    switch (tipoConfirmacao) {
      case 'perigo':
        return (
          <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        );
      case 'sucesso':
        return (
          <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return (
          <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <Modal isOpen={aberto} onClose={onFechar}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 mr-4">
              {obterIcone()}
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {titulo}
              </h3>
            </div>
          </div>
          
          <div className="mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {mensagem}
            </p>
          </div>
          
          <div className="flex justify-end space-x-3">
            <button
              onClick={onFechar}
              disabled={carregando}
              className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
            >
              {textoBotaoCancelar}
            </button>
            <button
              onClick={onConfirmar}
              disabled={carregando}
              className={`px-4 py-2 text-sm rounded-md transition-colors disabled:opacity-50 flex items-center gap-2 ${obterClassesBotao()}`}
            >
              {carregando && (
                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              {textoBotaoConfirmar}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalConfirmacao;