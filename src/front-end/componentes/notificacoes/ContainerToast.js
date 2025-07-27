import React, { useState, useEffect } from 'react';
import NotificacaoToast from './NotificacaoToast';

let toastId = 0;
let adicionarToastGlobal = null;

export const mostrarToast = (notificacao) => {
  if (adicionarToastGlobal) {
    adicionarToastGlobal(notificacao);
  }
};

export default function ContainerToast() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    adicionarToastGlobal = (notificacao) => {
      const novoToast = {
        id: ++toastId,
        ...notificacao
      };
      
      setToasts(prev => [...prev, novoToast]);
    };

    return () => {
      adicionarToastGlobal = null;
    };
  }, []);

  const removerToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <NotificacaoToast
          key={toast.id}
          notificacao={toast}
          onFechar={() => removerToast(toast.id)}
        />
      ))}
    </div>
  );
}

// Funções de conveniência para mostrar diferentes tipos de toast
export const mostrarSucesso = (titulo, mensagem, acao) => {
  mostrarToast({
    tipo: 'sucesso',
    titulo,
    mensagem,
    acao
  });
};

export const mostrarErro = (titulo, mensagem, acao) => {
  mostrarToast({
    tipo: 'erro',
    titulo,
    mensagem,
    acao
  });
};

export const mostrarAviso = (titulo, mensagem, acao) => {
  mostrarToast({
    tipo: 'aviso',
    titulo,
    mensagem,
    acao
  });
};

export const mostrarInfo = (titulo, mensagem, acao) => {
  mostrarToast({
    tipo: 'info',
    titulo,
    mensagem,
    acao
  });
};