export default class Funcionamento {
  constructor(funcionamento) {
    this.funcionamento = document.querySelector(funcionamento);
  }
  // const agora = new Date();
  // const futuro = new Date("Jul 15 2023 23:59");

  // function transformarEmDias(tempo) {
  //   return tempo / (24 * 60 * 60 * 1000);
  // }

  // const diasAgora = transformarEmDias(agora.getTime());
  // const diasFuturo = transformarEmDias(futuro.getTime());

  // // console.log(diasFuturo - diasAgora);

  dadosFuncionamento() {
    this.diaSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.horaAgora = this.dataAgora.getHours();
    this.diaAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diaSemana.indexOf(this.diaAgora) !== -1;

    const horarioAberto =
      this.horaAgora >= this.horarioSemana[0] &&
      this.horaAgora <= this.horarioSemana[1];

    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add("aberto");
    }
  }

  init() {
    this.dadosFuncionamento();
    this.dadosAgora();

    if (this.funcionamento) {
      this.ativaAberto();
    }
  }
}
