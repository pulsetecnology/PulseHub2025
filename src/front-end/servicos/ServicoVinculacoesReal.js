/**
 * Serviço para gerenciar vinculações entre fornecedores e representantes
 * Versão integrada com APIs reais (PostgreSQL)
 */
class ServicoVinculacoesReal {
  constructor() {
    this.baseUrl = '/api';
  }

  /**
   * Fazer requisição HTTP com tratamento de erros
   */
  async fazerRequisicao(url, opcoes = {}) {
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'x-user-role': this.obterPapelUsuario(),
          'x-user-id': this.obterUsuarioId(),
          ...opcoes.headers
        },
        ...opcoes
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Erro desconhecido' }));
        throw new Error(errorData.message || `Erro HTTP: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Erro na requisição:', error);
      throw error;
    }
  }

  /**
   * Obter papel do usuário atual (temporário - será integrado com autenticação)
   */
  obterPapelUsuario() {
    // Tentar obter do localStorage primeiro
    if (typeof window !== 'undefined') {
      try {
        const usuarioJson = localStorage.getItem('usuario');
        if (usuarioJson) {
          const usuario = JSON.parse(usuarioJson);
          if (usuario.papel) {
            return usuario.papel;
          }
        }
      } catch (erro) {
        console.error('Erro ao obter papel do usuário:', erro);
      }
      
      // Fallback para o método antigo
      const papelAntigo = localStorage.getItem('papel_usuario');
      if (papelAntigo) {
        return papelAntigo;
      }
    }
    
    return 'REPRESENTANTE';
  }

  /**
   * Obter ID do usuário atual (temporário - será integrado com autenticação)
   */
  obterUsuarioId() {
    // Tentar obter do localStorage primeiro
    if (typeof window !== 'undefined') {
      try {
        const usuarioJson = localStorage.getItem('usuario');
        if (usuarioJson) {
          const usuario = JSON.parse(usuarioJson);
          if (usuario.id) {
            return usuario.id;
          }
        }
      } catch (erro) {
        console.error('Erro ao obter ID do usuário:', erro);
      }
      
      // Fallback para o método antigo
      const idAntigo = localStorage.getItem('usuario_id');
      if (idAntigo) {
        return idAntigo;
      }
    }
    
    return '61aac5a8-941d-47ef-8312-142a1843cb76';
  }

  // ==================== FORNECEDORES ====================

  /**
   * Obter lista de fornecedores
   */
  async obterFornecedores(filtros = {}) {
    const params = new URLSearchParams();
    
    if (filtros.nome) params.append('nome', filtros.nome);
    if (filtros.cnpj) params.append('cnpj', filtros.cnpj);
    if (filtros.ativo !== undefined) params.append('ativo', filtros.ativo);
    if (filtros.page) params.append('page', filtros.page);
    if (filtros.limit) params.append('limit', filtros.limit);

    const url = `${this.baseUrl}/fornecedores${params.toString() ? '?' + params.toString() : ''}`;
    return await this.fazerRequisicao(url);
  }

  /**
   * Obter fornecedor por ID
   */
  async obterFornecedorPorId(id) {
    return await this.fazerRequisicao(`${this.baseUrl}/fornecedores?id=${id}`);
  }

  /**
   * Criar novo fornecedor
   */
  async criarFornecedor(dadosFornecedor) {
    return await this.fazerRequisicao(`${this.baseUrl}/fornecedores`, {
      method: 'POST',
      body: JSON.stringify(dadosFornecedor)
    });
  }

  /**
   * Atualizar fornecedor
   */
  async atualizarFornecedor(id, dadosAtualizacao) {
    return await this.fazerRequisicao(`${this.baseUrl}/fornecedores?id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(dadosAtualizacao)
    });
  }

  /**
   * Remover fornecedor
   */
  async removerFornecedor(id) {
    return await this.fazerRequisicao(`${this.baseUrl}/fornecedores?id=${id}`, {
      method: 'DELETE'
    });
  }

  // ==================== REPRESENTANTES ====================

  /**
   * Obter lista de representantes
   */
  async obterRepresentantes(filtros = {}) {
    const params = new URLSearchParams();
    
    if (filtros.nome) params.append('nome', filtros.nome);
    if (filtros.email) params.append('email', filtros.email);
    if (filtros.cpf) params.append('cpf', filtros.cpf);
    if (filtros.regiao) params.append('regiao', filtros.regiao);
    if (filtros.ativo !== undefined) params.append('ativo', filtros.ativo);
    if (filtros.page) params.append('page', filtros.page);
    if (filtros.limit) params.append('limit', filtros.limit);

    const url = `${this.baseUrl}/representantes${params.toString() ? '?' + params.toString() : ''}`;
    return await this.fazerRequisicao(url);
  }

  /**
   * Obter representante por ID
   */
  async obterRepresentantePorId(id) {
    return await this.fazerRequisicao(`${this.baseUrl}/representantes?id=${id}`);
  }

  /**
   * Criar novo representante
   */
  async criarRepresentante(dadosRepresentante) {
    return await this.fazerRequisicao(`${this.baseUrl}/representantes`, {
      method: 'POST',
      body: JSON.stringify(dadosRepresentante)
    });
  }

  /**
   * Atualizar representante
   */
  async atualizarRepresentante(id, dadosAtualizacao) {
    return await this.fazerRequisicao(`${this.baseUrl}/representantes?id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(dadosAtualizacao)
    });
  }

  /**
   * Remover representante
   */
  async removerRepresentante(id) {
    return await this.fazerRequisicao(`${this.baseUrl}/representantes?id=${id}`, {
      method: 'DELETE'
    });
  }

  // ==================== VINCULAÇÕES ====================

  /**
   * Obter vinculações
   */
  async obterVinculacoes(filtros = {}) {
    const params = new URLSearchParams();
    
    if (filtros.fornecedorId) params.append('fornecedorId', filtros.fornecedorId);
    if (filtros.representanteId) params.append('representanteId', filtros.representanteId);
    if (filtros.status) params.append('status', filtros.status);
    if (filtros.page) params.append('page', filtros.page);
    if (filtros.limit) params.append('limit', filtros.limit);

    const url = `${this.baseUrl}/vinculacoes${params.toString() ? '?' + params.toString() : ''}`;
    const resultado = await this.fazerRequisicao(url);
    
    // Manter compatibilidade com o formato antigo
    return resultado.vinculacoes || resultado;
  }

  /**
   * Obter vinculações por fornecedor
   */
  async obterVinculacoesPorFornecedor(fornecedorId) {
    return await this.obterVinculacoes({ fornecedorId });
  }

  /**
   * Obter vinculações por representante
   */
  async obterVinculacoesPorRepresentante(representanteId) {
    return await this.obterVinculacoes({ representanteId });
  }

  /**
   * Verificar se existe vinculação entre fornecedor e representante
   */
  async verificarVinculacao(fornecedorId, representanteId) {
    const vinculacoes = await this.obterVinculacoes({ fornecedorId, representanteId });
    return vinculacoes.find(v => v.status === 'ativo') || null;
  }

  /**
   * Criar nova vinculação
   */
  async criarVinculacao(dadosVinculacao) {
    const resultado = await this.fazerRequisicao(`${this.baseUrl}/vinculacoes`, {
      method: 'POST',
      body: JSON.stringify(dadosVinculacao)
    });
    
    return resultado.vinculacao || resultado;
  }

  /**
   * Atualizar configurações de vinculação
   */
  async atualizarConfiguracoes(vinculacaoId, novasConfiguracoes) {
    const resultado = await this.fazerRequisicao(`${this.baseUrl}/vinculacoes`, {
      method: 'PUT',
      body: JSON.stringify({
        id: vinculacaoId,
        ...novasConfiguracoes
      })
    });
    
    return resultado.vinculacao || resultado;
  }

  /**
   * Remover vinculação
   */
  async removerVinculacao(vinculacaoId) {
    return await this.fazerRequisicao(`${this.baseUrl}/vinculacoes?id=${vinculacaoId}`, {
      method: 'DELETE'
    });
  }

  // ==================== CONVITES ====================

  /**
   * Obter convites
   */
  async obterConvites(filtros = {}) {
    const params = new URLSearchParams();
    
    if (filtros.tipo) params.append('tipo', filtros.tipo);
    if (filtros.status) params.append('status', filtros.status);

    const url = `${this.baseUrl}/vinculacoes/convites${params.toString() ? '?' + params.toString() : ''}`;
    return await this.fazerRequisicao(url);
  }

  /**
   * Obter convites enviados
   */
  async obterConvitesEnviados(usuarioId = null) {
    const idUsuario = usuarioId || this.obterUsuarioId();
    return await this.obterConvites({ tipo: 'enviados' });
  }

  /**
   * Obter convites recebidos
   */
  async obterConvitesRecebidos(usuarioId = null) {
    const idUsuario = usuarioId || this.obterUsuarioId();
    return await this.obterConvites({ tipo: 'recebidos' });
  }

  /**
   * Enviar convite
   */
  async enviarConvite(dadosConvite) {
    return await this.fazerRequisicao(`${this.baseUrl}/vinculacoes/convites`, {
      method: 'POST',
      body: JSON.stringify(dadosConvite)
    });
  }

  /**
   * Aceitar convite
   */
  async aceitarConvite(conviteId) {
    return await this.fazerRequisicao(`${this.baseUrl}/vinculacoes/convites`, {
      method: 'PUT',
      body: JSON.stringify({
        id: conviteId,
        acao: 'aceitar'
      })
    });
  }

  /**
   * Recusar convite
   */
  async recusarConvite(conviteId, motivo = '') {
    return await this.fazerRequisicao(`${this.baseUrl}/vinculacoes/convites`, {
      method: 'PUT',
      body: JSON.stringify({
        id: conviteId,
        acao: 'recusar',
        motivo
      })
    });
  }

  /**
   * Cancelar convite
   */
  async cancelarConvite(conviteId) {
    return await this.fazerRequisicao(`${this.baseUrl}/vinculacoes/convites?id=${conviteId}`, {
      method: 'DELETE'
    });
  }

  // ==================== BUSCA E ESTATÍSTICAS ====================

  /**
   * Buscar representantes disponíveis
   */
  async buscarRepresentantesDisponiveis(filtros = {}) {
    // Buscar representantes que não estão vinculados ao fornecedor atual
    const representantes = await this.obterRepresentantes({
      ...filtros,
      ativo: true
    });
    
    // TODO: Filtrar representantes já vinculados
    return representantes.representantes || representantes;
  }

  /**
   * Buscar fornecedores disponíveis
   */
  async buscarFornecedoresDisponiveis(filtros = {}) {
    // Buscar fornecedores que não estão vinculados ao representante atual
    const fornecedores = await this.obterFornecedores({
      ...filtros,
      ativo: true
    });
    
    // TODO: Filtrar fornecedores já vinculados
    return fornecedores.fornecedores || fornecedores;
  }

  /**
   * Obter estatísticas de vinculações
   */
  async obterEstatisticas(usuarioId = null, tipoUsuario = null) {
    const idUsuario = usuarioId || this.obterUsuarioId();
    const tipo = tipoUsuario || this.obterPapelUsuario();
    
    try {
      let vinculacoes = [];
      
      if (tipo === 'FORNECEDOR') {
        // TODO: Buscar vinculações do fornecedor
        vinculacoes = await this.obterVinculacoesPorFornecedor(idUsuario);
      } else if (tipo === 'REPRESENTANTE') {
        // TODO: Buscar vinculações do representante
        vinculacoes = await this.obterVinculacoesPorRepresentante(idUsuario);
      }
      
      return {
        totalVinculacoes: vinculacoes.length,
        vinculacoesAtivas: vinculacoes.filter(v => v.status === 'ativo').length,
        vinculacoesInativas: vinculacoes.filter(v => v.status === 'inativo').length,
        // TODO: Calcular outras estatísticas do banco
        totalPedidos: 0,
        valorTotalVendas: 0,
        comissaoTotal: 0
      };
    } catch (error) {
      console.error('Erro ao obter estatísticas:', error);
      return {
        totalVinculacoes: 0,
        vinculacoesAtivas: 0,
        vinculacoesInativas: 0,
        totalPedidos: 0,
        valorTotalVendas: 0,
        comissaoTotal: 0
      };
    }
  }

  /**
   * Limpar convites expirados (método de manutenção)
   */
  async limparConvitesExpirados() {
    // TODO: Implementar limpeza automática no backend
    console.log('Limpeza de convites expirados será implementada no backend');
    return { message: 'Funcionalidade será implementada no backend' };
  }
}

// Criar instância única (singleton)
const servicoVinculacoesReal = new ServicoVinculacoesReal();

export default servicoVinculacoesReal;