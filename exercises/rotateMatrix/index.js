
function rotateMatrix(A){
    let transposedArr = [];
    let finalArr=[];
    transposedArr=transpose(A);
    finalArr= reverse(transposedArr);
    return finalArr;
};
module.exports = rotateMatrix;
//loops are faster then map
//https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript

//doesn't work if m !==n
//transpose
//reverse each row
function transpose(A){

    
    let cols = A.length;
    let rows = A[0].length;
    let grid=[];
if(cols !==rows) return;
    for(let i =0;i<cols;i++){
        let newRow=[];
        for(let j =0; j< rows;j++){
            newRow.push(A[j][i]);
        }
        grid.push(newRow);
    }
    return grid;
}

function reverse(A){
    for(let i =0;i<A.length;i++){
        for(let j=0; j< (A[0].length/2);j++ ){
            let last = A[0].length-1-j;
            let temp = A[i][j];
            A[i][j] = A[i][last];
            A[i][last]=temp;
        }
    }
    return A;
}
A=[
    [1,2],
    [3,4]
];
B=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// [1,3,5]
//[2,4,6]
console.log(rotateMatrix(B));