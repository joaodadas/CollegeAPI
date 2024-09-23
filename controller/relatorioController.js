const RelatorioService = require("../application/relatorioService");

class RelatorioController {
  gerarRelatorioSemanal(req, res) {
    const { dataInicio, dataFim } = req.body;
    const resultado = RelatorioService.gerarRelatorioSemanal(dataInicio, dataFim);
    res.status(200).json(resultado);
  }

  gerarRelatorioMensal(req, res) {
    const { dataInicio, dataFim } = req.body;
    const resultado = RelatorioService.gerarRelatorioMensal(dataInicio, dataFim);
    res.status(200).json(resultado);
  }
}

module.exports = new RelatorioController();
