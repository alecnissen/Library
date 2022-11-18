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

let title 


let submitBtn = document.querySelector('submit-btn').addEventListener('click', function(){
     title = document.querySelector('title-of-book-input-field').value; 
    //  title = document.getElementById('title-of-book-input-field').value;  
}) 


function addBookToLibrary() { 
    // const book1 = new Book(''); 
    myLibrary.push(book1); 
    
} 

// All of your book objects are going to be stored in a simple array, 
// so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. 
// Your code should look something like this:

// use DOM manipulation to get userinput, pass value to addBook func which that function will put into (push) myLibrary array


