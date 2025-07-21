import { Router } from 'express';
import { ServicoCliente } from '../../funcionalidades/clientes/ServicoCliente';

const router = Router();
const servicoCliente = new ServicoCliente();

// Rota para criar um novo cliente
router.post('/', async (req, res) => {
  try {
    const novoCliente = await servicoCliente.criarCliente(req.body);
    if (novoCliente) {
      res.status(201).json(novoCliente);
    } else {
      res.status(400).json({ message: 'Não foi possível criar o cliente.' });
    }
  } catch (error) {
    console.error('Erro ao criar cliente:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota para buscar todos os clientes
router.get('/', async (req, res) => {
  try {
    const clientes = await servicoCliente.buscarTodosClientes();
    res.status(200).json(clientes);
  } catch (error) {
    console.error('Erro ao buscar clientes:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota para buscar um cliente por ID
router.get('/:id', async (req, res) => {
  try {
    const cliente = await servicoCliente.buscarClientePorId(req.params.id);
    if (cliente) {
      res.status(200).json(cliente);
    } else {
      res.status(404).json({ message: 'Cliente não encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao buscar cliente por ID:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota para atualizar um cliente
router.put('/:id', async (req, res) => {
  try {
    const clienteAtualizado = await servicoCliente.atualizarCliente(req.params.id, req.body);
    if (clienteAtualizado) {
      res.status(200).json(clienteAtualizado);
    } else {
      res.status(404).json({ message: 'Cliente não encontrado para atualização.' });
    }
  } catch (error) {
    console.error('Erro ao atualizar cliente:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota para deletar um cliente
router.delete('/:id', async (req, res) => {
  try {
    const sucesso = await servicoCliente.deletarCliente(req.params.id);
    if (sucesso) {
      res.status(204).send(); // No Content
    } else {
      res.status(404).json({ message: 'Cliente não encontrado para exclusão.' });
    }
  } catch (error) {
    console.error('Erro ao deletar cliente:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

export default router;
