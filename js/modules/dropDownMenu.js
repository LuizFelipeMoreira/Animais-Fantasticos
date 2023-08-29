import outsideClick from "./clickOutside.js";

export default function initDropDownMenu() {
  const dropDownMenus = document.querySelectorAll("[data-dropdown]");

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("ativo");
    outsideClick(this, ["click", "touchstart"], () => {
      this.classList.remove("ativo");
    });
  }

  dropDownMenus.forEach((menu) => {
    ["click", "touchstart"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
