export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      // console.log("ativou funcao clicarFora");
      events.forEach((userEvents) => {
        html.removeEventListener(userEvents, handleOutsideClick);
      });
      element.removeAttribute(outside);
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvents) => {
      setTimeout(() => {
        html.addEventListener(userEvents, handleOutsideClick);
      });
    });
    element.setAttribute(outside, "");
  }
}
