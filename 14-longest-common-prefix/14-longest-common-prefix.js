/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let output = "";
   if(strs.length === 0) {
       return output;
   }
    
    let firstWord = strs[0];
    
    for(let i = 1; i < strs.length; i++) {
        while(strs[i].indexOf(firstWord) !== 0) {
            firstWord = firstWord.substring(0, firstWord.length - 1);
        }
    }
    return firstWord;
};