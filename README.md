# PulseHub

## Visão Geral

PulseHub é uma plataforma de integração B2B (Business-to-Business) projetada para atuar como um hub central para orquestração de eventos e processos de negócio. A arquitetura é orientada a eventos, permitindo uma comunicação desacoplada e em tempo real entre diferentes sistemas.

O foco principal da plataforma inclui a gestão de ciclos de vida de pedidos, atualização de catálogos e comunicação via chat.

## Estrutura do Projeto

A estrutura do repositório está organizada da seguinte forma:

- **`.kiro/`**: Contém o cérebro do projeto, com todas as especificações, configurações, regras de negócio e definições de eventos (hooks).
  - `hooks/`: Definições de eventos como `pedido-criado`, `status-pedido-atualizado`, etc.
  - `specs/`: Documentação de design, requisitos e tarefas.
  - `steering/`: Diretrizes de arquitetura e regras de negócio.

- **`mcp-servers/`**: Contém as implementações dos servidores e microsserviços que compõem a plataforma operacional.

- **`src/`**: Contém o código-fonte principal da aplicação, organizado por domínios e camadas.
  - `src/funcionalidades/`: Módulos de negócio (e.g., `usuarios`, `produtos`, `pedidos`).
  - `src/compartilhado/`: Código compartilhado, como tipos, utilitários e constantes.
  - `src/infraestrutura/`: Implementações de infraestrutura, como acesso a banco de dados e integrações com APIs externas.
  - `src/gerado/prisma/`: Cliente Prisma gerado automaticamente para interação com o banco de dados.

## Como Começar

Esta seção detalha os passos para configurar e executar o projeto localmente.

1.  **Instalação de Dependências:**
    Certifique-se de ter o Node.js e o npm (ou yarn) instalados. Em seguida, instale as dependências do projeto:
    ```bash
    npm install
    # ou
    yarn install
    ```

2.  **Configuração do Banco de Dados (PostgreSQL com Prisma):**
    O projeto utiliza PostgreSQL como banco de dados e Prisma como ORM. Você precisará configurar a variável de ambiente `DATABASE_URL` no arquivo `.env` na raiz do projeto. Exemplo:
    ```
    DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase?schema=public"
    ```
    Após configurar a URL do banco de dados, execute as migrações do Prisma para criar o esquema do banco de dados:
    ```bash
    npx prisma migrate dev --name initial_migration
    ```

3.  **Executando os Servidores:**
    Esta seção será atualizada conforme os servidores forem implementados.
    ```bash
    # Comando para iniciar a plataforma
    ```

## Próximos Passos

- [ ] Detalhar as instruções na seção "Executando os Servidores".
- [ ] Adicionar documentação sobre os endpoints da API.
- [ ] Descrever o fluxo de dados e a interação entre os microsserviços.