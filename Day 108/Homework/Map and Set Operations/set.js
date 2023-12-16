const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([4, 5, 6, 7, 8]);

function union(set1, set2) {
    return new Set([...set1, ...set2]);
}

function intersection(set1, set2) {
    return new Set([...set1].filter(x => set2.has(x)));
}

function difference(set1, set2) {
    return new Set([...set1].filter(x => !set2.has(x)));
}

console.log(union(setA, setB));
console.log(intersection(setA, setB));
console.log(difference(setA, setB));
