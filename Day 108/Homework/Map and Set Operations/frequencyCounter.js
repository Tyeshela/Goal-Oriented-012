function frequencyCounter(str) {
    const words = str.toLowerCase().match(/\w+/g);
    const freqMap = new Map();
    words.forEach(word => {
        let count = freqMap.get(word) || 0;
        freqMap.set(word, count + 1);
    });
    return freqMap;
}
