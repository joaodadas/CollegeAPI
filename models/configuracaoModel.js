const mongoose = require("mongoose");

const configuracaoSchema = new mongoose.Schema({
  temaInterface: { type: String, default: null },
  unidadeMedidaDistancia: { type: String, default: null },
});

const Configuracao = mongoose.model("Configuracao", configuracaoSchema);

class ConfiguracaoSingleton {
  constructor() {
    if (ConfiguracaoSingleton.instance) {
      return ConfiguracaoSingleton.instance;
    }

    this.configuracao = null;
    ConfiguracaoSingleton.instance = this;
  }

  static async getInstance() {
    if (!ConfiguracaoSingleton.instance) {
      ConfiguracaoSingleton.instance = new ConfiguracaoSingleton();
      await ConfiguracaoSingleton.instance.loadConfiguracao();
    }
    return ConfiguracaoSingleton.instance;
  }

  async loadConfiguracao() {
    this.configuracao = await Configuracao.findOne();
    if (!this.configuracao) {
      this.configuracao = new Configuracao();
      await this.configuracao.save();
    }
  }

  getTemaInterface() {
    return this.configuracao.temaInterface;
  }

  setTemaInterface(temaInterface) {
    this.configuracao.temaInterface = temaInterface;
    this.configuracao.save(); 
  }

  getUnidadeMedidaDistancia() {
    return this.configuracao.unidadeMedidaDistancia;
  }

  setUnidadeMedidaDistancia(unidadeMedidaDistancia) {
    this.configuracao.unidadeMedidaDistancia = unidadeMedidaDistancia;
    this.configuracao.save(); 
  }
}

module.exports = ConfiguracaoSingleton;
