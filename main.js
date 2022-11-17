let myLibrary = []; 

// constructor function 

let addBookBtn = document.getElementById('add-book-btn'); 

// addBookBtn.addEventListener('click', (e) => { 
//     confirm('hey');
// })


function Book(title, author, pages, read) { 
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.read = read; 
} 

function addBookToLibrary() { 
    const book1 = new Book('alec', 'nissen', 10, 'not-read'); 
    myLibrary.push(book1); 
    
} 

// All of your book objects are going to be stored in a simple array, 
// so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. 
// Your code should look something like this:

// use DOM manipulation to get userinput, pass value to addBook func which that function will put into (push) myLibrary array


