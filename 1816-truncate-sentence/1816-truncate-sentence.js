/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let sentence = s.split(' ');
    sentence.splice(k, sentence.length - k);
    return sentence.join(' ');
};