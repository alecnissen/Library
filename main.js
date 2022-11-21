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
let author 
let pages  
let readOrNot 

let submitBtn = document.querySelector('#submit-btn'); 
let inputForm = document.querySelector('form'); 

// submitBtn.addEventListener('submit', function(e){ 
//         // e.preventDefault()
//          title = document.querySelector('#title-of-book-input-field').value; 
//          author = document.querySelector('#author-of-book-input-field').value;
//          pages =  document.querySelector('#pages-input-field').value; 
//     })  

inputForm.addEventListener('submit', function(e){ 
     e.preventDefault();
     title = document.querySelector('#title-of-book-input-field').value; 
     author = document.querySelector('#author-of-book-input-field').value;
     pages =  document.querySelector('#pages-input-field').value; 
     readOrNot = document.querySelector('#read-or-not-checkbox').checked; 
     this.reset(); 
    })  
    
    
    function addBookToLibrary() { 
        // const book1 = new Book(''); 
        myLibrary.push(book1); 
        
    } 
// to check if checkbox is on or off 
// document.getElementById('readOrNot').addEventListener('change', function(){
//   if (readOrNot.checked) { 
//       document.querySelector('readOrNot').value = true; 
//   } else { 
//      document.querySelector('readOrNot').value = false; 
//   }
//  })

// let checkbox = document.getElementById('read-or-not-checkbox').addEventListener('change', function(){
//  if (checkbox.checked) { 
//     readOrNot = document.querySelector('#read-or-not-checkbox').value = true; 
//  } else { 
//     readOrNot = document.querySelector('#read-or-not-checkbox').value = false; 
//  }
// }) 

// function check(obj) { 
//     if (obj.checked) { 
//         this.value = true; 
//     }
// }

// document.getElementById("checkbox").addEventListener("change", function() {
//     if (this.checked) {
//         //Whatever u want to do if checked
//     }
//     else {
//         //Whatever u want to do if not checked
//     }
// })

// All of your book objects are going to be stored in a simple array, 
// so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. 
// Your code should look something like this:

// use DOM manipulation to get userinput, pass value to addBook func which that function will put into (push) myLibrary array


