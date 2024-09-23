const metaRepository = require("../repositories/metaRepository");

class MetaService {
  async createMeta(metaData) {
    return await metaRepository.create(metaData);
  }

  async getMetaById(id) {
    return await metaRepository.getById(id);
  }

  async getAllMetasByUserId(userId) {
    return await metaRepository.getAllByUserId(userId);
  }

  async updateMeta(id, updateData) {
    return await metaRepository.update(id, updateData);
  }

  async deleteMeta(id) {
    return await metaRepository.delete(id);
  }
}

module.exports = new MetaService();
