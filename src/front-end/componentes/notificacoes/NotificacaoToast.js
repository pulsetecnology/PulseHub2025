import React, { useState, useEffect } from 'react';
import { usarCorTemaSeguro } from '../../hooks/usarCorTemaSeguro';

export default function NotificacaoToast({ notificacao, onFechar, duracao = 5000 }) {
  const [visivel, setVisivel] = useState(true);
  const [progresso, setProgresso] = useState(100);
  const { classes, mounted } = usarCorTemaSeguro();

  useEffect(() => {
    // Timer para fechar automaticamente
    const timer = setTimeout(() => {
      fecharNotificacao();
    }, duracao);

    // Timer para barra de progresso
    const progressoTimer = setInterval(() => {
      setProgresso(prev => {
        const novoProgresso = prev - (100 / (duracao / 100));
        return novoProgresso <= 0 ? 0 : novoProgresso;
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(progressoTimer);
    };
  }, [duracao]);

  const fecharNotificacao = () => {
    setVisivel(false);
    setTimeout(() => {
      onFechar();
    }, 300); // Aguardar animação
  };

  const getEstilosNotificacao = (tipo) => {
    const estilos = {
      sucesso: {
        bg: 'bg-green-50 dark:bg-green-900/20',
        border: 'border-green-200 dark:border-green-800',
        icone: 'text-green-400',
        titulo: 'text-green-800 dark:text-green-200',
        mensagem: 'text-green-700 dark:text-green-300',
        progresso: 'bg-green-500'
      },
      erro: {
        bg: 'bg-red-50 dark:bg-red-900/20',
        border: 'border-red-200 dark:border-red-800',
        icone: 'text-red-400',
        titulo: 'text-red-800 dark:text-red-200',
        mensagem: 'text-red-700 dark:text-red-300',
        progresso: 'bg-red-500'
      },
      aviso: {
        bg: 'bg-yellow-50 dark:bg-yellow-900/20',
        border: 'border-yellow-200 dark:border-yellow-800',
        icone: 'text-yellow-400',
        titulo: 'text-yellow-800 dark:text-yellow-200',
        mensagem: 'text-yellow-700 dark:text-yellow-300',
        progresso: 'bg-yellow-500'
      },
      info: {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-200 dark:border-blue-800',
        icone: 'text-blue-400',
        titulo: 'text-blue-800 dark:text-blue-200',
        mensagem: 'text-blue-700 dark:text-blue-300',
        progresso: 'bg-blue-500'
      }
    };

    return estilos[tipo] || estilos.info;
  };

  const getIconeNotificacao = (tipo) => {
    const icones = {
      sucesso: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      erro: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
      ),
      aviso: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      ),
      info: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      )
    };

    return icones[tipo] || icones.info;
  };

  const estilos = getEstilosNotificacao(notificacao.tipo);

  return (
    <div
      className={`max-w-sm w-full ${estilos.bg} border ${estilos.border} rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden transition-all duration-300 ${
        visivel ? 'transform translate-x-0 opacity-100' : 'transform translate-x-full opacity-0'
      }`}
    >
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className={estilos.icone}>
              {getIconeNotificacao(notificacao.tipo)}
            </div>
          </div>
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className={`text-sm font-medium ${estilos.titulo}`}>
              {notificacao.titulo}
            </p>
            <p className={`mt-1 text-sm ${estilos.mensagem}`}>
              {notificacao.mensagem}
            </p>
            {notificacao.acao && (
              <div className="mt-2">
                <button
                  onClick={notificacao.acao.callback}
                  className={`text-sm ${classes.text} ${classes.textDark} hover:underline`}
                >
                  {notificacao.acao.texto}
                </button>
              </div>
            )}
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              onClick={fecharNotificacao}
              className={`rounded-md inline-flex ${estilos.titulo} hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            >
              <span className="sr-only">Fechar</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Barra de progresso */}
      <div className="h-1 bg-gray-200 dark:bg-gray-700">
        <div
          className={`h-full ${estilos.progresso} transition-all duration-100 ease-linear`}
          style={{ width: `${progresso}%` }}
        />
      </div>
    </div>
  );
}