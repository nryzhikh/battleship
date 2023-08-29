/* eslint-disable */

export const ship = (length) => ({
    length,
    hitArray: [],
    hit: function hit (position) {
        this.hitArray.push(position);
    },
    isSunk: function isSunk () {
        if (this.hitArray.length === this.length) {
            return true;
        }
        return false;
    }
});
