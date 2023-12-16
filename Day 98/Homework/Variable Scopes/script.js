var myVar = "Global Variable"

function testScope() {
    var myVar = "Local Variable";
    console.log("Inside function: " + myVar);
}

testScope()
console.log("Outside function: " + myVar);