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
    var Fahrenheit = (9/5 * cDegrees) + 32;
    console.log(Fahrenheit);
}

celsiusToFahrenheit(37);
//Optional


for(var c = 200; c>-200; c--){
    var Fahrenheit = (9/5 * c) + 32;
    if(Fahrenheit == c){
        console.log(c);
    }
}

