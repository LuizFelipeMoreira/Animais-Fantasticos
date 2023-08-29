/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/TAbNav.js":
/*!******************************!*\
  !*** ./js/modules/TAbNav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\r\n  const tabMenu = document.querySelectorAll(\"[data-tab='menu'] li\");\r\n  const tabContent = document.querySelectorAll(\"[data-tab='content'] section\");\r\n\r\n  function activeTab(index) {\r\n    tabContent.forEach((section) => {\r\n      section.classList.remove(\"ativo\");\r\n    });\r\n    const direcao = tabContent[index].dataset.anime;\r\n    tabContent[index].classList.add(\"ativo\", direcao);\r\n  }\r\n\r\n  if (tabMenu.length && tabContent.length) {\r\n    tabContent[0].classList.add(\"ativo\");\r\n\r\n    tabMenu.forEach((img, index) => {\r\n      img.addEventListener(\"click\", () => {\r\n        activeTab(index);\r\n      });\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos---eslint/./js/modules/TAbNav.js?");

/***/ }),

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InitAccordion)\n/* harmony export */ });\nfunction InitAccordion() {\n  const dt = document.querySelectorAll(\".faq dt\");\n\n  dt[0].classList.add(\"ativo\");\n  dt[0].nextElementSibling.classList.add(\"ativo\");\n  function mostrarDD() {\n    this.classList.toggle(\"ativo\");\n    this.nextElementSibling.classList.toggle(\"ativo\");\n  }\n  dt.forEach((item) => {\n    item.addEventListener(\"click\", mostrarDD);\n  });\n}\n\nconsole.log(\"node js and express an C#\");\n\n\n//# sourceURL=webpack://animais-fantasticos---eslint/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\r\n  const numeros = document.querySelectorAll(\"[data-numero]\");\r\n\r\n  function animaNUmeros() {\r\n    numeros.forEach((numero) => {\r\n      const total = +numero.innerText;\r\n      const incremento = Math.floor(total / 100);\r\n      let start = 0;\r\n      const timer = setInterval(() => {\r\n        start += incremento;\r\n        numero.innerText = start++;\r\n        if (start > +total) {\r\n          numero.innerText = total;\r\n          clearInterval(timer);\r\n        }\r\n      }, 25 * Math.random());\r\n    });\r\n  }\r\n  let observador;\r\n\r\n  function mutar(mutation) {\r\n    if (mutation[0].target.classList.contains(\"ativo\")) {\r\n      animaNUmeros();\r\n      observador.disconnect();\r\n    }\r\n  }\r\n  observador = new MutationObserver(mutar);\r\n  const observerTarget = document.querySelector(\".numeros\");\r\n\r\n  observador.observe(observerTarget, { attributes: true });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos---eslint/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/animacaoscroll.js":
/*!**************************************!*\
  !*** ./js/modules/animacaoscroll.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animarScroll)\n/* harmony export */ });\nfunction animarScroll() {\r\n  const sections = document.querySelectorAll(\".js-scroll\");\r\n  if (sections.length) {\r\n    const windowMetade = window.innerHeight * 0.6;\r\n    function animar() {\r\n      sections.forEach((section) => {\r\n        const sectionTopo = section.getBoundingClientRect().top;\r\n        const sectionVisible = sectionTopo - windowMetade < 0;\r\n        if (sectionVisible) {\r\n          section.classList.add(\"ativo\");\r\n        } else if (section.classList.contains(\"ativo\")) {\r\n          section.classList.remove(\"ativo\");\r\n        }\r\n      });\r\n    }\r\n\r\n    animar();\r\n    window.addEventListener(\"scroll\", animar);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos---eslint/./js/modules/animacaoscroll.js?");

/***/ }),

/***/ "./js/modules/clickOutside.js":
/*!************************************!*\
  !*** ./js/modules/clickOutside.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\r\n  const html = document.documentElement;\r\n  const outside = \"data-outside\";\r\n\r\n  function handleOutsideClick(event) {\r\n    if (!element.contains(event.target)) {\r\n      // console.log(\"ativou funcao clicarFora\");\r\n      events.forEach((userEvents) => {\r\n        html.removeEventListener(userEvents, handleOutsideClick);\r\n      });\r\n      element.removeAttribute(outside);\r\n      callback();\r\n    }\r\n  }\r\n\r\n  if (!element.hasAttribute(outside)) {\r\n    events.forEach((userEvents) => {\r\n      setTimeout(() => {\r\n        html.addEventListener(userEvents, handleOutsideClick);\r\n      });\r\n    });\r\n    element.setAttribute(outside, \"\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos---eslint/./js/modules/clickOutside.js?");

/***/ }),

