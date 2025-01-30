// Write a JS class that represents a Point. It has x and y coordinates as properties, 
// that are set through the constructor, and a static method for finding the distance between two points, called distance().

// Input
// The distance() method should receive two Point objects as parameters.

// Output
// The distance() method should return a number, the distance between the two-point parameters.

// Submit the class definition as is, without wrapping it in any function.

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(pointA, pointB) {
        return Math.sqrt((pointA.x - pointB.x) ** 2 + (pointA.y - pointB.y) ** 2);
    } 
}

const p1 = new Point(0, 0);
const p2 = new Point(4, 3);

console.log(p1, p2);
console.log(Point.distance(p2, p1));