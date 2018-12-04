//given a string, write a func to check if tis a permutation of palindrome

//case 1 tact coa should return true 'taco cat'
function palindromePermutation(str){
//base case 
    if(str.length===1){
        return true;
    }
    if(str.length===2){
        if(str[0] !== str[1]){
            return false;
        }
        else{
            return true;
        }
    }
    let charMap={};

    for(ch of str){
        if(ch <'a' || ch > 'z' ) continue;  //skipping white space
        if(charMap[ch]){
            charMap[ch]++;
        }else{
            charMap[ch]=1;
        }
    }
    
    
    
        let oddCharReached=false;
        for(ch in charMap){
            if(charMap[ch] %2 !==0){
                if(oddCharReached){     //if we found a second odd char
                    return false;
                }
                oddCharReached=true;
            }
        }
        return true;
    

}

module.exports= palindromePermutation