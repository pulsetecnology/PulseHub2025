"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ServicoUsuario_1 = require("@src/funcionalidades/usuarios/ServicoUsuario");
const router = (0, express_1.Router)();
const servicoUsuario = new ServicoUsuario_1.ServicoUsuario();
// Rota para criar um novo usuário
router.post('/', async (req, res) => {
    try {
        const novoUsuario = await servicoUsuario.criarUsuario(req.body);
        if (novoUsuario) {
            res.status(201).json(novoUsuario);
        }
        else {
            res.status(400).json({ message: 'Não foi possível criar o usuário.' });
        }
    }
    catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
});
// Rota para buscar todos os usuários
router.get('/', async (req, res) => {
    try {
        const usuarios = await servicoUsuario.buscarTodosUsuarios();
        res.status(200).json(usuarios);
    }
    catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
});
// Rota para buscar um usuário por ID
router.get('/:id', async (req, res) => {
    try {
        const usuario = await servicoUsuario.buscarUsuarioPorId(req.params.id);
        if (usuario) {
            res.status(200).json(usuario);
        }
        else {
            res.status(404).json({ message: 'Usuário não encontrado.' });
        }
    }
    catch (error) {
        console.error('Erro ao buscar usuário por ID:', error);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
});
// Rota para atualizar um usuário
router.put('/:id', async (req, res) => {
    try {
        const usuarioAtualizado = await servicoUsuario.atualizarUsuario(req.params.id, req.body);
        if (usuarioAtualizado) {
            res.status(200).json(usuarioAtualizado);
        }
        else {
            res.status(404).json({ message: 'Usuário não encontrado para atualização.' });
        }
    }
    catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
});
// Rota para deletar um usuário
router.delete('/:id', async (req, res) => {
    try {
        const sucesso = await servicoUsuario.deletarUsuario(req.params.id);
        if (sucesso) {
            res.status(204).send(); // No Content
        }
        else {
            res.status(404).json({ message: 'Usuário não encontrado para exclusão.' });
        }
    }
    catch (error) {
        console.error('Erro ao deletar usuário:', error);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
});
exports.default = router;
//# sourceMappingURL=index.js.map