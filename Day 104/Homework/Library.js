class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    removeBook(title) {
      this.books = this.books.filter(book => book.title !== title);
    }
  
    findBooksByTitle(title) {
      return this.books.filter(book => book.title === title);
    }
  
    findBooksByAuthor(author) {
      return this.books.filter(book => book.author === author);
    }
  }
  
  // Example usage of Library and Book classes
  const library = new Library();
  
  const book1 = new Book("Book 1", "Author A");
  const book2 = new Book("Book 2", "Author B");
  const book3 = new Book("Book 1", "Author C");
  
  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  
  console.log(library.books);
  
  library.removeBook("Book 2");
  console.log(library.books);
  
  console.log(library.findBooksByTitle("Book 1"));
  console.log(library.findBooksByAuthor("Author A"));
  