/* eslint-disable */

export const Player = () => ({
    type: 'human',
    name: 'Player',
    turn: false,
    shotsFired: [],
    takeTurn: function takeTurn () {
        this.turn = true;
    },
    attack: function attack (enemyGameboard, position) {
        enemyGameboard.receiveAttack(position);
    },
    makeRandomAttack: function makeRandomAttack (enemyGameboard) {
        let position = {x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10)};
        while (this.shotsFired.map(JSON.stringify).includes(JSON.stringify(position))) {
            position = {x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10)};
        }
        this.shotsFired.push(position)
        enemyGameboard.receiveAttack(position);
    },
    

    
})