let myLibrary = [];


class Book {
    constructor(title, author, pages, read) {
    this.title = title;
    this.author = author; 
    this. pages = pages; 
    this.read = read;
    this.id = crypto.randomUUID();
    }
     toggleReadStatus() { 
     this.read = !this.read;
 }
} 

// toggleReadStatus() { 
    // this.read = !this.read;
// }

//     Book.prototype.toggleReadStatus = function() { 
    // this.read = !this.read;  
            
// }   

// old constructor
// function Book(title, author, pages, read) { 
//     this.title = title; 
//     this.author = author; 
//     this.pages = pages; 
//     this.read = read; 
//     this.id = crypto.randomUUID();  
// }



let book; 
let selectedBookFromArray;
let deletedBook;
let removeBookFromDOM;
let deleteThis;
let removeThis; 
let bookfromArrayID; 



document.getElementById("add-book-btn").addEventListener('click', function(){
    document.querySelector(".pop-up-field").style.display = "flex"; 
}) 

document.querySelector('.close-btn').addEventListener('click', function(){
    document.querySelector('.pop-up-field').style.display = "none"; 
}) 

let submitBtn = document.querySelector('#submit-btn'); 
let inputForm = document.querySelector('form'); 

inputForm.addEventListener('submit', function(e){ 
    e.preventDefault(); 

    let errorMessageDiv = document.getElementById('error-message-div'); 

    let messages = []; 

    let title = document.querySelector('#title-of-book-input-field').value; 
    
    if (title === '' || title == null) { 
        
        messages.push('Title is required!');
    } 
    
    if (title.length > 20) { 

        messages.push('Title cannot be longer than 20 characters');
    } 

    let author = document.querySelector('#author-of-book-input-field').value;

     if (author.length > 20) { 
        messages.push('Author cannot be longer than 20 characters!');
    } 

    if (author === '' || author == null) { 
        messages.push('Author cannot be blank!');
    } 

    if (!isNaN(author)) { 
        messages.push('Author name cannot be a number!');
    } 

    let pages =  document.querySelector('#pages-input-field').value; 

    if (pages === '' || pages == null) { 
        messages.push('Pages value cannot be blank!');
    } 

    if (isNaN(pages)) { 
        messages.push('Pages value cannot be a string, only number!');
    } 

    if (pages.length > 6) { 
        messages.push('Pages cannot be longer than 5 characters!');
    }

    let readOrNot = document.querySelector('#read-or-not-checkbox').checked;  

    this.reset(); 

    // const newBook = new Book(title, author, pages, readOrNot); 

    // addBookToLibrary(newBook); 


    if (messages.length === 0) { 
        // if there is no error messages, then newBook obj is created, and gets added to library 
        const newBook = new Book(title, author, pages, readOrNot); 

        addBookToLibrary(newBook); 

        inputForm.reset();

        errorMessageDiv.textContent = '';

        // reset the error message div 

    }



    if (messages.length > 0) { 

        e.preventDefault(); 

        errorMessageDiv.textContent = messages.join(', ');
    
    } 
    
})      


function addBookToLibrary(newBook) { 
    myLibrary.push(newBook);
    displayBook(newBook);   
} 


function displayBook(newBook) {   
    
    let booksContainer = document.querySelector('#container-for-books'); 
    
    let styleContainer = document.createElement('container'); 
    
    styleContainer.classList.add('book-style-container'); 
    
    let bookOutputTitle = document.createElement('div'); 
    
    let bookOutputAuthor = document.createElement('div'); 
    
    let bookOutputPages = document.createElement('div'); 

    let bookOutputReadBook = document.createElement('button'); 
     
    let buttonContainer = document.createElement('container'); 
    
    buttonContainer.classList.add('button-container-for-book'); 
    
    bookOutputReadBook.classList.add('read-book-btn');  
   
    let removeBookButton = document.createElement('button'); 
    
    removeBookButton.classList.add('remove-book-btn'); 
    
    bookOutputTitle.innerText =  `Title:  ${newBook.title}`; 
    
    bookOutputAuthor.innerText = `Author:  ${newBook.author}`;
    
    bookOutputPages.innerText = `Pages: ${newBook.pages}`; 
        
        bookOutputReadBook.addEventListener('click', () => { 
            newBook.toggleReadStatus(); 
            renderToggleStatus(); 
        }) 
        
        // Book.prototype.toggleReadStatus = function() { 
        //     this.read = !this.read;  
            
        // }   
    
        // OG prototype
        
        function renderToggleStatus() { 
        
        if (newBook.read === true) { 
            bookOutputReadBook.innerText = 'Read' 
            bookOutputReadBook.style.backgroundColor = 'green';
            
        } else if (newBook.read === false) { 
            bookOutputReadBook.innerText = 'Not Read'; 
            bookOutputReadBook.style.backgroundColor = 'red'; 
             
        }   
    }   


                removeBookButton.addEventListener('click', function(e){
                  
                    
                     
                    const bookID = newBook.id; 
                        myLibrary = myLibrary.filter(function(selectedBook) { 
                            if (selectedBook.id === bookID) { 
                               
                                styleContainer.remove(); 
                               
                                
                            }
                            return selectedBook.id !== bookID;          

                        });      
                    })   
                                                                                  
    if (newBook.read === true) {   
        bookOutputReadBook.innerText = 'Read' 
        bookOutputReadBook.style.backgroundColor = 'green';
         
    } else if (newBook.read === false) { 
        bookOutputReadBook.innerText = 'Not Read'; 
        bookOutputReadBook.style.backgroundColor = 'red'; 
         
    }    

    booksContainer.append(bookOutputReadBook);    

    removeBookButton.innerText = 'Remove';  

    styleContainer.append(bookOutputTitle); 
    
    styleContainer.append(bookOutputAuthor); 
    
    styleContainer.append(bookOutputPages); 
    
    styleContainer.append(bookOutputReadBook); 
    
    styleContainer.append(removeBookButton); 

    booksContainer.append(styleContainer);   
    
}   





