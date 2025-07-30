import { LocalStorageManager } from '../utils/localStorage';
import servicoNotificacoes from './ServicoNotificacoes';

/**
 * Serviço para gerenciar vinculações entre fornecedores e representantes
 * Inclui funcionalidades de convites, notificações e controle de acesso
 */
class ServicoVinculacoes {
  constructor() {
    this.STORAGE_KEY = 'pulsehub_vinculacoes';
    this.CONVITES_KEY = 'pulsehub_convites';
    this.storageManager = LocalStorageManager;
    this.servicoNotificacoes = servicoNotificacoes;
    this.inicializarDados();
  }

  inicializarDados() {
    // Inicializar vinculações se não existirem
    if (!LocalStorageManager.getItem(this.STORAGE_KEY)) {
      LocalStorageManager.setItem(this.STORAGE_KEY, this.obterVinculacoesExemplo());
    }

    // Inicializar convites se não existirem
    if (!LocalStorageManager.getItem(this.CONVITES_KEY)) {
      LocalStorageManager.setItem(this.CONVITES_KEY, this.obterConvitesExemplo());
    }
  }

  obterVinculacoesExemplo() {
    return [
      {
        id: 'vinc_001',
        fornecedorId: 'forn_001',
        fornecedorNome: 'TechSupply Ltda',
        representanteId: 'repr_001',
        representanteNome: 'João Silva',
        representanteEmail: 'joao@example.com',
        status: 'ativo',
        dataVinculacao: '2024-01-15T10:00:00Z',
        configuracoes: {
          comissaoPersonalizada: 5.5,
          precoEspecial: false,
          acessoRelatorios: true
        },
        estatisticas: {
          pedidosRealizados: 12,
          valorTotalVendas: 45600.00,
          ultimoPedido: '2024-01-20T14:30:00Z'
        }
      },
      {
        id: 'vinc_002',
        fornecedorId: 'forn_001',
        fornecedorNome: 'TechSupply Ltda',
        representanteId: 'repr_002',
        representanteNome: 'Maria Santos',
        representanteEmail: 'maria@example.com',
        status: 'ativo',
        dataVinculacao: '2024-01-10T09:15:00Z',
        configuracoes: {
          comissaoPersonalizada: 6.0,
          precoEspecial: true,
          acessoRelatorios: false
        },
        estatisticas: {
          pedidosRealizados: 8,
          valorTotalVendas: 32100.00,
          ultimoPedido: '2024-01-18T11:45:00Z'
        }
      }
    ];
  }

  obterConvitesExemplo() {
    return [
      {
        id: 'conv_001',
        tipo: 'fornecedor_para_representante',
        remetenteId: 'forn_002',
        remetenteNome: 'InnovaTech Solutions',
        destinatarioId: 'repr_003',
        destinatarioNome: 'Carlos Oliveira',
        destinatarioEmail: 'carlos@example.com',
        status: 'pendente',
        dataEnvio: '2024-01-22T16:20:00Z',
        dataExpiracao: '2024-02-21T16:20:00Z',
        mensagem: 'Gostaríamos de convidá-lo para representar nossos produtos de tecnologia.'
      },
      {
        id: 'conv_002',
        tipo: 'representante_para_fornecedor',
        remetenteId: 'repr_004',
        remetenteNome: 'Ana Costa',
        destinatarioId: 'forn_003',
        destinatarioNome: 'Digital Pro Ltda',
        destinatarioEmail: 'contato@digitalpro.com',
        status: 'pendente',
        dataEnvio: '2024-01-21T14:10:00Z',
        dataExpiracao: '2024-02-20T14:10:00Z',
        mensagem: 'Tenho interesse em representar seus produtos na região Sul.'
      }
    ];
  }

  // === MÉTODOS DE VINCULAÇÃO ===

  /**
   * Obter todas as vinculações
   */
  obterVinculacoes() {
    return LocalStorageManager.getItem(this.STORAGE_KEY, []);
  }

  /**
   * Obter vinculações por fornecedor
   */
  obterVinculacoesPorFornecedor(fornecedorId) {
    const vinculacoes = this.obterVinculacoes();
    return vinculacoes.filter(v => v.fornecedorId === fornecedorId && v.status === 'ativo');
  }

  /**
   * Obter vinculações por representante
   */
  obterVinculacoesPorRepresentante(representanteId) {
    const vinculacoes = this.obterVinculacoes();
    return vinculacoes.filter(v => v.representanteId === representanteId && v.status === 'ativo');
  }

  /**
   * Verificar se existe vinculação ativa entre fornecedor e representante
   */
  verificarVinculacao(fornecedorId, representanteId) {
    const vinculacoes = this.obterVinculacoes();
    return vinculacoes.find(v => 
      v.fornecedorId === fornecedorId && 
      v.representanteId === representanteId && 
      v.status === 'ativo'
    );
  }

