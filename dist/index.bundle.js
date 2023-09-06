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

/***/ "./src/controls.js":
/*!*************************!*\
  !*** ./src/controls.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid */ \"./src/grid.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* eslint-disable */\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  renderStartButton: function renderStartButton() {\n    var _this = this;\n    var startButton = document.createElement('button');\n    startButton.classList.add('start-button');\n    startButton.textContent = 'Start Game';\n    startButton.addEventListener('click', function () {\n      _this.startGame();\n    });\n    document.body.appendChild(startButton);\n  },\n  selectShipToPlace: function selectShipToPlace() {\n    var ships = document.querySelectorAll('.ship');\n    ships.forEach(function (ship) {\n      ship.addEventListener('click', function (e) {\n        var selectedShip = document.querySelectorAll('.selected');\n        if (selectedShip) {\n          selectedShip.forEach(function (cell) {\n            return cell.classList.remove('selected');\n          });\n        }\n        ;\n        var newSelectedShip = document.querySelectorAll(\".ship[data-length=\\\"\".concat(e.target.dataset.length, \"\\\"]\"));\n        newSelectedShip.forEach(function (cell) {\n          return cell.classList.add('selected');\n        });\n      });\n    });\n  },\n  placeShipInDOM: function placeShipInDOM() {\n    var _this2 = this;\n    var gameboard = document.getElementById('gameboard1');\n    gameboard.removeEventListener('click', this.placeShipInDOM);\n    gameboard.addEventListener('click', function (event) {\n      if (_this2.getShipToPlace() === undefined) {\n        _game__WEBPACK_IMPORTED_MODULE_0__.game.gameActive = true;\n        console.log(_game__WEBPACK_IMPORTED_MODULE_0__.game);\n        return;\n      }\n      var position = {\n        x: parseInt(event.target.dataset.x),\n        y: parseInt(event.target.dataset.y)\n      };\n      _game__WEBPACK_IMPORTED_MODULE_0__.game.player1Gameboard.placeShip(_this2.getShipToPlace(), position, _this2.getShipToPlace().isHorizontal);\n      _grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderShips(_game__WEBPACK_IMPORTED_MODULE_0__.game.player1Gameboard);\n    });\n    gameboard.addEventListener('contextmenu', function (event) {\n      event.preventDefault();\n      _game__WEBPACK_IMPORTED_MODULE_0__.game.player1Gameboard.setNextShipToPlaceOrientation();\n    });\n  },\n  getShipToPlace: function getShipToPlace() {\n    var shipsToPlace = _game__WEBPACK_IMPORTED_MODULE_0__.game.player1Gameboard.ships.filter(function (ship) {\n      return ship.isPlaced === false;\n    });\n    return shipsToPlace[0];\n  },\n  shipPlacement: function shipPlacement() {\n    var gameboard = document.querySelector('#gameboard1');\n    var hoverShip = document.createElement('div');\n    hoverShip.classList.add('hover-ship');\n    gameboard.appendChild(hoverShip);\n    var isHorizontal = true;\n    gameboard.addEventListener('mouseover', function (e) {\n      if (_game__WEBPACK_IMPORTED_MODULE_0__.game.player1Gameboard.getNextShipToPlace() === undefined) {\n        hoverShip.style.display = 'none';\n        return;\n      }\n      ;\n      var cell = e.target;\n      if (!cell.classList.contains('cell')) return;\n      var x = parseInt(cell.dataset.x, 10);\n      var y = parseInt(cell.dataset.y, 10);\n      var position = {\n        x: x,\n        y: y\n      };\n      if (isHorizontal) {\n        hoverShip.style.width = \"\".concat(32 * _game__WEBPACK_IMPORTED_MODULE_0__.game.player1Gameboard.getNextShipToPlace().length, \"px\");\n        hoverShip.style.height = '30px';\n      } else {\n        hoverShip.style.width = '30px';\n        hoverShip.style.height = \"\".concat(32 * _game__WEBPACK_IMPORTED_MODULE_0__.game.player1Gameboard.getNextShipToPlace().length, \"px\");\n      }\n      hoverShip.style.left = \"\".concat(x * 32, \"px\");\n      hoverShip.style.top = \"\".concat(y * 32, \"px\");\n      if (_game__WEBPACK_IMPORTED_MODULE_0__.game.player1Gameboard.canPlaceShip(_game__WEBPACK_IMPORTED_MODULE_0__.game.player1Gameboard.getNextShipToPlace(), position, isHorizontal)) {\n        hoverShip.classList.add('available');\n        hoverShip.classList.remove('unavailable');\n      } else {\n        hoverShip.classList.add('unavailable');\n        hoverShip.classList.remove('available');\n      }\n    });\n    gameboard.addEventListener('contextmenu', function (e) {\n      e.preventDefault(); // Prevents the default context menu from showing up\n      isHorizontal = !isHorizontal;\n    });\n  },\n  startBattle: function startBattle() {\n    var _this3 = this;\n    var gameboard = document.getElementById('gameboard2');\n    gameboard.addEventListener('click', function (event) {\n      if (!_game__WEBPACK_IMPORTED_MODULE_0__.game.gameActive) return;\n      var position = {\n        x: parseInt(event.target.dataset.x),\n        y: parseInt(event.target.dataset.y)\n      };\n      _this3.handleTurn(position);\n      console.log(_game__WEBPACK_IMPORTED_MODULE_0__.game.currentPlayer);\n      while (_game__WEBPACK_IMPORTED_MODULE_0__.game.currentPlayer === 2) {\n        var randomPosition = _game__WEBPACK_IMPORTED_MODULE_0__.game.player2.makeRandomAttack();\n        _this3.handleTurn(randomPosition);\n      }\n    });\n  },\n  handleTurn: function handleTurn(position) {\n    var opponent = _game__WEBPACK_IMPORTED_MODULE_0__.game.currentPlayer === 1 ? 2 : 1;\n    var opponentGameboard = _game__WEBPACK_IMPORTED_MODULE_0__.game.currentPlayer === 1 ? _game__WEBPACK_IMPORTED_MODULE_0__.game.player2Gameboard : _game__WEBPACK_IMPORTED_MODULE_0__.game.player1Gameboard;\n    var opponentGrid = _game__WEBPACK_IMPORTED_MODULE_0__.game.currentPlayer === 1 ? 'gameboard2' : 'gameboard1';\n    if (opponentGameboard.board[position.x][position.y] !== null) {\n      opponentGameboard.receiveAttack(position);\n      _render__WEBPACK_IMPORTED_MODULE_3__[\"default\"].renderGameboard(opponentGameboard, opponentGrid);\n      if (opponentGameboard.allShipsSunk()) {\n        alert('Player 1 wins!');\n        _game__WEBPACK_IMPORTED_MODULE_0__.game.gameActive = false;\n        return;\n      }\n      ;\n    } else {\n      opponentGameboard.receiveAttack(position);\n      _render__WEBPACK_IMPORTED_MODULE_3__[\"default\"].renderGameboard(opponentGameboard, opponentGrid);\n      _game__WEBPACK_IMPORTED_MODULE_0__.game.currentPlayer = opponent;\n    }\n  }\n\n  // clickHandler: function(event) => {\n  //     const x = event.target.dataset.x;\n  //     const y = event.target.dataset.y;\n  //     let position = {x: parseInt(x), y: parseInt(y)};\n\n  //     if (game.currentPlayer === 1 && game.gameActive) {\n  //         game.player1.attack(game.player2Gameboard, position);\n  //         if (game.player2Gameboard.board[position.x][position.y] !== null) {\n  //             event.target.classList.add('hit');\n  //             if (game.player2Gameboard.allShipsSunk()) {\n  //                 alert('Player 1 wins!');\n  //                 game.gameActive = false;\n  //                 return\n  //             };\n  //             event.target.removeEventListener('click', clickHandler);\n  //         } else {\n  //             event.target.classList.add('miss');\n  //             game.currentPlayer = 2;\n  //             while (game.currentPlayer === 2) {\n  //             position = game.player2.makeRandomAttack();\n  //             game.player2.attack(game.player1Gameboard, position);\n  //             if (game.player1Gameboard.board[position.x][position.y] !== null) {\n  //                 const cell = document.querySelector(`.cell[data-player='${1}'][data-x='${position.x}'][data-y='${position.y}']`);\n  //                 cell.classList.add('hit');\n  //                 if (game.player1Gameboard.allShipsSunk()) {\n  //                     game.gameActive = false;\n  //                     alert('Player 2 wins!');\n  //                     return\n  //                 }\n  //             } else {\n  //                 const cell = document.querySelector(`.cell[data-player='${1}'][data-x='${position.x}'][data-y='${position.y}']`);\n  //                 cell.classList.add('miss');\n  //                 game.currentPlayer = 1;\n  //             }\n  //         }\n  //         }\n  //     } \n  // }\n});\n\n//# sourceURL=webpack://battleship/./src/controls.js?");

