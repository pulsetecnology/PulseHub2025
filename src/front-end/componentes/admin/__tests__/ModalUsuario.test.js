import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ModalUsuario from '../ModalUsuario';

// Mock das funções de callback
const mockOnFechar = jest.fn();
const mockOnSalvar = jest.fn();

describe('ModalUsuario', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('não renderiza quando mostrar é false', () => {
    render(
      <ModalUsuario
        mostrar={false}
        usuario={null}
        onFechar={mockOnFechar}
        onSalvar={mockOnSalvar}
      />
    );

    expect(screen.queryByText('Novo Usuário')).not.toBeInTheDocument();
  });

  test('renderiza modal para novo usuário', () => {
    render(
      <ModalUsuario
        mostrar={true}
        usuario={null}
        onFechar={mockOnFechar}
        onSalvar={mockOnSalvar}
      />
    );

    expect(screen.getByText('Novo Usuário')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Digite o nome completo')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('email@exemplo.com')).toBeInTheDocument();
    expect(screen.getByText('Criar Usuário')).toBeInTheDocument();
  });

  test('renderiza modal para editar usuário existente', () => {
    const usuarioExistente = {
      id: 1,
      nome: 'João Silva',
      email: 'joao@exemplo.com',
      tipo: 'Fornecedor',
      empresa: 'Empresa Teste',
      status: 'ativo'
    };

    render(
      <ModalUsuario
        mostrar={true}
        usuario={usuarioExistente}
        onFechar={mockOnFechar}
        onSalvar={mockOnSalvar}
      />
    );

    expect(screen.getByText('Editar Usuário')).toBeInTheDocument();
    expect(screen.getByDisplayValue('João Silva')).toBeInTheDocument();
    expect(screen.getByDisplayValue('joao@exemplo.com')).toBeInTheDocument();
    expect(screen.getByText('Atualizar')).toBeInTheDocument();
  });

  test('valida campos obrigatórios', async () => {
    render(
      <ModalUsuario
        mostrar={true}
        usuario={null}
        onFechar={mockOnFechar}
        onSalvar={mockOnSalvar}
      />
    );

    const botaoSalvar = screen.getByText('Criar Usuário');
    fireEvent.click(botaoSalvar);

    await waitFor(() => {
      expect(screen.getByText('Nome é obrigatório')).toBeInTheDocument();
      expect(screen.getByText('Email é obrigatório')).toBeInTheDocument();
      expect(screen.getByText('Empresa é obrigatória')).toBeInTheDocument();
      expect(screen.getByText('Senha é obrigatória')).toBeInTheDocument();
    });

    expect(mockOnSalvar).not.toHaveBeenCalled();
  });

  test('valida formato de email', async () => {
    render(
      <ModalUsuario
        mostrar={true}
        usuario={null}
        onFechar={mockOnFechar}
        onSalvar={mockOnSalvar}
      />
    );

    const emailInput = screen.getByPlaceholderText('email@exemplo.com');
    fireEvent.change(emailInput, { target: { value: 'email-invalido' } });

    const botaoSalvar = screen.getByText('Criar Usuário');
    fireEvent.click(botaoSalvar);

    await waitFor(() => {
      expect(screen.getByText('Email inválido')).toBeInTheDocument();
    });
  });

  test('valida confirmação de senha', async () => {
    render(
      <ModalUsuario
        mostrar={true}
        usuario={null}
        onFechar={mockOnFechar}
        onSalvar={mockOnSalvar}
      />
    );

    const senhaInput = screen.getByPlaceholderText('Mínimo 6 caracteres');
    const confirmarSenhaInput = screen.getByPlaceholderText('Confirme a senha');

    fireEvent.change(senhaInput, { target: { value: '123456' } });
    fireEvent.change(confirmarSenhaInput, { target: { value: '654321' } });

    const botaoSalvar = screen.getByText('Criar Usuário');
    fireEvent.click(botaoSalvar);

    await waitFor(() => {
      expect(screen.getByText('Senhas não coincidem')).toBeInTheDocument();
    });
  });

  test('chama onFechar quando botão cancelar é clicado', () => {
    render(
      <ModalUsuario
        mostrar={true}
        usuario={null}
        onFechar={mockOnFechar}
        onSalvar={mockOnSalvar}
      />
    );

    const botaoCancelar = screen.getByText('Cancelar');
    fireEvent.click(botaoCancelar);

    expect(mockOnFechar).toHaveBeenCalledTimes(1);
  });

  test('submete formulário válido para novo usuário', async () => {
    render(
      <ModalUsuario
        mostrar={true}
        usuario={null}
        onFechar={mockOnFechar}
        onSalvar={mockOnSalvar}
      />
    );

    // Preencher formulário
    fireEvent.change(screen.getByPlaceholderText('Digite o nome completo'), {
      target: { value: 'João Silva' }
    });
    fireEvent.change(screen.getByPlaceholderText('email@exemplo.com'), {
      target: { value: 'joao@exemplo.com' }
    });
    fireEvent.change(screen.getByPlaceholderText('Nome da empresa'), {
      target: { value: 'Empresa Teste' }
    });
    fireEvent.change(screen.getByPlaceholderText('Mínimo 6 caracteres'), {
      target: { value: '123456' }
    });
    fireEvent.change(screen.getByPlaceholderText('Confirme a senha'), {
      target: { value: '123456' }
    });

    const botaoSalvar = screen.getByText('Criar Usuário');
    fireEvent.click(botaoSalvar);

    await waitFor(() => {
      expect(mockOnSalvar).toHaveBeenCalledWith({
        nome: 'João Silva',
        email: 'joao@exemplo.com',
        tipo: 'Representante',
        empresa: 'Empresa Teste',
        telefone: '',
        status: 'ativo',
        senha: '123456',
        confirmarSenha: '123456'
      });
    });
  });

  test('não exibe campos de senha para edição de usuário existente', () => {
    const usuarioExistente = {
      id: 1,
      nome: 'João Silva',
      email: 'joao@exemplo.com',
      tipo: 'Fornecedor',
      empresa: 'Empresa Teste',
      status: 'ativo'
    };

    render(
      <ModalUsuario
        mostrar={true}
        usuario={usuarioExistente}
        onFechar={mockOnFechar}
        onSalvar={mockOnSalvar}
      />
    );

    expect(screen.queryByPlaceholderText('Mínimo 6 caracteres')).not.toBeInTheDocument();
    expect(screen.queryByPlaceholderText('Confirme a senha')).not.toBeInTheDocument();
  });
});