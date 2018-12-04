function urlify(str){
    const regex = / /gi;
    if(str.length===0) return str;

   // return str.split(' ').map((val)=>  val.concat('%20')).join('').slice(0,-3);
   return str.replace(regex,'%20');
}



module.exports = urlify;