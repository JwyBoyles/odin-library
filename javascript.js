let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let bookOne = new Book("Game of Thrones", "George RR Martin", "520", "Yes")
let bookTwo = new Book("The Trial", "Franz Kafka", "200", "Yes")
let bookThree = new Book("The Waves", "Virginia Wolfe", "300", "No")


myLibrary.push(bookOne,bookTwo,bookThree);

console.log(myLibrary);

for (let i = 0; i < myLibrary.length; ++i) {
    
}