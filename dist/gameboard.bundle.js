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

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ (() => {

eval("/* eslint-disable */\n\nvar gameboard = function gameboard() {\n  return {\n    board: [],\n    missedShots: [],\n    ships: [],\n    placeShip: function placeShip(ship, position) {\n      if (position.direction === 'horizontal') {\n        for (var i = 0; i < ship.length; i++) {\n          gameboard.board[position.x + i][position.y] = ship;\n        }\n      } else {\n        for (var _i = 0; _i < ship.length; _i++) {\n          gameboard.board[position.x][position.y + _i] = ship;\n        }\n      }\n      gameboard.ships.push(ship);\n    },\n    receiveAttack: function receiveAttack(position) {\n      if (gameboard.board[position.x][position.y] === undefined) {\n        gameboard.missedShots.push(position);\n      } else {\n        gameboard.board[position.x][position.y].hit(position);\n      }\n    },\n    isAllSunk: function isAllSunk() {\n      for (var i = 0; i < gameboard.ships.length; i++) {\n        if (gameboard.ships[i].isSunk() === false) {\n          return false;\n        }\n      }\n      return true;\n    }\n  };\n};\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/gameboard.js"]();
/******/ 	
/******/ })()
;