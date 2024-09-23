const { Notificacao } = require("../models/notificacaoModel");

class NotificacaoRepository {
  async create(notificacaoData) {
    const notificacao = new Notificacao(notificacaoData);
    return await notificacao.save();
  }

  async getById(id) {
    return await Notificacao.findById(id);
  }

  async getAllByUserId(userId) {
    return await Notificacao.find({ id_usuario: userId });
  }

  async update(id, updateData) {
    return await Notificacao.findByIdAndUpdate(id, updateData, { new: true });
  }

  async delete(id) {
    return await Notificacao.findByIdAndDelete(id);
  }
}

module.exports = new NotificacaoRepository();
