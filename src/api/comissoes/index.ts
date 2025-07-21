import { Router } from 'express';
import { ServicoComissao } from '../../funcionalidades/comissoes/ServicoComissao';

const router = Router();
const servicoComissao = new ServicoComissao();

// Rota para criar uma nova comissão
router.post('/', async (req, res) => {
  try {
    const novaComissao = await servicoComissao.criarComissao(req.body);
    if (novaComissao) {
      res.status(201).json(novaComissao);
    } else {
      res.status(400).json({ message: 'Não foi possível criar a comissão.' });
    }
  } catch (error) {
    console.error('Erro ao criar comissão:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota para buscar todas as comissões
router.get('/', async (req, res) => {
  try {
    const comissoes = await servicoComissao.buscarTodasComissoes();
    res.status(200).json(comissoes);
  } catch (error) {
    console.error('Erro ao buscar comissões:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota para buscar uma comissão por ID
router.get('/:id', async (req, res) => {
  try {
    const comissao = await servicoComissao.buscarComissaoPorId(req.params.id);
    if (comissao) {
      res.status(200).json(comissao);
    } else {
      res.status(404).json({ message: 'Comissão não encontrada.' });
    }
  } catch (error) {
    console.error('Erro ao buscar comissão por ID:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota para atualizar uma comissão
router.put('/:id', async (req, res) => {
  try {
    const comissaoAtualizada = await servicoComissao.atualizarComissao(req.params.id, req.body);
    if (comissaoAtualizada) {
      res.status(200).json(comissaoAtualizada);
    } else {
      res.status(404).json({ message: 'Comissão não encontrada para atualização.' });
    }
  } catch (error) {
    console.error('Erro ao atualizar comissão:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota para deletar uma comissão
router.delete('/:id', async (req, res) => {
  try {
    const sucesso = await servicoComissao.deletarComissao(req.params.id);
    if (sucesso) {
      res.status(204).send(); // No Content
    } else {
      res.status(404).json({ message: 'Comissão não encontrada para exclusão.' });
    }
  } catch (error) {
    console.error('Erro ao deletar comissão:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

export default router;
