import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import LayoutPrincipal from '../../../src/front-end/componentes/layout/LayoutPrincipal';
import FormularioProduto from '../../../src/front-end/componentes/produtos/FormularioProduto';
import ServicoProdutos from '../../../src/front-end/servicos/ServicoProdutos';

export default function EditarProduto() {
  const router = useRouter();
  const { id } = router.query;
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    if (id) {
      setCarregando(true);
      
      // Simular delay de carregamento
      setTimeout(() => {
        const produtoCarregado = ServicoProdutos.obterPorId(id);
        setProduto(produtoCarregado);
        setCarregando(false);
      }, 500);
    }
  }, [id]);

  if (carregando) {
    return (
      <LayoutPrincipal titulo="Carregando...">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        </div>
      </LayoutPrincipal>
    );
  }

  if (!produto) {
    return (
      <LayoutPrincipal titulo="Produto não encontrado">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Produto não encontrado</h2>
          <button
            onClick={() => router.push('/produtos')}
            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Voltar para Produtos
          </button>
        </div>
      </LayoutPrincipal>
    );
  }

  return (
    <LayoutPrincipal 
      titulo={`Editar: ${produto.nome}`} 
      subtitulo="Atualize as informações do produto"
    >
      <FormularioProduto produto={produto} />
    </LayoutPrincipal>
  );
}