import { useState, useEffect } from 'react';

// Paleta de cores disponíveis para o tema
export const CORES_DISPONIVEIS = {
  purple: {
    nome: 'Roxo',
    primary: 'purple',
    classes: {
      bg: 'bg-purple-600',
      bgHover: 'hover:bg-purple-700',
      bgLight: 'bg-purple-50',
      bgLightDark: 'dark:bg-purple-900/20',
      text: 'text-purple-600',
      textDark: 'dark:text-purple-400',
      textLight: 'text-purple-700',
      textLightDark: 'dark:text-purple-300',
      border: 'border-purple-600',
      borderLight: 'border-purple-200',
      ring: 'ring-purple-500',
      accent: 'accent-purple-600'
    }
  },
  blue: {
    nome: 'Azul',
    primary: 'blue',
    classes: {
      bg: 'bg-blue-600',
      bgHover: 'hover:bg-blue-700',
      bgLight: 'bg-blue-50',
      bgLightDark: 'dark:bg-blue-900/20',
      text: 'text-blue-600',
      textDark: 'dark:text-blue-400',
      textLight: 'text-blue-700',
      textLightDark: 'dark:text-blue-300',
      border: 'border-blue-600',
      borderLight: 'border-blue-200',
      ring: 'ring-blue-500',
      accent: 'accent-blue-600'
    }
  },
  green: {
    nome: 'Verde',
    primary: 'green',
    classes: {
      bg: 'bg-green-600',
      bgHover: 'hover:bg-green-700',
      bgLight: 'bg-green-50',
      bgLightDark: 'dark:bg-green-900/20',
      text: 'text-green-600',
      textDark: 'dark:text-green-400',
      textLight: 'text-green-700',
      textLightDark: 'dark:text-green-300',
      border: 'border-green-600',
      borderLight: 'border-green-200',
      ring: 'ring-green-500',
      accent: 'accent-green-600'
    }
  },
  red: {
    nome: 'Vermelho',
    primary: 'red',
    classes: {
      bg: 'bg-red-600',
      bgHover: 'hover:bg-red-700',
      bgLight: 'bg-red-50',
      bgLightDark: 'dark:bg-red-900/20',
      text: 'text-red-600',
      textDark: 'dark:text-red-400',
      textLight: 'text-red-700',
      textLightDark: 'dark:text-red-300',
      border: 'border-red-600',
      borderLight: 'border-red-200',
      ring: 'ring-red-500',
      accent: 'accent-red-600'
    }
  },
  orange: {
    nome: 'Laranja',
    primary: 'orange',
    classes: {
      bg: 'bg-orange-600',
      bgHover: 'hover:bg-orange-700',
      bgLight: 'bg-orange-50',
      bgLightDark: 'dark:bg-orange-900/20',
      text: 'text-orange-600',
      textDark: 'dark:text-orange-400',
      textLight: 'text-orange-700',
      textLightDark: 'dark:text-orange-300',
      border: 'border-orange-600',
      borderLight: 'border-orange-200',
      ring: 'ring-orange-500',
      accent: 'accent-orange-600'
    }
  },
  indigo: {
    nome: 'Índigo',
    primary: 'indigo',
    classes: {
      bg: 'bg-indigo-600',
      bgHover: 'hover:bg-indigo-700',
      bgLight: 'bg-indigo-50',
      bgLightDark: 'dark:bg-indigo-900/20',
      text: 'text-indigo-600',
      textDark: 'dark:text-indigo-400',
      textLight: 'text-indigo-700',
      textLightDark: 'dark:text-indigo-300',
      border: 'border-indigo-600',
      borderLight: 'border-indigo-200',
      ring: 'ring-indigo-500',
      accent: 'accent-indigo-600'
    }
  },
  teal: {
    nome: 'Verde-azulado',
    primary: 'teal',
    classes: {
      bg: 'bg-teal-600',
      bgHover: 'hover:bg-teal-700',
      bgLight: 'bg-teal-50',
      bgLightDark: 'dark:bg-teal-900/20',
      text: 'text-teal-600',
      textDark: 'dark:text-teal-400',
      textLight: 'text-teal-700',
      textLightDark: 'dark:text-teal-300',
      border: 'border-teal-600',
      borderLight: 'border-teal-200',
      ring: 'ring-teal-500',
      accent: 'accent-teal-600'
    }
  },
  pink: {
    nome: 'Rosa',
    primary: 'pink',
    classes: {
      bg: 'bg-pink-600',
      bgHover: 'hover:bg-pink-700',
      bgLight: 'bg-pink-50',
      bgLightDark: 'dark:bg-pink-900/20',
      text: 'text-pink-600',
      textDark: 'dark:text-pink-400',
      textLight: 'text-pink-700',
      textLightDark: 'dark:text-pink-300',
      border: 'border-pink-600',
      borderLight: 'border-pink-200',
      ring: 'ring-pink-500',
      accent: 'accent-pink-600'
    }
  },
  yellow: {
    nome: 'Amarelo',
    primary: 'yellow',
    classes: {
      bg: 'bg-yellow-500',
      bgHover: 'hover:bg-yellow-600',
      bgLight: 'bg-yellow-50',
      bgLightDark: 'dark:bg-yellow-900/20',
      text: 'text-yellow-500',
      textDark: 'dark:text-yellow-400',
      textLight: 'text-yellow-600',
      textLightDark: 'dark:text-yellow-300',
      border: 'border-yellow-500',
      borderLight: 'border-yellow-200',
      ring: 'ring-yellow-500',
      accent: 'accent-yellow-500'
    }
  },
  rose: {
    nome: 'Rosa Claro',
    primary: 'rose',
    classes: {
      bg: 'bg-rose-400',
      bgHover: 'hover:bg-rose-500',
      bgLight: 'bg-rose-50',
      bgLightDark: 'dark:bg-rose-900/20',
      text: 'text-rose-400',
      textDark: 'dark:text-rose-300',
      textLight: 'text-rose-500',
      textLightDark: 'dark:text-rose-200',
      border: 'border-rose-400',
      borderLight: 'border-rose-100',
      ring: 'ring-rose-400',
      accent: 'accent-rose-400'
    }
  },
  black: {
    nome: 'Preto',
    primary: 'black',
    classes: {
      bg: 'bg-gray-900',
      bgHover: 'hover:bg-gray-800',
      bgLight: 'bg-gray-50',
      bgLightDark: 'dark:bg-gray-900/20',
      text: 'text-gray-900',
      textDark: 'dark:text-gray-100',
      textLight: 'text-gray-800',
      textLightDark: 'dark:text-gray-200',
      border: 'border-gray-900',
      borderLight: 'border-gray-200',
      ring: 'ring-gray-900',
      accent: 'accent-gray-900'
    }
  },
  cyan: {
    nome: 'Ciano',
    primary: 'cyan',
    classes: {
      bg: 'bg-cyan-500',
      bgHover: 'hover:bg-cyan-600',
      bgLight: 'bg-cyan-50',
      bgLightDark: 'dark:bg-cyan-900/20',
      text: 'text-cyan-500',
      textDark: 'dark:text-cyan-400',
      textLight: 'text-cyan-600',
      textLightDark: 'dark:text-cyan-300',
      border: 'border-cyan-500',
      borderLight: 'border-cyan-200',
      ring: 'ring-cyan-500',
      accent: 'accent-cyan-500'
    }
  }
};

// Função para obter a cor atual do tema
export const obterCorTema = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('corTema') || 'purple';
  }
  return 'purple';
};

// Função para definir a cor do tema
export const definirCorTema = (cor) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('corTema', cor);
    // Notificar os listeners sobre a mudança de tema
    window.dispatchEvent(new Event('themeChange'));
  }
};

// Hook personalizado para usar cores do tema
export const usarCorTema = () => {
  const [corAtual, setCorAtual] = useState(obterCorTema());

  useEffect(() => {
    const handleThemeChange = () => {
      setCorAtual(obterCorTema());
    };

    // Adicionar listener para o evento customizado
    window.addEventListener('themeChange', handleThemeChange);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('themeChange', handleThemeChange);
    };
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

  const corConfig = CORES_DISPONIVEIS[corAtual] || CORES_DISPONIVEIS.purple;
  
  return {
    corAtual,
    corConfig,
    definirCor: definirCorTema,
    classes: corConfig.classes
  };
};