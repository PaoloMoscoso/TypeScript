"use strict";
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
})(Gender || (Gender = {}));
var CommonPerson = /** @class */ (function () {
    function CommonPerson(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    CommonPerson.prototype.walk = function () {
        console.log(name + " walks around the world");
    };
    /**
     * showInformation
     */
    CommonPerson.prototype.showInformation = function () {
        console.log('type: Common Person');
        console.log('name: ', this.name);
        console.log('age: ', this.age);
        console.log('gender: ', this.gender);
        this.walk();
    };
    return CommonPerson;
}());
var SuperPerson = /** @class */ (function () {
    function SuperPerson(name, age, gender, power) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.power = power ? power : 'common';
    }
    Object.defineProperty(SuperPerson.prototype, "skill", {
        get: function () {
            return this.power;
        },
        set: function (power) {
            this.power = power;
        },
        enumerable: true,
        configurable: true
    });
    SuperPerson.prototype.walk = function () {
        console.log(this.name + " walks around the world");
    };
    /**
     * showInformation
     */
    SuperPerson.prototype.showInformation = function () {
        console.log('type: Common Person');
        console.log('name: ', this.name);
        console.log('age: ', this.age);
        console.log('gender: ', this.gender);
        this.walk();
        console.log('power: ', this.skill);
    };
    return SuperPerson;
}());
var commonPerson;
commonPerson = new CommonPerson('Lois', 20, Gender.Male);
commonPerson.showInformation();
/////////////////////////////////
var superPerson;
superPerson = new SuperPerson('Xavier', 30, Gender.Male);
superPerson.showInformation();
console.log('set skill ');
superPerson.skill = 'invisibility';
superPerson.showInformation();
