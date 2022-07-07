/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const stone = stones.split('');
    let counter = 0;
    for(let i = 0; i < stone.length; i++){
        if(jewels.includes(stone[i])) {
            counter++;
        }
    }
    return counter;
};