/***/ "./js/modules/dropDownMenu.js":
/*!************************************!*\
  !*** ./js/modules/dropDownMenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropDownMenu)\n/* harmony export */ });\n/* harmony import */ var _clickOutside_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickOutside.js */ \"./js/modules/clickOutside.js\");\n\r\n\r\nfunction initDropDownMenu() {\r\n  const dropDownMenus = document.querySelectorAll(\"[data-dropdown]\");\r\n\r\n  function handleClick(event) {\r\n    event.preventDefault();\r\n    this.classList.add(\"ativo\");\r\n    (0,_clickOutside_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, [\"click\", \"touchstart\"], () => {\r\n      this.classList.remove(\"ativo\");\r\n    });\r\n  }\r\n\r\n  dropDownMenus.forEach((menu) => {\r\n    [\"click\", \"touchstart\"].forEach((userEvent) => {\r\n      menu.addEventListener(userEvent, handleClick);\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos---eslint/./js/modules/dropDownMenu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\r\n\r\nfunction createAnimal(animal) {\r\n  const div = document.createElement(\"div\");\r\n  div.classList.add(\"numero-animal\");\r\n\r\n  div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;\r\n  return div;\r\n}\r\n\r\nfunction initFetchAnimais() {\r\n  async function fetchAnimais(url) {\r\n    try {\r\n      const animaisResponse = await fetch(url);\r\n      const animaisJSON = await animaisResponse.json();\r\n\r\n      const numerosGrid = document.querySelector(\".numeros-grid\");\r\n      animaisJSON.forEach((animal) => {\r\n        const divAnimal = createAnimal(animal);\r\n        numerosGrid.appendChild(divAnimal);\r\n      });\r\n      (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    } catch (error) {\r\n      console.log(Error(\"deu Erro\"));\r\n    }\r\n  }\r\n\r\n  fetchAnimais(\"./animaisAPI.json\");\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos---eslint/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitCoin)\n/* harmony export */ });\nfunction initFetchBitCoin() {}\r\n\r\nfetch(\"https://blockchain.info/ticker\")\r\n  .then((r) => r.json())\r\n  .then((bitCoin) => {\r\n    const btcPreco = document.querySelector(\".btc-preco\");\r\n    btcPreco.innerText = (1000 / bitCoin.BRL.sell).toFixed(4);\r\n    console.log(bitCoin.BRL.sell);\r\n  })\r\n  .catch(() => {\r\n    console.log(Error(\"erro na promise\"));\r\n  });\r\n\n\n//# sourceURL=webpack://animais-fantasticos---eslint/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\r\n  // const agora = new Date();\r\n  // const futuro = new Date(\"Jul 15 2023 23:59\");\r\n\r\n  // function transformarEmDias(tempo) {\r\n  //   return tempo / (24 * 60 * 60 * 1000);\r\n  // }\r\n\r\n  // const diasAgora = transformarEmDias(agora.getTime());\r\n  // const diasFuturo = transformarEmDias(futuro.getTime());\r\n\r\n  // // console.log(diasFuturo - diasAgora);\r\n\r\n  const funcionamento = document.querySelector(\"[data-semana]\");\r\n  const diaSemana = funcionamento.dataset.semana.split(\",\").map(Number);\r\n  const horarioSemana = funcionamento.dataset.horario.split(\",\").map(Number);\r\n\r\n  const dataAgora = new Date();\r\n  const horaAgora = dataAgora.getHours();\r\n  const diaAgora = dataAgora.getDay();\r\n\r\n  const semanaAberto = diaSemana.indexOf(diaAgora) !== -1;\r\n\r\n  const horarioAberto =\r\n    horaAgora >= horarioSemana[0] && horaAgora <= horarioSemana[1];\r\n\r\n  if (semanaAberto && horarioAberto) {\r\n    funcionamento.classList.add(\"aberto\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos---eslint/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menuMobile.js":
