import React from 'react';

interface LogotipoProps {
  tamanho?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Logotipo({ tamanho = 'md', className = '' }: LogotipoProps) {
  // Definindo tamanhos com base no parâmetro tamanho
  const tamanhos = {
    sm: {
      container: 'h-8',
      logo: 'h-8',
      texto: 'text-xl',
    },
    md: {
      container: 'h-10',
      logo: 'h-10',
      texto: 'text-2xl',
    },
    lg: {
      container: 'h-12',
      logo: 'h-12',
      texto: 'text-3xl',
    },
  };

  return (
    <div className={`flex items-center ${className}`}>
      {/* Círculo com efeito pulsante */}
      <div className={`relative ${tamanhos[tamanho].container} aspect-square bg-blue-600 rounded-full flex items-center justify-center`}>
        {/* Ondas de áudio/pulso */}
        <div className="flex items-center h-1/2 space-x-0.5">
          <div className="w-1 h-1/3 bg-white rounded-full"></div>
          <div className="w-1 h-2/3 bg-white rounded-full"></div>
          <div className="w-1 h-full bg-white rounded-full"></div>
          <div className="w-1 h-2/3 bg-white rounded-full"></div>
          <div className="w-1 h-1/3 bg-white rounded-full"></div>
        </div>

        {/* Círculos pulsantes animados */}
        <div className="absolute inset-0 rounded-full bg-blue-600 opacity-30 animate-ping-slow"></div>
        <div className="absolute inset-0 rounded-full bg-blue-600 opacity-20 animate-ping"></div>
      </div>

      {/* Texto do logo */}
      <div className={`ml-2 font-bold ${tamanhos[tamanho].texto}`}>
        <span className="text-blue-600">Pulse</span>
        <span className="text-green-500">Hub</span>
      </div>
    </div>
  );
}