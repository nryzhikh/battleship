/* eslint-disable */
import {gameboard} from '../src/gameboard';

export default {
    renderGrid: function () {
        const grid = document.querySelectorAll('.gameboard');
        grid.forEach(element => {
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++){
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.setAttribute('data-x', j);
                cell.setAttribute('data-y', i);
                element.appendChild(cell);
                }
            }
        });
    },
    renderShipsforPicker: function () {
        let pickerBoard = gameboard();
        pickerBoard.placeShipsForPicker();
        const grid = document.getElementById('gameboard2').querySelectorAll('.cell');
        grid.forEach(cell => {
            if (pickerBoard.board[cell.dataset.x][cell.dataset.y] !== null) {
                cell.classList.add('ship');
                cell.setAttribute('data-length', pickerBoard.board[cell.dataset.x][cell.dataset.y].length);
            }
        })
    },
    renderShips: function (gameboard) {
        const grid = document.getElementById('gameboard1').querySelectorAll('.cell');
        grid.forEach(cell => {
                cell.classList.remove('ship');
            if (gameboard.board[cell.dataset.x][cell.dataset.y] !== null) {
                cell.classList.add('ship');
            };
            
        })
    }

}
