import outsideClick from "./clickOutside.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuLista = document.querySelector('[data-menu="lista"]');
  const eventos = ["click", "touchstart"];

  function abrirMenu() {
    console.log("ativou abrirMenu");
    menuButton.classList.add("active");
    menuLista.classList.add("active");
    outsideClick(menuLista, ["click", "touchstart"], () => {
      console.log("ativou outsideClique");
      menuButton.classList.remove("active");
      menuLista.classList.remove("active");
    });
  }

  eventos.forEach((userEvent) => {
    menuButton.addEventListener(userEvent, abrirMenu);
  });
}
