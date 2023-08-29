import InitScrollSuave from "./modules/scroll-suave.js";
import animarScroll from "./modules/animacaoscroll.js";
import TabNav from "./modules/TAbNav.js";
import Accordion from "./modules/accordion.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropDownMenu.js";
import initMenuMobile from "./modules/menuMobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitCoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new InitScrollSuave('.js-menu a[href^="#"]', {
  behavior: "smooth",
  block: "start",
});
scrollSuave.init();

const accodion = new Accordion(".faq dt");
accodion.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

animarScroll();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitCoin();
