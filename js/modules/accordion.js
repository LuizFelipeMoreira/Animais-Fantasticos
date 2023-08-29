export default class InitAccordion {
  constructor(lista) {
    this.lista = document.querySelectorAll(lista);
    this.active = "ativo";
  }

  toggleAccodion(item) {
    item.classList.toggle(this.active);
    item.nextElementSibling.classList.toggle(this.active);
  }

  addAccordionEvent() {
    this.lista.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccodion(item));
    });
  }

  init() {
    if (this.lista.length) {
      this.toggleAccodion(this.lista[0]);
      this.toggleAccodion(this.lista[0].nextElementSibling);

      this.addAccordionEvent();
    }
    return this;
  }
}
