/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let array = String(num).split('');
    let sorted = array.sort();
    return Number(sorted[0] + sorted[3]) + Number(sorted[1] + sorted[2]);
};