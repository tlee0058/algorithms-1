/*Evens and Odds
Create a function that accepts an array. Every time 
that array has three odd values in a row, print "That’s 
odd!" Every time the array has three evens in a row, 
print "Even more so!" */

function evensOdd(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0 && arr[i+2] % 2 !== 0){
            return ("That's Odd!");
        }
        else if(arr[i] % 2 === 0 && arr[i+1] % 2 === 0 && arr[i+2] % 2 === 0){
            return ("Even more so!");
        }
    }
}
console.log(evensOdd([1,2,4,6,8]));
