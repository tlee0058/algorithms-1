/*Print Low, Return High
Create a function that takes array of numbers. 
The function should print the lowest value in the array, 
and return the highest value in the array.*/

function lowHigh(arr){
    var high = arr[0];
    var low = arr[0];
    for (var i = 1; i < arr.length; i++){
        
        if (arr[i]<low){
            low = arr[i];
        }
            
    
        if(arr[i]>high){
            high = arr[i];
        }
    }      

    console.log(low);
    return high;

}
lowHigh([1,4,6,2,9]);
console.log(lowHigh([1,4,6,2,9]));

