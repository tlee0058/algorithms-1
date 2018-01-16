/*Celsius to Fahrenheit
Create celsiusToFahrenheit(cDegrees) that accepts the number of degrees 
Celsius, and returns the equivalent temperature expressed in Fahrenheit 
degrees.

(optional) Do Fahrenheit and Celsius values equate at a certain number? 
The scientific calculation can be complex, so for this challenge just 
try a series of Celsius integer values starting at 200, going downward 
(descending), checking whether it is equal to the corresponding 
Fahrenheit value.*/

function celsiusToFahrenheit(cDegrees){
    var fahrenheit = (9/5 * cDegrees) + 32;
    return fahrenheit;
}

    
for(var i = 400; i > -400; i--){
    if(i == celsiusToFahrenheit(i)){
        console.log(i);
        }
}
   

