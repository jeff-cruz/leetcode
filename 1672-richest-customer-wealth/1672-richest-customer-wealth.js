/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let totals = [];
    let max = 0;
    for (let account of accounts) {
        let accountSum = 0;
        for(let i = 0; i < account.length; i++) {
            accountSum += account[i];
            if (i === account.length - 1) {
                totals.push(accountSum);
            }
        }
    }
    
    for(let j = 0; j < totals.length; j++) {
        if(totals[j] > max) {
            max = totals[j];
        }
    }
    return max;
}
