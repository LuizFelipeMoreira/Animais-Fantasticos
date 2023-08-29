export default class InitScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = {
        behavior: "smooth",
        block: "start",
      };
    } else {
      this.options = options;
    }
    this.Scrollar = this.Scrollar.bind(this);
  }

  Scrollar(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.Scrollar);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }

    return this;
  }
}
