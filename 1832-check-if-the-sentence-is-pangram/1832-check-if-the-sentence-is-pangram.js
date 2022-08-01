/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const sentenceArr = sentence.split('');
    const abc = "abcdefghijklmnopqrstuvwxyz";
    const abcArr = abc.split('');
    let counter = 0;
    
    for(let i = 0; i < abcArr.length; i++) {
        if(sentenceArr.includes(abcArr[i])) {
            counter++;
            continue;
        }  else {
            return false;
        }
    }
    
    if(counter === 26) {
        return true;
    }
};