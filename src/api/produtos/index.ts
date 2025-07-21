import { Router } from 'express';
import { ServicoProduto } from '../../funcionalidades/produtos/ServicoProduto';

const router = Router();
const servicoProduto = new ServicoProduto();

// Rota para criar um novo produto
router.post('/', async (req, res) => {
  try {
    const novoProduto = await servicoProduto.criarProduto(req.body);
    if (novoProduto) {
      res.status(201).json(novoProduto);
    } else {
      res.status(400).json({ message: 'Não foi possível criar o produto.' });
    }
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota para buscar todos os produtos
router.get('/', async (req, res) => {
  try {
    const produtos = await servicoProduto.buscarTodosProdutos();
    res.status(200).json(produtos);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota para buscar um produto por ID
router.get('/:id', async (req, res) => {
  try {
    const produto = await servicoProduto.buscarProdutoPorId(req.params.id);
    if (produto) {
      res.status(200).json(produto);
    } else {
      res.status(404).json({ message: 'Produto não encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao buscar produto por ID:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota para atualizar um produto
router.put('/:id', async (req, res) => {
  try {
    const produtoAtualizado = await servicoProduto.atualizarProduto(req.params.id, req.body);
    if (produtoAtualizado) {
      res.status(200).json(produtoAtualizado);
    } else {
      res.status(404).json({ message: 'Produto não encontrado para atualização.' });
    }
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota para deletar um produto
router.delete('/:id', async (req, res) => {
  try {
    const sucesso = await servicoProduto.deletarProduto(req.params.id);
    if (sucesso) {
      res.status(204).send(); // No Content
    } else {
      res.status(404).json({ message: 'Produto não encontrado para exclusão.' });
    }
  } catch (error) {
    console.error('Erro ao deletar produto:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

export default router;