/*!**********************************!*\
  !*** ./js/modules/menuMobile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _clickOutside_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickOutside.js */ \"./js/modules/clickOutside.js\");\n\r\n\r\nfunction initMenuMobile() {\r\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\r\n  const menuLista = document.querySelector('[data-menu=\"lista\"]');\r\n  const eventos = [\"click\", \"touchstart\"];\r\n\r\n  function abrirMenu() {\r\n    console.log(\"ativou abrirMenu\");\r\n    menuButton.classList.add(\"active\");\r\n    menuLista.classList.add(\"active\");\r\n    (0,_clickOutside_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuLista, [\"click\", \"touchstart\"], () => {\r\n      console.log(\"ativou outsideClique\");\r\n      menuButton.classList.remove(\"active\");\r\n      menuLista.classList.remove(\"active\");\r\n    });\r\n  }\r\n\r\n  eventos.forEach((userEvent) => {\r\n    menuButton.addEventListener(userEvent, abrirMenu);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos---eslint/./js/modules/menuMobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InitModal)\n/* harmony export */ });\nfunction InitModal() {\r\n  const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\r\n  const botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\r\n  const containerModal = document.querySelector('[data-modal=\"container\"]');\r\n\r\n  function abrirModal(event) {\r\n    event.preventDefault();\r\n    containerModal.classList.add(\"ativo\");\r\n  }\r\n  function fecharModal(event) {\r\n    event.preventDefault();\r\n    containerModal.classList.remove(\"ativo\");\r\n  }\r\n\r\n  function cliqueForaModal(event) {\r\n    if (event.target === this) fecharModal(event);\r\n  }\r\n\r\n  if (botaoAbrir && botaoFechar && containerModal) {\r\n    botaoAbrir.addEventListener(\"click\", abrirModal);\r\n    botaoFechar.addEventListener(\"click\", fecharModal);\r\n    containerModal.addEventListener(\"click\", cliqueForaModal);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos---eslint/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InitScrollSuave)\n/* harmony export */ });\nfunction InitScrollSuave() {\r\n  const linksInternos = document.querySelectorAll('.js-menu a[href^=\"#\"]');\r\n\r\n  function Scrollar(event) {\r\n    event.preventDefault();\r\n    const href = event.currentTarget.getAttribute(\"href\");\r\n    const section = document.querySelector(href);\r\n    section.scrollIntoView({\r\n      behavior: \"smooth\",\r\n      block: \"start\",\r\n    });\r\n  }\r\n  linksInternos.forEach((link) => {\r\n    link.addEventListener(\"click\", Scrollar);\r\n  });\r\n}\r\nInitScrollSuave();\r\n\n\n//# sourceURL=webpack://animais-fantasticos---eslint/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\r\n  const tooltips = document.querySelectorAll(\"[data-tooltip]\");\r\n\r\n  const onMouseMove = {\r\n    handleEvent(event) {\r\n      this.tooltipBox.style.top = `${event.pageY + 20}px`;\r\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\r\n    },\r\n  };\r\n\r\n  const onMouseLeave = {\r\n    handleEvent() {\r\n      this.tooltipBox.remove();\r\n      this.element.removeEventListener(\"mouseleave\", onMouseLeave);\r\n      this.element.removeEventListener(\"mousemove\", onMouseMove);\r\n    },\r\n  };\r\n\r\n  function criarTooltipBox(element) {\r\n    const TooltipBox = document.createElement(\"div\");\r\n    const text = element.getAttribute(\"aria-label\");\r\n    TooltipBox.classList.add(\"tooltip\");\r\n    TooltipBox.innerText = text;\r\n    document.body.appendChild(TooltipBox);\r\n    return TooltipBox;\r\n  }\r\n\r\n  function onMouseOver() {\r\n    const tooltipBox = criarTooltipBox(this);\r\n\r\n    onMouseMove.tooltipBox = tooltipBox;\r\n\r\n    onMouseLeave.tooltipBox = tooltipBox;\r\n    this.addEventListener(\"mousemove\", onMouseMove);\r\n\r\n    onMouseLeave.element = this;\r\n    this.addEventListener(\"mouseleave\", onMouseLeave);\r\n  }\r\n\r\n  tooltips.forEach((item) => {\r\n    item.addEventListener(\"mouseover\", onMouseOver);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos---eslint/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_animacaoscroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animacaoscroll.js */ \"./js/modules/animacaoscroll.js\");\n/* harmony import */ var _modules_TAbNav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/TAbNav.js */ \"./js/modules/TAbNav.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropDownMenu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropDownMenu.js */ \"./js/modules/dropDownMenu.js\");\n/* harmony import */ var _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menuMobile.js */ \"./js/modules/menuMobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_animacaoscroll_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_TAbNav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_dropDownMenu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n\n\n//# sourceURL=webpack://animais-fantasticos---eslint/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;