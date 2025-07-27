import React from 'react';
import LayoutPrincipal from '../src/front-end/componentes/layout/LayoutPrincipal';
import Dashboard from '../src/front-end/componentes/relatorios/Dashboard';

export default function Relatorios() {
  return (
    <LayoutPrincipal
      titulo="Relatórios"
      subtitulo="Dashboard com métricas e análises de desempenho"
    >
      <Dashboard />
    </LayoutPrincipal>
  );
}