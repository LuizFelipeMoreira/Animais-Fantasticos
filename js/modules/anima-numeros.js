export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.obsrverClass = observerClass;
    this.observerTarget = document.querySelector(observerTarget);
    this.mutar = this.mutar.bind(this);
  }

  static incrementarNumero(numero) {
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
  }

  animaNUmeros() {
    this.numeros.forEach((numero) =>
      this.constructor.incrementarNumero(numero)
    );
  }

  mutar(mutation) {
    if (mutation[0].target.classList.contains(this.obsrverClass)) {
      this.animaNUmeros();
      this.observador.disconnect();
    }
  }

  addMutationObsever() {
    this.observador = new MutationObserver(this.mutar);
    this.observador.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros && this.observerTarget) {
      this.addMutationObsever();
    }
    return this;
  }
}
