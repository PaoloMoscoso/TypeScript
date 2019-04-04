let hellow:string = 'Hellow'; //this variable will always be of type string
let count:number = 404; //this variable will always be of type number
let anything:any = 303; //this variable does not have type
const PI_NUMBER = 3.141516; //this variable will always be first value also const has to be in Upercase

function greetVariables() {
    console.log(`${hellow} variables ${count}`);
    console.log(anything)
    anything = 'change the type in variable';
    console.log(anything)
    console.log(PI_NUMBER)
}

greetVariables();