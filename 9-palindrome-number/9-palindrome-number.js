/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var y = x.toString().split('').reverse().join('');
    if(Number(y) === x) {
        return true;
    }
    return false;
};