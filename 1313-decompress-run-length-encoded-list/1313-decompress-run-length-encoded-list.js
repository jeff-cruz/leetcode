/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    const arrays = [];
    
    for(let i = 0; i < nums.length; i += 2) {
        arrays.push([nums[i], nums[i + 1]]);
    }
    
    let final = [];
    let freq;
    let value;
    for(let array of arrays) {
        for(let j = 0; j < array.length; j++) {
            if(j === 0) {
                 freq = array[0];
            }
            
            if(j === 1) {
                 value = array[1];
            }
            
        }

        for (let g = 0; g < freq; g++) {
            final.push(value);
        }
        
    }
    return final;
};