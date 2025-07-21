# PulseHub - Aspectos Funcionais

Este documento descreve as funcionalidades do sistema PulseHub, dividindo-as entre as já implementadas e as planejadas, com base nos requisitos e no plano de implementação.

## Visão Geral Funcional

O PulseHub é uma plataforma B2B projetada para conectar fornecedores de moda e representantes comerciais, permitindo a gestão digital de catálogos, pedidos e relacionamentos comerciais. O objetivo é modernizar e otimizar o processo de vendas por atacado no setor de moda.

## Funcionalidades Implementadas (Modelos de Dados e Serviços de Negócio)

Até o momento, os seguintes modelos de dados e serviços de negócio foram implementados, incluindo suas validações e testes unitários:

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

## Funcionalidades Planejadas (Próximos Passos)

As seguintes funcionalidades estão planejadas para futuras etapas de desenvolvimento:

- **Implementação de APIs RESTful (Tarefa 5.x)**: Exposição dos serviços de negócio através de endpoints RESTful para autenticação, usuários, produtos, pedidos, clientes, comissões, relatórios e notificações.
- **Desenvolvimento da Interface de Usuário Frontend (Tarefa 6.x)**: Criação de componentes de autenticação, painéis para fornecedores, representantes e administradores, visualização de catálogo, interface de criação de pedidos e dashboards de relatórios.
- **Otimizações para Dispositivos Móveis (Tarefa 7.x)**: Implementação de design responsivo, otimização de imagens e funcionalidade offline.
- **Implementação de Pontos de Integração (Tarefa 9.x)**: Desenvolvimento de API Gateway, formatos padronizados para integração e webhooks para notificações.
