---
inclusion: always
---

# Padrões de Arquitetura - PulseHub B2B

## Arquitetura Geral

### Microsserviços
- Arquitetura baseada em microsserviços ou serviços desacoplados
- Cada serviço deve ter responsabilidade única e bem definida
- Comunicação entre serviços via REST APIs e mensageria assíncrona
- Cada serviço deve ter seu próprio banco de dados (Database per Service)

### APIs RESTful
- Utilização de REST APIs como padrão principal
- Preparação para possível migração futura para GraphQL
- Versionamento de APIs obrigatório (v1, v2, etc.)
- Documentação automática com OpenAPI/Swagger

## Organização de Código

### Estrutura de Pastas
- Organização de código por feature (feature-based folders)
- Estrutura sugerida:
  ```
  src/
  ├── features/
  │   ├── auth/
  │   ├── products/
  │   ├── orders/
  │   ├── users/
  │   └── notifications/
  ├── shared/
  │   ├── utils/
  │   ├── types/
  │   └── constants/
  └── infrastructure/
      ├── database/
      ├── messaging/
      └── external-apis/
  ```

### Tecnologias Obrigatórias
- **Frontend**: TypeScript com Next.js
- **Backend**: TypeScript com Node.js
- **Banco de Dados**: PostgreSQL para dados relacionais, Redis para cache
- **Mensageria**: RabbitMQ ou Apache Kafka
- **Comunicação Real-time**: WebSocket ou Firebase Cloud Messaging

## Padrões de Implementação

### Tratamento de Erros
- Usar classes de erro customizadas para diferentes tipos de falha
- Implementar middleware global de tratamento de erros
- Logs estruturados com níveis apropriados (error, warn, info, debug)
- Respostas de erro padronizadas com códigos HTTP corretos

### Validação de Dados
- Validação de entrada usando bibliotecas como Joi ou Yup
- DTOs (Data Transfer Objects) para todas as APIs
- Sanitização de dados de entrada para prevenir ataques
- Validação tanto no frontend quanto no backend

### Autenticação e Autorização
- JWT tokens para autenticação
- Refresh tokens para renovação automática
- Middleware de autorização baseado em roles
- Rate limiting para prevenir ataques de força bruta

## Padrões de Banco de Dados

### Modelagem
- Usar migrations para controle de versão do schema
- Índices apropriados para queries frequentes
- Soft delete para dados críticos (pedidos, usuários)
- Auditoria automática com campos created_at, updated_at, created_by, updated_by

### Performance
- Connection pooling obrigatório
- Query optimization com EXPLAIN ANALYZE
- Cache de queries frequentes no Redis
- Paginação obrigatória para listagens

## Monitoramento e Observabilidade

### Logs
- Logs estruturados em formato JSON
- Correlation IDs para rastrear requests
- Diferentes níveis de log por ambiente
- Centralização de logs com ELK Stack ou similar

### Métricas
- Métricas de performance de APIs (latência, throughput)
- Métricas de negócio (pedidos criados, produtos visualizados)
- Health checks para todos os serviços
- Alertas automáticos para métricas críticas

### Tracing
- Distributed tracing para requests entre serviços
- Instrumentação automática quando possível
- Visualização de traces para debugging
- Performance profiling em ambiente de desenvolvimento