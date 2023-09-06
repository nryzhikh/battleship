/* eslint-disable */
import { ship } from './ship';


export const gameboard = () => ({
    board: Array(10).fill(null).map(() => Array(10).fill(null)),
    missShots: [],
    ships: [ship(4), ship(3), ship(3), ship(2), ship(2), ship(2), ship(1) , ship(1), ship(1), ship(1)],
    placeShip (ship, position, isHorizontal) {
        if(this.canPlaceShip(ship, position, isHorizontal)) {
        if (isHorizontal) {
            for (let i = 0; i < ship.length; i++) {
                if (this.board[position.x + i][position.y] !== null) {
                    return;
                }
                this.board[position.x + i][position.y] = ship;
            }
        }
        else {
            for (let i = 0; i < ship.length; i++) {
                this.board[position.x][position.y + i] = ship;
            }
        }
        ship.isPlaced = true;
        }
    },
      
    canPlaceShip(ship, position, isHorizontal) {
        const boardSize = this.board.length;

        for (let i = 0; i < ship.length; i++) {
            const x = position.x + (isHorizontal ? i : 0);
            const y = position.y + (!isHorizontal ? i : 0);
    
            if (!this.board[x] || this.board[x][y] !== null) {
                return false;
            }
    
            // Check for nearby ships around this cell
            for (let dx = -1; dx <= 1; dx++) {
                for (let dy = -1; dy <= 1; dy++) {
                    const checkX = x + dx;
                    const checkY = y + dy;
    
                    if (checkX >= 0 &&
                        checkX < boardSize &&
                        checkY >= 0 &&
                        checkY < boardSize &&
                        this.board[checkX][checkY] !== null) {
                        return false;
                    }
                }
            }
        }
        return true;
    },

    checkHitorMiss (position) {
        if (this.board[position.x][position.y] === null) {
            return true;
        }
        else {
            return false;
        }
    },
    

    receiveAttack: function receiveAttack (position) {
        if (this.board[position.x][position.y] === null) {
            this.missShots.push(position);
    
        }
        else {
            this.board[position.x][position.y].hit(position);
        }
    },

    allShipsSunk () {
        for (let i = 0; i < this.ships.length; i++) {
            if (this.ships[i].isSunk() === false) {
                return false;
            }
        }
        return true;
    },
    placeShipsRandomly () {
        for (let i = 0; i < this.ships.length; i++) {
            let isHorizontal = Math.random() >= 0.5;
            let position = {x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10)};
            while (!this.canPlaceShip(this.ships[i], position, isHorizontal)) {
                isHorizontal = Math.random() >= 0.5;
                position = {x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10)};
            }
            this.placeShip(this.ships[i], position, isHorizontal);
        }
    },
    removeShip(position) {
        if (this.board[position.x][position.y] !== null) {
            const ship = this.board[position.x][position.y];
            console.log(ship);
            for (let i = 0; i < this.board.length; i++) {
                for (let j = 0; j < 10; j++){
                    if (this.board[i][j] === ship) {
                        this.board[i][j] = null;
                    }

                }
            };
            ship.isPlaced = false;
        }
    },
    getNextShipToPlace() {
        const shipsToPlace = this.ships.filter(ship => ship.isPlaced === false);
        return shipsToPlace[0];
    },
    setNextShipToPlaceOrientation() {
        const ship = this.getNextShipToPlace();
        ship.isHorizontal = !ship.isHorizontal;
    },

})
