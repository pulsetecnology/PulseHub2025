# Design Técnico - Vinculação Fornecedor-Representante

## Visão Geral da Arquitetura

Este documento detalha a implementação técnica do sistema de vinculação entre Fornecedores e Representantes, incluindo estruturas de dados, APIs, componentes de interface e fluxos de integração.

## Modelo de Dados

### Tabela: fornecedor_representante

```sql
CREATE TABLE fornecedor_representante (
  id SERIAL PRIMARY KEY,
  fornecedor_id INTEGER NOT NULL REFERENCES usuarios(id),
  representante_id INTEGER NOT NULL REFERENCES usuarios(id),
  status ENUM('ativo', 'inativo', 'pendente', 'recusado', 'expirado') DEFAULT 'pendente',
  comissao_padrao DECIMAL(5,2) DEFAULT 0.00,
  data_vinculacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  data_inativacao TIMESTAMP NULL,
  data_expiracao TIMESTAMP NULL,
  criado_por INTEGER REFERENCES usuarios(id),
  tipo_solicitacao ENUM('fornecedor_convida', 'representante_solicita') NOT NULL,
  motivo_recusa TEXT NULL,
  configuracoes JSON DEFAULT '{}',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  UNIQUE KEY unique_vinculacao (fornecedor_id, representante_id),
  INDEX idx_fornecedor (fornecedor_id),
  INDEX idx_representante (representante_id),
  INDEX idx_status (status),
  INDEX idx_tipo_solicitacao (tipo_solicitacao),
  INDEX idx_criado_por (criado_por),
  INDEX idx_data_vinculacao (data_vinculacao),
  INDEX idx_data_expiracao (data_expiracao)
);
```

### Modificações em Tabelas Existentes

#### Tabela: produtos
```sql
ALTER TABLE produtos 
ADD COLUMN fornecedor_id INTEGER NOT NULL REFERENCES usuarios(id),
ADD INDEX idx_fornecedor_produto (fornecedor_id);
```

#### Tabela: pedidos
```sql
ALTER TABLE pedidos 
ADD COLUMN fornecedor_id INTEGER REFERENCES usuarios(id),
ADD INDEX idx_fornecedor_pedido (fornecedor_id);
```

#### Tabela: clientes
```sql
ALTER TABLE clientes 
ADD COLUMN criado_por INTEGER REFERENCES usuarios(id),
ADD COLUMN tipo_criador ENUM('fornecedor', 'representante') NOT NULL,
ADD INDEX idx_criado_por (criado_por);
```

### Tabela: cliente_acesso (Nova)
```sql
CREATE TABLE cliente_acesso (
  id SERIAL PRIMARY KEY,
  cliente_id INTEGER NOT NULL REFERENCES clientes(id),
  usuario_id INTEGER NOT NULL REFERENCES usuarios(id),
  tipo_acesso ENUM('criador', 'compartilhado') NOT NULL,
  data_compartilhamento TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  UNIQUE KEY unique_acesso (cliente_id, usuario_id),
  INDEX idx_cliente (cliente_id),
  INDEX idx_usuario (usuario_id)
);
```

## APIs e Endpoints

### Vinculações

#### GET /api/fornecedores/representantes
```javascript
// Listar representantes vinculados ao fornecedor logado
{
  "representantes": [
    {
      "id": 123,
      "nome": "João Silva",
      "email": "joao@exemplo.com",
      "empresa": "Representações Silva",
      "status": "ativo",
      "comissao_padrao": 5.00,
      "data_vinculacao": "2024-01-15T10:30:00Z",
      "estatisticas": {
        "pedidos_mes": 15,
        "valor_total_mes": 25000.00,
        "produtos_vendidos": 45
      }
    }
  ],
  "total": 1,
  "pagina": 1,
  "limite": 20
}
```

#### POST /api/fornecedores/representantes/vincular
```javascript
// Criar nova vinculação
{
  "representante_id": 123,
  "comissao_padrao": 5.00,
  "configuracoes": {
    "desconto_maximo": 10.00,
    "prazo_pagamento": 30
  }
}
```

#### PUT /api/fornecedores/representantes/:id
```javascript
// Atualizar vinculação
{
  "status": "ativo",
  "comissao_padrao": 6.00,
  "configuracoes": {
    "desconto_maximo": 15.00
  }
}
```

#### DELETE /api/fornecedores/representantes/:id
```javascript
// Remover vinculação (soft delete)
{
  "motivo": "Término de contrato",
  "data_inativacao": "2024-12-31T23:59:59Z"
}
```

