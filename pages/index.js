import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ServicoAutenticacao } from '../src/front-end/servicos/ServicoAutenticacao';

export default function Home() {
  const router = useRouter();
  const servicoAutenticacao = new ServicoAutenticacao();

  useEffect(() => {
    // Verificar se o usuário está autenticado
    if (servicoAutenticacao.estaAutenticado()) {
      // Redirecionar para o painel
      router.push('/painel');
    } else {
      // Redirecionar para a página de login
      router.push('/login');
    }
  }, [router]);

  // Esta página é apenas um redirecionamento, não renderiza nada
  return null;
}