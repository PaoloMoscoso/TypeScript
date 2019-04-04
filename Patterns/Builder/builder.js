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
var Burguer = /** @class */ (function () {
    function Burguer(options) {
        this.bread = 'normal';
        this.lettuce = 0;
        this.bacon = 0;
        this.meatType = 'normal';
        if (typeof options === 'string') {
            this.name = options;
        }
        else {
            this.bread = options.bread;
            this.lettuce = options.lettuce;
            this.bacon = options.bacon;
            this.meatType = options.meatType;
            this.name = options.name;
        }
    }
    Object.defineProperty(Burguer.prototype, "burguerName", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Burguer, "Builder", {
        get: function () {
            var Builder = /** @class */ (function (_super) {
                __extends(Builder, _super);
                function Builder() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Builder.prototype.constuctor = function () {
                    this.name = this.burguerName;
                };
                Builder.prototype.withBread = function (bread) {
                    this.bread = bread;
                    return this;
                };
                Builder.prototype.withLettuce = function (lettuce) {
                    this.lettuce = lettuce;
                    return this;
                };
                Builder.prototype.withBacon = function (bacon) {
                    this.bacon = bacon;
                    return this;
                };
                Builder.prototype.withMeatType = function (meatType) {
                    this.meatType = meatType;
                    return this;
                };
                Builder.prototype.build = function () {
                    return new Burguer(this);
                };
                return Builder;
            }(Burguer));
            return Builder;
        },
        enumerable: true,
        configurable: true
    });
    return Burguer;
}());
var texanWithBuilder = new Burguer.Builder('Texan')
    .withBacon(10)
    .withBread('white')
    .withLettuce(3)
    .withMeatType('big')
    .build();
console.log(texanWithBuilder);
