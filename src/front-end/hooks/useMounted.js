import { useState, useEffect } from 'react';

/**
 * Hook para evitar problemas de hidratação
 * Retorna true apenas após o componente ser montado no cliente
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}