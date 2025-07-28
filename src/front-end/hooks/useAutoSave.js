import { useEffect, useRef, useState } from 'react';

export const useAutoSave = (
  dados, 
  salvarFuncao, 
  delay = 2000, 
  habilitado = true
) => {
  const [salvandoAuto, setSalvandoAuto] = useState(false);
  const [ultimoSalvamento, setUltimoSalvamento] = useState(null);
  const [erro, setErro] = useState(null);
  const timeoutRef = useRef(null);
  const dadosAnterioresRef = useRef(null);

  useEffect(() => {
    if (!habilitado || !dados) return;

    // Verificar se os dados mudaram
    const dadosString = JSON.stringify(dados);
    if (dadosAnterioresRef.current === dadosString) return;
    
    dadosAnterioresRef.current = dadosString;

    // Limpar timeout anterior
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Configurar novo timeout
    timeoutRef.current = setTimeout(async () => {
      try {
        setSalvandoAuto(true);
        setErro(null);
        
        await salvarFuncao(dados);
        
        setUltimoSalvamento(new Date());
      } catch (error) {
        console.error('Erro no auto-save:', error);
        setErro(error.message || 'Erro ao salvar automaticamente');
      } finally {
        setSalvandoAuto(false);
      }
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [dados, salvarFuncao, delay, habilitado]);

  // Cleanup no unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const salvarAgora = async () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    try {
      setSalvandoAuto(true);
      setErro(null);
      
      await salvarFuncao(dados);
      
      setUltimoSalvamento(new Date());
    } catch (error) {
      console.error('Erro no salvamento manual:', error);
      setErro(error.message || 'Erro ao salvar');
      throw error;
    } finally {
      setSalvandoAuto(false);
    }
  };

  const formatarUltimoSalvamento = () => {
    if (!ultimoSalvamento) return null;
    
    const agora = new Date();
    const diferenca = Math.floor((agora - ultimoSalvamento) / 1000);
    
    if (diferenca < 60) {
      return `Salvo há ${diferenca} segundos`;
    } else if (diferenca < 3600) {
      const minutos = Math.floor(diferenca / 60);
      return `Salvo há ${minutos} ${minutos === 1 ? 'minuto' : 'minutos'}`;
    } else {
      return ultimoSalvamento.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  };

  return {
    salvandoAuto,
    ultimoSalvamento,
    erro,
    salvarAgora,
    formatarUltimoSalvamento
  };
};