import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ServicoAutenticacao } from '../src/front-end/servicos/ServicoAutenticacao';

export default function Home() {
  const router = useRouter();
  const servicoAutenticacao = new ServicoAutenticacao();
  const [carregando, setCarregando] = useState(true);

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center relative animate-pulse">
          <div className="w-6 h-6 bg-white rounded-full absolute"></div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">PulseHub B2B</h1>
        <p className="text-gray-600 mb-4">Carregando...</p>
      </div>
    </div>
  );
}