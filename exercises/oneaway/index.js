//there are three types of edits that can be performed on strings
//insert a char
//remove a char
//replace a char

// function createCharMap(str){
//     const mapChar={};
//     for(ch of str){
//         if(mapChar[ch]){
//             mapChar[ch]++;
//         }
//         else{
//             mapChar[ch]=1;
//         }
//     }
//     return mapChar;
// }

//this solution takes too much memory
// function oneaway(strA,strB){
//     if(Math.abs(strA.length-strB.length >1)) return false;      //strs with a length diff of more then 1 needs more then 1 edit anyways

//     let editDone = false;
//     let mapCharA={};
//     let mapCharB={};
//     mapCharA= createCharMap(strA);
//     mapCharB=createCharMap(strB);
//     for(ch in mapCharA){
//         if(!mapCharB[ch]){
//             if(editDone){
//                 return false;
//             }
//             editDone=true;
//         }
//     }
//     return true;

// }

function oneaway(strA,strB){
    //strs with a length diff of more then 1 needs more then 1 edit anyways
    if(Math.abs(strA.length-strB.length)>1) return false;    
    let shorterStr;
    let longerStr;

    shorterStr = strA.length < strB.length ? strA:strB;
    longerStr = strA.length < strB.length ? strB:strA;

    let indexA=0;
    let indexB =0;
    let editDone=false;
    while(indexA < shorterStr.length && indexB< longerStr.length  ){
        if(shorterStr.charAt(indexA)!== longerStr.charAt(indexB)){
            if(editDone){
                return false;
            }
            editDone=true;
            if(shorterStr.length===longerStr.length){
                indexA++;
            }
        }
        else{       //if matching, move shorter ptr
            indexA++;
        }
         indexB++;      //always move longer ptr
    }
return true;
}


module.exports = oneaway;