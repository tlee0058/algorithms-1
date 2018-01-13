/*First Plus Length
Given an array, return the sum of the first value in 
the array, plus the array’s length. What happens if 
the array’s first value is not a number, but a string 
(like "what?") or a boolean (like false). */

function first_plus_length(arr){
    var sum = arr[0] + arr.length;
    console.log(sum);
}

first_plus_length([1,2,3,4]);
first_plus_length(["hello", "world", 2, 4, 5]);
first_plus_length([true, 2,4,5]);