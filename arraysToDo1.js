// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!
// function pushFront(arr,num){
//     let newArr = [];
//     for(var i = 0; i<arr.length; i++){
//         newArr[0] = num;
//         newArr[i+1] = arr[i];
//         }
//         console.log(newArr);
//     }

// pushFront([1,2,3], 0)

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

// function popFront(arr){
//     let remArr = [];
//     let retArr = [];
//     let replacement = arr[0];
//     for(var i = 0; i<arr.length-1;i++){
//         remArr[i] = arr[i+1];
//     }
//     console.log(remArr);
//     for(var i = 0; i<arr.length-1; i++){
//         retArr[0] = replacement;
//         retArr[i+1] = remArr[i];
//     }
//     console.log(retArr);
// }
// popFront([0,5,10,15])

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!
// THIS KIND OF WORKS BUT NOT FOR AND INDEX OF 0
// function insertAt(arr,index,val){
//     newArr = [];
//     for(var i = 0; i<arr.length - index; i++){
//         newArr[index-1] = arr[i-1];
//         newArr[index+i+1] = arr[index+i];
//         newArr[index] = val;
//     }
//     console.log(newArr);
//     }
// function insertAt(arr, index,val){
//     for(let i = arr.length; i>=index; i--){
//         arr[i] = arr[i-1];
//     }
//     arr[index] = val;
//     return arr}

// console.log(insertAt([5,6,8,9,10],2,7));

// BONUS: Remove At
// Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).
// function removeAt(arr, index){
//     let save = arr[index];
//     for(let i = index; i < arr.length;i++){
//         arr[i]  = arr[i+1];
//     }
//     arr.length = arr.length-1;
//     return arr;
// }

// console.log(removeAt([1,2,3,4,5],2))

// Examples:

// removeAt([1000,3,204,77], 1) => 3 returned, with [1000,204,77] printed in the function
// removeAt([8,20,55,44,98], 3) => 44 returned, with [8,20,55,98] printed in the function
// BONUS: Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.

// function swap(arr){
//     let save;
//     //determine if odd or even
//     if(arr.length%2!=0){
//     //save odd if odd 
//         save = arr[arr.length-1]
//     //shorten the array
//         arr.length = arr.length-1;
//     }
//     //for loop that counts up by 2
//     for(let i = 0;i<arr.length;i=i+2){
//         //swap the indices
//         let tmp = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = tmp;
        
// }
//     if(save != undefined){
//         arr.push(save);
//     }
//     return arr;
// }
// console.log(swap(["Brendan",true,42]))
// Examples:

// insertAt([1,2,3,4]) => [2,1,4,3]
// insertAt(["Brendan",true,42]) => [true,"Brendan",42]
// BONUS: Remove Duplicates
// Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. If you already made the Remove At function, you are welcome to use that! If you solved this using nested loops, for an extra challenge, try to do it without any nested loops!

// function removeDupes(arr){
//     let index;
//     for(let i = 0;i<arr.length-1;i++){
//         if(arr[i] == arr[i+1]){
//I WILL COME BACK TO THIS BUT I HAVE TO MOVE ON AND THIS IS DUE YESTERDAY
//         }
//     }
//     return arr;
// }
// console.log(removeDupes([-2,-2,3.14,5,5,10]))


// Examples:

// removeDupes([-2,-2,3.14,5,5,10]) => [-2,3.14,5,10]
// removeDupes([9,19,19,19,19,19,29]) => [9,19,29]