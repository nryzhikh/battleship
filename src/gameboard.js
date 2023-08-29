/* eslint-disable */
import { ship } from './ship';

export const gameboard = () => ({
    board: [[],[],[],[],[],[],[],[],[],[]],
    missShots: [],
    ships: [],
    placeShip: function placeShip (ship, position, isHorizontal) {
        if (isHorizontal) {
            for (let i = 0; i < ship.length; i++) {
                this.board[position.x + i][position.y] = ship;
            }
        }
        else {
            for (let i = 0; i < ship.length; i++) {
                this.board[position.x][position.y + i] = ship;
            }
        }
        this.ships.push(ship);
    },
      

    receiveAttack: function recieveAtack (position) {
        if (this.board[position.x][position.y] === undefined) {
            this.missShots.push(position);
        }
        else {
            this.board[position.x][position.y].hit(position);
        }
    },
    allShipsSunk: function allShipsSunk () {
        for (let i = 0; i < this.ships.length; i++) {
            if (this.ships[i].isSunk() === false) {
                return false;
            }
        }
        return true;
    }

})
