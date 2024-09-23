const configuracao = require("../application/configuracaoService");

class ConfiguracaoController {
  getConfiguracao(req, res) {
    res.status(200).json({
      temaInterface: configuracao.getTemaInterface(),
      unidadeMedidaDistancia: configuracao.getUnidadeMedidaDistancia(),
    });
  }

  setConfiguracao(req, res) {
    const { temaInterface, unidadeMedidaDistancia } = req.body;
    configuracao.setTemaInterface(temaInterface);
    configuracao.setUnidadeMedidaDistancia(unidadeMedidaDistancia);
    res.status(200).json({ message: "Configuration updated" });
  }
}

module.exports = new ConfiguracaoController();
