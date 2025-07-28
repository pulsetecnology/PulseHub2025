# Design Document

## Overview

Este documento define o design para a melhoria da tela de edição de pedidos, transformando-a em uma interface moderna, visualmente atraente e funcionalmente rica. O design foca em melhorar a experiência do usuário através de uma hierarquia visual clara, componentes interativos e feedback imediato.

## Architecture

### Component Structure
```
EditarPedidoPage
├── HeaderPedido (status, número, data)
├── InformacoesCliente (card com avatar/ícone)
├── GerenciadorItens (tabela interativa)
├── ResumoFinanceiro (cálculos em tempo real)
├── ObservacoesPedido (textarea expandível)
├── HistoricoAlteracoes (timeline de mudanças)
└── AcoesPedido (botões contextuais)
```

### State Management
- Estado local para dados do pedido em edição
- Estado para controle de UI (loading, validação, modais)
- Estado para cálculos financeiros em tempo real
- Estado para histórico de alterações

### Data Flow
1. Carregamento inicial dos dados do pedido
2. Validação em tempo real durante edição
3. Recálculo automático de totais
4. Persistência de rascunho automática
5. Finalização com validação completa

## Components and Interfaces

### HeaderPedido Component
```typescript
interface HeaderPedidoProps {
  pedido: Pedido;
  onStatusChange?: (status: string) => void;
}
```

**Features:**
- Badge de status com cores contextuais
- Número do pedido em destaque
- Data de criação formatada
- Indicador de última modificação
- Breadcrumb de navegação

### InformacoesCliente Component
```typescript
interface InformacoesClienteProps {
  cliente: Cliente;
  onClienteChange: (clienteId: string) => void;
  readonly?: boolean;
}
```

**Features:**
- Card com avatar/ícone do cliente
- Nome fantasia em destaque
- Informações de contato organizadas
- Link para detalhes do cliente
- Seletor de cliente (se editável)

### GerenciadorItens Component
```typescript
interface GerenciadorItensProps {
  itens: ItemPedido[];
  produtos: Produto[];
  onItensChange: (itens: ItemPedido[]) => void;
  readonly?: boolean;
}
```

**Features:**
- Tabela responsiva com imagens de produtos
- Controles inline para quantidade
- Cálculo automático de subtotais
- Botões de ação (adicionar, remover)
- Validação em tempo real
- Busca de produtos com autocomplete

### ResumoFinanceiro Component
```typescript
interface ResumoFinanceiroProps {
  subtotal: number;
  desconto: number;
  frete: number;
  total: number;
  onDescontoChange: (valor: number) => void;
  onFreteChange: (valor: number) => void;
  readonly?: boolean;
}
```

**Features:**
- Cards com valores destacados
- Inputs para desconto e frete
- Cálculo automático do total
- Formatação monetária
- Indicadores visuais de mudanças
- Validação de valores

### AcoesPedido Component
```typescript
interface AcoesPedidoProps {
  pedido: Pedido;
  onSalvar: () => Promise<void>;
  onFinalizar: () => Promise<void>;
  onExcluir: () => Promise<void>;
  onCancelar: () => Promise<void>;
  loading: boolean;
}
```

**Features:**
- Botões contextuais baseados no status
- Estados de loading
- Confirmações para ações destrutivas
- Feedback visual de sucesso/erro
- Atalhos de teclado

## Data Models

### Pedido Enhanced
```typescript
interface Pedido {
  id: string;
  numero: string;
  clienteId: string;
  cliente: Cliente;
  itens: ItemPedido[];
  subtotal: number;
  desconto: number;
  frete: number;
  total: number;
  status: StatusPedido;
  observacoes: string;
  dataCreacao: string;
  dataAtualizacao: string;
  historico: HistoricoAlteracao[];
  representanteId: string;
}
```

### HistoricoAlteracao
```typescript
interface HistoricoAlteracao {
  id: string;
  timestamp: string;
  usuario: string;
  acao: 'criado' | 'editado' | 'finalizado' | 'cancelado' | 'excluido';
  detalhes: string;
  dadosAnteriores?: any;
  dadosNovos?: any;
}
```

### ItemPedido Enhanced
```typescript
interface ItemPedido {
  id: string;
  produtoId: string;
  produto: Produto;
  quantidade: number;
  precoUnitario: number;
  subtotal: number;
  observacoes?: string;
}
```

## Error Handling

### Validation Strategy
- Validação em tempo real para campos críticos
- Validação completa antes da finalização
- Mensagens de erro contextuais e claras
- Prevenção de perda de dados

### Error Types
```typescript
interface ValidationError {
  field: string;
  message: string;
  type: 'required' | 'invalid' | 'range' | 'custom';
}
```

### Error Display
- Inline errors para campos específicos
- Toast notifications para ações
- Modal de confirmação para erros críticos
- Indicadores visuais de campos com erro

## Testing Strategy

### Unit Tests
- Componentes individuais
- Funções de cálculo
- Validações
- Formatação de dados

### Integration Tests
- Fluxo completo de edição
- Salvamento e finalização
- Interação entre componentes
- Estados de loading e erro

### E2E Tests
- Cenários de uso completos
- Diferentes tipos de usuário
- Fluxos de aprovação/cancelamento
- Responsividade

## UI/UX Enhancements

### Visual Hierarchy
- Tipografia escalada (h1, h2, h3)
- Cores contextuais para status
- Espaçamento consistente
- Agrupamento lógico de informações

### Interactive Elements
- Hover states para todos os botões
- Loading states para ações assíncronas
- Transições suaves
- Feedback tátil (animações)

### Responsive Design
- Layout adaptativo para mobile
- Tabelas responsivas
- Navegação otimizada para touch
- Priorização de conteúdo

### Accessibility
- Navegação por teclado
- Screen reader support
- Contraste adequado
- Labels descritivos

## Performance Considerations

### Optimization Strategies
- Lazy loading de componentes pesados
- Debounce para cálculos automáticos
- Memoização de componentes estáticos
- Otimização de re-renders

### Data Management
- Cache local para produtos/clientes
- Persistência automática de rascunhos
- Sincronização inteligente
- Rollback em caso de erro

## Security Considerations

### Data Protection
- Validação server-side
- Sanitização de inputs
- Controle de acesso por role
- Auditoria de alterações

### Business Rules
- Validação de limites de crédito
- Verificação de disponibilidade
- Controle de status transitions
- Prevenção de edição concorrente

## Implementation Notes

### Technology Stack
- React com TypeScript
- Next.js para SSR
- Tailwind CSS para styling
- React Hook Form para formulários
- Framer Motion para animações

### Development Phases
1. **Phase 1:** Componentes base e layout
2. **Phase 2:** Funcionalidades interativas
3. **Phase 3:** Validações e error handling
4. **Phase 4:** Otimizações e polish
5. **Phase 5:** Testes e documentação

### Migration Strategy
- Implementação gradual
- Fallback para versão anterior
- Feature flags para controle
- Monitoramento de performance