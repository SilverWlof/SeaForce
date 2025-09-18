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

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ \"./src/pages/index.css\");\n\n\n// import \"./marquee\";\n\n(() => {\n  const textElements = document.querySelectorAll('.text_animation');\n  textElements.forEach(el => el.classList.remove('text_animation_start'));\n  const observer = new IntersectionObserver(entries => {\n    entries.forEach(entry => {\n      if (entry.isIntersecting) {\n        const delay = entry.target.dataset.delay || \"0s\";\n        entry.target.style.transitionDelay = delay;\n        entry.target.classList.add('text_animation_start');\n      } else {\n        entry.target.classList.remove('text_animation_start');\n        entry.target.style.transitionDelay = \"0s\";\n      }\n    });\n  });\n  textElements.forEach(el => observer.observe(el));\n})(), (() => {\n  const header = document.querySelector('.header');\n  const break_point = document.querySelector('.hero_page_but');\n  header.classList.remove('header_background');\n  const observer_revers = new IntersectionObserver(entries => {\n    entries.forEach(entry => {\n      if (entry.isIntersecting) {\n        header.classList.remove('header_background');\n      } else {\n        header.classList.add('header_background');\n      }\n    });\n  });\n  observer_revers.observe(break_point);\n})(), (() => {\n  document.addEventListener(\"DOMContentLoaded\", () => {\n    const sections = document.querySelectorAll(\".break_point\");\n    const navLinks = document.querySelectorAll(\".menu .link\");\n    const observer = new IntersectionObserver(entries => {\n      entries.forEach(entry => {\n        if (entry.isIntersecting) {\n          navLinks.forEach(link => link.classList.remove(\"active\"));\n          const activeLink = document.querySelector(`.menu .link[href=\"#${entry.target.getAttribute(\"name\")}\"]`);\n          if (activeLink) {\n            activeLink.classList.add(\"active\");\n          }\n        }\n      });\n    }, {\n      threshold: 0.99\n    });\n    sections.forEach(section => observer.observe(section));\n  });\n})();\n\n//# sourceURL=webpack://seaforse/./src/components/index.js?\n}");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://seaforse/./src/pages/index.css?\n}");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/index.js");
/******/ 	
/******/ })()
;