/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let string = '';
    let split = s.split('');
    let whole = [];
    for(let i = 0; i < s.length; i++) {
        let array = [];
        array.push(split[i]);
        array.push(indices[i]);
        whole.push(array);
    }
    
    for(let j = 0; j < whole.length; j++) {
        for(let pair of whole) {
            if(pair[1] === j){
                string += pair[0];
            }
        }
    }
    return string;
};