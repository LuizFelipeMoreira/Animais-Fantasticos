export default function animarScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;
    function animar() {
      sections.forEach((section) => {
        const sectionTopo = section.getBoundingClientRect().top;
        const sectionVisible = sectionTopo - windowMetade < 0;
        if (sectionVisible) {
          section.classList.add("ativo");
        } else if (section.classList.contains("ativo")) {
          section.classList.remove("ativo");
        }
      });
    }

    animar();
    window.addEventListener("scroll", animar);
  }
}
