const AtividadeService = require("../application/atividadeService");

class AtividadeController {
  async criarAtividade(req, res) {
    try {
      const atividade = await AtividadeService.criarAtividade(req.body);
      res.status(201).json(atividade);
    } catch (err) {
      res.status(500).json({ message: "Error creating activity", error: err });
    }
  }

  async getAtividadeById(req, res) {
    try {
      const atividade = await AtividadeService.getAtividadeById(req.params.id);
      res.status(200).json(atividade);
    } catch (err) {
      res.status(404).json({ message: "Activity not found", error: err });
    }
  }

  async getAllAtividades(req, res) {
    try {
      const atividades = await AtividadeService.getAllAtividades();
      res.status(200).json(atividades);
    } catch (err) {
      res.status(500).json({ message: "Error fetching activities", error: err });
    }
  }

  async atualizarAtividade(req, res) {
    try {
      const atividade = await AtividadeService.atualizarAtividade(req.params.id, req.body);
      res.status(200).json(atividade);
    } catch (err) {
      res.status(500).json({ message: "Error updating activity", error: err });
    }
  }

  async deletarAtividade(req, res) {
    try {
      await AtividadeService.deletarAtividade(req.params.id);
      res.status(204).json();
    } catch (err) {
      res.status(500).json({ message: "Error deleting activity", error: err });
    }
  }
}

module.exports = new AtividadeController();
