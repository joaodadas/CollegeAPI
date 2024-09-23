const configuracaoRepository = require("../repositories/configuracaoRepository");

class ConfiguracaoService {
  getTemaInterface() {
    return configuracaoRepository.getConfiguracao().temaInterface;
  }

  setTemaInterface(temaInterface) {
    configuracaoRepository.setTemaInterface(temaInterface);
  }

  getUnidadeMedidaDistancia() {
    return configuracaoRepository.getConfiguracao().unidadeMedidaDistancia;
  }

  setUnidadeMedidaDistancia(unidadeMedidaDistancia) {
    configuracaoRepository.setUnidadeMedidaDistancia(unidadeMedidaDistancia);
  }
}

module.exports = new ConfiguracaoService();
