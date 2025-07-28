import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { usarCorTema } from '../../utils/coresTema';
import { useValidacao } from '../../hooks/useValidacao';
import MensagemErro from '../comum/MensagemErro';
import InputPreco from '../comum/InputPreco';

export default function ResumoFinanceiro({ 
  subtotal = 0, 
  desconto = 0, 
  frete = 0, 
  onDescontoChange, 
  onFreteChange, 
  readonly = false 
}) {
  const { classes } = usarCorTema();
  
  const validacoesFinanceiras = {
    desconto: {
      minimo: 0,
      maximo: 100,
      customizada: (valor) => {
        if (valor > subtotal) {
          return 'Desconto não pode ser maior que o subtotal';
        }
        return null;
      }
    },
    frete: {
      minimo: 0
    }
  };
  
  const { erros, validarCampo, marcarComoTocado } = useValidacao(validacoesFinanceiras);
  const [descontoLocal, setDescontoLocal] = useState(desconto);
  const [freteLocal, setFreteLocal] = useState(frete);
  const [alteracaoRecente, setAlteracaoRecente] = useState(null);

  useEffect(() => {
    setDescontoLocal(desconto);
  }, [desconto]);

  useEffect(() => {
    setFreteLocal(frete);
  }, [frete]);

  const formatarPreco = useCallback((preco) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco);
  }, []);

  const calcularTotal = () => {
    return Math.max(0, subtotal - descontoLocal + freteLocal);
  };

  const handleDescontoChange = (valor) => {
    const novoDesconto = Math.max(0, Math.min(valor, subtotal)); // Não pode ser negativo nem maior que subtotal
    setDescontoLocal(novoDesconto);
    onDescontoChange?.(novoDesconto);
    setAlteracaoRecente('desconto');
    setTimeout(() => setAlteracaoRecente(null), 2000);
  };

  const handleFreteChange = (valor) => {
    const novoFrete = Math.max(0, valor); // Não pode ser negativo
    setFreteLocal(novoFrete);
    onFreteChange?.(novoFrete);
    setAlteracaoRecente('frete');
    setTimeout(() => setAlteracaoRecente(null), 2000);
  };

  const calcularPercentualDesconto = () => {
    if (subtotal === 0) return 0;
    return (descontoLocal / subtotal) * 100;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
        <svg className="h-5 w-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
        Resumo Financeiro
      </h3>

      <div className="space-y-6">
        {/* Cards de Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Subtotal */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  Subtotal
                </p>
                <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                  {formatarPreco(subtotal)}
                </p>
              </div>
              <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-full">
                <svg className="h-6 w-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Desconto */}
          <div className={`rounded-lg p-4 ${alteracaoRecente === 'desconto' ? 'bg-yellow-50 dark:bg-yellow-900/20 ring-2 ring-yellow-200 dark:ring-yellow-800' : 'bg-red-50 dark:bg-red-900/20'}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-red-600 dark:text-red-400">
                  Desconto
                  {descontoLocal > 0 && (
                    <span className="ml-1 text-xs">
                      ({calcularPercentualDesconto().toFixed(1)}%)
                    </span>
                  )}
                </p>
                <p className="text-2xl font-bold text-red-900 dark:text-red-100">
                  -{formatarPreco(descontoLocal)}
                </p>
              </div>
              <div className="p-2 bg-red-100 dark:bg-red-800 rounded-full">
                <svg className="h-6 w-6 text-red-600 dark:text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Frete */}
          <div className={`rounded-lg p-4 ${alteracaoRecente === 'frete' ? 'bg-yellow-50 dark:bg-yellow-900/20 ring-2 ring-yellow-200 dark:ring-yellow-800' : 'bg-green-50 dark:bg-green-900/20'}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600 dark:text-green-400">
                  Frete
                </p>
                <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                  {formatarPreco(freteLocal)}
                </p>
              </div>
              <div className="p-2 bg-green-100 dark:bg-green-800 rounded-full">
                <svg className="h-6 w-6 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Inputs para Desconto e Frete */}
        {!readonly && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Desconto
              </label>
              <InputPreco
                value={descontoLocal > 0 ? descontoLocal.toString() : ''}
                onChange={(valor) => {
                  const novoValor = parseFloat(valor) || 0;
                  validarCampo('desconto', novoValor);
                  handleDescontoChange(novoValor);
                }}
                onBlur={() => marcarComoTocado('desconto')}
                className={`w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  erros.desconto 
                    ? 'border-red-500 dark:border-red-400' 
                    : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="0,00"
              />
              <MensagemErro erro={erros.desconto} />
              {descontoLocal > 0 && !erros.desconto && (
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {calcularPercentualDesconto().toFixed(1)}% do subtotal
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Frete
              </label>
              <InputPreco
                value={freteLocal > 0 ? freteLocal.toString() : ''}
                onChange={(valor) => {
                  const novoValor = parseFloat(valor) || 0;
                  validarCampo('frete', novoValor);
                  handleFreteChange(novoValor);
                }}
                onBlur={() => marcarComoTocado('frete')}
                className={`w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  erros.frete 
                    ? 'border-red-500 dark:border-red-400' 
                    : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="0,00"
              />
              <MensagemErro erro={erros.frete} />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Valor do frete para entrega
              </p>
            </div>
          </div>
        )}

        {/* Cálculo Final */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Total do Pedido
                </p>
                <div className="flex items-center space-x-2">
                  <span className={`text-3xl font-bold ${classes.text}`}>
                    {formatarPreco(calcularTotal())}
                  </span>
                  {alteracaoRecente && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      Atualizado
                    </span>
                  )}
                </div>
              </div>
              <div className={`p-3 ${classes.bg} rounded-full`}>
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>

            {/* Breakdown do Cálculo */}
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal dos itens:</span>
                  <span>{formatarPreco(subtotal)}</span>
                </div>
                {descontoLocal > 0 && (
                  <div className="flex justify-between text-red-600 dark:text-red-400">
                    <span>Desconto aplicado:</span>
                    <span>-{formatarPreco(descontoLocal)}</span>
                  </div>
                )}
                {freteLocal > 0 && (
                  <div className="flex justify-between text-green-600 dark:text-green-400">
                    <span>Frete:</span>
                    <span>+{formatarPreco(freteLocal)}</span>
                  </div>
                )}
                <div className="flex justify-between font-semibold text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-600 pt-2">
                  <span>Total:</span>
                  <span>{formatarPreco(calcularTotal())}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}