### Convites e Solicitações

#### POST /api/fornecedores/convites/enviar
```javascript
// Fornecedor convida representante
{
  "representante_id": 123,
  "comissao_padrao": 5.00,
  "mensagem": "Gostaria de convidá-lo para ser nosso representante",
  "configuracoes": {
    "desconto_maximo": 10.00,
    "prazo_pagamento": 30
  }
}
```

#### POST /api/representantes/solicitacoes/enviar
```javascript
// Representante solicita parceria com fornecedor
{
  "fornecedor_id": 456,
  "mensagem": "Tenho interesse em representar seus produtos",
  "experiencia": "5 anos no setor de moda",
  "regiao_atuacao": "Sul do Brasil"
}
```

#### GET /api/convites/recebidos
```javascript
// Listar convites recebidos
{
  "convites": [
    {
      "id": 789,
      "tipo": "fornecedor_convida",
      "remetente": {
        "id": 456,
        "nome": "Confecções ABC",
        "email": "contato@confeccoesabc.com"
      },
      "mensagem": "Gostaria de convidá-lo para ser nosso representante",
      "comissao_padrao": 5.00,
      "data_envio": "2024-01-15T10:30:00Z",
      "data_expiracao": "2024-02-15T10:30:00Z",
      "status": "pendente"
    }
  ],
  "total": 1
}
```

#### GET /api/convites/enviados
```javascript
// Listar convites enviados
{
  "convites": [
    {
      "id": 790,
      "tipo": "representante_solicita",
      "destinatario": {
        "id": 123,
        "nome": "João Silva",
        "email": "joao@exemplo.com"
      },
      "mensagem": "Tenho interesse em representar seus produtos",
      "data_envio": "2024-01-10T14:20:00Z",
      "data_expiracao": "2024-02-10T14:20:00Z",
      "status": "pendente"
    }
  ],
  "total": 1
}
```

#### POST /api/convites/:id/aceitar
```javascript
// Aceitar convite
{
  "mensagem_resposta": "Aceito a parceria com prazer!",
  "configuracoes_adicionais": {
    "observacoes": "Pronto para começar imediatamente"
  }
}
```

#### POST /api/convites/:id/recusar
```javascript
// Recusar convite
{
  "motivo": "Já tenho muitos fornecedores na carteira",
  "mensagem_resposta": "Obrigado pelo convite, mas não posso aceitar no momento"
}
```

### Produtos com Filtro de Vinculação

#### GET /api/produtos (Modificado)
```javascript
// Para representantes: retorna apenas produtos de fornecedores vinculados
// Para fornecedores: retorna apenas seus próprios produtos
{
  "produtos": [
    {
      "id": 456,
      "nome": "Camiseta Polo",
      "fornecedor": {
        "id": 789,
        "nome": "Confecções ABC",
        "vinculacao": {
          "comissao": 5.00,
          "status": "ativo"
        }
      }
    }
  ]
}
```

### Pedidos com Isolamento

#### GET /api/pedidos (Modificado)
```javascript
// Filtrado automaticamente por vinculações
{
  "pedidos": [
    {
      "id": 789,
      "numero": "PED-2024-001",
      "representante": {
        "id": 123,
        "nome": "João Silva"
      },
      "fornecedor": {
        "id": 456,
        "nome": "Confecções ABC"
      },
      "itens": [...],
      "total": 1500.00,
      "status": "pendente"
    }
  ]
}
```

## Componentes de Interface

### GerenciadorVinculacoes.js
```javascript
import React, { useState, useEffect } from 'react';
import { ServicoVinculacoes } from '../servicos/ServicoVinculacoes';

const GerenciadorVinculacoes = () => {
  const [representantes, setRepresentantes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVinculacao, setModalVinculacao] = useState(false);

  useEffect(() => {
    carregarRepresentantes();
  }, []);

  const carregarRepresentantes = async () => {
    try {
      const dados = await ServicoVinculacoes.listarRepresentantes();
      setRepresentantes(dados.representantes);
    } catch (error) {
      console.error('Erro ao carregar representantes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleVincular = async (dadosVinculacao) => {
    try {
      await ServicoVinculacoes.criarVinculacao(dadosVinculacao);
      carregarRepresentantes();
      setModalVinculacao(false);
    } catch (error) {
      console.error('Erro ao criar vinculação:', error);
    }
  };

  return (
    <div className="gerenciador-vinculacoes">
      <div className="header">
        <h2>Meus Representantes</h2>
        <button 
          onClick={() => setModalVinculacao(true)}
          className="btn-primary"
        >
          Vincular Representante
        </button>
      </div>

      {loading ? (
        <div className="loading">Carregando...</div>
      ) : (
        <div className="lista-representantes">
          {representantes.map(rep => (
            <CardRepresentante 
              key={rep.id}
              representante={rep}
              onAtualizar={carregarRepresentantes}
            />
          ))}
        </div>
      )}

      {modalVinculacao && (
        <ModalVinculacao 
          onClose={() => setModalVinculacao(false)}
          onVincular={handleVincular}
        />
      )}
    </div>
  );
};

export default GerenciadorVinculacoes;
```

