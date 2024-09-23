const notificacaoRepository = require("../repositories/notificacaoRepository");

class NotificacaoService {
  async createNotificacao(notificacaoData) {
    return await notificacaoRepository.create(notificacaoData);
  }

  async getNotificacaoById(id) {
    return await notificacaoRepository.getById(id);
  }

  async getAllNotificacoesByUserId(userId) {
    return await notificacaoRepository.getAllByUserId(userId);
  }

  async updateNotificacao(id, updateData) {
    return await notificacaoRepository.update(id, updateData);
  }

  async deleteNotificacao(id) {
    return await notificacaoRepository.delete(id);
  }
}

module.exports = new NotificacaoService();
