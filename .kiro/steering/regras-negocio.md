---
inclusion: always
---

# Regras de Negócio - PulseHub B2B

## Controle de Acesso e Permissões

### Visualização de Produtos
- Representantes só podem visualizar produtos dos fornecedores que os autorizaram
- A autorização deve ser verificada em cada requisição através de middleware
- Produtos não autorizados devem retornar 403 Forbidden

### Gestão de Comissões
- Cada fornecedor pode definir regras de comissão distintas por representante
- Comissões podem ser definidas por produto, categoria ou representante específico
- Regras mais específicas têm prioridade sobre regras gerais
- Todas as alterações de comissão devem ser registradas com timestamp e usuário responsável

### Restrições de Edição
- A edição de produtos com pedidos em andamento deve ser restrita
- Campos bloqueados: nome do produto, SKU, preço base
- Campos permitidos: descrição, imagens, status de disponibilidade
- Tentativas de edição de campos bloqueados devem gerar log de auditoria

### Priorização de Catálogos
- O sistema deve priorizar exibição de catálogos mais acessados e/ou atualizados
- Métricas de acesso devem ser coletadas por representante e produto
- Cache deve ser invalidado quando catálogos são atualizados
- Algoritmo de ranking deve considerar: frequência de acesso, data de atualização, taxa de conversão

## Rastreabilidade e Auditoria

### Logs de Ação
- Cada ação deve ser rastreável por logs e vinculada a um ID de usuário
- Logs devem incluir: timestamp, usuário, ação, dados antes/depois, IP de origem
- Logs críticos (criação/edição de pedidos, alteração de preços) devem ser imutáveis
- Retenção de logs: 7 anos para dados financeiros, 2 anos para dados operacionais

### Controle de Permissões
- As permissões devem ser controladas por middleware no backend
- Verificação de permissões deve ocorrer antes da execução da lógica de negócio
- Falhas de autorização devem ser logadas e monitoradas
- Tokens JWT devem ter expiração máxima de 24 horas

## Sincronização e Performance

### Sincronização Assíncrona
- A sincronização de dados entre fornecedores e representantes deve ser assíncrona
- Usar filas de mensagens (RabbitMQ) para processamento em background
- Implementar retry com backoff exponencial para falhas de sincronização
- Status de sincronização deve ser visível para usuários administrativos

### Resiliência de Hooks
- As ações de hooks devem ser resilientes a falhas
- Implementar retry automático com backoff exponencial (máximo 5 tentativas)
- Falhas persistentes devem ser enviadas para dead letter queue
- Alertas devem ser disparados para falhas críticas após esgotadas as tentativas

## Validações de Dados

### Integridade de Pedidos
- Validar disponibilidade de produtos antes de confirmar pedidos
- Verificar limites de crédito do cliente antes da aprovação
- Calcular comissões automaticamente baseado nas regras vigentes
- Pedidos devem ter numeração sequencial única por fornecedor

### Consistência de Catálogo
- Produtos devem ter SKU único por fornecedor
- Preços devem ser sempre positivos e ter máximo 2 casas decimais
- Imagens devem ser otimizadas automaticamente (WebP, múltiplos tamanhos)
- Categorias devem seguir taxonomia pré-definida