### CardRepresentante.js
```javascript
import React, { useState } from 'react';
import { ServicoVinculacoes } from '../servicos/ServicoVinculacoes';

const CardRepresentante = ({ representante, onAtualizar }) => {
  const [editando, setEditando] = useState(false);
  const [configuracoes, setConfiguracoes] = useState(representante);

  const handleSalvar = async () => {
    try {
      await ServicoVinculacoes.atualizarVinculacao(representante.id, configuracoes);
      setEditando(false);
      onAtualizar();
    } catch (error) {
      console.error('Erro ao atualizar vinculação:', error);
    }
  };

  const handleRemover = async () => {
    if (confirm('Deseja realmente remover esta vinculação?')) {
      try {
        await ServicoVinculacoes.removerVinculacao(representante.id);
        onAtualizar();
      } catch (error) {
        console.error('Erro ao remover vinculação:', error);
      }
    }
  };

  return (
    <div className="card-representante">
      <div className="info-basica">
        <h3>{representante.nome}</h3>
        <p>{representante.empresa}</p>
        <span className={`status ${representante.status}`}>
          {representante.status}
        </span>
      </div>

      <div className="estatisticas">
        <div className="stat">
          <span className="valor">{representante.estatisticas.pedidos_mes}</span>
          <span className="label">Pedidos/Mês</span>
        </div>
        <div className="stat">
          <span className="valor">R$ {representante.estatisticas.valor_total_mes.toLocaleString()}</span>
          <span className="label">Vendas/Mês</span>
        </div>
      </div>

      <div className="configuracoes">
        {editando ? (
          <div className="form-edicao">
            <input 
              type="number" 
              value={configuracoes.comissao_padrao}
              onChange={(e) => setConfiguracoes({...configuracoes, comissao_padrao: e.target.value})}
              placeholder="Comissão %"
            />
            <div className="acoes">
              <button onClick={handleSalvar} className="btn-success">Salvar</button>
              <button onClick={() => setEditando(false)} className="btn-secondary">Cancelar</button>
            </div>
          </div>
        ) : (
          <div className="info-configuracoes">
            <p>Comissão: {representante.comissao_padrao}%</p>
            <div className="acoes">
              <button onClick={() => setEditando(true)} className="btn-primary">Editar</button>
              <button onClick={handleRemover} className="btn-danger">Remover</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardRepresentante;
```

## Serviços

### ServicoVinculacoes.js
```javascript
import { api } from './api';

export class ServicoVinculacoes {
  static async listarRepresentantes(filtros = {}) {
    const params = new URLSearchParams(filtros);
    const response = await api.get(`/fornecedores/representantes?${params}`);
    return response.data;
  }

  static async buscarRepresentantesDisponiveis(termo = '') {
    const response = await api.get(`/representantes/buscar?q=${termo}`);
    return response.data;
  }

  static async criarVinculacao(dados) {
    const response = await api.post('/fornecedores/representantes/vincular', dados);
    return response.data;
  }

  static async atualizarVinculacao(id, dados) {
    const response = await api.put(`/fornecedores/representantes/${id}`, dados);
    return response.data;
  }

  static async removerVinculacao(id, motivo = '') {
    const response = await api.delete(`/fornecedores/representantes/${id}`, {
      data: { motivo }
    });
    return response.data;
  }

  static async obterEstatisticas(representanteId) {
    const response = await api.get(`/fornecedores/representantes/${representanteId}/estatisticas`);
    return response.data;
  }

  static async listarFornecedores() {
    // Para representantes visualizarem seus fornecedores
    const response = await api.get('/representantes/fornecedores');
    return response.data;
  }
}
```

## Middleware de Autorização

