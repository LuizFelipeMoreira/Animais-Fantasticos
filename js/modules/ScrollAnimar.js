export default class ScrollAnima {
  constructor(section) {
    this.sections = document.querySelectorAll(section);
    this.windowMetade = window.innerHeight * 0.6;
    this.animar = this.animar.bind(this);
  }

  animar() {
    this.sections.forEach((section) => {
      const sectionTopo = section.getBoundingClientRect().top;
      const sectionVisible = sectionTopo - this.windowMetade < 0;
      if (sectionVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  init() {
    this.animar();
    window.addEventListener("scroll", this.animar);
  }
}
