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
 form.classList.toggle('hidden');
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

function changeStatus() {
  switch (bookOne.read){
    case "Yes":
      bookOne.read = "No";
      break
    case "No": 
      bookOne.read = "Yes";
      break
    }

  switch (bookTwo.read){
      case "Yes":
        bookTwo.read = "No";
        break
      case "No": 
      bookTwo.read = "Yes";
        break
      }
  
    switch (bookTwo.read){
      case "Yes":
        bookThree.read = "No";
        break
      case "No": 
        bookThree.read = "Yes";
        break
        }
    
}


function createTable() {
for (let i = 0; i < myLibrary.length; ++i) {
    const row = document.createElement('tr');
    let titleCell = document.createElement('td');
    titleCell.textContent = myLibrary[i].title;

    let authorCell = document.createElement('td');
    authorCell.textContent = myLibrary[i].author;

    let pagesCell = document.createElement('td');
    pagesCell.textContent = myLibrary[i].pages;

    const readButton = document.createElement('button')
    readButton.textContent = myLibrary[i].read;
    let readCell = document.createElement('td');
    readCell.appendChild(readButton);

    readButton.addEventListener('click', () => {
      changeStatus();
      switch (readButton.textContent){
      case "Yes":
        readButton.textContent = "No";
        break
      case "No": 
        readButton.textContent = "Yes";
        break
      }
    });

    let deleteButton = document.createElement('button')
    deleteButton.textContent = "Remove Entry";
    let deleteCell = document.createElement('td');
    deleteButton.addEventListener('click', () => {
      row.remove();
      });
    deleteCell.appendChild(deleteButton);

    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(pagesCell);
    row.appendChild(readCell);
    row.appendChild(deleteButton);

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
    myLibrary.push(newBook);
    const row = document.createElement('tr');
    let titleCell = document.createElement('td');
    titleCell.textContent = newBook.title;

    let authorCell = document.createElement('td');
    authorCell.textContent = newBook.author;

    let pagesCell = document.createElement('td');
    pagesCell.textContent = newBook.pages;

    const readButton = document.createElement('button')
    readButton.textContent = newBook.read;
    let readCell = document.createElement('td');
    readCell.appendChild(readButton);

    readButton.addEventListener('click', () => {
      switch (newBook.read) {
        case "Yes": 
        newBook.read = "No";
        break
        case "No": 
        newBook.read = "Yes"
      }
      switch (readButton.textContent){
      case "Yes":
        readButton.textContent = "No";
        break
      case "No": 
        readButton.textContent = "Yes";
        break
      }
    });

    let deleteButton = document.createElement('button')
    deleteButton.textContent = "Remove Entry";
    let deleteCell = document.createElement('td');
    deleteButton.addEventListener('click', () => {
      row.remove();
      });
    deleteCell.appendChild(deleteButton);
    
    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(pagesCell);
    row.appendChild(readCell);
    row.appendChild(deleteCell);

    table.appendChild(row);

}


