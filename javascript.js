let myLibrary = [];
const container = document.querySelector(".container")


function book(name, author, pageCount, haveRead) {
    this.name = name
    this.author = author
    this.pageCount = pageCount
    this.haveRead = haveRead
}

bookOne = new book("Game of Thrones", "George RR Martin", "400", "Yes")
bookTwo = new book("The Lottery and Other Stories", "Shirley Jackson", "250", "Yes")
bookThree = new book("Normal People", "Sally Rooney", "300", "No")


myLibrary.push(bookOne);
myLibrary.push(bookTwo);
myLibrary.push(bookThree);




function addBooks () {
    for (let i = 0; i < myLibrary.length; ++i) {
        const cardGroup = document.createElement('div');
        cardGroup.classList.add('cardGroup');
        let titleLine = document.createElement('div');
        let authorLine = document.createElement('div');
        let pageLine = document.createElement('div');
        let readLine = document.createElement('div');
        titleLine.classList.add('content');
        authorLine.classList.add('content');
        pageLine.classList.add('content');
        readLine.classList.add('content');
        cardGroup.appendChild(titleLine);
        cardGroup.appendChild(authorLine);
        cardGroup.appendChild(pageLine);
        cardGroup.appendChild(readLine);
        let bookCard = myLibrary[i]
        titleLine.textContent = bookCard.name
        authorLine.textContent = bookCard.author
        pageLine.textContent = bookCard.pageCount
        readLine.textContent = bookCard.haveRead
        container.appendChild(cardGroup);
    }
}

addBooks();