/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    for(let j = 1; j < nums.length; j++) {
        let first = nums[i];
        let second = nums[j];
        if(nums[i] + nums[j] === target && i !== j) {
            return [i,j];
        }
    }
  }
    return array;
};