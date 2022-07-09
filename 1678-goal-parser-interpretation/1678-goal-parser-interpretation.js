/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let array = command.split('');
    let final = '';
    for(let i = 0; i < array.length; i++) {
        if(array[i] === 'G') {
            final += 'G';
        } 
        
        if(array[i] === '(' && array[i + 1] === ')') {
            final += 'o';
        }
        
        if(array[i] === '(' && array[i + 1] === 'a') {
            final += 'al';
        }
    }
    
    return final;
};