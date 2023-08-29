/* eslint-disable */

import {ship} from '../src/ship';
import {gameboard} from '../src/gameboard';
import {Player} from '../src/player';


export const game = () => ({
    player1: Player(),
    player2: Player(),
    player1Gameboard: gameboard(),
    player2Gameboard: gameboard(),
    currentPlayer: 1,
    changePlayer: function changePlayer () {
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        }
        else {
            this.currentPlayer = 1;
        }
    },
    gameLoop: function gameLoop () {
        while (!this.player1Gameboard.allShipsSunk() && !this.player2Gameboard.allShipsSunk()) {
        if (this.currentPlayer === 1) {
            this.player1.makeRandomAttack(this.player2Gameboard);
            if (this.player2Gameboard.allShipsSunk()) {
                return 'Player 1 wins!';
            }
            this.changePlayer();
        }
        else {
            this.player2.makeRandomAttack(this.player1Gameboard);
            if (this.player1Gameboard.allShipsSunk()) {
                return 'Player 2 wins!';
            }
            this.changePlayer();
        }
    }
    },
    fillGameboard: function fillGameboard (gameboard) {
        gameboard.placeShip(ship(4), {x: 0, y: 0}, true);
        gameboard.placeShip(ship(3), {x: 0, y: 2}, true);
        gameboard.placeShip(ship(3), {x: 0, y: 4}, true);
        gameboard.placeShip(ship(2), {x: 0, y: 6}, true);
        gameboard.placeShip(ship(2), {x: 0, y: 8}, true);
        gameboard.placeShip(ship(2), {x: 5, y: 0}, true);
        gameboard.placeShip(ship(1), {x: 5, y: 2}, true);
        gameboard.placeShip(ship(1), {x: 5, y: 4}, true);
        gameboard.placeShip(ship(1), {x: 5, y: 6}, true);
        gameboard.placeShip(ship(1), {x: 5, y: 8}, true);
    }

})

