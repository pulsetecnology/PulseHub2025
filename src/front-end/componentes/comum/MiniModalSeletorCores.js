import React from 'react';
import SeletorCores from '../configuracoes/SeletorCores';

export default function MiniModalSeletorCores({ isOpen, onClose, onColorSelect }) {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute mt-2 w-96 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 z-50 shadow-lg"
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">
          Cores do Tema
        </h2>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Selecione a cor principal da interface
        </p>
      </div>
      
      {/* Conteúdo */}
      <div className="p-4">
        <SeletorCores onCorAlterada={onColorSelect} />
      </div>
    </div>
  );
}