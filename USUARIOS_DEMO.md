# Usuários de Demonstração - PulseHub

Este documento lista os usuários de demonstração disponíveis para teste da plataforma.

## 🔐 Credenciais de Acesso

### 👨‍💼 Administrador
- **Nome:** Carlos Oliveira
- **Email:** `admin@pulsehub.com`
- **Senha:** `admin123`
- **Acesso:** Painel administrativo completo
- **URL:** `/admin`

### 🏭 Fornecedor
- **Nome:** João Silva
- **Email:** `fornecedor@exemplo.com`
- **Senha:** `fornecedor123`
- **Acesso:** Gerenciamento de produtos e pedidos
- **URL:** `/painel`

### 🤝 Representante
- **Nome:** Maria Santos
- **Email:** `representante@exemplo.com`
- **Senha:** `representante123`
- **Acesso:** Gerenciamento de clientes e vendas
- **URL:** `/painel-representante`

## 🚀 Como Usar

1. Acesse a página de login: `/login`
2. Clique em "Mostrar usuários de demonstração"
3. Clique no cartão do tipo de usuário desejado
4. Os campos de email e senha serão preenchidos automaticamente
5. Clique em "Entrar" para acessar o sistema

## 📱 Funcionalidades por Tipo de Usuário

### Administrador
- ✅ Dashboard com métricas gerais
- ✅ Gerenciamento completo de usuários
- ✅ Configurações do sistema
- ✅ Relatórios administrativos
- ✅ Notificações do sistema
- ✅ Controle de acesso e permissões

### Fornecedor
- ✅ Dashboard de fornecedor
- ✅ Gerenciamento de produtos
- ✅ Controle de estoque
- ✅ Monitoramento de pedidos
- ✅ Gestão de comissões
- ✅ Relatórios de vendas

### Representante
- ✅ Dashboard de representante
- ✅ Gerenciamento de clientes
- ✅ Criação e acompanhamento de pedidos
- ✅ Catálogo de produtos
- ✅ Histórico de vendas
- ✅ Comissões e metas

## 🔧 Configuração Técnica

Os usuários de demonstração são configurados em:
- **Frontend:** `src/front-end/servicos/ServicoAutenticacao.ts`
- **Middleware:** `middleware.js` (detecção de papel via token)
- **Utilitários:** `src/front-end/utils/papelUsuario.js`

### Formato do Token
O token simulado segue o formato: `simulado-PAPEL-hash-timestamp-random`
- **PAPEL**: ADMINISTRADOR, FORNECEDOR ou REPRESENTANTE
- **hash**: Hash base64 do email para identificação
- **timestamp**: Timestamp de criação
- **random**: String aleatória para unicidade

## 🎨 Interface de Login

A tela de login inclui um painel expansível que mostra:
- Tipo de usuário com indicador colorido
- Nome completo do usuário
- Descrição das permissões
- Email e senha visíveis
- Preenchimento automático ao clicar

## 🔄 Redirecionamento Automático

O sistema redireciona automaticamente baseado no tipo de usuário:
- **Administrador** → `/admin`
- **Fornecedor** → `/painel`
- **Representante** → `/painel-representante`

## 📝 Notas de Desenvolvimento

- Os usuários são simulados e não persistem no banco de dados
- As senhas são visíveis para facilitar os testes
- O sistema funciona em modo de simulação quando o servidor MCP não está disponível
- Todos os dados são mockados para demonstração