/* eslint-disable */

import { game } from "./game";
import { ship } from "./ship";
import Grid from "./grid";
import Render from "./render";

export default {
    renderStartButton: function () {
        const startButton = document.createElement('button');
        startButton.classList.add('start-button');
        startButton.textContent = 'Start Game';
        startButton.addEventListener('click', () => {
            this.startGame();
        })
        document.body.appendChild(startButton);
    },
    selectShipToPlace: function () {
        const ships = document.querySelectorAll('.ship');
        ships.forEach(ship => {
            ship.addEventListener('click', (e) => {
                const selectedShip = document.querySelectorAll('.selected');
                if (selectedShip) {
                    selectedShip.forEach(cell => cell.classList.remove('selected'));
                };
                const newSelectedShip = document.querySelectorAll(`.ship[data-length="${e.target.dataset.length}"]`);
                newSelectedShip.forEach(cell => cell.classList.add('selected'));
            })
        })
    },
    placeShipInDOM: function () {
        const gameboard = document.getElementById('gameboard1');
        gameboard.removeEventListener('click', this.placeShipInDOM);
        gameboard.addEventListener('click', (event) => {
            if (this.getShipToPlace() === undefined) {
                game.gameActive = true;
                console.log(game);
                return;
            }
            const position = {x: parseInt(event.target.dataset.x), y: parseInt(event.target.dataset.y)};
            game.player1Gameboard.placeShip(this.getShipToPlace(), position, this.getShipToPlace().isHorizontal);
            Grid.renderShips(game.player1Gameboard);
        });
        gameboard.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            game.player1Gameboard.setNextShipToPlaceOrientation();
        });

    },



  

    getShipToPlace: function () {
        const shipsToPlace = game.player1Gameboard.ships.filter(ship => ship.isPlaced === false);
        return shipsToPlace[0];
    },
        


    shipPlacement: function () {
        const gameboard = document.querySelector('#gameboard1');
        const hoverShip = document.createElement('div');
        hoverShip.classList.add('hover-ship');
        gameboard.appendChild(hoverShip);

        let isHorizontal = true;

        gameboard.addEventListener('mouseover', function(e) {
            if (game.player1Gameboard.getNextShipToPlace() === undefined) {
                hoverShip.style.display = 'none';
                return;
            };
            const cell = e.target;
            if (!cell.classList.contains('cell')) return;

            const x = parseInt(cell.dataset.x, 10);
            const y = parseInt(cell.dataset.y, 10);
            const position = {x, y};

            if (isHorizontal) {
                hoverShip.style.width = `${32 * game.player1Gameboard.getNextShipToPlace().length}px`;
                hoverShip.style.height = '30px';
            } else {
                hoverShip.style.width = '30px';
                hoverShip.style.height = `${32 * game.player1Gameboard.getNextShipToPlace().length}px`;
            }

            hoverShip.style.left = `${x * 32}px`;
            hoverShip.style.top = `${y * 32}px`;

            if (game.player1Gameboard.canPlaceShip(game.player1Gameboard.getNextShipToPlace(), position, isHorizontal)) {
                hoverShip.classList.add('available');
                hoverShip.classList.remove('unavailable');
            } else {
                hoverShip.classList.add('unavailable');
                hoverShip.classList.remove('available');
            }
        });
        gameboard.addEventListener('contextmenu', function(e) {
            e.preventDefault(); // Prevents the default context menu from showing up
            isHorizontal = !isHorizontal;

        });
    },
    
    startBattle: function () {
        const gameboard = document.getElementById('gameboard2');
        gameboard.addEventListener('click', (event) => {
            if (!game.gameActive) return;
            let position = {x: parseInt(event.target.dataset.x), y: parseInt(event.target.dataset.y)};
            this.handleTurn(position);
            console.log(game.currentPlayer)
            while (game.currentPlayer === 2) {
                let randomPosition = game.player2.makeRandomAttack();
                this.handleTurn(randomPosition);
            }
        })
    },

    handleTurn: function (position) {
        const opponent = game.currentPlayer === 1 ? 2: 1;
        const opponentGameboard = game.currentPlayer === 1 ? game.player2Gameboard: game.player1Gameboard;
        const opponentGrid = game.currentPlayer === 1 ? 'gameboard2': 'gameboard1';

        if (opponentGameboard.board[position.x][position.y] !== null ) {
            opponentGameboard.receiveAttack(position);
                Render.renderGameboard(opponentGameboard, opponentGrid);
                if (opponentGameboard.allShipsSunk()) {
                    alert('Player 1 wins!');
                    game.gameActive = false;
                    return
                };
        } else {
            opponentGameboard.receiveAttack(position);
            Render.renderGameboard(opponentGameboard, opponentGrid);
            game.currentPlayer = opponent;
        }
    },




        
    
    // clickHandler: function(event) => {
    //     const x = event.target.dataset.x;
    //     const y = event.target.dataset.y;
    //     let position = {x: parseInt(x), y: parseInt(y)};
    
    //     if (game.currentPlayer === 1 && game.gameActive) {
    //         game.player1.attack(game.player2Gameboard, position);
    //         if (game.player2Gameboard.board[position.x][position.y] !== null) {
    //             event.target.classList.add('hit');
    //             if (game.player2Gameboard.allShipsSunk()) {
    //                 alert('Player 1 wins!');
    //                 game.gameActive = false;
    //                 return
    //             };
    //             event.target.removeEventListener('click', clickHandler);
    //         } else {
    //             event.target.classList.add('miss');
    //             game.currentPlayer = 2;
    //             while (game.currentPlayer === 2) {
    //             position = game.player2.makeRandomAttack();
    //             game.player2.attack(game.player1Gameboard, position);
    //             if (game.player1Gameboard.board[position.x][position.y] !== null) {
    //                 const cell = document.querySelector(`.cell[data-player='${1}'][data-x='${position.x}'][data-y='${position.y}']`);
    //                 cell.classList.add('hit');
    //                 if (game.player1Gameboard.allShipsSunk()) {
    //                     game.gameActive = false;
    //                     alert('Player 2 wins!');
    //                     return
    //                 }
    //             } else {
    //                 const cell = document.querySelector(`.cell[data-player='${1}'][data-x='${position.x}'][data-y='${position.y}']`);
    //                 cell.classList.add('miss');
    //                 game.currentPlayer = 1;
    //             }
    //         }
    //         }
    //     } 
    // }
    



}

