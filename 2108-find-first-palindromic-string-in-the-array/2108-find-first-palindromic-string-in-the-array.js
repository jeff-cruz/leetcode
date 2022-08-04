/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let i = 0; i < words.length; i++) {
        const splitWord = words[i].split('').reverse().join('');
        if(words[i] === splitWord){
            return words[i];
        } else {
            continue;
        }
    }
    return "";
};