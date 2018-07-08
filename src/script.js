class Planet {
    constructor(name, htmlElement, a, radius, da) {
        this.name = name;
        this.htmlElement = htmlElement,
        this.a = a, // in radian
        this.radius = radius, // radius
        this.da = da, // in radian
        this.x = 0,
        this.y = 0;
        // Center is actualy center (100, 100) minus
        // half the size of the orbiting object 15x15
        this.center = { x: (100 - 15), y: (100 - 15) }

        this.move = () => {
            this.a += this.da
            this.x = this.center.x + (this.radius * Math.sin(this.a));
            this.y = this.center.y + (this.radius * Math.cos(this.a));
            this.htmlElement.style.top = this.y + "px";
            this.htmlElement.style.left = this.x + "px";
        }

        this.greeting = function () {
            console.log('Hi! I\'m ' + this.name + '.');
        };
    }
};

const planet1 = new Planet('planet1', document.getElementById('planet1'), 0, 100, 0.05); // this is where database values will plug in
const planet2 = new Planet('planet2', document.getElementById('planet2'), 0, 200, 0.05);

planet1.greeting();

const loopTimer = setInterval(function(){
    planet1.move();
}, 50);

const loopTimer2 = setInterval(function(){
    planet2.move();
}, 50);
