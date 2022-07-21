/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let stringOne = '';
    let stringTwo = '';
    for(let i = 0; i < word1.length; i++) {
        stringOne += word1[i];
    }
    
    for(let j = 0; j < word2.length; j++) {
        stringTwo += word2[j];
    }
    
    if(stringOne === stringTwo) {
        return true;
    } else {
        return false;
    }
};