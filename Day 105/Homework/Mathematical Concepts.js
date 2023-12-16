// Class for representing a Natural number
class Natural {
    constructor(value) {
      this.value = Math.abs(Math.floor(value));
    }
  
    isNatural() {
      return true;
    }
  }
  
  // Class for representing an Integer number
  class Integer {
    constructor(value) {
      this.value = Math.floor(value);
    }
  
    isInteger() {
      return true;
    }
  }
  
  // Class for representing a Rational number (fraction)
  class Rational {
    constructor(numerator, denominator) {
      this.numerator = numerator;
      this.denominator = denominator;
    }
  
    isRational() {
      return true;
    }
  
    toString() {
      return `${this.numerator}/${this.denominator}`;
    }
  }
  
  // Class for representing an Irrational number
  class Irrational {
    constructor(value) {
      this.value = value;
    }
  
    isIrrational() {
      return true;
    }
  }
  
  // Class for representing a Real number
  class Real {
    constructor(value) {
      this.value = value;
    }
  
    isReal() {
      return true;
    }
  }
  
  // Class for representing an Imaginary number
  class Imaginary {
    constructor(value) {
      this.value = value;
    }
  
    isImaginary() {
      return true;
    }
  }
  
  // Class for representing a Complex number
  class Complex {
    constructor(real, imaginary) {
      this.real = real;
      this.imaginary = imaginary;
    }
  
    isComplex() {
      return true;
    }
  
    add(other) {
      return new Complex(this.real + other.real, this.imaginary + other.imaginary);
    }
  
    subtract(other) {
      return new Complex(this.real - other.real, this.imaginary - other.imaginary);
    }
  
    multiply(other) {
      const realPart = this.real * other.real - this.imaginary * other.imaginary;
      const imaginaryPart = this.real * other.imaginary + this.imaginary * other.real;
      return new Complex(realPart, imaginaryPart);
    }
  }
  
  // Demonstration
  const naturalNumber = new Natural(5);
  console.log("Is Natural:", naturalNumber.isNatural());
  
  const integerNumber = new Integer(-10);
  console.log("Is Integer:", integerNumber.isInteger());
  
  const rationalNumber = new Rational(3, 4);
  console.log("Is Rational:", rationalNumber.isRational(), "Value:", rationalNumber.toString());
  
  const irrationalNumber = new Irrational(Math.sqrt(2));
  console.log("Is Irrational:", irrationalNumber.isIrrational());
  
  const realNumber = new Real(3.14);
  console.log("Is Real:", realNumber.isReal());
  
  const imaginaryNumber = new Imaginary("2i");
  console.log("Is Imaginary:", imaginaryNumber.isImaginary());
  
  const complexNumber1 = new Complex(1, 2);
  const complexNumber2 = new Complex(2, 3);
  
  const complexSum = complexNumber1.add(complexNumber2);
  console.log("Complex Sum:", complexSum);
  
  const complexProduct = complexNumber1.multiply(complexNumber2);
  console.log("Complex Product:", complexProduct);
  