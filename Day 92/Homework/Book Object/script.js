function Book() {
    this.title = prompt("Enter the title of the book:")
    this.author = prompt("Enter the author of the book:")
    this.year = prompt("Enter the publication year of the book:")
}

const myBook = new Book();
console.log("Book Information:");
console.log("Title: " + myBook.title);
console.log("Author: " + myBook.author);
console.log("Year: " + myBook.year);