  /**
   * Criar nova vinculação
   */
  criarVinculacao(dadosVinculacao) {
    const vinculacoes = this.obterVinculacoes();
    const novaVinculacao = {
      id: `vinc_${Date.now()}`,
      ...dadosVinculacao,
      status: 'ativo',
      dataVinculacao: new Date().toISOString(),
      configuracoes: {
        comissaoPersonalizada: null,
        precoEspecial: false,
        acessoRelatorios: true,
        ...dadosVinculacao.configuracoes
      },
      estatisticas: {
        pedidosRealizados: 0,
        valorTotalVendas: 0.00,
        ultimoPedido: null
      }
    };

    vinculacoes.push(novaVinculacao);
    LocalStorageManager.setItem(this.STORAGE_KEY, vinculacoes);

    // Notificar ambas as partes
    this.servicoNotificacoes.adicionarNotificacao({
      tipo: 'vinculacao',
      titulo: '🤝 Nova Parceria Estabelecida',
      mensagem: `Vinculação criada entre ${dadosVinculacao.fornecedorNome} e ${dadosVinculacao.representanteNome}`,
      icone: '🤝',
      cor: 'green'
    });

    return novaVinculacao;
  }

  /**
   * Remover vinculação
   */
  removerVinculacao(vinculacaoId) {
    const vinculacoes = this.obterVinculacoes();
    const index = vinculacoes.findIndex(v => v.id === vinculacaoId);
    
    if (index !== -1) {
      const vinculacao = vinculacoes[index];
      vinculacoes[index].status = 'inativo';
      vinculacoes[index].dataRemocao = new Date().toISOString();
      
      LocalStorageManager.setItem(this.STORAGE_KEY, vinculacoes);

      // Notificar sobre remoção
      this.servicoNotificacoes.adicionarNotificacao({
        tipo: 'vinculacao',
        titulo: '❌ Parceria Encerrada',
        mensagem: `Vinculação entre ${vinculacao.fornecedorNome} e ${vinculacao.representanteNome} foi removida`,
        icone: '❌',
        cor: 'red'
      });

      return true;
    }
    return false;
  }

  /**
   * Atualizar configurações da vinculação
   */
  atualizarConfiguracoes(vinculacaoId, novasConfiguracoes) {
    const vinculacoes = this.obterVinculacoes();
    const index = vinculacoes.findIndex(v => v.id === vinculacaoId);
    
    if (index !== -1) {
      vinculacoes[index].configuracoes = {
        ...vinculacoes[index].configuracoes,
        ...novasConfiguracoes
      };
      
      LocalStorageManager.setItem(this.STORAGE_KEY, vinculacoes);
      return vinculacoes[index];
    }
    return null;
  }

  // === MÉTODOS DE CONVITES ===

  /**
   * Obter todos os convites
   */
  obterConvites() {
    return LocalStorageManager.getItem(this.CONVITES_KEY, []);
  }

  /**
   * Obter convites enviados por um usuário
   */
  obterConvitesEnviados(usuarioId) {
    const convites = this.obterConvites();
    return convites.filter(c => c.remetenteId === usuarioId);
  }

  /**
   * Obter convites recebidos por um usuário
   */
  obterConvitesRecebidos(usuarioId) {
    const convites = this.obterConvites();
    return convites.filter(c => c.destinatarioId === usuarioId && c.status === 'pendente');
  }

  /**
   * Enviar convite de vinculação
   */
  enviarConvite(dadosConvite) {
    const convites = this.obterConvites();
    
    // Verificar se já existe convite pendente entre as partes
    const conviteExistente = convites.find(c => 
      ((c.remetenteId === dadosConvite.remetenteId && c.destinatarioId === dadosConvite.destinatarioId) ||
       (c.remetenteId === dadosConvite.destinatarioId && c.destinatarioId === dadosConvite.remetenteId)) &&
      c.status === 'pendente'
    );

    if (conviteExistente) {
      throw new Error('Já existe um convite pendente entre essas partes.');
    }

    // Verificar se já existe vinculação ativa
    const vinculacaoExistente = this.verificarVinculacao(
      dadosConvite.tipo === 'fornecedor_para_representante' ? dadosConvite.remetenteId : dadosConvite.destinatarioId,
      dadosConvite.tipo === 'fornecedor_para_representante' ? dadosConvite.destinatarioId : dadosConvite.remetenteId
    );

    if (vinculacaoExistente) {
      throw new Error('Já existe uma vinculação ativa entre essas partes.');
    }

    const novoConvite = {
      id: `conv_${Date.now()}`,
      ...dadosConvite,
      status: 'pendente',
      dataEnvio: new Date().toISOString(),
      dataExpiracao: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() // 30 dias
    };

    convites.push(novoConvite);
    LocalStorageManager.setItem(this.CONVITES_KEY, convites);

    // Notificar destinatário
    this.servicoNotificacoes.adicionarNotificacao({
      tipo: 'convite',
      titulo: '📨 Novo Convite de Parceria',
      mensagem: `${dadosConvite.remetenteNome} enviou um convite de parceria`,
      icone: '📨',
      cor: 'blue',
      acao: {
        texto: 'Ver Convite',
        url: '/convites'
      }
    });

    return novoConvite;
  }

