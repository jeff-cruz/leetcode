/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const array = [];
    const firstHalf = nums.splice(0, n);
    const secondHalf = nums;
    
    for(let i = 0; i < n; i++) {
        array.push(firstHalf[i]);
        array.push(secondHalf[i]);
    }
    
    return array;
};