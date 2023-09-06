/* eslint-disable */

import { ship } from "../ship";
import { gameboard } from "../gameboard";

describe("gameboard", () => {
    it("should return an object", () => {
        expect(gameboard()).toBeInstanceOf(Object);
    });
    it("should return an object with board property", () => {
        expect(gameboard()).toHaveProperty("board");
    });
    it("should return an object with missShots property", () => {
        expect(gameboard()).toHaveProperty("missShots");
    });
    it("should return an object with ships property", () => {
        expect(gameboard()).toHaveProperty("ships");
    });
    it("should return an object with placeShip method", () => {
        expect(gameboard()).toHaveProperty("placeShip");
    });
    it("should return an object with receiveAttack method", () => {
        expect(gameboard()).toHaveProperty("receiveAttack");
    });
    it("should return an object with allShipsSunk method", () => {
        expect(gameboard()).toHaveProperty("allShipsSunk");
    });
    it("should return an object with board to be 10x10 2d array", () => {
        expect(gameboard().board.length).toEqual(10);
    });
    it("should return an object with missShots property equal to []", () => {
        expect(gameboard().missShots).toEqual([]);
    });
    it("should place a ship in the board", () => {
        const newGameboard = gameboard();
        newGameboard.placeShip(ship(3), {x: 1, y: 1}, true);
        expect(newGameboard.board[3][1].length).toEqual(3);
    });
    it("should reveive an attack in the board", () => {
        const newGameboard = gameboard();
        newGameboard.placeShip(ship(3), {x: 1, y: 1}, true);
        newGameboard.receiveAttack({x: 1, y: 1});
        expect(newGameboard.board[1][1].hitArray).toEqual([{x: 1, y: 1}]);
    });
    it("should recieve an attack in the missShots array", () => {
        const newGameboard = gameboard();
        newGameboard.placeShip(ship(3), {x: 1, y: 1}, true);
        newGameboard.receiveAttack({x: 1, y: 2});
        expect(newGameboard.missShots).toEqual([{x: 1, y: 2}]);
    });
     it("should return an isSunk after 3 hits", () => {
        const newGameboard = gameboard();
        newGameboard.placeShip(ship(3), {x: 1, y: 1}, true);
        newGameboard.receiveAttack({x: 1, y: 1});
        newGameboard.receiveAttack({x: 2, y: 1});
        newGameboard.receiveAttack({x: 3, y: 1});
        expect(newGameboard.board[3][1].isSunk()).toEqual(true);
    });
    xit("should return an array of ships", () => {
        const newGameboard = gameboard();
        newGameboard.placeShip(ship(3), {x: 1, y: 1}, true);
        newGameboard.placeShip(ship(3), {x: 1, y: 3}, true);
        newGameboard.placeShip(ship(3), {x: 1, y: 5}, true);
        expect(newGameboard.ships.length).toEqual(3);
    });
    xit("should return true if all ships are sunk", () => {
        const newGameboard = gameboard();
        newGameboard.placeShip(ship(3), {x: 1, y: 1}, true);
        newGameboard.receiveAttack({x: 1, y: 1});
        newGameboard.receiveAttack({x: 2, y: 1});
        newGameboard.receiveAttack({x: 3, y: 1});

        expect(newGameboard.allShipsSunk()).toEqual(true);
    });
    it("should not allow placing adjacent ships", () => {
        const newGameboard = gameboard();
        newGameboard.placeShip(ship(3), {x: 1, y: 1}, true);
        newGameboard.placeShip(ship(3), {x: 1, y: 2}, true);

        expect(newGameboard.board[1][2]).toEqual(null);
    });
});
    