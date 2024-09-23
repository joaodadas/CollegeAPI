const ConfiguracaoModel = require("./ConfiguracaoModel"); 

class ConfiguracaoRepository {
  async getConfiguracao() {
    return await ConfiguracaoModel.findOne().exec();
  }

  async setTemaInterface(temaInterface) {
    if (typeof temaInterface !== 'string') {
      throw new Error("Tema interface must be a string.");
    }
    await ConfiguracaoModel.updateOne({}, { temaInterface }, { upsert: true });
  }

  async setUnidadeMedidaDistancia(unidadeMedidaDistancia) {
    const validUnits = ['km', 'miles'];
    if (!validUnits.includes(unidadeMedidaDistancia)) {
      throw new Error(`Unidade de medida inválida. Deve ser uma das seguintes: ${validUnits.join(', ')}`);
    }
    await ConfiguracaoModel.updateOne({}, { unidadeMedidaDistancia }, { upsert: true });
  }
}

module.exports = new ConfiguracaoRepository();