/***/ }),

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

/***/ "./src/grid.js":
/*!*********************!*\
  !*** ./src/grid.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/gameboard */ \"./src/gameboard.js\");\n/* eslint-disable */\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  renderGrid: function renderGrid() {\n    var grid = document.querySelectorAll('.gameboard');\n    grid.forEach(function (element) {\n      for (var i = 0; i < 10; i++) {\n        for (var j = 0; j < 10; j++) {\n          var cell = document.createElement('div');\n          cell.classList.add('cell');\n          cell.setAttribute('data-x', j);\n          cell.setAttribute('data-y', i);\n          element.appendChild(cell);\n        }\n      }\n    });\n  },\n  renderShipsforPicker: function renderShipsforPicker() {\n    var pickerBoard = (0,_src_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard)();\n    pickerBoard.placeShipsForPicker();\n    var grid = document.getElementById('gameboard2').querySelectorAll('.cell');\n    grid.forEach(function (cell) {\n      if (pickerBoard.board[cell.dataset.x][cell.dataset.y] !== null) {\n        cell.classList.add('ship');\n        cell.setAttribute('data-length', pickerBoard.board[cell.dataset.x][cell.dataset.y].length);\n      }\n    });\n  },\n  renderShips: function renderShips(gameboard) {\n    var grid = document.getElementById('gameboard1').querySelectorAll('.cell');\n    grid.forEach(function (cell) {\n      cell.classList.remove('ship');\n      if (gameboard.board[cell.dataset.x][cell.dataset.y] !== null) {\n        cell.classList.add('ship');\n      }\n      ;\n    });\n  }\n});\n\n//# sourceURL=webpack://battleship/./src/grid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid */ \"./src/grid.js\");\n/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controls */ \"./src/controls.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* eslint-disable */\n\n\n\n\n\n\n\n\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  _game__WEBPACK_IMPORTED_MODULE_2__.game.player2Gameboard.placeShipsRandomly();\n  _grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"].renderGrid();\n  _controls__WEBPACK_IMPORTED_MODULE_6__[\"default\"].placeShipInDOM();\n  _controls__WEBPACK_IMPORTED_MODULE_6__[\"default\"].shipPlacement();\n  _controls__WEBPACK_IMPORTED_MODULE_6__[\"default\"].startBattle();\n});\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27><line x1=%2718%27 y1=%276%27 x2=%276%27 y2=%2718%27 stroke=%27red%27 stroke-width=%272%27/><line x1=%276%27 y1=%276%27 x2=%2718%27 y2=%2718%27 stroke=%27red%27 stroke-width=%272%27/></svg> */ \"data:image/svg+xml,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27><line x1=%2718%27 y1=%276%27 x2=%276%27 y2=%2718%27 stroke=%27red%27 stroke-width=%272%27/><line x1=%276%27 y1=%276%27 x2=%2718%27 y2=%2718%27 stroke=%27red%27 stroke-width=%272%27/></svg>\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\n.gameboard {\nposition: relative;\ndisplay: grid;\ngrid-template-columns: repeat(10, 30px);\ngrid-template-rows: repeat(10, 30px);\ngap: 2px;\n}\n\n\n.cell {\nwidth: 30px;\nheight: 30px;\nborder: 1px solid #ccc;\nposition: relative;\n}\n\n#app{\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ngap: 20px;\nflex-direction: row-reverse;\n}\n\n#gameboards-container{\ndisplay: flex;\njustify-content: space-evenly;\ngap: 10px;\n}\n\n\n.miss::before {\ncontent: '•';  /* Unicode character for a bullet point, representing the miss */\nposition: absolute;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%); /* Center the dot */\nfont-size: 1.5em; /* Adjust the size of the dot */\n}\n\n.hit::before {\ncontent: \"\";\nposition: absolute;\ntop: 0;\nleft: 0;\nright: 0;\nbottom: 0;\nbackground-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\nbackground-repeat: no-repeat;\nbackground-position: center center;\n}\n\n.ship {\nwidth: 30px;\nheight: 30px;\nborder: 1px solid white;\nbackground-color: #ccc;\n}\n\n\n\n.selected {\nborder-style: solid;\nborder-color: red;\n}\n\n.start-button {\nwidth: 100px;\nheight: 50px;\nbackground-color: #ccc;\nborder: 1px solid #ccc;\nborder-radius: 5px;\nalign-self: flex-end;\njustify-self: center;\nposition: absolute;\n}\n\n.hover-ship {\n    position: absolute;\n    border: 2px dashed;\n    z-index: 10;\n    pointer-events: none; /* This ensures the hover is not interrupted by this overlay */\n}\n\n.available {\n    border-color: green;\n}\n\n.unavailable {\n    border-color: red;\n}\n\n.tooltip {\n    display: block;\n    position: absolute;\n    padding: 4px 8px;\n    background-color: #000;\n    color: #fff;\n    border-radius: 4px;\n    white-space: nowrap;\n    pointer-events: none; /* ensure the tooltip doesn't interfere with mouse events */\n    display: none; /* initially hidden */\n    transition: transform 0.1s; /* optional: for smoother movement */\n    z-index: 1000; /* ensure it's above other elements */\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "data:image/svg+xml,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27><line x1=%2718%27 y1=%276%27 x2=%276%27 y2=%2718%27 stroke=%27red%27 stroke-width=%272%27/><line x1=%276%27 y1=%276%27 x2=%2718%27 y2=%2718%27 stroke=%27red%27 stroke-width=%272%27/></svg>":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27><line x1=%2718%27 y1=%276%27 x2=%276%27 y2=%2718%27 stroke=%27red%27 stroke-width=%272%27/><line x1=%276%27 y1=%276%27 x2=%2718%27 y2=%2718%27 stroke=%27red%27 stroke-width=%272%27/></svg> ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27><line x1=%2718%27 y1=%276%27 x2=%276%27 y2=%2718%27 stroke=%27red%27 stroke-width=%272%27/><line x1=%276%27 y1=%276%27 x2=%2718%27 y2=%2718%27 stroke=%27red%27 stroke-width=%272%27/></svg>\";\n\n//# sourceURL=webpack://battleship/data:image/svg+xml,%3Csvg_xmlns=%2527http://www.w3.org/2000/svg%2527_viewBox=%25270_0_24_24%2527%3E%3Cline_x1=%252718%2527_y1=%25276%2527_x2=%25276%2527_y2=%252718%2527_stroke=%2527red%2527_stroke-width=%25272%2527/%3E%3Cline_x1=%25276%2527_y1=%25276%2527_x2=%252718%2527_y2=%252718%2527_stroke=%2527red%2527_stroke-width=%25272%2527/%3E%3C/svg%3E?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;