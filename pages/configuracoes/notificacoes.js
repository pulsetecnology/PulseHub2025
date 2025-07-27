import React from 'react';
import LayoutPrincipal from '../../src/front-end/componentes/layout/LayoutPrincipal';
import PreferenciasNotificacao from '../../src/front-end/componentes/notificacoes/PreferenciasNotificacao';

export default function ConfiguracoesNotificacoes() {
  return (
    <LayoutPrincipal
      titulo="Configurações de Notificação"
      subtitulo="Gerencie suas preferências de notificação"
      botaoVoltar={{
        texto: 'Voltar',
        href: '/configuracoes'
      }}
    >
      <PreferenciasNotificacao />
    </LayoutPrincipal>
  );
}