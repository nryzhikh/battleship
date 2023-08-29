/* eslint-disable */


import { ship } from '../src/ship';

describe('ship', () => {
    it('should return an object', () => {
        expect(ship(3)).toBeInstanceOf(Object);
    }
    );
    it('should return an object with length property', () => {
        expect(ship(3)).toHaveProperty('length');
    }
    );
    it('should return an object with hitArray property', () => {
        expect(ship(3)).toHaveProperty('hitArray');
    }
    );
    it('should return an object with hit method', () => {
        expect(ship(3)).toHaveProperty('hit');
    }
    );
    it('should return an object with isSunk method', () => {
        expect(ship(3)).toHaveProperty('isSunk');
    }
    );
    it('should return an object with length property equal to 3', () => {
        expect(ship(3).length).toEqual(3);
    }
    );
    it('should return an object with hitArray property equal to []', () => {
        expect(ship(3).hitArray).toEqual([]);
    }
    );
    it('should return an object with hitArray property equal to [{x: 1, y: 1}]', () => {
        const newShip = ship(3)
        newShip.hit({x: 1, y: 1});
        expect(newShip.hitArray).toEqual([{x: 1, y: 1}]);
    }
    );
    it('should return an object with hitArray property equal to [{x: 1, y: 1}, {x: 2, y: 2}]', () => {
        const newShip = ship(3)
        newShip.hit({x: 1, y: 1});
        newShip.hit({x: 2, y: 2});
        expect(newShip.hitArray).toEqual([{x: 1, y: 1}, {x: 2, y: 2}]);
    }
    );
    it('should return an object with isSunk property equal to false', () => {
        expect(ship(3).isSunk()).toEqual(false);
    }
    );
    it('should return an object with isSunk property equal to true', () => {
        const newShip = ship(3)
        newShip.hit({x: 1, y: 1});
        newShip.hit({x: 2, y: 2});
        newShip.hit({x: 3, y: 3});
        expect(newShip.isSunk()).toEqual(true);
    }
    );
}
);

