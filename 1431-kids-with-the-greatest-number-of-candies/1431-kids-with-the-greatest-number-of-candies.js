/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const result = []; 
    let max;
    for(let j = 0; j < candies.length; j++) {
        if(j === 0) {
            max = candies[0];
        } else {
            if(candies[j] > max){
                max = candies[j]
            }
        }
    }
    for(let i = 0; i < candies.length; i++) {
        if(candies[i] + extraCandies >= max) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result;
};