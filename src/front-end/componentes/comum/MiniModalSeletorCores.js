import React from 'react';
import SeletorCores from '../configuracoes/SeletorCores';

export default function MiniModalSeletorCores({ isOpen, onClose, onColorSelect }) {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 z-50 transform origin-top transition-all duration-300 ease-out shadow-lg"
      style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 10px 20px -5px rgba(0, 0, 0, 0.1)' }}
    >
      <div className="py-1">
        <div className="px-2 py-1 border-b border-gray-200 dark:border-gray-700">
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            Cores do Tema
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Selecione a cor principal da interface
          </p>
        </div>
        <div className="p-1">
          <SeletorCores onCorAlterada={onColorSelect} />
        </div>
      </div>
    </div>
  );
}