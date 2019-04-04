"use strict";
var Person = /** @class */ (function () {
    //constructors
    function Person(name, age, hobby) {
        //variables
        this.name = 'NA';
        this.age = 0;
        this.name = name;
        this.age = age;
        this.hobby = hobby;
    }
    Object.defineProperty(Person.prototype, "pastime", {
        //methods
        get: function () {
            return this.hobby;
        },
        enumerable: true,
        configurable: true
    });
    // or 
    Person.prototype.getHobby = function () {
        return this.hobby;
    };
    Person.personData = function () {
        var person = {
            name: 'NA',
            age: 0,
        };
        return (person);
    };
    return Person;
}());
var person = new Person('jose', 30, 'soccer');
console.log('name: ', person.name);
console.log('age: ', person.age);
// console.log('hobby: ', person.hobby);// you can not acces this variable because it is private;
console.log('hobby: ', person.getHobby());
var pastime = person.pastime; //you need to assign method get in some variable
console.log('pastime:', pastime);
console.log('pastime:', Person.personData());
