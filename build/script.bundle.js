"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Planet = function Planet(name, htmlElement, a, radius, da) {
    var _this = this;

    _classCallCheck(this, Planet);

    this.name = name;
    this.htmlElement = htmlElement, this.a = a, // in radian
    this.radius = radius, // radius
    this.da = da, // in radian
    this.x = 0, this.y = 0;
    // Center is actualy center (100, 100) minus
    // half the size of the orbiting object 15x15
    this.center = { x: 100 - 15, y: 100 - 15 };

    this.move = function () {
        _this.a += _this.da;
        _this.x = _this.center.x + _this.radius * Math.sin(_this.a);
        _this.y = _this.center.y + _this.radius * Math.cos(_this.a);
        _this.htmlElement.style.top = _this.y + "px";
        _this.htmlElement.style.left = _this.x + "px";
    };

    this.greeting = function () {
        console.log('Hi! I\'m ' + this.name + '.');
    };
};

;

var planet1 = new Planet('planet1', document.getElementById('planet1'), 0, 100, 0.05); // this is where database values will plug in
var planet2 = new Planet('planet2', document.getElementById('planet2'), 0, 200, 0.05);

planet1.greeting();

var loopTimer = setInterval(function () {
    planet1.move();
}, 50);

var loopTimer2 = setInterval(function () {
    planet2.move();
}, 50);
