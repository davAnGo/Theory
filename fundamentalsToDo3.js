// Biggie Size
// Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].

// function makeItBig(arr){
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]>0){
//             arr[i] = 'big';
//         }
//     }
//     return arr;
// }

// console.log(makeItBig([-1,3,5,-5]))

// Print Low, Return High
// Create a function that takes an array of numbers. The function should print the lowest value in the array, and return the highest value in the array.

// function lowHigh(arr){
//     low = arr[0];
//     high = arr[0];
//     for(var i = 0; i<arr.length; i++){
//         if(arr[i] < low){
//             low = arr[i];
//         }
//     }
//     for(var i = 0; i<arr.length; i++){
//         if(arr[i] > high){
//             high = arr[i];
//         }
//     }
//     console.log("Lowest value:",low);
//     return high;
// }

// console.log(lowHigh([1,2,3,4,5]))

// Print One, Return Another
// Build a function that takes an array of numbers. The function should print the second-to-last value in the array, and return first odd value in the array.

// function oneAnother(arr){
//     if(arr.length>=2){
//     console.log("this is the console log the next is the return",arr[arr.length-2]);
//     }
//     else console.log("there is no second to last value");
//     for(let i = 0; i<arr.length;i++){
//         if(arr[i]%2 !=0){
//             return arr[i];
//         }
//     }
// }

// console.log(oneAnother([4,6,8,10,9]))

// function doubleValues(arr){
//     newArr = [];
//     for(let i = 0; i<arr.length; i++){
//         newArr.push(arr[i]*2);
//     }
//     return newArr;
// }

// console.log(doubleValues([1,2,3]))

// Count Positives
// Given an array of numbers, create a function to replace last value with the number of positive values. Example,  countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
// function countPositives(arr){
//     count = 0;
//     for(var i = 0; i<arr.length; i++){
//         if(arr[i]>0){
//             console.log(count++);
//         }
//     }
//     arr[arr.length-1] = count;
//     return arr;
// }

// console.log(countPositives([-1,1,1,1]))

// Evens and Odds
// Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

// function evensAndOdds(arr){

//     for(let i = 0; i<arr.length;i++){
//         if(arr[i]%2===0 && arr[i+1]%2===0 && arr[i+2]%2===0){
//             console.log("even more so");
//         }
//     }
//     for(let i = 0; i<arr.length;i++){
//         if(arr[i]%2!==0 && arr[i+1]%2!==0 && arr[i+2]%2!==0){
//             console.log("thats odd")
//     }
// }
// }

// evensAndOdds([2,2,2])

// Increment the Seconds
// Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.

// function addToOdd(arr){
//     for(var i = 0; i<arr.length; i++){
//         if(arr[i]%2!==0){
//             console.log(arr[i] = arr[i]+1);
//         }
//     }
//     return arr;
// }

// console.log(addToOdd([1,2,3,4,5]))

// Previous Lengths
// You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array.\

// function replaceStrings(arr){
//     for(let i = 0; i<arr.length; i++){
//         if(typeof arr[i] === 'string'){
//             arr[i] = arr[i].length;
//         }
//     }
//     return arr;
// }

// console.log(replaceStrings([1,'two',3,'four']))

// Add Seven to Most
// Build a function that accepts an array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.

// function addSeven(arr){
//     newArr = [];
//     for(let i = 1; i<arr.length;i++){
//         newArr.push(arr[i]+7);
//     }
//     return newArr;
// }

// console.log(addSeven([1,2,3,4,5,6,7]))

// function reverse(arr){
//     // setting a for loop that only iterates through half of the array. math floor makes sure there isnt a decimal if the array is odd
//     for(let i = 0; i < Math.floor(arr.length/2); i++){
//         // setting array of i through the first half of the array to a temporary variable
//         var temp = arr[i];
//         // seting the arr of i to the end of the arr. as the for loop iterates and i increases by 1 the index chose will get closer to the middle
//         arr[i] = arr[arr.length-1-i];
//         // finally arr of the latest index, starting with the last index is reassigned to the stored temporary value which holds the left half of the array one value at a time
//         arr[arr.length-1-i] = temp;
//     }
//     return arr;
// }

// console.log(reverse([3,1,6,4,2]))

// function negative(arr){
//     newArr=[];
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] < 0){
//             newArr.push(arr[i]);
//         }else {
//             arr[i] = -arr[i];
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// console.log(negative([1,-3,5]))\

// function alwaysHungry(arr){
//     count = 0;
//     for(let i = 0; i<arr.length;i++){
//         if(arr[i] === "food"){
//             count++;
//         }
//     }
//     if(count === 0){
//         console.log("im hungry");
//     }else{
//         for(let j = 0; j<count; j++){
//             console.log("yummy");
//         }
//     }
//     console.log(count);
// }

// alwaysHungry(["food",1,2,3,'food','food'])

// function swap(arr){
//     for(let i = 0; i < Math.floor(arr.length /2); i+=2){
//         let temp = arr[i];
//         arr[i] = arr[arr.length-1-i];
//         arr[arr.length-1-i] = temp;
//     }
//     return arr
// }

// console.log(swap([1,2,3,4,5,6]))

// function scale(arr,num){
//     for(let i = 0; i<arr.length;i++){
//         arr[i] = arr[i]*num;
//     }
//     return arr
// }

// console.log(scale([1,2,3,4],2))