let myLibrary = [];
let table = document.querySelector("table");
let addBook = document.querySelector('#addBook')
let newBookSection = document.querySelector('#newBookSection')
let createBook = document.querySelector('#createBook');

let form = document.querySelector('form');
form.classList.toggle('hidden');

addBook.addEventListener('click', () => {
    form.classList.toggle('hidden');
  });

createBook.addEventListener('click', () => {
 addBookToTable();
 });

form.addEventListener('submit', callbackFunction);

function callbackFunction(event) {
  event.preventDefault();
}

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

function createTable() {
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
}

createTable()

function addBookToTable() {
    let newTitle = document.querySelector('#newTitle');
    let newAuthor = document.querySelector('#newAuthor');
    let newPages = document.querySelector('#newPages');
    let newRead = document.querySelector('#newRead');
    let newBook = new Book(newTitle.value, newAuthor.value, newPages.value, newRead.value);
    console.log(newBook);
    myLibrary.push(newBook);
    const row = document.createElement('tr');
    let titleCell = document.createElement('td');
    titleCell.textContent = newBook.title;

    let authorCell = document.createElement('td');
    authorCell.textContent = newBook.author;

    let pagesCell = document.createElement('td');
    pagesCell.textContent = newBook.pages;

    let readCell = document.createElement('td');
    readCell.textContent = newBook.read;
    
    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(pagesCell);
    row.appendChild(readCell);

    table.appendChild(row);

}