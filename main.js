let myLibrary = []; 





// constructor function 
function Book(title, author, pages, read) { 
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.read = read; 
    this.id = crypto.randomUUID(); 
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
    // adding unique ID to each element 
    // this.id.dataset = id; 
    const newBook = new Book(title, author, pages, readOrNot); 
    addBookToLibrary(newBook); 
    
})   


function addBookToLibrary(newBook) { 
    myLibrary.push(newBook);
    displayBook(newBook);   
} 

// create value elements, displaying the book inside the DOM 

// let container = document.querySelector('#container-for-books'); 
    
// let bookOutputField = document.createElement('div'); 
 

// bookOutputField.innerText = myLibrary[0].title; 


// container.append(bookOutputField);  

// 

// display book function, takes in Book obj, function to display one book 

 function displayBook(newBook) {  


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
     
    bookOutputTitle.innerText =  `Title:  ${newBook.title}`; 

    bookOutputAuthor.innerText = `Author:  ${newBook.author}`;
    
    bookOutputPages.innerText = `Pages: ${newBook.pages}`; 

    if (newBook.read === true) { 
        bookOutputReadBook.innerText = 'Read' 
        bookOutputReadBook.style.backgroundColor = 'green';
        booksContainer.append(bookOutputReadBook);  
    } else if (newBook.read === false) { 
        bookOutputReadBook.innerText = 'Not Read'; 
        bookOutputReadBook.style.backgroundColor = 'red'; 
        booksContainer.append(bookOutputReadBook); 
    }    

    booksContainer.append(bookOutputReadBook);   

    // bookOutputReadBook.innerText =  myLibrary[myLibrary.length -1].read;

    removeBookButton.innerText = 'Remove';  


    styleContainer.append(bookOutputTitle); 
    
    styleContainer.append(bookOutputAuthor); 
    
    styleContainer.append(bookOutputPages); 
    
    styleContainer.append(bookOutputReadBook); 
    
    styleContainer.append(removeBookButton); 

    
    // appending the style container to the main container  
    
    booksContainer.append(styleContainer); 
   
}                                


function displayBooks(books){
    // loop 
    books.forEach(displayBook);
} 

displayBooks(myLibrary);













// function displayBooks () { 
    // loop through myLibrary array 
    // take in book variable, 
    // print variable to the DOM. 

// } 



// function displayBooks(func1) { 
//     for (let i = 0; i < myLibrary.length; i++) { 
//         let selectedBook = myLibrary[i]; 

//     } 
// }




   













