class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  
    calculatePerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  // Instantiate rectangles and display their area and perimeter
  const rectangle1 = new Rectangle(5, 10);
  const rectangle2 = new Rectangle(3, 7);
  
  console.log("Rectangle 1 Area:", rectangle1.calculateArea());
  console.log("Rectangle 1 Perimeter:", rectangle1.calculatePerimeter());
  
  console.log("Rectangle 2 Area:", rectangle2.calculateArea());
  console.log("Rectangle 2 Perimeter:", rectangle2.calculatePerimeter());
  