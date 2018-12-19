
//first attempt, this is extremely slow.....
//seems like I should use some kind of 2 pointer solution...
var sortArrayByParity = function(A) {
    //unshift lets us push element to front
    //push  element to back
    let output = new Array(A.length);
    for(let i =0; i< A.length;i++){
        if(A[i]%2===0){
            output.unshift(A[i]);
        }
        else{
            output.push(A[i]);
        }
    }
    return output.filter((x)=>x !=='undefined');            
};
