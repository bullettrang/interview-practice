// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     const regex= /[^\w]/g;
//     const mapChar={};
//     let cleanA = stringA.replace(regex,'').toLowerCase();
//     let cleanB=stringB.replace(regex,'').toLowerCase();
//     let chosen;
    
//     if(cleanA.length !== cleanB.length){
//         return false;
        
//     }
//     else{
//         chosen=cleanB;
       
//     }
//     for(let ch of chosen){
//         if(mapChar[ch]){
//             mapChar[ch]++;
//         }
//         else{
//             mapChar[ch]=1;
//         }
//     }
//     if(chosen===cleanA){
//         for(ch of cleanB){
//             if(!mapChar[ch]) return false;
//         }
//         return true;
//     }
//     else if(chosen===cleanB){
//         for(ch of cleanA){
//             if(!mapChar[ch]) return false;
//         }
//         return true;
//     }
// }

// anagrams('One one', 'One one c');

function anagrams(stringA,stringB){
    const aCharMap= buildCharMap(stringA);
    const bCharMap= buildCharMap(stringB);


    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
        return false;
    }
    for(let ch in aCharMap){
        if(aCharMap[ch]!==bCharMap[ch]){
            return false;
        }
    }
    return true;
}

function buildCharMap(str){
    const charMap={};

    for(let char of str.replace(/[^\w]/g,'').toLowerCase()){
        charMap[char] = charMap[char]+1||1;
    }

    return charMap;
}
module.exports = anagrams;
