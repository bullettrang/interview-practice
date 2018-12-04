// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


//THIS IS FULL SOLUTION
// function palindrome(str) {
//     let reversed = str.split('').reverse().join('');
//     return str===reversed;
// }

function palindrome(str){
   return str.split('').every((ele,idx)=> {
       const half = str.length/2;
       const rightEnd= str.length-1;
       // if(idx==half) return ele=== str[rightEnd-idx];
        
        return ele=== str[rightEnd-idx];
    })
}
module.exports = palindrome;
