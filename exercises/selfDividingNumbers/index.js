// function selfDividingNumbers(left,right){
//     for(let num = left; num<=right;num++){
//         //change num to str
//         let str='';
//         str=num.toString();  

//     }
// }
//super slow
// function isSelfDividing(num){
//     let str = num.toString();
//     let sepNums=[];         //separated nums

//     sepNums= str.split('');

//     for(ch of sepNums){     
//         if(num % ch !==0){
//             return false;
//         }
//     }
//     return true;
// }




//console.log(isSelfDividing(13));            //should be true


function getSelfDividingNumbers(min,max){
    let res =[];
    for(let i = min; i<=max;i++){
        if(isSelfDividing(i)){
            res.push(i);
        }
    }
    return res;
}

//arithmetic based
function isSelfDividing(num){
    let left = num;
    let digit;
    while(left>0){
        digit= left % 10;
        if(num %digit !==0) return false;
        left = Math.floor(left/10);
    }
   return true;
}

//console.log(isSelfDividing(128));       //should return true
console.log(getSelfDividingNumbers(1,22));

//module.exports=selfDividingNumbers;



