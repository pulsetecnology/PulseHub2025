import React, { useState, useEffect } from 'react';
import LayoutPrincipal from '../../src/front-end/componentes/layout/LayoutPrincipal';
import ListaProdutos from '../../src/front-end/componentes/produtos/ListaProdutos';
import { obterPapelUsuario, PAPEIS } from '../../src/front-end/utils/papelUsuario';

export default function ProdutosPage() {
  const [papelUsuario, setPapelUsuario] = useState(PAPEIS.REPRESENTANTE);

  useEffect(() => {
    const papel = obterPapelUsuario();
    setPapelUsuario(papel);
  }, []);

  // Definir título e subtítulo baseado no papel do usuário
  const getTituloSubtitulo = () => {
    switch (papelUsuario) {
      case PAPEIS.ADMINISTRADOR:
        return {
          titulo: 'Catálogo Geral',
          subtitulo: 'Visualize todos os produtos da plataforma'
        };
      case PAPEIS.FORNECEDOR:
        return {
          titulo: 'Meus Produtos',
          subtitulo: 'Gerencie seu catálogo de produtos'
        };
      case PAPEIS.REPRESENTANTE:
        return {
          titulo: 'Catálogo de Produtos',
          subtitulo: 'Explore produtos disponíveis para venda'
        };
      default:
        return {
          titulo: 'Produtos',
          subtitulo: 'Catálogo de produtos'
        };
    }
  };

  const { titulo, subtitulo } = getTituloSubtitulo();

  return (
    <LayoutPrincipal 
      titulo={titulo}
      subtitulo={subtitulo}
    >
      <ListaProdutos papelUsuario={papelUsuario} />
    </LayoutPrincipal>
  );
}