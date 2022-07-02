/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let total = 0;
    
    for(i = 0; i < s.length; i++) {
        if(s[i] === 'M') {
            if(s[i - 1] === 'C') {
                total += 900;
            } else {
                total += 1000;
            }
        } else if(s[i] === 'C') {
            if(s[i + 1] === 'M') {
                total += 0;
            } else if(s[i + 1] === 'D') {
                total += 400;
            } else if(s[i - 1] === 'X') {
                total += 90;
            } else {
                total += 100;
            }
        } else if(s[i] === 'D') {
            if(s[i - 1] === 'C') {
                total += 0;
            } else {
                total += 500;
            }
        } else if(s[i] === 'L') {
            if(s[i - 1] === 'X') {
                total += 40;
            } else {
                total += 50;
            }
        } else if(s[i] === 'X') {
            if(s[i + 1] === 'L') {
                total += 0;
            } else if(s[i + 1] === 'C') {
                total += 0;
            } else if(s[i + 1] === 'L') {
                total += 0;
            } else if(s[i - 1] === 'I') {
                total += 9;
            } else {
                total += 10;
            }
        } else if(s[i] === 'V') {
            if(s[i - 1] === 'I') {
                total += 4;
            } else {
                total += 5;
            }
        } else if(s[i] === 'I') {
            if(s[i + 1] === 'X') {
                total += 0;
            } else if(s[i + 1] === 'V') {
                total += 0;
            } else {
                total += 1;
            }
        }
        console.log(total);
    }
    return(total);
};