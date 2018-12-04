// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//first attempt
// function reverseInt(n) {
//     let isNeg;
//     let negSign = '-';
//     let str='';
//     if(n<0){
//         isNeg=true;
//         str= n.toString().slice(1);
//     }
//     else{
//         isNeg=false;
//         str= n.toString();
//     } 
    
//     return isNeg?  Number(negSign.concat(str.split('').reverse().join(''))):Number(str.split('').reverse().join('')) ;
// }

//GRIDER SOLUTION
function reverseInt(n) {
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('');

       

        return parseInt(reversed) * Math.sign(n);
}

function reverseInt(n){
    let reversed = 0;

    while(n !=0){
        reversed*=10;
        reversed += (n%10)
        n -= (n%10);
        n /=10;
    }
    return reversed * Math.sign(n);
}


// function reverseInt(n){
//     let output =0;
//     if(n %10000 ===n){

//     }
//     else if( n %1000===n)

// }
module.exports = reverseInt;
