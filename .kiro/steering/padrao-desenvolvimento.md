# Padrões de Desenvolvimento - PulseHub B2B

## Nomenclatura e Idioma

### Padrão de Idioma
- Todo o código, incluindo nomes de variáveis, métodos, classes, arquivos e pastas, deve ser escrito em português (pt-BR)
- Comentários e documentação também devem ser escritos em português
- Exceções podem ser feitas apenas para termos técnicos sem tradução adequada

### Convenções de Nomenclatura
- Classes: PascalCase (ex: `ServicoUsuario`, `RepositorioCliente`)
- Interfaces: Prefixo "I" + PascalCase (ex: `IUsuario`, `IRepositorioBase`)
- Métodos e funções: camelCase (ex: `criarUsuario`, `buscarPorId`)
- Variáveis: camelCase (ex: `nomeUsuario`, `listaClientes`)
- Constantes: SNAKE_CASE_MAIÚSCULO (ex: `LIMITE_MAXIMO`, `TEMPO_EXPIRACAO`)
- Arquivos: PascalCase para classes/componentes, camelCase para utilitários
- Pastas: camelCase (ex: `funcionalidades`, `compartilhado`)

## Estrutura de Pastas

### Back-end
- Seguir a estrutura de pastas definida no documento de padrões de arquitetura
- Organização por funcionalidades (feature-based)

### Front-end
- Todos os arquivos relacionados ao front-end devem estar na pasta `src/front-end`
- Subpastas obrigatórias:
  - `componentes`: Componentes React reutilizáveis
  - `paginas`: Páginas/telas da aplicação
  - `estilos`: Arquivos CSS, SCSS ou configurações de estilo
- Arquivos de configuração relacionados ao front-end (como tailwind.config.js) devem ser movidos para dentro da estrutura do front-end quando possível

## Padrões de Código

### Formatação
- Indentação: 2 espaços
- Ponto e vírgula ao final das instruções
- Chaves em nova linha para classes e funções
- Aspas simples para strings

### Documentação
- Comentários devem explicar "por quê", não "o quê" ou "como"
- Métodos públicos devem ter documentação explicando seu propósito, parâmetros e retorno
- Código complexo deve ser documentado adequadamente

## Testes

### Nomenclatura de Testes
- Arquivos de teste devem ter o sufixo `.test.ts` ou `.test.tsx`
- Descrições de testes devem ser em português e explicar claramente o comportamento esperado