  /**
   * Aceitar convite
   */
  aceitarConvite(conviteId) {
    const convites = this.obterConvites();
    const index = convites.findIndex(c => c.id === conviteId);
    
    if (index === -1) {
      throw new Error('Convite não encontrado.');
    }

    const convite = convites[index];
    
    if (convite.status !== 'pendente') {
      throw new Error('Este convite não está mais disponível.');
    }

    if (new Date(convite.dataExpiracao) < new Date()) {
      throw new Error('Este convite expirou.');
    }

    // Atualizar status do convite
    convites[index].status = 'aceito';
    convites[index].dataResposta = new Date().toISOString();
    LocalStorageManager.setItem(this.CONVITES_KEY, convites);

    // Criar vinculação
    const dadosVinculacao = {
      fornecedorId: convite.tipo === 'fornecedor_para_representante' ? convite.remetenteId : convite.destinatarioId,
      fornecedorNome: convite.tipo === 'fornecedor_para_representante' ? convite.remetenteNome : convite.destinatarioNome,
      representanteId: convite.tipo === 'fornecedor_para_representante' ? convite.destinatarioId : convite.remetenteId,
      representanteNome: convite.tipo === 'fornecedor_para_representante' ? convite.destinatarioNome : convite.remetenteNome,
      representanteEmail: convite.tipo === 'fornecedor_para_representante' ? convite.destinatarioEmail : convite.remetenteEmail
    };

    const novaVinculacao = this.criarVinculacao(dadosVinculacao);

    // Notificar remetente sobre aceitação
    this.servicoNotificacoes.adicionarNotificacao({
      tipo: 'convite',
      titulo: '✅ Convite Aceito',
      mensagem: `${convite.destinatarioNome} aceitou seu convite de parceria`,
      icone: '✅',
      cor: 'green'
    });

    return novaVinculacao;
  }

  /**
   * Recusar convite
   */
  recusarConvite(conviteId, motivo = '') {
    const convites = this.obterConvites();
    const index = convites.findIndex(c => c.id === conviteId);
    
    if (index === -1) {
      throw new Error('Convite não encontrado.');
    }

    const convite = convites[index];
    
    if (convite.status !== 'pendente') {
      throw new Error('Este convite não está mais disponível.');
    }

    // Atualizar status do convite
    convites[index].status = 'recusado';
    convites[index].dataResposta = new Date().toISOString();
    convites[index].motivoRecusa = motivo;
    LocalStorageManager.setItem(this.CONVITES_KEY, convites);

    // Notificar remetente sobre recusa
    this.servicoNotificacoes.adicionarNotificacao({
      tipo: 'convite',
      titulo: '❌ Convite Recusado',
      mensagem: `${convite.destinatarioNome} recusou seu convite de parceria`,
      icone: '❌',
      cor: 'red'
    });

    return true;
  }

  /**
   * Buscar representantes disponíveis (simulação)
   */
  buscarRepresentantesDisponiveis(filtros = {}) {
    // Simulação de representantes disponíveis
    const representantes = [
      {
        id: 'repr_003',
        nome: 'Carlos Oliveira',
        email: 'carlos@example.com',
        telefone: '(11) 99999-0003',
        regiao: 'São Paulo',
        especialidades: ['Tecnologia', 'Eletrônicos'],
        avaliacaoMedia: 4.8,
        pedidosRealizados: 156,
        ativo: true
      },
      {
        id: 'repr_004',
        nome: 'Ana Costa',
        email: 'ana@example.com',
        telefone: '(21) 99999-0004',
        regiao: 'Rio de Janeiro',
        especialidades: ['Moda', 'Acessórios'],
        avaliacaoMedia: 4.6,
        pedidosRealizados: 89,
        ativo: true
      },
      {
        id: 'repr_005',
        nome: 'Pedro Santos',
        email: 'pedro@example.com',
        telefone: '(31) 99999-0005',
        regiao: 'Minas Gerais',
        especialidades: ['Casa & Jardim', 'Ferramentas'],
        avaliacaoMedia: 4.9,
        pedidosRealizados: 203,
        ativo: true
      }
    ];

    let resultado = representantes.filter(r => r.ativo);

    if (filtros.busca) {
      const busca = filtros.busca.toLowerCase();
      resultado = resultado.filter(r => 
        r.nome.toLowerCase().includes(busca) ||
        r.email.toLowerCase().includes(busca) ||
        r.regiao.toLowerCase().includes(busca)
      );
    }

    if (filtros.regiao) {
      resultado = resultado.filter(r => r.regiao === filtros.regiao);
    }

    if (filtros.especialidade) {
      resultado = resultado.filter(r => 
        r.especialidades.includes(filtros.especialidade)
      );
    }

    return resultado;
  }

