# PulseHub - Aspectos Funcionais

Este documento descreve as funcionalidades do sistema PulseHub, dividindo-as entre as já implementadas e as planejadas, com base nos requisitos e no plano de implementação.

## Visão Geral Funcional

O PulseHub é uma plataforma B2B projetada para conectar fornecedores de moda e representantes comerciais, permitindo a gestão digital de catálogos, pedidos e relacionamentos comerciais. O objetivo é modernizar e otimizar o processo de vendas por atacado no setor de moda.

## Funcionalidades Implementadas

Até o momento, as seguintes funcionalidades foram implementadas, incluindo suas validações e testes unitários:

### Modelos de Dados (Tarefa 2.x)
- **Usuário**: Gestão de informações básicas de usuários.
- **Fornecedor**: Gestão de dados de fornecedores.
- **Representante**: Gestão de dados de representantes comerciais.
- **Produto**: Gestão de produtos com suporte a variantes.
- **Cliente**: Gestão de dados de clientes lojistas.
- **Pedido**: Gestão de pedidos com itens associados.
- **Comissão**: Gestão de comissões com regras de negócio.
- **Notificação**: Modelo para registro e gerenciamento de notificações.

### Serviços de Negócio (Tarefa 4.x)
- **Serviço de Autenticação**: Lógica de registro, autenticação (login) e geração de tokens JWT.
- **Serviço de Usuário**: Operações CRUD para gerenciamento de usuários.
- **Serviço de Produto**: Operações CRUD para gerenciamento de produtos.
- **Serviço de Pedido**: Operações CRUD para gerenciamento de pedidos.
- **Serviço de Comissão**: Operações CRUD para gerenciamento de comissões e cálculo de valores.
- **Serviço de Cliente**: Operações CRUD para gerenciamento de clientes.
- **Serviço de Notificação**: Lógica para envio e gerenciamento de notificações.

### APIs RESTful (Tarefa 5.x)
- **API de Autenticação (MCP)**: Endpoints para registro e login de usuários.
- **API de Notificação (MCP)**: Endpoints para envio e gerenciamento de notificações.
- **API de Usuário**: Endpoints CRUD para gerenciamento de usuários.
- **API de Produto**: Endpoints CRUD para gerenciamento de produtos.
- **API de Pedido**: Endpoints CRUD para gerenciamento de pedidos.
- **API de Cliente**: Endpoints CRUD para gerenciamento de clientes.
- **API de Comissão**: Endpoints CRUD para gerenciamento de comissões.
- **API de Relatórios**: Endpoints para geração de relatórios (vendas, comissões).

### Configuração e Ambiente de Desenvolvimento
- **`tsconfig.json`**: Configuração do compilador TypeScript para garantir a correta transpilação e verificação de tipos.
- **`package.json` e `package-lock.json`**: Gerenciamento de dependências e scripts de projeto, incluindo scripts para build (`npm run build`) e testes (`npm test`).

## Frontend (Implementado)

O frontend foi significativamente desenvolvido com funcionalidades completas e interface moderna:

### Sistema de Autenticação
- **Tela de Login Redesenhada**: Interface moderna com suporte a tema escuro/claro
- **Usuários de Demonstração**: Sistema completo com 3 tipos de usuário (Admin, Fornecedor, Representante)
- **Redirecionamento Automático**: Baseado no papel do usuário após login
- **Middleware de Autenticação**: Proteção de rotas e detecção automática de papel
- **Formulários de Autenticação**: Login, registro e recuperação de senha com validação

### Sistema de Carrinho de Compras
- **Componente Carrinho**: Modal dropdown com interface completa
- **Ícone com Badge**: Contador dinâmico de itens no header
- **Serviço Singleton**: Gerenciamento consistente de estado do carrinho
- **Integração com Produtos**: Adição direta do catálogo e página de detalhes
- **Seleção de Cliente**: Interface para associar pedidos a clientes
- **Cálculos Automáticos**: Subtotais, totais e formatação de moeda

### Sistema de Notificações Visuais
- **Centro de Notificações**: Dropdown com histórico de notificações
- **Tipos de Notificação**: Sucesso, erro, aviso, informação, produto, sistema
- **Notificações Contextuais**: Substituição de alerts por feedback visual
- **Persistência Local**: Armazenamento no localStorage
- **Interface Responsiva**: Adaptada para diferentes tamanhos de tela

