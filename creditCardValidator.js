function cardValidator(arr){
    let isValid;
    let save = arr[arr.length-1];
    let sum = 0;
    //start by removing the last digit in the array and shortening the array
    arr.pop()//I know we can do this without pop but we have it so why not use it?
    //starting with the new last digit multiply each number that falls on an odd position by 2 (last third to last fitfth to last etc)
    for(let i = arr.length-1; i>=0; i= i-2){
            arr[i] = arr[i]*2;
    //subtract 9 from any digits larger than 9
        if(arr[i]>9){
            arr[i] = arr[i]-9;
        }
    //add every number in the array together
    }
    for(let i = 0; i<arr.length; i++){
        console.log(arr[i]);
        sum = arr[i]+sum;
    }
    //add the number we originally took out as well
    sum = sum+save;
    console.log(sum);
    //check to see if the if the value is a multiple of 10 if so return true ofr valid
    if(sum%10===0){
        isValid = true;
    }
    else{
        isValid = false;
    }
    return isValid;
}
console.log(cardValidator([5,2,2,8,1]))