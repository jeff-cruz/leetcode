/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let splitString = s.split(' ');
    let array = [];
    for(let i = 0; i < splitString.length; i++) {
        let index = splitString[i];
        let word = index.substring(0, index.length - 1);
        console.log('word:', word);
        let number = index.substring(index.length - 1);
        console.log('number:', number);
        array[number - 1] = word;
    }
    let final = array.join(' ');
    return final;
};