### Sistema de Temas Dinâmicos
- **16 Cores Disponíveis**: Paleta completa incluindo fúcsia, bege, cinza escuro e salmon
- **Seletor de Cores**: Modal dropdown com grid 8x2 otimizado
- **Tema Escuro/Claro**: Alternância completa em toda a aplicação
- **Persistência de Tema**: Salvamento automático das preferências
- **Classes Dinâmicas**: Sistema completo de cores para todos os componentes

### Interface de Usuário Avançada
- **Sidebar Dinâmico**: Menu contextual baseado no papel do usuário
- **Layout Responsivo**: Adaptação automática para desktop, tablet e mobile
- **Modais Padronizadas**: Sistema consistente para carrinho, notificações e seletor de cores
- **Fechamento Inteligente**: Clique fora das modais para fechar
- **Transições Suaves**: Animações CSS otimizadas

### Componentes e Estrutura
- **Componentes Reutilizáveis**: Formulários, botões, inputs, modais e cards
- **Páginas Completas**: Login, painéis, catálogo, produtos e administração
- **Hooks Personalizados**: `usarAutenticacao`, `usarCorTema`, `useValidacao`
- **Utilitários Avançados**: Validadores, formatadores, redirecionamento por papel
- **Componentes de Desenvolvimento**: Criador rápido de usuários para testes

### Configuração Frontend
- **Tailwind CSS**: Configuração personalizada com sistema de cores dinâmico
- **Estrutura Organizada**: Separação clara entre componentes, páginas, serviços e utils
- **TypeScript**: Tipagem completa em componentes críticos
- **Padrões Consistentes**: Nomenclatura em português e boas práticas React

## Funcionalidades Planejadas (Próximos Passos)

As seguintes funcionalidades estão planejadas para futuras etapas de desenvolvimento:

### Desenvolvimento da Interface de Usuário Frontend (Tarefa 6.x - Parcialmente Implementado)
- ✅ **Componentes de Autenticação**: Telas de login, registro e redefinição de senha implementadas
- ✅ **Painéis de Usuário**: Interfaces específicas para fornecedores, representantes e administradores
- ✅ **Visualização de Catálogo**: Interface completa para navegação e visualização de produtos
- ✅ **Sistema de Carrinho**: Fluxo completo de adição de produtos e preparação de pedidos
- 🔄 **Interface de Criação de Pedidos**: Em desenvolvimento - integração carrinho → pedido
- 🔄 **Dashboards de Relatórios**: Visualizações de dados e gráficos para análise de negócios

#### Estrutura do Front-end
A estrutura do front-end está organizada da seguinte forma:
- **Componentes**: Componentes React reutilizáveis (ex: `Botao.tsx`, `CartaoProduto.tsx`).
- **Páginas**: Páginas/telas da aplicação (ex: `PaginaInicial.tsx`, `DetalhesProduto.tsx`).
- **Estilos**: Arquivos CSS e configurações de estilo, incluindo estilos globais.
- **Hooks**: Hooks personalizados com prefixo "usar" (ex: `usarAutenticacao.ts`, `usarCarrinho.ts`).
- **Utils**: Utilitários para formatação, validação e outras funções auxiliares.
- **Configuração**: Arquivos de configuração do front-end (Tailwind, ESLint, TypeScript).

#### Padrões de Desenvolvimento do Front-end
- **Nomenclatura**: Todo o código em português (pt-BR), seguindo convenções específicas.
- **Componentes**: Cada componente em seu próprio arquivo, tipado com TypeScript.
- **Estilos**: Utilização de Tailwind CSS para estilização.
- **Boas Práticas**: Componentes pequenos e focados, uso de React Hooks, lazy loading e acessibilidade.

### Otimizações para Dispositivos Móveis (Tarefa 7.x)
- **Design Responsivo**: Adaptação de layouts para diferentes tamanhos de tela.
- **Otimização de Imagens**: Carregamento adaptativo e lazy loading.
- **Funcionalidade Offline**: Armazenamento local de dados e sincronização.

### Implementação de Pontos de Integração (Tarefa 9.x)
- **API Gateway**: Desenvolvimento de roteamento, autenticação e limitação de taxa.
- **Formatos Padronizados**: Criação de formatos para integração com sistemas externos.
- **Webhooks**: Sistema de notificações via webhooks para eventos importantes.