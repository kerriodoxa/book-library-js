// Library is a container that holds all the books added
let myLibrary = document.querySelector('#book-container');

// Constructor for books
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
};

// Function that add each book to library
function addBookToLibrary(title, author, pages) {

    // Div element that holds the book with premade class
    let bookDiv = document.createElement('div');
    bookDiv.classList.add('book'); 

    // Assigning book info to bookDiv
    let titlePara = document.createElement('p');
    titlePara.textContent = `Title: ${title}`;
    
    let authorPara = document.createElement('p');
    authorPara.textContent = `Author: ${author}`;
    
    let pagesPara = document.createElement('p');
    pagesPara.textContent = `Pages: ${pages}`;
    
    // Append text elements to the book div
    bookDiv.appendChild(titlePara);
    bookDiv.appendChild(authorPara);
    bookDiv.appendChild(pagesPara);

    // Appending each bookDiv to a flex container
    const bookContainer = document.querySelector('#book-container');
    bookContainer.appendChild(bookDiv);

     // Clear input fields before adding new book
     document.querySelector('#title').value = '';
     document.querySelector('#author').value = '';
     document.querySelector('#pages').value = '';
};

// Button event listener that holds the input values and calls a function to add book to library
const addButton = document.querySelector('#add-button');
addButton.addEventListener('click', (e) => {
    e.preventDefault();

    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;

    addBookToLibrary(title, author, pages);
});