//given two strings, write a method to 
//decide if one is a permutation of the other

//case 1: may, amy === true
//case 2: vato, cato ===false
function checkPermutation(A,B){
    if(A.length !== B.length) return false;     //strs with different lengths cannot be permutations

    const chars={};
    for(ch of A){           //runtime A.length
        let lowerCase = ch.toLowerCase();
        chars[lowerCase]= chars[ch]+1 || 1;            //if char already mapped, increment it, else init with 1
    }

    for(ch of B){
        if(!chars[ch]){
            return false;
        }
    }

    return true;
}

module.exports = checkPermutation;