const mongoose = require("mongoose");

const notificacaoSchema = new mongoose.Schema({
  id_usuario: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  mensagem: { type: String, required: true },
  data_criacao: { type: Date, default: Date.now },
  lida: { type: Boolean, default: false },
});

const Notificacao = mongoose.model("Notificacao", notificacaoSchema);

class NotificacaoEntity {
  constructor(id_usuario, mensagem, data_criacao, lida = false) {
    this.id_usuario = id_usuario;
    this.mensagem = mensagem;
    this.data_criacao = data_criacao;
    this.lida = lida;
  }

  async criarNotificacao() {
    const novaNotificacao = new Notificacao(this);
    return await novaNotificacao.save();
  }

  async excluirNotificacao(idNotificacao) {
    return await Notificacao.findByIdAndDelete(idNotificacao);
  }

  async getNotificacao(idNotificacao) {
    return await Notificacao.findById(idNotificacao);
  }

  async getNotificacoesPorUsuario(idUsuario) {
    return await Notificacao.find({ id_usuario: idUsuario });
  }

  async marcarComoLida(idNotificacao) {
    return await Notificacao.findByIdAndUpdate(idNotificacao, { lida: true }, { new: true });
  }
}

module.exports = {
  NotificacaoEntity,
  Notificacao,
};
