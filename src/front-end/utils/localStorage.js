// Utilitário para gerenciar localStorage com tratamento de erros

export const LocalStorageManager = {
  // Salvar dados com tratamento de quota
  setItem(key, value, maxItems = 100) {
    try {
      const stringValue = JSON.stringify(value);
      localStorage.setItem(key, stringValue);
    } catch (error) {
      if (error.name === 'QuotaExceededError') {
        console.warn(`LocalStorage quota exceeded for key: ${key}`);
        
        // Tentar reduzir dados se for um array
        if (Array.isArray(value) && value.length > maxItems) {
          const reducedValue = value.slice(-maxItems);
          try {
            localStorage.setItem(key, JSON.stringify(reducedValue));
            console.log(`Dados reduzidos para ${maxItems} itens e salvos com sucesso`);
            return reducedValue;
          } catch (secondError) {
            console.error('Erro mesmo após reduzir dados:', secondError);
            this.removeItem(key);
            return [];
          }
        } else {
          // Se não for array ou já estiver pequeno, remover completamente
          this.removeItem(key);
          return null;
        }
      } else {
        console.error(`Erro ao salvar no localStorage (${key}):`, error);
        return null;
      }
    }
    return value;
  },

  // Obter dados com tratamento de erros
  getItem(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Erro ao ler do localStorage (${key}):`, error);
      return defaultValue;
    }
  },

  // Remover item
  removeItem(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Erro ao remover do localStorage (${key}):`, error);
    }
  },

  // Limpar tudo
  clear() {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Erro ao limpar localStorage:', error);
    }
  },

  // Verificar espaço disponível (aproximado)
  getStorageInfo() {
    let total = 0;
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        total += localStorage[key].length + key.length;
      }
    }
    
    return {
      used: total,
      usedMB: (total / 1024 / 1024).toFixed(2),
      // Limite típico é ~5-10MB, mas varia por navegador
      estimatedLimit: '5-10MB'
    };
  }
};