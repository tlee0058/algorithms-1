/*Print Low, Return High
Create a function that takes array of numbers. 
The function should print the lowest value in the array, 
and return the highest value in the array.*/

function lowHigh(arr){
    var high = arr[i];
    var low = arr[i];
    for (var i = 0; i < arr.length; i++){
        
        if (arr[i]<low){
            low = arr[i];
            console.log(low);
    }
        //if(arr[i]>high){
          //  return arr[i];
        //}
}}
lowHigh([1,4,6,2,9]);


