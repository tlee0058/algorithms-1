/*Values Greater than Second
For [1,3,5,7,9,13], print values that are greater 
than its 2nd value. Return how many values this is.*/

function greaterThanSecond(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i]>arr[1]){
            count += 1;
        }
    }
    console.log(count);
};

greaterThanSecond([1,3,5,7,9,13]) 