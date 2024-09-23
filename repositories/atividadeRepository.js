const { Ciclismo } = require("../models/atividadeModel");

class AtividadeRepository {
  async createCiclismo(atividadeData) {
    const atividade = new Ciclismo(atividadeData);
    return await atividade.save();
  }

  async getAllCiclismos() {
    return await Ciclismo.find();
  }

}

module.exports = new AtividadeRepository();
