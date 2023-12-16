const largeArray = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 100000));

function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

// Measure performance for native method
console.time("NativeSort");
sortArray([...largeArray]);
console.timeEnd("NativeSort");

// Measure performance using bind
const sortArrayBound = sortArray.bind(null, [...largeArray]);
console.time("BoundSort");
sortArrayBound();
console.timeEnd("BoundSort");
