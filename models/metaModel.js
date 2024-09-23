const mongoose = require("mongoose");

const metaSchema = new mongoose.Schema({
  id_usuario: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  tipo_atividade: { type: String, required: true },
  valor_meta: { type: Number, required: true },
  data_inicial: { type: Date, required: true },
  data_final: { type: Date, required: true },
  status_meta: { type: String, required: true },
});

const Meta = mongoose.model("Meta", metaSchema);

class MetaEntity {
  constructor(id_meta, id_usuario, tipo_atividade, valor_meta, data_inicial, data_final, status_meta) {
    this.id_meta = id_meta;
    this.id_usuario = id_usuario;
    this.tipo_atividade = tipo_atividade;
    this.valor_meta = valor_meta;
    this.data_inicial = data_inicial;
    this.data_final = data_final;
    this.status_meta = status_meta;
  }

  async excluirMeta(idMeta) {
    return await Meta.findByIdAndDelete(idMeta);
  }

  async getMeta(idMeta) {
    return await Meta.findById(idMeta);
  }

  async getMetas(idUsuario) {
    return await Meta.find({ id_usuario: idUsuario });
  }
}

class MetaPeso extends MetaEntity {
  constructor(id_meta, id_usuario, tipo_atividade, valor_meta, data_inicial, data_final, status_meta, descricao_meta) {
    super(id_meta, id_usuario, tipo_atividade, valor_meta, data_inicial, data_final, status_meta);
    this.descricao_meta = descricao_meta;
  }

  async criarMeta() {
    const newMeta = new Meta(this);
    return await newMeta.save();
  }

  async editarMeta(idMeta, tipoAtividade, descricaoMeta, valorMeta, dataInicial, dataFinal) {
    const updatedMeta = await Meta.findByIdAndUpdate(idMeta, {
      tipo_atividade: tipoAtividade,
      valor_meta: valorMeta,
      data_inicial: dataInicial,
      data_final: dataFinal,
      status_meta: this.status_meta, // assuming status_meta is unchanged
    }, { new: true });
    return updatedMeta;
  }
}

class MetaCorridaKms extends MetaEntity {
  constructor(id_meta, id_usuario, tipo_atividade, valor_meta, data_inicial, data_final, status_meta, descricao_meta) {
    super(id_meta, id_usuario, tipo_atividade, valor_meta, data_inicial, data_final, status_meta);
    this.descricao_meta = descricao_meta;
  }

  async criarMeta() {
    const newMeta = new Meta(this);
    return await newMeta.save();
  }

  async editarMeta(idMeta, tipoAtividade, descricaoMeta, valorMeta, dataInicial, dataFinal) {
    const updatedMeta = await Meta.findByIdAndUpdate(idMeta, {
      tipo_atividade: tipoAtividade,
      valor_meta: valorMeta,
      data_inicial: dataInicial,
      data_final: dataFinal,
      status_meta: this.status_meta, // assuming status_meta is unchanged
    }, { new: true });
    return updatedMeta;
  }
}

module.exports = {
  MetaEntity,
  MetaPeso,
  MetaCorridaKms,
};
