// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     let reversed='';
//     let j = 0;
//     for(let i =str.length-1; i>(-1);i--){
//         reversed+= str[i];
//     }

//     return reversed;
// }

// function reverse(str){
//     return str
//             .split('')
//             .reverse()
//             .join('');
// }


//what if we can't use reverse 
function reverse(str){
    let reversed='';
    for(let sub of str){
        reversed =sub + reversed;
        //debugger;
    }
    return reversed;
}

//ES6 solution
// function reverse(str){
//     return  str.split('').reduce((reversed,character)=> reversed= character+reversed,'');
// }
//reverse('asdf');
module.exports = reverse;
