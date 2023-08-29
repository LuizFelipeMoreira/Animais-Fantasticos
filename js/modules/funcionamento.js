export default function initFuncionamento() {
  // const agora = new Date();
  // const futuro = new Date("Jul 15 2023 23:59");

  // function transformarEmDias(tempo) {
  //   return tempo / (24 * 60 * 60 * 1000);
  // }

  // const diasAgora = transformarEmDias(agora.getTime());
  // const diasFuturo = transformarEmDias(futuro.getTime());

  // // console.log(diasFuturo - diasAgora);

  const funcionamento = document.querySelector("[data-semana]");
  const diaSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const horaAgora = dataAgora.getHours();
  const diaAgora = dataAgora.getDay();

  const semanaAberto = diaSemana.indexOf(diaAgora) !== -1;

  const horarioAberto =
    horaAgora >= horarioSemana[0] && horaAgora <= horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}
