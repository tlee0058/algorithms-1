/*Values Greater than Second, Generalized
Write a function that accepts any array, and returns a 
new array with the array values that are greater than its 
2nd value. Print how many values this is. 
What will you do if the array is only one element long?*/

function valuesSecond(arr){
    var newarr=[];
    for(var i = 0; i<arr.length; i++){
        if(arr[i]>arr[1]){
            newarr.push(arr[i]);
        }
        
    }
    return newarr;
    
}
console.log(valuesSecond([1,2,3,4,5]));
console.log(valuesSecond([1]));

