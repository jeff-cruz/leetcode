/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const letters = s.split('');
    let array = [];
    for(let i = 0; i < letters.length; i++) {
        if(!array.includes(letters[i])) {
            array.push(letters[i]);
        } else {
            return letters[i];
        }
    }
};