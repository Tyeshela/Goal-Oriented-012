function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
      result += number;
    }
    return result;
  }
  
  console.log(sum(1, 2)); // Output: 3
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15
  console.log(sum()); // Output: 0
  