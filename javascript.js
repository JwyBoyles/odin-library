let myLibrary = [];
let table = document.querySelector("table");

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

console.log(myLibrary[0].title);

function addTitle () {
    let cell = document.createElement('td');
    cell.textContent = bookOne.title;
    row.appendChild(cell);
}

for (let i = 0; i < myLibrary.length; ++i) {
    const row = document.createElement('tr');

    let titleCell = document.createElement('td');
    titleCell.textContent = myLibrary[i].title;

    let authorCell = document.createElement('td');
    authorCell.textContent = myLibrary[i].author;

    let pagesCell = document.createElement('td');
    pagesCell.textContent = myLibrary[i].pages;

    let readCell = document.createElement('td');
    readCell.textContent = myLibrary[i].read;

    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(pagesCell);
    row.appendChild(readCell);

    table.appendChild(row);
}