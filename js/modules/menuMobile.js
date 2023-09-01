import outsideClick from "./clickOutside.js";

export default class MenuMobile {
  constructor(menusButtons, menuList, eventos) {
    this.menuButton = document.querySelector(menusButtons);
    this.menuLista = document.querySelector(menuList);
    this.abrirMenu = this.abrirMenu.bind(this);
    this.activeClass = "active";

    if (eventos === undefined) this.events = ["touchstart", "click"];
    else this.events = eventos;
  }

  abrirMenu() {
    this.menuButton.classList.add(this.activeClass);
    this.menuLista.classList.add(this.activeClass);

    outsideClick(this.menuLista, this.events, () => {
      this.menuButton.classList.remove(this.activeClass);
      this.menuLista.classList.remove(this.activeClass);
    });
  }

  addMenuMobile() {
    this.events.forEach((userEvent) => {
      this.menuButton.addEventListener(userEvent, this.abrirMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuLista) {
      this.addMenuMobile();
    }
  }
}
