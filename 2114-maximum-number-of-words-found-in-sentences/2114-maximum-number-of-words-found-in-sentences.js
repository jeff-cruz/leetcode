/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let valuesArray = [];
    let max;
    for(let i = 0; i < sentences.length; i++) {
        valuesArray.push(sentences[i].split(' ').length);
    }
    
    for(let j = 0; j < valuesArray.length; j++) {
        if (j === 0) {
            max = valuesArray[0];
        }
        
        if(valuesArray[j] > max) {
            max = valuesArray[j];
        }
    }
    return max;
};