let myLibrary = []; 





// constructor function 
function Book(title, author, pages, read) { 
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.read = read; 
}  


// event listener when add book btn is pressed 
document.getElementById("add-book-btn").addEventListener('click', function(){
    document.querySelector(".pop-up-field").style.display = "flex"; 
}) 
// event listener when close btn is pressed 
document.querySelector('.close-btn').addEventListener('click', function(){
    document.querySelector('.pop-up-field').style.display = "none"; 
}) 


let submitBtn = document.querySelector('#submit-btn'); 
let inputForm = document.querySelector('form'); 



inputForm.addEventListener('submit', function(e){ 
    e.preventDefault();
    let title = document.querySelector('#title-of-book-input-field').value; 
    let author = document.querySelector('#author-of-book-input-field').value;
    let pages =  document.querySelector('#pages-input-field').value; 
    let readOrNot = document.querySelector('#read-or-not-checkbox').checked; 
    this.reset(); 
    const newBook = new Book(title, author, pages, readOrNot); 
    addBookToLibrary(newBook); 
    
})   


function addBookToLibrary(newBook) { 
    myLibrary.push(newBook);
    displayBooks();   
} 

// create value elements, displaying the book inside the DOM 

// let container = document.querySelector('#container-for-books'); 
    
// let bookOutputField = document.createElement('div'); 
 

// bookOutputField.innerText = myLibrary[0].title; 


// container.append(bookOutputField);  

// 


function displayBooks() { 


    let booksContainer = document.querySelector('#container-for-books'); 

    let styleContainer = document.createElement('container'); 

    styleContainer.classList.add('book-style-container'); 
    
    let bookOutputTitle = document.createElement('div'); 

    let bookOutputAuthor = document.createElement('div'); 

    let bookOutputPages = document.createElement('div'); 

    // read book btn   
    let bookOutputReadBook = document.createElement('button'); 

    let buttonContainer = document.createElement('container'); 

    buttonContainer.classList.add('button-container-for-book')

    bookOutputReadBook.classList.add('read-book-btn');  

    let removeBookButton = document.createElement('button'); 

    removeBookButton.classList.add('remove-book-btn'); 
 
    // accessing read book and remove book properties 
    // buttonContainer.append(bookOutputReadBook, removeBookButton);  

    // bookOutputReadBook.addEventListener('click', function(){
        
    // }) 
    
    // getting the value of title, author, pages, read 
     
    bookOutputTitle.innerText =  'Title: ' + myLibrary[myLibrary.length -1].title; 

    bookOutputAuthor.innerText = 'Author: ' + myLibrary[myLibrary.length -1].author;
    
    bookOutputPages.innerText = 'Pages: ' + myLibrary[myLibrary.length -1].pages; 

    // let div = document.createElement('div'); 
    if (myLibrary[myLibrary.length -1].read === true) { 
        bookOutputReadBook.innerText = 'Read' 
        bookOutputReadBook.style.backgroundColor = 'green';
        booksContainer.append(bookOutputReadBook);  
    } else if (myLibrary[myLibrary.length -1].read === false) { 
        bookOutputReadBook.innerText = 'Not Read'; 
        bookOutputReadBook.style.backgroundColor = 'red'; 
        booksContainer.append(bookOutputReadBook); 
    }   

    booksContainer.append(bookOutputReadBook);

    // bookOutputReadBook.innerText =  myLibrary[myLibrary.length -1].read;

    removeBookButton.innerText = 'Remove';  

    // appending the values to the styling container 

    // styleContainer.append(bookOutputTitle); 
    // styleContainer.append(bookOutputAuthor); 
    // styleContainer.append(bookOutputPages); 
    // styleContainer.append(bookOutputReadBook); 
    // styleContainer.append(removeBookButton); 




    
    
    styleContainer.append(bookOutputTitle); 
    
    styleContainer.append(bookOutputAuthor); 
    
    styleContainer.append(bookOutputPages); 
    
    styleContainer.append(bookOutputReadBook); 
    
    styleContainer.append(removeBookButton); 

    
    // appending the style container to the main container 
    
    booksContainer.append(styleContainer); 


}                               








// removeBookButton.addEventListener('click', function(){
//     removeBookButton.display = none; 
// })

   











// All of your book objects are going to be stored in a simple array, 
// so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. 
// Your code should look something like this:

// use DOM manipulation to get userinput, pass value to addBook func which that function will put into (push) myLibrary array


