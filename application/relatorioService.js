const relatorioRepository = require("../repositories/relatorioRepository");

class RelatorioService {
  async createRelatorio(relatorioData) {
    return await relatorioRepository.create(relatorioData);
  }

  async getRelatorioById(id) {
    return await relatorioRepository.getById(id);
  }

  async getAllRelatorios() {
    return await relatorioRepository.getAll();
  }

  async updateRelatorio(id, updateData) {
    return await relatorioRepository.update(id, updateData);
  }

  async deleteRelatorio(id) {
    return await relatorioRepository.delete(id);
  }
}

module.exports = new RelatorioService();
