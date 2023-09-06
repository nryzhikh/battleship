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

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameboard: () => (/* binding */ gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* eslint-disable */\n\nvar gameboard = function gameboard() {\n  return {\n    board: Array(10).fill(null).map(function () {\n      return Array(10).fill(null);\n    }),\n    missShots: [],\n    ships: [(0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(4), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(3), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(3), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(2), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(2), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(2), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(1), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(1), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(1), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(1)],\n    placeShip: function placeShip(ship, position, isHorizontal) {\n      if (this.canPlaceShip(ship, position, isHorizontal)) {\n        if (isHorizontal) {\n          for (var i = 0; i < ship.length; i++) {\n            if (this.board[position.x + i][position.y] !== null) {\n              return;\n            }\n            this.board[position.x + i][position.y] = ship;\n          }\n        } else {\n          for (var _i = 0; _i < ship.length; _i++) {\n            this.board[position.x][position.y + _i] = ship;\n          }\n        }\n        ship.isPlaced = true;\n      }\n    },\n    canPlaceShip: function canPlaceShip(ship, position, isHorizontal) {\n      var boardSize = this.board.length;\n      for (var i = 0; i < ship.length; i++) {\n        var x = position.x + (isHorizontal ? i : 0);\n        var y = position.y + (!isHorizontal ? i : 0);\n        if (!this.board[x] || this.board[x][y] !== null) {\n          return false;\n        }\n\n        // Check for nearby ships around this cell\n        for (var dx = -1; dx <= 1; dx++) {\n          for (var dy = -1; dy <= 1; dy++) {\n            var checkX = x + dx;\n            var checkY = y + dy;\n            if (checkX >= 0 && checkX < boardSize && checkY >= 0 && checkY < boardSize && this.board[checkX][checkY] !== null) {\n              return false;\n            }\n          }\n        }\n      }\n      return true;\n    },\n    checkHitorMiss: function checkHitorMiss(position) {\n      if (this.board[position.x][position.y] === null) {\n        return true;\n      } else {\n        return false;\n      }\n    },\n    receiveAttack: function receiveAttack(position) {\n      if (this.board[position.x][position.y] === null) {\n        this.missShots.push(position);\n      } else {\n        this.board[position.x][position.y].hit(position);\n      }\n    },\n    allShipsSunk: function allShipsSunk() {\n      for (var i = 0; i < this.ships.length; i++) {\n        if (this.ships[i].isSunk() === false) {\n          return false;\n        }\n      }\n      return true;\n    },\n    placeShipsRandomly: function placeShipsRandomly() {\n      for (var i = 0; i < this.ships.length; i++) {\n        var isHorizontal = Math.random() >= 0.5;\n        var position = {\n          x: Math.floor(Math.random() * 10),\n          y: Math.floor(Math.random() * 10)\n        };\n        while (!this.canPlaceShip(this.ships[i], position, isHorizontal)) {\n          isHorizontal = Math.random() >= 0.5;\n          position = {\n            x: Math.floor(Math.random() * 10),\n            y: Math.floor(Math.random() * 10)\n          };\n        }\n        this.placeShip(this.ships[i], position, isHorizontal);\n      }\n    },\n    removeShip: function removeShip(position) {\n      if (this.board[position.x][position.y] !== null) {\n        var _ship = this.board[position.x][position.y];\n        console.log(_ship);\n        for (var i = 0; i < this.board.length; i++) {\n          for (var j = 0; j < 10; j++) {\n            if (this.board[i][j] === _ship) {\n              this.board[i][j] = null;\n            }\n          }\n        }\n        ;\n        _ship.isPlaced = false;\n      }\n    },\n    getNextShipToPlace: function getNextShipToPlace() {\n      var shipsToPlace = this.ships.filter(function (ship) {\n        return ship.isPlaced === false;\n      });\n      return shipsToPlace[0];\n    },\n    setNextShipToPlaceOrientation: function setNextShipToPlaceOrientation() {\n      var ship = this.getNextShipToPlace();\n      ship.isHorizontal = !ship.isHorizontal;\n    }\n  };\n};\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ship: () => (/* binding */ ship)\n/* harmony export */ });\n/* eslint-disable */\n\nvar ship = function ship(length) {\n  return {\n    length: length,\n    hitArray: [],\n    hit: function hit(position) {\n      this.hitArray.push(position);\n    },\n    isSunk: function isSunk() {\n      if (this.hitArray.length === this.length) {\n        return true;\n      }\n      return false;\n    },\n    isPlaced: false,\n    isHorizontal: true\n  };\n};\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/gameboard.js");
/******/ 	
/******/ })()
;