### middlewareVinculacao.js
```javascript
import { ServicoVinculacoes } from '../servicos/ServicoVinculacoes';

export const verificarVinculacao = (tipoRecurso) => {
  return async (req, res, next) => {
    try {
      const { user } = req;
      const { id } = req.params;

      // Verificar se usuário tem acesso ao recurso baseado em vinculações
      switch (tipoRecurso) {
        case 'produto':
          if (user.tipo === 'representante') {
            const temAcesso = await verificarAcessoProduto(user.id, id);
            if (!temAcesso) {
              return res.status(403).json({ erro: 'Acesso negado ao produto' });
            }
          }
          break;

        case 'pedido':
          const temAcessoPedido = await verificarAcessoPedido(user.id, id, user.tipo);
          if (!temAcessoPedido) {
            return res.status(403).json({ erro: 'Acesso negado ao pedido' });
          }
          break;

        case 'cliente':
          const temAcessoCliente = await verificarAcessoCliente(user.id, id);
          if (!temAcessoCliente) {
            return res.status(403).json({ erro: 'Acesso negado ao cliente' });
          }
          break;
      }

      next();
    } catch (error) {
      console.error('Erro na verificação de vinculação:', error);
      res.status(500).json({ erro: 'Erro interno do servidor' });
    }
  };
};

const verificarAcessoProduto = async (representanteId, produtoId) => {
  const query = `
    SELECT 1 FROM produtos p
    INNER JOIN fornecedor_representante fr ON p.fornecedor_id = fr.fornecedor_id
    WHERE p.id = ? AND fr.representante_id = ? AND fr.status = 'ativo'
  `;
  const resultado = await db.query(query, [produtoId, representanteId]);
  return resultado.length > 0;
};

const verificarAcessoPedido = async (usuarioId, pedidoId, tipoUsuario) => {
  let query;
  if (tipoUsuario === 'fornecedor') {
    query = `
      SELECT 1 FROM pedidos p
      WHERE p.id = ? AND p.fornecedor_id = ?
    `;
  } else {
    query = `
      SELECT 1 FROM pedidos p
      WHERE p.id = ? AND p.representante_id = ?
    `;
  }
  const resultado = await db.query(query, [pedidoId, usuarioId]);
  return resultado.length > 0;
};

const verificarAcessoCliente = async (usuarioId, clienteId) => {
  const query = `
    SELECT 1 FROM cliente_acesso ca
    WHERE ca.cliente_id = ? AND ca.usuario_id = ?
  `;
  const resultado = await db.query(query, [clienteId, usuarioId]);
  return resultado.length > 0;
};
```

## Sistema de Notificações Direcionadas

### NotificacaoVinculacao.js
```javascript
import { ServicoNotificacoes } from './ServicoNotificacoes';
import { ServicoVinculacoes } from './ServicoVinculacoes';

export class NotificacaoVinculacao {
  static async notificarNovoPedido(pedido) {
    // Notificar apenas o fornecedor dos produtos no pedido
    const fornecedorId = pedido.fornecedor_id;
    
    await ServicoNotificacoes.criar({
      usuario_id: fornecedorId,
      tipo: 'novo_pedido',
      titulo: 'Novo Pedido Recebido',
      mensagem: `Pedido #${pedido.numero} criado por ${pedido.representante.nome}`,
      dados: {
        pedido_id: pedido.id,
        representante_id: pedido.representante_id,
        valor_total: pedido.total
      },
      link: `/pedidos/${pedido.id}`
    });
  }

  static async notificarStatusPedido(pedido, novoStatus) {
    // Notificar apenas o representante que criou o pedido
    await ServicoNotificacoes.criar({
      usuario_id: pedido.representante_id,
      tipo: 'status_pedido',
      titulo: 'Status do Pedido Atualizado',
      mensagem: `Pedido #${pedido.numero} está agora ${novoStatus}`,
      dados: {
        pedido_id: pedido.id,
        status_anterior: pedido.status,
        status_novo: novoStatus
      },
      link: `/pedidos/${pedido.id}`
    });
  }

  static async notificarNovoProduto(produto) {
    // Notificar todos os representantes vinculados ao fornecedor
    const representantes = await ServicoVinculacoes.listarRepresentantes({
      fornecedor_id: produto.fornecedor_id,
      status: 'ativo'
    });

    for (const rep of representantes.representantes) {
      await ServicoNotificacoes.criar({
        usuario_id: rep.id,
        tipo: 'novo_produto',
        titulo: 'Novo Produto Disponível',
        mensagem: `${produto.nome} foi adicionado ao catálogo`,
        dados: {
          produto_id: produto.id,
          fornecedor_id: produto.fornecedor_id
        },
        link: `/produtos/${produto.id}`
      });
    }
  }

  static async notificarVinculacao(fornecedorId, representanteId, acao) {
    const mensagens = {
      criada: 'Nova parceria estabelecida',
      removida: 'Parceria encerrada',
      atualizada: 'Configurações de parceria atualizadas'
    };

    // Notificar ambas as partes
    const usuarios = [fornecedorId, representanteId];
    
    for (const usuarioId of usuarios) {
      await ServicoNotificacoes.criar({
        usuario_id: usuarioId,
        tipo: 'vinculacao',
        titulo: 'Atualização de Parceria',
        mensagem: mensagens[acao],
        dados: {
          fornecedor_id: fornecedorId,
          representante_id: representanteId,
          acao
        }
      });
    }
  }
}
```

## Queries Otimizadas

### Produtos para Representante
```sql
-- Buscar produtos disponíveis para um representante
SELECT 
  p.*,
  f.nome as fornecedor_nome,
  fr.comissao_padrao,
  fr.configuracoes
