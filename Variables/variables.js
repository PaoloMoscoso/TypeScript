"use strict";
var hellow = 'Hellow'; //this variable will always be of type string
var count = 404; //this variable will always be of type number
var anything = 303; //this variable does not have type
var PI_NUMBER = 3.141516; //this variable will always be first value also const has to be in Upercase
function greet() {
    console.log(hellow + " variables " + count);
    console.log(anything);
    anything = 'change the type in variable';
    console.log(anything);
    console.log(PI_NUMBER);
}
greet();
