import { Router } from 'express';
import { ServicoNotificacao } from '@src/funcionalidades/notificacoes/ServicoNotificacao';

const router = Router();
const servicoNotificacao = new ServicoNotificacao();

// Rota para enviar uma nova notificação
router.post('/', async (req, res) => {
  try {
    const novaNotificacao = await servicoNotificacao.enviarNotificacao(req.body);
    if (novaNotificacao) {
      res.status(201).json(novaNotificacao);
    } else {
      res.status(400).json({ message: 'Não foi possível enviar a notificação.' });
    }
  } catch (error) {
    console.error('Erro ao enviar notificação:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota para buscar notificações por destinatário
router.get('/destinatario/:id', async (req, res) => {
  try {
    const notificacoes = await servicoNotificacao.buscarNotificacoesPorDestinatario(req.params.id);
    res.status(200).json(notificacoes);
  } catch (error) {
    console.error('Erro ao buscar notificações por destinatário:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota para marcar notificação como lida
router.put('/:id/lida', async (req, res) => {
  try {
    const notificacaoAtualizada = await servicoNotificacao.marcarComoLida(req.params.id);
    if (notificacaoAtualizada) {
      res.status(200).json(notificacaoAtualizada);
    } else {
      res.status(404).json({ message: 'Notificação não encontrada.' });
    }
  } catch (error) {
    console.error('Erro ao marcar notificação como lida:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

export default router;
