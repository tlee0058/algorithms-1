/*Fit the First Value
Your function should accept an array. If the value at [0] 
is greater than array’s length, print "Too big!"; 
if the value at [0] is less than array’s length, print 
"Too small!"; otherwise print "Just right!". */

function fit_the_first_value(arr){
    if(arr[0]>arr.length){
        console.log("Too big!");
    }
    else if(arr[0]<arr.length){
        console.log("Too Small!");
    }
    else{
        console.log("Just Right!");
    }
}
fit_the_first_value([1,2,3,4,5]);
fit_the_first_value([7,3,5]);
fit_the_first_value([3,1,2]);