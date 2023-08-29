export default class Tooltip {
  constructor(tooltip) {
    this.tooltips = document.querySelectorAll(tooltip);

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseMove(event) {
    this.TooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.TooltipBox.style.left = `${event.pageX - 240}px`;
    } else {
      this.TooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  onMouseLeave({ currentTarget }) {
    this.TooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  criarTooltipBox(element) {
    const TooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    TooltipBox.classList.add("tooltip");
    TooltipBox.innerText = text;
    document.body.appendChild(TooltipBox);
    this.TooltipBox = TooltipBox;
  }

  onMouseOver({ currentTarget }) {
    this.criarTooltipBox(currentTarget);

    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  addTolltipEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTolltipEvent();
    }
    return this;
  }
}
