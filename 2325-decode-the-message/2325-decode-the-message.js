/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let newKey = '';
    let splitMessage = message.split('');
    let position = [];
    let splitKey = key.split('');
    let secret = '';
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    for(let i = 0; i < splitKey.length; i++) {
        if(!newKey.includes(splitKey[i]) && splitKey[i] !== ' ') {
            newKey += splitKey[i];
        }
    }
    
    for(let j = 0; j < splitMessage.length; j++) {
        if(splitMessage[j] === ' ') {
            position.push(' ');
            continue;
        } else {
            position.push(newKey.indexOf(splitMessage[j]));
        }
    }
    
    for(let g = 0; g < position.length; g++) {
        if(position[g] === ' ') {
            secret += position[g];
        } else {
            secret += alphabet[position[g]];
        }
    }
    
    return secret;
};