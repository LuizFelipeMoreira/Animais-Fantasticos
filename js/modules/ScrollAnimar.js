import debounce from "./debounced.js";

export default class ScrollAnima {
  constructor(section) {
    this.sections = document.querySelectorAll(section);
    this.windowMetade = window.innerHeight * 0.6;
    this.checkDistance = debounce(this.checkDistance.bind(this), 200);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const topo = section.offsetTop;

      return {
        element: section,
        offset: Math.floor(topo - this.windowMetade),
      };
    });
  }

  checkDistance() {
    console.log("eu");
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("ativo");
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo");
      }
    });
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
    if (this.sections.length) {
      this.getDistance();
      this.animar();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
