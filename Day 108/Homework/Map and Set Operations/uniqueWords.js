function uniqueWords(str) {
    return new Set(str.toLowerCase().match(/\w+/g));
}
