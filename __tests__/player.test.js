/* eslint-disable */


import {Player} from '../src/player.js'

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
            }
        for (let i = 0; i < 100; i++) {
        newPlayer.makeRandomAttack(enemyGameboard);
        }
        const uniqueShots = Array.from(new Set(newPlayer.shotsFired.map(JSON.stringify)));
        expect(uniqueShots.length).toEqual(newPlayer.shotsFired.length);
    });

})