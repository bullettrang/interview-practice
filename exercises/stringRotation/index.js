function stringRotation(s1,s2){


    let firstChar=s1[0];

    for(let ch of s2){
        if(ch===firstChar){
            let substrIdx = s2.indexOf(ch);
            console.log(substrIdx);
            let substrs2 = s2.substring(substrIdx,s2.length);
            let s2Concat = substrs2.concat(s2.substring(0,substrIdx));
            if(s2Concat===s1){
                return true;
            }
            else{
                return false;
            }
        }
    }
    return false;

}


module.exports = stringRotation;