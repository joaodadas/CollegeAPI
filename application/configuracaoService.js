class ConfiguracaoSingleton {
    constructor() {
      if (ConfiguracaoSingleton.instance) {
        return ConfiguracaoSingleton.instance;
      }
  
      this.temaInterface = null;
      this.unidadeMedidaDistancia = null;
  
      ConfiguracaoSingleton.instance = this;
    }
  
    static getInstance() {
      if (!ConfiguracaoSingleton.instance) {
        ConfiguracaoSingleton.instance = new ConfiguracaoSingleton();
      }
      return ConfiguracaoSingleton.instance;
    }
  
    getTemaInterface() {
      return this.temaInterface;
    }
  
    setTemaInterface(temaInterface) {
      this.temaInterface = temaInterface;
    }
  
    getUnidadeMedidaDistancia() {
      return this.unidadeMedidaDistancia;
    }
  
    setUnidadeMedidaDistancia(unidadeMedidaDistancia) {
      this.unidadeMedidaDistancia = unidadeMedidaDistancia;
    }
  }
  
  module.exports = ConfiguracaoSingleton.getInstance();
  