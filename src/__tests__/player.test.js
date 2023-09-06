/* eslint-disable */


import {Player} from '../player.js'

describe('Player', () => {
    it("should return an object", () => {
        expect(Player()).toBeInstanceOf(Object);
    }
    );
    it("should return an object with name property", () => {
        expect(Player()).toHaveProperty("name");
    }
    );
    it("should take turn", () => {
        const newPlayer = Player();
        newPlayer.takeTurn();
        expect(newPlayer.turn).toEqual(true);
        });
    it("should attack an enemy gameboard", () => {
        const newPlayer = Player();
        const enemyGameboard = {
            receiveAttack: jest.fn()
            }
        newPlayer.attack(enemyGameboard, {x: 1, y: 1});
        expect(enemyGameboard.receiveAttack).toHaveBeenCalledWith({x: 1, y: 1});
    });
    it("should not fire in the same location", () => {
        const newPlayer = Player();
        const enemyGameboard = {
            receiveAttack: jest.fn()
            };
        newPlayer.attack(enemyGameboard, {x: 1, y: 1});
        newPlayer.attack(enemyGameboard, {x: 1, y: 1});
        expect(newPlayer.shotsFired.length).toEqual(1);
    });

})