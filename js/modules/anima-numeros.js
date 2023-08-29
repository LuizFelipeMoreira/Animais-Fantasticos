export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll("[data-numero]");

  function animaNUmeros() {
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start++;
        if (start > +total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }
  let observador;

  function mutar(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      animaNUmeros();
      observador.disconnect();
    }
  }
  observador = new MutationObserver(mutar);
  const observerTarget = document.querySelector(".numeros");

  observador.observe(observerTarget, { attributes: true });
}
