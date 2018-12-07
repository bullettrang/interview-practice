function stringcompression(str){
    let output='';
    let count=1;
    let currentCh=str[0];
    
     if(str.length <5) return str;

    for(let i =1; i< str.length;i++){
        if(currentCh !==str[i]){
            output+=currentCh;      //move char to new char
            output+=count;
            count=1;        //reset count
            currentCh=str[i];

        }
        else{
            count++;
            if(i === str.length-1){     //case where str ends with consecutives
                output+=currentCh;
                output+=count;
            }
        }
    } 
return output.length < str.length ? output : str;
}

//apparently string concatenation is slow...

module.exports=stringcompression;