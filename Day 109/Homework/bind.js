function extractData(source) {
    console.log(`Extracting data from ${source}`);
    return `Data from ${source}`;
}

function transformData(rawData, transformation) {
    console.log(`Transforming data: ${transformation}`);
    return `Transformed(${transformation}): ${rawData}`;
}

function loadData(data, destination) {
    console.log(`Loading data into ${destination}`);
    return `Data loaded into ${destination}`;
}
const pipeline = extractData.bind(
    null, 
    "SourceA"
).bind(
    null, 
    transformData.bind(null, null, "UpperCase")
).bind(
    null, 
    loadData.bind(null, null, "DestinationB")
);

pipeline(); // This will execute the composed pipeline
