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

## Como Começar

Esta seção deve ser atualizada com as instruções detalhadas de configuração e execução do projeto.

1.  **Instalação de Dependências:**
    ```bash
    # Comando para instalar dependências
    ```

2.  **Configuração do Ambiente:**
    ```bash
    # Passos para configurar as variáveis de ambiente
    ```

3.  **Executando os Servidores:**
    ```bash
    # Comando para iniciar a plataforma
    ```

## Próximos Passos

- [ ] Detalhar as instruções na seção "Como Começar".
- [ ] Adicionar documentação sobre os endpoints da API.
- [ ] Descrever o fluxo de dados e a interação entre os microsserviços.
