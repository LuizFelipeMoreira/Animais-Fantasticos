import InitScrollSuave from "./modules/scroll-suave.js";
import ScrollAnima from "./modules/ScrollAnimar.js";
import TabNav from "./modules/TAbNav.js";
import Accordion from "./modules/accordion.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropDownMenu from "./modules/dropDownMenu.js";
import MenuMobile from "./modules/menuMobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBitCoin from "./modules/fetch-bitcoin.js";

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

const scrollAnima = new ScrollAnima(".js-scroll");
scrollAnima.init();

const dropDownMenu = new DropDownMenu("[data-dropdown]");
dropDownMenu.init();

const menuMobile = new MenuMobile(
  '[data-menu="button"]',
  '[data-menu="lista"]'
);
menuMobile.init();

initFuncionamento();
fetchAnimais("../../animaisAPI.json", ".numeros-grid");
fetchBitCoin("https://blockchain.info/ticker", ".btc-preco");
