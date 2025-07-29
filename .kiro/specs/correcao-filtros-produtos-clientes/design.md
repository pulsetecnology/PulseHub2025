# Design Document

## Overview

Este documento detalha o design para correção dos problemas de estilização nos filtros de produtos e implementação de um sistema completo de filtros para a tela de clientes. O foco está em garantir consistência visual, responsividade e uma experiência de usuário fluida.

## Architecture

### Componentes Principais

1. **ListaProdutos** (existente) - Correção de estilização dos filtros
2. **ListaClientes** (novo) - Implementação completa de filtros
3. **FiltrosProdutos** (refatoração) - Componente dedicado para filtros de produtos
4. **FiltrosClientes** (novo) - Componente dedicado para filtros de clientes
5. **ServicoClientes** (existente) - Extensão para suporte a filtros

### Padrão de Design

- Utilização do hook `usarCorTema` para garantir consistência de cores
- Componentes de filtro reutilizáveis e modulares
- Estados de loading e feedback visual
- Responsividade mobile-first

## Components and Interfaces

### 1. Correção dos Filtros de Produtos

#### Problema Identificado
Os campos de filtro em `ListaProdutos.js` estão usando classes incorretas para o tema escuro, causando fundo escuro no modo claro.

#### Solução
```javascript
// Classe atual problemática:
className={`px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:${classes.ring} focus:${classes.border} bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white`}

// Classe corrigida:
className={`px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400`}
```

### 2. Componente FiltrosClientes

#### Interface
```javascript
interface FiltrosClientesProps {
  onFiltroChange: (filtros: FiltrosClientes) => void;
  totalClientes: number;
  carregando?: boolean;
}

interface FiltrosClientes {
  busca: string;
  cidade: string;
  status: 'ativo' | 'inativo' | '';
  tipo: 'pessoa_fisica' | 'pessoa_juridica' | '';
  ordenacao: 'nome' | 'data_cadastro' | 'ultima_compra';
  visualizacao: 'grid' | 'lista';
}
```

#### Estrutura do Componente
```javascript
const FiltrosClientes = ({ onFiltroChange, totalClientes, carregando }) => {
  const { classes } = usarCorTema();
  const [filtros, setFiltros] = useState({
    busca: '',
    cidade: '',
    status: '',
    tipo: '',
    ordenacao: 'nome',
    visualizacao: 'grid'
  });

  // Lógica de filtros e callbacks
};
```

### 3. Componente ListaClientes

#### Estrutura
- Header com título e contador
- Seção de filtros (FiltrosClientes)
- Grid/Lista de clientes
- Estado vazio quando não há resultados
- Loading state

#### Estados
- `clientes`: Array de clientes
- `clientesFiltrados`: Array filtrado
- `carregando`: Boolean para loading
- `filtrosAtivos`: Objeto com filtros aplicados

## Data Models

### Cliente
```javascript
interface Cliente {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  estado: string;
  tipo: 'pessoa_fisica' | 'pessoa_juridica';
  status: 'ativo' | 'inativo';
  dataCadastro: Date;
  ultimaCompra?: Date;
  totalCompras: number;
  valorTotal: number;
}
```

### FiltrosState
```javascript
interface FiltrosState {
  produtos: {
    busca: string;
    categoria: string;
    ordenacao: string;
    visualizacao: 'grid' | 'lista';
  };
  clientes: {
    busca: string;
    cidade: string;
    status: string;
    tipo: string;
    ordenacao: string;
    visualizacao: 'grid' | 'lista';
  };
}
```

## Error Handling

### Validação de Filtros
- Sanitização de inputs de busca
- Validação de valores de select
- Fallback para valores padrão em caso de erro

### Estados de Erro
- Erro de carregamento de dados
- Erro de aplicação de filtros
- Timeout de requisições

### Feedback Visual
- Loading spinners durante filtros
- Mensagens de erro amigáveis
- Estados vazios informativos

## Testing Strategy

### Testes Unitários
1. **FiltrosClientes**
   - Renderização correta dos campos
   - Aplicação de filtros
   - Callbacks de mudança
   - Responsividade

2. **ListaClientes**
   - Carregamento de dados
   - Aplicação de filtros
   - Estados de loading e erro
   - Paginação (se implementada)

3. **Correções ListaProdutos**
   - Estilização correta em ambos os temas
   - Funcionalidade mantida
   - Responsividade

### Testes de Integração
1. Fluxo completo de filtros de clientes
2. Alternância entre temas (claro/escuro)
3. Navegação entre visualizações (grid/lista)
4. Performance com grandes volumes de dados

### Testes de Acessibilidade
1. Navegação por teclado
2. Screen readers
3. Contraste de cores
4. Labels e ARIA attributes

### Casos de Teste Específicos

#### Filtros de Produtos
- [ ] Campos têm fundo branco no modo claro
- [ ] Campos têm fundo escuro no modo escuro
- [ ] Transição suave entre temas
- [ ] Estados de foco corretos

#### Filtros de Clientes
- [ ] Busca por nome funciona em tempo real
- [ ] Filtro por cidade lista cidades disponíveis
- [ ] Filtro por status (ativo/inativo)
- [ ] Filtro por tipo (PF/PJ)
- [ ] Ordenação por diferentes critérios
- [ ] Alternância entre visualizações
- [ ] Estado vazio quando não há resultados
- [ ] Responsividade em mobile

#### Performance
- [ ] Filtros respondem em menos de 300ms
- [ ] Debounce na busca por texto
- [ ] Lazy loading se necessário
- [ ] Otimização de re-renders