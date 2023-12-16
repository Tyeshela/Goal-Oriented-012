const dictionary = new Map([
    ["example", "a representative form or pattern"],
    ["map", "a diagrammatic representation of an area"],
    ["book", "a written or printed work consisting of pages glued together"],
    ["computer", "an electronic device for storing and processing data"],
    ["javascript", "a programming language commonly used in web development"]
]);

function getMeaning(word) {
    if (dictionary.has(word)) {
        console.log(dictionary.get(word));
    } else {
        console.log("Word not found in the dictionary.");
    }
}
