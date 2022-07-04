/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const array = [];
    for(let i = 0; i < nums.length; i++) {
        array.push(nums[nums[i]]);
    }
    return array;
};