import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  function preencherAnimal(animal, item) {
    const divAnimal = createAnimal(animal);
    item.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");

    animaNumeros.init();
  }

  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      const numerosGrid = document.querySelector(target);
      animaisJSON.forEach((animal) => preencherAnimal(animal, numerosGrid));
      animaAnimaisNumeros();
    } catch (error) {
      console.log(Error("deu Erro"));
    }
  }

  return criarAnimais();
}
