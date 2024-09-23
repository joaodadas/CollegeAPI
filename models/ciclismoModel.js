const Atividade = require("./atividadeModel");
const mongoose = require("mongoose");

const ciclismoSchema = new mongoose.Schema({
  dataAtividade: { type: Date, required: true },
  duracao: { type: Number, required: true },
  distancia: { type: Number, required: true },
  intensidade: { type: String, required: true },
  caloriasQueimadas: { type: Number, required: true },
  observacoes: { type: String },
  bicicletaTipo: { type: String, required: true },
  terreno: { type: String, required: true },
});

class Ciclismo extends Atividade {
  constructor(dataAtividade, duracao, distancia, intensidade, caloriasQueimadas, observacoes, bicicletaTipo, terreno) {
    super("Ciclismo", dataAtividade, duracao, distancia, intensidade, caloriasQueimadas, observacoes);
    this.bicicletaTipo = bicicletaTipo;
    this.terreno = terreno;
  }

  validarDados() {
    super.validarDados();
    if (!this.bicicletaTipo || !this.terreno) {
      throw new Error("Bicicleta e terreno são obrigatórios para atividades de ciclismo!");
    }
  }
}

module.exports = {
  Ciclismo: mongoose.model("Ciclismo", ciclismoSchema),
  CiclismoClass: Ciclismo,
};
