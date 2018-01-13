/*This Length, That Value
Given two numbers, return array of length num1 
with each value num2. 
Print "Jinx!" if they are same. */

function jinx(num1, num2){
    var arr=[];
    for(var i = 0; i < num1; i++){
        arr.push(num2);
    }
    console.log(arr);
}
jinx(3,4);