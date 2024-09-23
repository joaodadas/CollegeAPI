const mongoose = require("mongoose");

class Atividade {
  constructor(tipoAtividade, dataAtividade, duracao, distancia, intensidade, caloriasQueimadas, observacoes) {
    this.tipoAtividade = tipoAtividade;
    this.dataAtividade = dataAtividade;
    this.duracao = duracao;
    this.distancia = distancia;
    this.intensidade = intensidade;
    this.caloriasQueimadas = caloriasQueimadas;
    this.observacoes = observacoes;
  }

  criarAtividade() {
    this.validarDados();
    this.salvarAtividade();
    this.exibirMensagem();
  }

  validarDados() {
    if (!this.tipoAtividade || !this.dataAtividade) {
      throw new Error("Dados inválidos!");
    }
  }

  salvarAtividade() {
    console.log(`Salvando atividade de ${this.tipoAtividade}`);
  }

  exibirMensagem() {
    console.log(`${this.tipoAtividade} criada com sucesso!`);
  }
}

module.exports = Atividade;
