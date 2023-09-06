/* eslint-disable */

import { game, startGame } from "../game";

expect.extend({
    toBeOneOf(received, array) {
      const pass = array.includes(received);
      if (pass) {
        return {
          message: () => `expected ${received} not to be one of [${array.join(', ')}]`,
          pass: true,
        };
      } else {
        return {
          message: () => `expected ${received} to be one of [${array.join(', ')}]`,
          pass: false,
        };
      }
    },
  });




xdescribe("game", () => {
    xit("should have its gameboards filled with ships", () => {
        game.player1Gameboard = 
        game.player1Gameboard.placeShip(game.player1Gameboard.ships[0], {x: 0, y: 0}, true);
        expect(newGame.player2Gameboard.ships.length).toEqual(1);
    }),
    xit("should finish the game when all ships are sunk", () => {
    
        newGame.fillGameboard(newGame.player1Gameboard);
        newGame.fillGameboard(newGame.player2Gameboard);
        expect(newGame.gameLoop()).toBeOneOf(['Player 1 wins!', 'Player 2 wins!']);
    })
});