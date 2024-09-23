const relatorioService = require("../application/relatorioService");

class RelatorioController {
  async createRelatorio(req, res) {
    try {
      const relatorio = await relatorioService.createRelatorio(req.body);
      res.status(201).json(relatorio);
    } catch (err) {
      res.status(500).json({ message: "Error creating relatorio", error: err });
    }
  }

  async getRelatorioById(req, res) {
    try {
      const relatorio = await relatorioService.getRelatorioById(req.params.id);
      res.status(200).json(relatorio);
    } catch (err) {
      res.status(404).json({ message: "Relatorio not found", error: err });
    }
  }

  async getAllRelatorios(req, res) {
    try {
      const relatorios = await relatorioService.getAllRelatorios();
      res.status(200).json(relatorios);
    } catch (err) {
      res.status(500).json({ message: "Error fetching relatorios", error: err });
    }
  }

  async updateRelatorio(req, res) {
    try {
      const relatorio = await relatorioService.updateRelatorio(req.params.id, req.body);
      res.status(200).json(relatorio);
    } catch (err) {
      res.status(500).json({ message: "Error updating relatorio", error: err });
    }
  }

  async deleteRelatorio(req, res) {
    try {
      await relatorioService.deleteRelatorio(req.params.id);
      res.status(204).json();
    } catch (err) {
      res.status(500).json({ message: "Error deleting relatorio", error: err });
    }
  }
}

module.exports = new RelatorioController();