function displayBooks(books){  
    
    books.forEach(displayBook);   
} 

displayBooks(myLibrary); 


   










// prettier link 

// let myLibrary = [];

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
//   this.id = crypto.randomUUID();
// }

// let book;
// let selectedBookFromArray;
// let deletedBook;
// let removeBookFromDOM;
// let deleteThis;
// let removeThis;
// let bookfromArrayID;

// document.getElementById("add-book-btn").addEventListener("click", function () {
//   document.querySelector(".pop-up-field").style.display = "flex";
// });

// document.querySelector(".close-btn").addEventListener("click", function () {
//   document.querySelector(".pop-up-field").style.display = "none";
// });

// let submitBtn = document.querySelector("#submit-btn");
// let inputForm = document.querySelector("form");

// inputForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let title = document.querySelector("#title-of-book-input-field").value;
//   let author = document.querySelector("#author-of-book-input-field").value;
//   let pages = document.querySelector("#pages-input-field").value;
//   let readOrNot = document.querySelector("#read-or-not-checkbox").checked;
//   this.reset();
//   const newBook = new Book(title, author, pages, readOrNot);
//   addBookToLibrary(newBook);
// });

// function addBookToLibrary(newBook) {
//   myLibrary.push(newBook);
//   displayBook(newBook);
// }

// function displayBook(newBook) {
//   let booksContainer = document.querySelector("#container-for-books");

//   let styleContainer = document.createElement("container");

//   styleContainer.classList.add("book-style-container");

//   let bookOutputTitle = document.createElement("div");

//   let bookOutputAuthor = document.createElement("div");

//   let bookOutputPages = document.createElement("div");

//   let bookOutputReadBook = document.createElement("button");

//   let buttonContainer = document.createElement("container");

//   buttonContainer.classList.add("button-container-for-book");

//   bookOutputReadBook.classList.add("read-book-btn");

//   let removeBookButton = document.createElement("button");

//   removeBookButton.classList.add("remove-book-btn");

//   bookOutputTitle.innerText = `Title:  ${newBook.title}`;

//   bookOutputAuthor.innerText = `Author:  ${newBook.author}`;

//   bookOutputPages.innerText = `Pages: ${newBook.pages}`;

//   bookOutputReadBook.addEventListener("click", () => {
//     newBook.toggleReadStatus();
//     renderToggleStatus();
//   });

//   Book.prototype.toggleReadStatus = function () {
//     this.read = !this.read;
//   };

//   function renderToggleStatus() {
//     if (newBook.read === true) {
//       bookOutputReadBook.innerText = "Read";
//       bookOutputReadBook.style.backgroundColor = "green";
//     } else if (newBook.read === false) {
//       bookOutputReadBook.innerText = "Not Read";
//       bookOutputReadBook.style.backgroundColor = "red";
//     }
//   }

//   removeBookButton.addEventListener("click", function (e) {
//     const bookID = newBook.id;
//     myLibrary = myLibrary.filter(function (selectedBook) {
//       if (selectedBook.id === bookID) {
//         styleContainer.remove();
//       }
//       return selectedBook.id !== bookID;
//     });
//   });

//   if (newBook.read === true) {
//     bookOutputReadBook.innerText = "Read";
//     bookOutputReadBook.style.backgroundColor = "green";
//   } else if (newBook.read === false) {
//     bookOutputReadBook.innerText = "Not Read";
//     bookOutputReadBook.style.backgroundColor = "red";
//   }

//   booksContainer.append(bookOutputReadBook);

//   removeBookButton.innerText = "Remove";

//   styleContainer.append(bookOutputTitle);

//   styleContainer.append(bookOutputAuthor);

//   styleContainer.append(bookOutputPages);

//   styleContainer.append(bookOutputReadBook);

//   styleContainer.append(removeBookButton);

//   booksContainer.append(styleContainer);
// }

// function displayBooks(books) {
//   books.forEach(displayBook);
// }

// displayBooks(myLibrary);