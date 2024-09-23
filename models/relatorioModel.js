const mongoose = require("mongoose");

const relatorioSchema = new mongoose.Schema({
  tipo: { type: String, required: true }, 
  dataInicio: { type: Date, required: true },
  dataFim: { type: Date, required: true },
  dados: { type: Array, default: [] }, 
});

module.exports = mongoose.model("Relatorio", relatorioSchema);
