import { Router } from 'express';
import { ServicoPedido } from '../../funcionalidades/pedidos/ServicoPedido';

const router = Router();
const servicoPedido = new ServicoPedido();

// Rota para criar um novo pedido
router.post('/', async (req, res) => {
  try {
    const novoPedido = await servicoPedido.criarPedido(req.body);
    if (novoPedido) {
      res.status(201).json(novoPedido);
    } else {
      res.status(400).json({ message: 'Não foi possível criar o pedido.' });
    }
  } catch (error) {
    console.error('Erro ao criar pedido:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota para buscar todos os pedidos
router.get('/', async (req, res) => {
  try {
    const pedidos = await servicoPedido.buscarTodosPedidos();
    res.status(200).json(pedidos);
  } catch (error) {
    console.error('Erro ao buscar pedidos:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota para buscar um pedido por ID
router.get('/:id', async (req, res) => {
  try {
    const pedido = await servicoPedido.buscarPedidoPorId(req.params.id);
    if (pedido) {
      res.status(200).json(pedido);
    } else {
      res.status(404).json({ message: 'Pedido não encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao buscar pedido por ID:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota para atualizar um pedido
router.put('/:id', async (req, res) => {
  try {
    const pedidoAtualizado = await servicoPedido.atualizarPedido(req.params.id, req.body);
    if (pedidoAtualizado) {
      res.status(200).json(pedidoAtualizado);
    } else {
      res.status(404).json({ message: 'Pedido não encontrado para atualização.' });
    }
  } catch (error) {
    console.error('Erro ao atualizar pedido:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota para deletar um pedido
router.delete('/:id', async (req, res) => {
  try {
    const sucesso = await servicoPedido.deletarPedido(req.params.id);
    if (sucesso) {
      res.status(204).send(); // No Content
    } else {
      res.status(404).json({ message: 'Pedido não encontrado para exclusão.' });
    }
  } catch (error) {
    console.error('Erro ao deletar pedido:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

export default router;
