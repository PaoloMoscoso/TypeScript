"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, legs) {
        this.name = 'NA';
        this.legs = 4;
        this.name = name;
        this.legs = legs;
    }
    Animal.prototype.showInformation = function () {
        console.log("I'm an animal with " + this.legs + " legs, my name is " + this.name + ".");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name, 4) || this;
    }
    return Dog;
}(Animal));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name) {
        return _super.call(this, name, 2) || this;
    }
    return Bird;
}(Animal));
var dog;
dog = new Dog('toby');
dog.showInformation();
var bird;
bird = new Bird('bird');
bird.showInformation();
