/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let string = '' + n;
    let numbers = string.split('');
    let sum = 0;
    let product = 1;
    for(let i = 0; i < numbers.length; i++) {
       sum += Number(numbers[i]);
        product *= Number(numbers[i]);
    }
    
    return product - sum;
};