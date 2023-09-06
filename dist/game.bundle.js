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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   game: () => (/* binding */ game)\n/* harmony export */ });\n/* harmony import */ var _src_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/ship */ \"./src/ship.js\");\n/* harmony import */ var _src_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _src_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/player */ \"./src/player.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* eslint-disable */\n\n\n\n\n\nvar game = {\n  player1: (0,_src_player__WEBPACK_IMPORTED_MODULE_2__.Player)(),\n  player2: (0,_src_player__WEBPACK_IMPORTED_MODULE_2__.Player)(),\n  player1Gameboard: (0,_src_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboard)(),\n  player2Gameboard: (0,_src_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboard)(),\n  currentPlayer: 1,\n  gameActive: false\n};\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameboard: () => (/* binding */ gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* eslint-disable */\n\nvar gameboard = function gameboard() {\n  return {\n    board: Array(10).fill(null).map(function () {\n      return Array(10).fill(null);\n    }),\n    missShots: [],\n    ships: [(0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(4), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(3), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(3), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(2), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(2), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(2), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(1), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(1), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(1), (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(1)],\n    placeShip: function placeShip(ship, position, isHorizontal) {\n      if (this.canPlaceShip(ship, position, isHorizontal)) {\n        if (isHorizontal) {\n          for (var i = 0; i < ship.length; i++) {\n            if (this.board[position.x + i][position.y] !== null) {\n              return;\n            }\n            this.board[position.x + i][position.y] = ship;\n          }\n        } else {\n          for (var _i = 0; _i < ship.length; _i++) {\n            this.board[position.x][position.y + _i] = ship;\n          }\n        }\n        ship.isPlaced = true;\n      }\n    },\n    canPlaceShip: function canPlaceShip(ship, position, isHorizontal) {\n      var boardSize = this.board.length;\n      for (var i = 0; i < ship.length; i++) {\n        var x = position.x + (isHorizontal ? i : 0);\n        var y = position.y + (!isHorizontal ? i : 0);\n        if (!this.board[x] || this.board[x][y] !== null) {\n          return false;\n        }\n\n        // Check for nearby ships around this cell\n        for (var dx = -1; dx <= 1; dx++) {\n          for (var dy = -1; dy <= 1; dy++) {\n            var checkX = x + dx;\n            var checkY = y + dy;\n            if (checkX >= 0 && checkX < boardSize && checkY >= 0 && checkY < boardSize && this.board[checkX][checkY] !== null) {\n              return false;\n            }\n          }\n        }\n      }\n      return true;\n    },\n    checkHitorMiss: function checkHitorMiss(position) {\n      if (this.board[position.x][position.y] === null) {\n        return true;\n      } else {\n        return false;\n      }\n    },\n    receiveAttack: function receiveAttack(position) {\n      if (this.board[position.x][position.y] === null) {\n        this.missShots.push(position);\n      } else {\n        this.board[position.x][position.y].hit(position);\n      }\n    },\n    allShipsSunk: function allShipsSunk() {\n      for (var i = 0; i < this.ships.length; i++) {\n        if (this.ships[i].isSunk() === false) {\n          return false;\n        }\n      }\n      return true;\n    },\n    placeShipsRandomly: function placeShipsRandomly() {\n      for (var i = 0; i < this.ships.length; i++) {\n        var isHorizontal = Math.random() >= 0.5;\n        var position = {\n          x: Math.floor(Math.random() * 10),\n          y: Math.floor(Math.random() * 10)\n        };\n        while (!this.canPlaceShip(this.ships[i], position, isHorizontal)) {\n          isHorizontal = Math.random() >= 0.5;\n          position = {\n            x: Math.floor(Math.random() * 10),\n            y: Math.floor(Math.random() * 10)\n          };\n        }\n        this.placeShip(this.ships[i], position, isHorizontal);\n      }\n    },\n    removeShip: function removeShip(position) {\n      if (this.board[position.x][position.y] !== null) {\n        var _ship = this.board[position.x][position.y];\n        console.log(_ship);\n        for (var i = 0; i < this.board.length; i++) {\n          for (var j = 0; j < 10; j++) {\n            if (this.board[i][j] === _ship) {\n              this.board[i][j] = null;\n            }\n          }\n        }\n        ;\n        _ship.isPlaced = false;\n      }\n    },\n    getNextShipToPlace: function getNextShipToPlace() {\n      var shipsToPlace = this.ships.filter(function (ship) {\n        return ship.isPlaced === false;\n      });\n      return shipsToPlace[0];\n    },\n    setNextShipToPlaceOrientation: function setNextShipToPlaceOrientation() {\n      var ship = this.getNextShipToPlace();\n      ship.isHorizontal = !ship.isHorizontal;\n    }\n  };\n};\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* eslint-disable */\n\nvar Player = function Player() {\n  return {\n    type: 'human',\n    name: 'Player',\n    turn: false,\n    shotsFired: [],\n    takeTurn: function takeTurn() {\n      this.turn = true;\n    },\n    attack: function attack(enemyGameboard, position) {\n      if (this.shotsFired.map(JSON.stringify).includes(JSON.stringify(position))) return;else {\n        this.shotsFired.push(position);\n        enemyGameboard.receiveAttack(position);\n        console.log(this.shotsFired);\n      }\n    },\n    makeRandomAttack: function makeRandomAttack() {\n      var position = {\n        x: Math.floor(Math.random() * 10),\n        y: Math.floor(Math.random() * 10)\n      };\n      while (this.shotsFired.map(JSON.stringify).includes(JSON.stringify(position))) {\n        position = {\n          x: Math.floor(Math.random() * 10),\n          y: Math.floor(Math.random() * 10)\n        };\n      }\n      return position;\n    }\n  };\n};\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/game */ \"./src/game.js\");\n/* harmony import */ var _src_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ship */ \"./src/ship.js\");\n/* eslint-disable */\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  renderGameboard: function renderGameboard(gameboard, id) {\n    var gameboardDiv = document.querySelectorAll(\"#\".concat(id, \" .cell\"));\n    gameboardDiv.forEach(function (cell) {\n      var position = {\n        x: parseInt(cell.dataset.x),\n        y: parseInt(cell.dataset.y)\n      };\n      if (gameboard.missShots.some(function (shot) {\n        return shot.x === position.x && shot.y === position.y;\n      })) {\n        cell.classList.add('miss');\n      }\n      if (gameboard.ships.some(function (ship) {\n        return ship.hitArray.some(function (hit) {\n          return hit.x === position.x && hit.y === position.y;\n        });\n      })) {\n        cell.classList.add('hit');\n      }\n    });\n  }\n});\n\n// shipsDiv.innerHTML = `\n// <div id=\"ships-wrapper\">\n//     <div class=\"ship-container\" data-length=\"5\" data-isHorisontal=\"1\">\n//         <div class=\"ship\"></div>\n//         <div class=\"ship\"></div>\n//         <div class=\"ship\"></div>\n//         <div class=\"ship\"></div>\n//         <div class=\"ship\"></div>\n//     </div>\n//     <div class=\"ship-container\" data-length=\"4\" data-isHorisontal=\"1\">\n//         <div class=\"ship\"></div>\n//         <div class=\"ship\"></div>\n//         <div class=\"ship\"></div>\n//         <div class=\"ship\"></div>\n//     </div>\n//     <div class=\"ship-container\" data-length=\"3\" data-isHorisontal=\"1\">\n//         <div class=\"ship\"></div>\n//         <div class=\"ship\"></div>\n//         <div class=\"ship\"></div>\n//     </div>\n//     <div class=\"ship-container\" data-length=\"3\" data-isHorisontal=\"1\">\n//         <div class=\"ship\"></div>\n//         <div class=\"ship\"></div>\n//         <div class=\"ship\"></div>    \n//     </div>\n//     <div class=\"ship-container\" data-length=\"2\" data-isHorisontal=\"1\">\n//         <div class=\"ship\"></div>\n//         <div class=\"ship\"></div>\n//     </div>\n//     <button id=\"start-battle\">Start Battle</button>\n//     <button id=\"reset\">Reset</button>\n// </div>\n//     `;\n\n//# sourceURL=webpack://battleship/./src/render.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/game.js");
/******/ 	
/******/ })()
;