  /**
   * Buscar fornecedores disponíveis (simulação)
   */
  buscarFornecedoresDisponiveis(filtros = {}) {
    // Simulação de fornecedores disponíveis
    const fornecedores = [
      {
        id: 'forn_002',
        nome: 'InnovaTech Solutions',
        email: 'contato@innovatech.com',
        telefone: '(11) 3333-0002',
        segmento: 'Tecnologia',
        produtos: ['Notebooks', 'Smartphones', 'Acessórios'],
        avaliacaoMedia: 4.7,
        representantesAtivos: 12,
        ativo: true
      },
      {
        id: 'forn_003',
        nome: 'Digital Pro Ltda',
        email: 'contato@digitalpro.com',
        telefone: '(21) 3333-0003',
        segmento: 'Eletrônicos',
        produtos: ['Câmeras', 'Equipamentos de Som', 'Iluminação'],
        avaliacaoMedia: 4.5,
        representantesAtivos: 8,
        ativo: true
      },
      {
        id: 'forn_004',
        nome: 'Casa & Estilo',
        email: 'contato@casaestilo.com',
        telefone: '(31) 3333-0004',
        segmento: 'Casa & Jardim',
        produtos: ['Móveis', 'Decoração', 'Utensílios'],
        avaliacaoMedia: 4.8,
        representantesAtivos: 15,
        ativo: true
      }
    ];

    let resultado = fornecedores.filter(f => f.ativo);

    if (filtros.busca) {
      const busca = filtros.busca.toLowerCase();
      resultado = resultado.filter(f => 
        f.nome.toLowerCase().includes(busca) ||
        f.email.toLowerCase().includes(busca) ||
        f.segmento.toLowerCase().includes(busca)
      );
    }

    if (filtros.segmento) {
      resultado = resultado.filter(f => f.segmento === filtros.segmento);
    }

    return resultado;
  }

  /**
   * Limpar convites expirados
   */
  limparConvitesExpirados() {
    const convites = this.obterConvites();
    const agora = new Date();
    
    const convitesAtualizados = convites.map(convite => {
      if (convite.status === 'pendente' && new Date(convite.dataExpiracao) < agora) {
        return { ...convite, status: 'expirado' };
      }
      return convite;
    });

    LocalStorageManager.setItem(this.CONVITES_KEY, convitesAtualizados);
    return convitesAtualizados;
  }

  /**
   * Obter estatísticas de vinculações
   */
  obterEstatisticas(usuarioId, tipoUsuario) {
    const vinculacoes = this.obterVinculacoes();
    const convites = this.obterConvites();
    
    let vinculacoesUsuario, convitesEnviados, convitesRecebidos;
    
    if (tipoUsuario === 'FORNECEDOR') {
      vinculacoesUsuario = vinculacoes.filter(v => v.fornecedorId === usuarioId && v.status === 'ativo');
      convitesEnviados = convites.filter(c => c.remetenteId === usuarioId && c.tipo === 'fornecedor_para_representante');
      convitesRecebidos = convites.filter(c => c.destinatarioId === usuarioId && c.tipo === 'representante_para_fornecedor');
    } else {
      vinculacoesUsuario = vinculacoes.filter(v => v.representanteId === usuarioId && v.status === 'ativo');
      convitesEnviados = convites.filter(c => c.remetenteId === usuarioId && c.tipo === 'representante_para_fornecedor');
      convitesRecebidos = convites.filter(c => c.destinatarioId === usuarioId && c.tipo === 'fornecedor_para_representante');
    }

    return {
      totalVinculacoes: vinculacoesUsuario.length,
      convitesPendentes: convitesRecebidos.filter(c => c.status === 'pendente').length,
      convitesEnviados: convitesEnviados.filter(c => c.status === 'pendente').length,
      valorTotalVendas: vinculacoesUsuario.reduce((total, v) => total + v.estatisticas.valorTotalVendas, 0),
      pedidosRealizados: vinculacoesUsuario.reduce((total, v) => total + v.estatisticas.pedidosRealizados, 0)
    };
  }
}

export default ServicoVinculacoes;