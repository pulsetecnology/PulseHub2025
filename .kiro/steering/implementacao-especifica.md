---
inclusion: always
---

# Diretrizes de Implementação Específica - PulseHub

## Segurança e Compliance

### Controle de Acesso
- Implementar middleware de autenticação em todas as rotas protegidas
- Verificação de permissões deve ser granular (recurso + ação)
- Tokens devem incluir claims específicos para roles e permissões
- Implementar rate limiting por usuário e por endpoint

### Auditoria Obrigatória
- Todas as ações críticas devem gerar logs de auditoria
- Logs devem ser imutáveis e assinados digitalmente
- Incluir contexto completo: usuário, timestamp, dados alterados, IP, user-agent
- Retenção diferenciada por tipo de dado (financeiro: 7 anos, operacional: 2 anos)

## Performance e Escalabilidade

### Sincronização Assíncrona
- Usar padrão Event-Driven Architecture para sincronização
- Implementar Event Sourcing para mudanças críticas
- Filas separadas por prioridade (alta, média, baixa)
- Dead Letter Queue para mensagens que falharam múltiplas vezes

### Cache Strategy
- Cache de catálogos por representante com TTL de 1 hora
- Invalidação de cache baseada em eventos
- Cache distribuído usando Redis Cluster
- Cache warming para dados frequentemente acessados

## Resiliência e Confiabilidade

### Retry e Circuit Breaker
- Retry com backoff exponencial (base: 2s, max: 60s, tentativas: 5)
- Circuit breaker para serviços externos (threshold: 50% falhas em 1 min)
- Timeout configurável por serviço (padrão: 30s)
- Fallback strategies para funcionalidades críticas

### Monitoramento Proativo
- Health checks com diferentes níveis (shallow, deep)
- SLA monitoring com alertas automáticos
- Métricas de negócio em tempo real
- Dashboards específicos por role de usuário

## Integração e Comunicação

### WebSocket para Real-time
- Conexões WebSocket autenticadas com JWT
- Rooms separadas por contexto (pedidos, chat, notificações)
- Heartbeat para detectar conexões perdidas
- Fallback para polling quando WebSocket não disponível

### API Design
- Versionamento semântico obrigatório
- Paginação cursor-based para grandes datasets
- Filtros e ordenação padronizados
- Compressão gzip para responses > 1KB

## Dados e Persistência

### Backup e Recovery
- Backup incremental diário, completo semanal
- Teste de restore mensal automatizado
- RTO: 4 horas, RPO: 1 hora
- Backup cross-region para disaster recovery

### Data Privacy
- Criptografia em repouso para dados sensíveis
- Anonimização de dados para analytics
- Right to be forgotten implementado
- Data retention policies automatizadas

## Desenvolvimento e Deploy

### CI/CD Pipeline
- Testes automatizados obrigatórios (unit, integration, e2e)
- Code coverage mínimo: 80%
- Security scanning em todas as builds
- Deploy blue-green para produção

### Code Quality
- Linting obrigatório (ESLint + Prettier)
- Pre-commit hooks para validação
- Code review obrigatório para main branch
- Documentação inline para funções públicas

## Específico do Domínio

### Gestão de Pedidos
- Estados de pedido bem definidos com transições válidas
- Validação de business rules antes de mudanças de estado
- Notificações automáticas para mudanças críticas
- Histórico completo de alterações

### Catálogo de Produtos
- Versionamento de produtos para histórico
- Validação de integridade referencial
- Otimização automática de imagens
- Search indexing para busca rápida

### Comissões
- Cálculo de comissões em tempo real
- Versionamento de regras de comissão
- Auditoria completa de alterações
- Relatórios automáticos de comissões