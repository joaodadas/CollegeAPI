const ConfiguracaoSingleton = require("../models/configuracaoModel");

class ConfiguracaoRepository {
  constructor() {
    this.configuracao = ConfiguracaoSingleton.getInstance();
  }

  getConfiguracao() {
    return this.configuracao;
  }

  updateTemaInterface(temaInterface) {
    this.configuracao.setTemaInterface(temaInterface);
    return this.configuracao.getTemaInterface();
  }

  updateUnidadeMedidaDistancia(unidadeMedidaDistancia) {
    this.configuracao.setUnidadeMedidaDistancia(unidadeMedidaDistancia);
    return this.configuracao.getUnidadeMedidaDistancia();
  }
}

module.exports = new ConfiguracaoRepository();
