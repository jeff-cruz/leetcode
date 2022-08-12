/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let counter = 0;
    const prefixLength = pref.length;
    for(let i = 0; i < words.length; i++) {
        if(words[i].substring(0, prefixLength) === pref) {
            counter++;
        }
    }
    return counter;
};