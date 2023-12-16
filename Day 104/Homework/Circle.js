class Circle {
    static Pi = Math.PI; // You can use the built-in Math.PI
  
    constructor(radius) {
      if (radius <= 0) {
        throw new Error("Radius must be a positive number");
      }
      this.radius = radius;
    }
  
    area() {
      return Circle.Pi * this.radius ** 2;
    }
  
    perimeter() {
      return 2 * Circle.Pi * this.radius;
    }
  }
  
  // Example usage of Circle class
  const circle1 = new Circle(5);
  console.log("Circle 1 Area:", circle1.area());
  console.log("Circle 1 Perimeter:", circle1.perimeter());
  
  const circle2 = new Circle(7);
  console.log("Circle 2 Area:", circle2.area());
  console.log("Circle 2 Perimeter:", circle2.perimeter());
  