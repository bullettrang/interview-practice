// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const output = [];
    let idx=0;
    
        while(idx < array.length){
            output.push(array.slice(idx,idx+size));
            idx=idx+size;
            
        }
    return output;
    
}

//first attempt
// function chunk(array, size) {
//     const increment =size;
//      const output = [];
//      for(let i =0;i<array.length;i+=increment){
//          let subArr=[];
//          let count=0;
//          let j=i;
//          while(count<size && j<array.length){
//              subArr.push(array[j++]);
//              count++;
//          }
//          output.push(subArr);
//      }
//      return output;
//  }


module.exports = chunk;
