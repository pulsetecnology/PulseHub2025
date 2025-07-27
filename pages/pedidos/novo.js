import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import LayoutPrincipal from '../../src/front-end/componentes/layout/LayoutPrincipal';
import CriarPedido from '../../src/front-end/componentes/pedidos/CriarPedido';
import { obterPapelUsuario, PAPEIS } from '../../src/front-end/utils/papelUsuario';

export default function NovoPedido() {
  const router = useRouter();
  const [papelUsuario, setPapelUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const papel = obterPapelUsuario();
    setPapelUsuario(papel);
    
    // Se não for representante, redirecionar para pedidos
    if (papel !== PAPEIS.REPRESENTANTE) {
      router.push('/pedidos');
      return;
    }
    
    setCarregando(false);
  }, [router]);

  // Mostrar loading enquanto verifica permissões
  if (carregando) {
    return (
      <LayoutPrincipal titulo="Carregando...">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        </div>
      </LayoutPrincipal>
    );
  }

  // Se não for representante, não renderizar nada (já foi redirecionado)
  if (papelUsuario !== PAPEIS.REPRESENTANTE) {
    return null;
  }

  return (
    <LayoutPrincipal
      titulo="Novo Pedido"
      subtitulo="Criar um novo pedido para cliente"
      botaoVoltar={{
        texto: 'Voltar para Pedidos',
        href: '/pedidos'
      }}
    >
      <CriarPedido />
    </LayoutPrincipal>
  );
}