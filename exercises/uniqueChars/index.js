//Implement an algorithm to determine if a string has all unique characters. 
//What if you cannot use additional data structures?

function isUniqueChars(str){
    if(str.length >128) return false;       //there are only 128 unique characters

    const char_set={};                     //hash table for our string problem (see maxchar problem)
    for(let i =0; i<str.length;i++){
        //let val = str.charCodeAt(i);
        let val = str[i];
        if(char_set[val]){  //we already found this value
            return false;
        }
        char_set[val]=true;
    }
    return true;
}

module.exports = isUniqueChars;