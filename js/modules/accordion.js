export default function InitAccordion() {
  const dt = document.querySelectorAll(".faq dt");

  dt[0].classList.add("ativo");
  dt[0].nextElementSibling.classList.add("ativo");
  function mostrarDD() {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo");
  }
  dt.forEach((item) => {
    item.addEventListener("click", mostrarDD);
  });
}

console.log("node js and express an C#");
