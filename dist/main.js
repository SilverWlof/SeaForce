/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _marquee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./marquee */ \"./src/components/marquee.js\");\n/* harmony import */ var _marquee__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_marquee__WEBPACK_IMPORTED_MODULE_1__);\n\n\n(function () {\n  const textElements = document.querySelectorAll('.about_text');\n  textElements.forEach(el => el.classList.remove('text_anim'));\n  const observer = new IntersectionObserver(entries => {\n    entries.forEach(entry => {\n      if (entry.isIntersecting) {\n        entry.target.classList.add('text_anim');\n      } else {\n        entry.target.classList.remove('text_anim');\n      }\n    });\n  });\n  textElements.forEach(el => observer.observe(el));\n}\n\n// function(){\n//   const header = document.querySelector('.header');\n//   header.classList.remove('header_main');\n//   const observer = new IntersectionObserver(entries =>{\n//     if(entries.isIntersecting){\n//       entries.classList.remove('header_main');\n//     }\n//     else{\n//       entries.classList.add('header_main')\n//     }\n//   });\n//   header(el => header.observe(el))\n// }\n)();\n\n//# sourceURL=webpack://seaforse/./src/components/index.js?\n}");

/***/ }),

/***/ "./src/components/marquee.js":
/*!***********************************!*\
  !*** ./src/components/marquee.js ***!
  \***********************************/
/***/ (() => {

eval("{var wrapper = document.querySelector('.marquee-wrapper'),\n  marquee = document.querySelector('.marquee'),\n  wrapperWidth = wrapper.offsetWidth,\n  marqueeWidth = marquee.scrollWidth;\nfunction move() {\n  var currentTX = getComputedStyle(marquee).transform.split(',');\n  if (currentTX[4] === undefined) {\n    currentTX = -1;\n  } else {\n    currentTX = parseFloat(currentTX[4]) - 1;\n  }\n  if (-currentTX >= marqueeWidth) {\n    marquee.style.transform = 'translateX(' + wrapperWidth + 'px)';\n  } else {\n    marquee.style.transform = 'translateX(' + currentTX + 'px)';\n  }\n}\nvar interval = setInterval(move, 10);\n\n//# sourceURL=webpack://seaforse/./src/components/marquee.js?\n}");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/index.js");
/******/ 	
/******/ })()
;