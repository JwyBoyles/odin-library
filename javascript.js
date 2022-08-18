let myLibrary = [];

const bookOne = {
    name: "Game of Thrones",
    author: "George RR Martin",
    pageCount: "400",
    haveRead: "Yes",
}

const bookTwo = {
    name: "The Lottery and Other Stories",
    author: "Shirley Jackson",
    pageCount: "250",
    haveRead: "Yes",
}

const bookThree = {
    name: "Normal People",
    author: "Sally Rooney",
    pageCount: "350",
    haveRead: "No",
}

function book(name, author, pageCount, haveRead) {
    this.name = name
    this.author = author
    this.pageCount = pageCount
    this.haveRead = haveRead
}

myLibrary.push(bookOne);
myLibrary.push(bookTwo);
myLibrary.push(bookThree);

console.log(myLibrary);