FROM produtos p
INNER JOIN usuarios f ON p.fornecedor_id = f.id
INNER JOIN fornecedor_representante fr ON f.id = fr.fornecedor_id
WHERE fr.representante_id = ? 
  AND fr.status = 'ativo'
  AND p.ativo = 1
ORDER BY p.created_at DESC;
```

### Pedidos para Fornecedor
```sql
-- Buscar pedidos de representantes vinculados
SELECT 
  p.*,
  r.nome as representante_nome,
  r.email as representante_email
FROM pedidos p
INNER JOIN usuarios r ON p.representante_id = r.id
INNER JOIN fornecedor_representante fr ON r.id = fr.representante_id
WHERE fr.fornecedor_id = ?
  AND fr.status = 'ativo'
ORDER BY p.created_at DESC;
```

### Clientes Compartilhados
```sql
-- Buscar clientes acessíveis para um usuário
SELECT DISTINCT 
  c.*,
  ca.tipo_acesso
FROM clientes c
INNER JOIN cliente_acesso ca ON c.id = ca.cliente_id
WHERE ca.usuario_id = ?
ORDER BY c.nome;
```

## Testes

### Teste de Vinculação
```javascript
describe('Sistema de Vinculação', () => {
  test('deve criar vinculação entre fornecedor e representante', async () => {
    const vinculacao = await ServicoVinculacoes.criarVinculacao({
      representante_id: 123,
      comissao_padrao: 5.00
    });
    
    expect(vinculacao.status).toBe('ativo');
    expect(vinculacao.comissao_padrao).toBe(5.00);
  });

  test('deve filtrar produtos por vinculação', async () => {
    const produtos = await ServicoProdutos.listar({ representante_id: 123 });
    
    // Verificar se todos os produtos são de fornecedores vinculados
    for (const produto of produtos) {
      const vinculacao = await verificarVinculacao(produto.fornecedor_id, 123);
      expect(vinculacao).toBeTruthy();
    }
  });

  test('deve impedir acesso a produto não vinculado', async () => {
    await expect(
      ServicoProdutos.obter(999, { representante_id: 123 })
    ).rejects.toThrow('Acesso negado');
  });
});
```

## Monitoramento e Métricas

### Métricas de Vinculação
- Número de vinculações ativas
- Taxa de conversão de convites
- Tempo médio para aceitar vinculação
- Volume de vendas por vinculação
- Produtos mais vendidos por representante

### Logs de Auditoria
```javascript
const logVinculacao = {
  timestamp: new Date(),
  acao: 'criar_vinculacao',
  usuario_id: 456,
  fornecedor_id: 789,
  representante_id: 123,
  dados_anteriores: null,
  dados_novos: { comissao_padrao: 5.00 },
  ip: '192.168.1.1',
  user_agent: 'Mozilla/5.0...'
};
```

## Considerações de Performance

1. **Índices**: Criar índices compostos para queries frequentes
2. **Cache**: Implementar cache Redis para vinculações ativas
3. **Paginação**: Limitar resultados em listas grandes
4. **Lazy Loading**: Carregar dados sob demanda
5. **Otimização de Queries**: Usar JOINs eficientes e evitar N+1

## Segurança

1. **Validação**: Verificar permissões em todas as operações
2. **Rate Limiting**: Limitar tentativas de vinculação
3. **Auditoria**: Log completo de todas as ações
4. **Criptografia**: Proteger dados sensíveis
5. **Sanitização**: Validar todos os inputs do usuário