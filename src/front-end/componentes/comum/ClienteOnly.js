import { useState, useEffect } from 'react';

/**
 * Componente que renderiza apenas no cliente para evitar problemas de hidratação
 */
export default function ClienteOnly({ children, fallback = null }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return fallback;
  }

  return children;
}