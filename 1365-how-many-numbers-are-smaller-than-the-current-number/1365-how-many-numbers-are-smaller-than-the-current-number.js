/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const array = [];
    for(let i = 0; i < nums.length; i++) {
        let counter = 0;
        for(let j = 0; j < nums.length; j++) {
            if(i !== j && nums[i] > nums[j]) {
                counter++;
            }
        }
        array.push(counter);
    }
    return array;
};