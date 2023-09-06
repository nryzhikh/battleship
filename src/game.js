/* eslint-disable */

import {ship} from '../src/ship';
import {gameboard} from '../src/gameboard';
import {Player} from '../src/player';
import { selectShipToPlace, renderGameboard1, renderGameboard2, renderShips, placeShipOnGameboard, renderControls } from './render';


export const game = {
    player1: Player(),
    player2: Player(),
    player1Gameboard: gameboard(),
    player2Gameboard: gameboard(),
    currentPlayer: 1,
    gameActive: false,
    
}

