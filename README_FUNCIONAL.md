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

## Frontend (Em Desenvolvimento)

O desenvolvimento do frontend está em andamento, com os seguintes componentes já iniciados:

### Componentes e Estrutura
- **Componentes Base**: Componentes reutilizáveis como Logotipo e outros elementos de UI.
- **Páginas**: Estrutura inicial de páginas como Painel.
- **Hooks**: Hooks personalizados como `usarAutenticacao` para gerenciamento de estado de autenticação.
- **Utilitários**: Funções auxiliares como validadores e formatadores.

### Configuração Frontend
- **Tailwind CSS**: Configuração personalizada para estilização consistente.
- **Estrutura de Pastas**: Organização em componentes, páginas, estilos, configuração, utils e hooks.

## Funcionalidades Planejadas (Próximos Passos)

As seguintes funcionalidades estão planejadas para futuras etapas de desenvolvimento:

### Desenvolvimento da Interface de Usuário Frontend (Tarefa 6.x)
- **Componentes de Autenticação**: Telas de login, registro e redefinição de senha.
- **Painéis de Usuário**: Interfaces específicas para fornecedores, representantes e administradores.
- **Visualização de Catálogo**: Interface para navegação e visualização de produtos.
- **Interface de Criação de Pedidos**: Fluxo completo para criação e gerenciamento de pedidos.
- **Dashboards de Relatórios**: Visualizações de dados e gráficos para análise de negócios.

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