/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    console.log("items:", items);
    console.log("ruleKey:", ruleKey);
    console.log("ruleValue:", ruleValue);
    let counter = 0;
    if(ruleKey === "type") {
        for(let i = 0; i < items.length; i++) {
            if(ruleValue === items[i][0]) {
                counter++;
            }
        }   
    }
    
    if(ruleKey === "color") {
        for(let i = 0; i < items.length; i++) {
            if(ruleValue === items[i][1]) {
                counter++;
            }
        }   
    }
    
    if(ruleKey === "name") {
        for(let i = 0; i < items.length; i++) {
            if(ruleValue === items[i][2]) {
                counter++;
            }
        }   
    }
    
    return counter;
};