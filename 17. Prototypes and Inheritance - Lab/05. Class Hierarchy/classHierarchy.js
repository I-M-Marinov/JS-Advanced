// Write a function that returns 3 classes - Figure, Circle, and Rectangle.

// Figure:

// · Should have property units ("m", "cm", "mm") with default value "cm"
// · Should have a getter area
// · Has method changeUnits that sets different units for that figure
// · Has method toString, which returns: `Figures units: {units}`

// Circle:

// · Extends Figure
// · Has a property radius
// · Overrides area getter to return the area of the Circle (PI * r * r)
// · toString() - should return a string representation of the figure in the format:

// `Figures units: {type} Area: {area} - radius: {radius}`

// Rectangle:

// · Extends Figure
// · Has properties width, height, and units (extended from the class Figure)
// · Overrides area getter to return the area of the Rectangle (width * height)
// · toString() - should return a string representation of the figure in the format:

// `Figures units: {type} Area: {area} - width: {width}, height: {height}`

// Note: All Parameters Passed in the Constructors Are in Centimeters ("cm")

// Input / Output
// There will be no input. Your function should return an object containing the Figure, Circle, and Rectangle classes.


function figureCreators() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        get area() { };

        changeUnits(units) {
            this.units = units;
        }

        toString() {
            return `Figure units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            let result = Math.PI * this.radius ** 2;

            if(this.units == 'm'){
                result /= 100;
            } else if(this.units == 'mm') {
                result *= 100;
            }
            return result;
        }

        toString() {

            let rad = this.radius;

            if(this.units == 'm') {
                rad /= 100;
            } else if(this.units =='mm'){
                rad *= 10;
            }
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${rad}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
        }

        get area() {
            let result = this.width * this.height;
            if(this.units == 'm'){
                result /= 100;
            } else if(this.units == 'mm') {
                result *= 100;
            }
            return result;
        }

        toString() {
            let width = this.width;
            let heigth = this.height;
            if(this.units =='m'){
                width /= 100;
                heigth /= 100;
            } else if(this.units == 'mm'){
                width *= 10;
                heigth *= 10;
            }

            return `Figures units: ${this.units} Area: ${this.area} - width: ${width}, height: ${heigth}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle,
    };
}

const { Figure, Circle, Rectangle } = figureCreators();


let circle = new Circle(5);
console.log(circle.area); // 78.53981633974483
console.log(circle.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let rectangle = new Rectangle(3, 4, 'mm');
console.log(rectangle.area); // 1200 
console.log(rectangle.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

rectangle.changeUnits('cm');
console.log(rectangle.area); // 12
console.log(rectangle.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

circle.changeUnits('mm');
console.log(circle.area); // 7853.981633974483
console.log(circle.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50