/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const sentence = s.split(' ');
    let reverseArray = [];
    for(let i = 0; i < sentence.length; i++) {
        let reverseWord = '';
        for(let j = sentence[i].length - 1; j >= 0; j--) {
            reverseWord += sentence[i][j];
        }
        reverseArray.push(reverseWord);
    }
    return reverseArray.join(' ');
};