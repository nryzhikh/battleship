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
        if(this.shotsFired.map(JSON.stringify).includes(JSON.stringify(position))) return;
        else {
        this.shotsFired.push(position);
        enemyGameboard.receiveAttack(position);
        console.log(this.shotsFired);
        }
    },
    makeRandomAttack: function makeRandomAttack () {
        let position = {x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10)};
        while (this.shotsFired.map(JSON.stringify).includes(JSON.stringify(position))) {
            position = {x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10)};
        }
        return position;

    },
    

    
})