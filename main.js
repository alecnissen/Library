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

//DOM to access the values that the user entered 

// let title 
// let author 
// let pages  
// let readOrNot 

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

    let container = document.querySelector('#container-for-books'); 
    
    let bookOutputField = document.createElement('div'); 
     
    bookOutputField.innerText = myLibrary[0].title; 

    // bookOutputField.innerText = myLibrary[0].author; 

    container.append(bookOutputField);  

}                               




   











// All of your book objects are going to be stored in a simple array, 
// so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. 
// Your code should look something like this:

// use DOM manipulation to get userinput, pass value to addBook func which that function will put into (push) myLibrary array


