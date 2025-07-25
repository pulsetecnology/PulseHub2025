// Função para gerar URLs de imagens placeholder para produtos de moda
export function obterImagemProduto(categoria, nome, id) {
  // Usar o serviço Picsum Photos para imagens reais
  const baseUrl = 'https://picsum.photos';
  
  // Definir seeds baseados no ID do produto para consistência
  const seed = `produto-${id}`;
  
  // Dimensões padrão para produtos
  const width = 400;
  const height = 400;
  
  // Mapear categorias para filtros de cor (aproximado)
  const filtrosPorCategoria = {
    'Roupas Femininas': '?grayscale', // Tons mais suaves
    'Roupas Masculinas': '?blur=1', // Ligeiramente desfocado
    'Roupas Unissex': '', // Colorido normal
    'Calçados': '?random=1', // Aleatório
    'Acessórios': '?random=2' // Outro aleatório
  };
  
  const filtro = filtrosPorCategoria[categoria] || '';
  
  return `${baseUrl}/seed/${seed}/${width}/${height}${filtro}`;
}

// Função alternativa usando placeholder.com para mais controle
export function obterImagemProdutoAlternativa(categoria, nome, id) {
  const cores = {
    'Roupas Femininas': 'FF69B4/FFFFFF', // Rosa
    'Roupas Masculinas': '4169E1/FFFFFF', // Azul
    'Roupas Unissex': '9370DB/FFFFFF', // Roxo
    'Calçados': '8B4513/FFFFFF', // Marrom
    'Acessórios': 'FFD700/000000' // Dourado
  };
  
  const cor = cores[categoria] || '808080/FFFFFF';
  const texto = encodeURIComponent(nome.substring(0, 20));
  
  return `https://via.placeholder.com/400x400/${cor}?text=${texto}`;
}

// Mapeamento de imagens específicas para produtos mockados
export const imagensProdutosMockados = {
  1: 'https://picsum.photos/seed/vestido-floral/400/400',
  2: 'https://picsum.photos/seed/tenis-esportivo/400/400?random=1',
  3: 'https://picsum.photos/seed/bolsa-couro/400/400?random=2',
  4: 'https://picsum.photos/seed/camisa-social/400/400?random=3',
  5: 'https://picsum.photos/seed/jaqueta-jeans/400/400?random=4',
  6: 'https://picsum.photos/seed/sandalia-elegante/400/400?random=5',
  7: 'https://picsum.photos/seed/relogio-masculino/400/400?random=6',
  8: 'https://picsum.photos/seed/blusa-estampada/400/400?random=7',
  9: 'https://picsum.photos/seed/calca-jeans-slim/400/400?random=8',
  10: 'https://picsum.photos/seed/oculos-sol/400/400?random=9',
  11: 'https://picsum.photos/seed/vestido-longo/400/400?random=10',
  12: 'https://picsum.photos/seed/sapato-social/400/400?random=11'
};