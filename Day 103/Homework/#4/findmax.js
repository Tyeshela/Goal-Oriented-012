function findMax(...numbers) {
    if (numbers.length === 0) {
      return undefined; // Return undefined if no numbers are provided
    }
  
    let max = numbers[0]; // Initialize max with the first number
  
    for (let number of numbers) {
      if (number > max) {
        max = number; // Update max if a larger number is encountered
      }
    }
  
    return max
  }
  
  console.log(findMax(1, 3, 5, 2, 4)); // Output: 5
  console.log(findMax(10, 7, 2)); // Output: 10
  console.log(findMax()); // Output: undefined because no numbers are provided
  