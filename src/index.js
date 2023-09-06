/* eslint-disable */

import { Player } from "./player";
import { gameboard } from "./gameboard";
import { game, startGame } from "./game";
import { ship } from "./ship";
import { renderGameboard1, renderGameboard2 } from "./render";
import Grid from "./grid";
import Controls from "./controls";

import "./styles.css";

window.addEventListener("DOMContentLoaded", () => {
  game.player2Gameboard.placeShipsRandomly();
  Grid.renderGrid();
  Controls.placeShipInDOM();
  Controls.shipPlacement();
  Controls.startBattle();
  
});






        
