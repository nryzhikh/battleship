/* eslint-disable */

import { game } from "../src/game";

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




describe("game", () => {
    it("should have its gameboards filled with ships", () => {
        const newGame = game();
        newGame.fillGameboard(newGame.player1Gameboard);
        expect(newGame.player1Gameboard.ships.length).toEqual(10);
    }),
    it("should finish the game when all ships are sunk", () => {
        const newGame = game();
        newGame.fillGameboard(newGame.player1Gameboard);
        newGame.fillGameboard(newGame.player2Gameboard);
        expect(newGame.gameLoop()).toBeOneOf(['Player 1 wins!', 'Player 2 wins!']);
    })
});