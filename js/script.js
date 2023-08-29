import InitScrollSuave from "./modules/scroll-suave.js";
import animarScroll from "./modules/animacaoscroll.js";
import initTabNav from "./modules/TAbNav.js";
import Accordion from "./modules/accordion.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropDownMenu.js";
import initMenuMobile from "./modules/menuMobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitCoin from "./modules/fetch-bitcoin.js";

const options = {
  behavior: "smooth",
  block: "start",
};

const scrollSuave = new InitScrollSuave('.js-menu a[href^="#"]', options);
scrollSuave.init();

animarScroll();
initTabNav();
Accordion();
initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitCoin();
