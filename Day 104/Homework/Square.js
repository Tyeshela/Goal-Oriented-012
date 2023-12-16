class Square extends Rectangle {
    constructor(sideLength) {
      super(sideLength, sideLength);
    }
  }
  
  // Instantiate squares and display their area and perimeter
  const square1 = new Square(4);
  const square2 = new Square(6);
  
  console.log("Square 1 Area:", square1.calculateArea());
  console.log("Square 1 Perimeter:", square1.calculatePerimeter());
  
  console.log("Square 2 Area:", square2.calculateArea());
  console.log("Square 2 Perimeter:", square2.calculatePerimeter());
  