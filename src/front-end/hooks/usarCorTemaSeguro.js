import { usarCorTema } from '../utils/coresTema';
import { useMounted } from './useMounted';

/**
 * Hook seguro para usar cores do tema que evita problemas de hidratação
 * Retorna classes padrão durante SSR e classes do tema após hidratação
 */
export function usarCorTemaSeguro() {
  const mounted = useMounted();
  const { classes } = usarCorTema();

  // Classes padrão para SSR
  const classesSeguras = mounted ? classes : {
    bg: 'bg-gray-900',
    bgLight: 'bg-gray-100',
    bgLightDark: 'dark:bg-gray-700',
    text: 'text-gray-900',
    textLight: 'text-gray-700',
    textLightDark: 'dark:text-gray-300',
    textDark: 'dark:text-white',
    border: 'border-gray-900',
    borderLight: 'border-gray-200',
    borderLightDark: 'dark:border-gray-700'
  };

  return {
    classes: classesSeguras,
    mounted
  };
}