/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const index = word.indexOf(ch) + 1;
    const prefix = word.substring(0, index).split('').reverse().join('');
    const suffix = word.substring(index, word.length)
    
    return prefix + suffix;
};