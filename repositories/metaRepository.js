const Meta = require("../models/metaModel");

class MetaRepository {
  async create(metaData) {
    const meta = new Meta(metaData);
    return await meta.save();
  }

  async getById(id) {
    return await Meta.findById(id);
  }

  async getAllByUserId(userId) {
    return await Meta.find({ id_usuario: userId });
  }

  async update(id, updateData) {
    return await Meta.findByIdAndUpdate(id, updateData, { new: true });
  }

  async delete(id) {
    return await Meta.findByIdAndDelete(id);
  }
}

module.exports = new MetaRepository();
