const Relatorio = require("../models/relatorioModel");

class RelatorioRepository {
  async create(relatorioData) {
    const relatorio = new Relatorio(relatorioData);
    return await relatorio.save();
  }

  async getById(id) {
    return await Relatorio.findById(id);
  }

  async getAll() {
    return await Relatorio.find();
  }

  async update(id, updateData) {
    return await Relatorio.findByIdAndUpdate(id, updateData, { new: true });
  }

  async delete(id) {
    return await Relatorio.findByIdAndDelete(id);
  }
}

module.exports = new RelatorioRepository();
