/*Count Positives
Given array of numbers, create function to replace last 
value with number of positive values.

Example: countPositives([-1,1,1,1]) changes array to 
[-1,1,1,3] and returns it. */

function countPositives(arr){
    var count = 0;
    for(var i = 0; i<arr.length; i++){
        
        if(arr[i]>0){
            count += 1;
        }
    }
    arr.pop();
    arr.push(count);
    console.log(arr);
}
countPositives([-1,1,1,1]);
