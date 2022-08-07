// Min to Front
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

function minToFront(arr){
    let min = arr[0];
    let index;
    for(let i = 0; i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i];
            index = i;
            console.log(min);
            console.log(index);
        }
    }
    if(arr[0]!== min){
        for(let i = index;i<arr.length-1;i++){
            let temp;
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
        for(let i = arr.length; i>=0; i--){
            console.log(i);
            arr[i] = arr[i-1];
        }
        arr.pop();
        arr[0] = min;    
    } 
    
return arr;
}
console.log(minToFront([2,3,1,4]))
