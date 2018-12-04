// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars={};
    for(let ch of str){         //map it
        chars[ch]= chars[ch] +1 || 1;           //increment or.... if it don't exist init to 1
    }
    let max =0;
    let maxChar='';

    for( let ch of str){
        if(chars[ch]>max){
            maxChar=ch;
            max= chars[ch];
        }
    }
    return maxChar;
}

module.exports = maxChar;
