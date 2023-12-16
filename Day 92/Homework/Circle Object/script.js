function Circle() {
    this.radius = parseFloat(prompt("Enter the radius of the circle:"));
}

Circle.prototype.calculateArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
};

const myCircle = new Circle();
console.log("Circle Information:");
console.log("Radius: " + myCircle.radius);
console.log("area: " + myCircle.calculateArea());