/* eslint-disable */

import { game } from "../src/game";
import { ship } from "../src/ship";

export default {
    renderGameboard: function (gameboard, id) {
        const gameboardDiv = document.querySelectorAll(`#${id} .cell`);
        gameboardDiv.forEach(cell => {
            const position = {x: parseInt(cell.dataset.x), y: parseInt(cell.dataset.y)};
            if (gameboard.missShots.some(shot => shot.x === position.x && shot.y === position.y)) {
                cell.classList.add('miss');
            }
            if (gameboard.ships.some(ship => ship.hitArray.some(hit => hit.x === position.x && hit.y === position.y))) {
                cell.classList.add('hit');
            }
        }
        );

    } 
}


// shipsDiv.innerHTML = `
// <div id="ships-wrapper">
//     <div class="ship-container" data-length="5" data-isHorisontal="1">
//         <div class="ship"></div>
//         <div class="ship"></div>
//         <div class="ship"></div>
//         <div class="ship"></div>
//         <div class="ship"></div>
//     </div>
//     <div class="ship-container" data-length="4" data-isHorisontal="1">
//         <div class="ship"></div>
//         <div class="ship"></div>
//         <div class="ship"></div>
//         <div class="ship"></div>
//     </div>
//     <div class="ship-container" data-length="3" data-isHorisontal="1">
//         <div class="ship"></div>
//         <div class="ship"></div>
//         <div class="ship"></div>
//     </div>
//     <div class="ship-container" data-length="3" data-isHorisontal="1">
//         <div class="ship"></div>
//         <div class="ship"></div>
//         <div class="ship"></div>    
//     </div>
//     <div class="ship-container" data-length="2" data-isHorisontal="1">
//         <div class="ship"></div>
//         <div class="ship"></div>
//     </div>
//     <button id="start-battle">Start Battle</button>
//     <button id="reset">Reset</button>
// </div>
//     `;