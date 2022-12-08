let myLibrary = []; 





// constructor function 
function Book(title, author, pages, read) { 
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.read = read; 
    this.id = crypto.randomUUID(); 
}    



     

// Book.prototype.toggleReadStatus = function() { 
//     this.read = !this.read; 
//     // conditional, if this is read, apply read styles 
//     // if this is NOT READ, apply read styles 

// } 

//  let readBookBtn = document.getElementsByClassName('read-book-btn');
 
//  readBookBtn.addEventListener('click', function(){

//  })

// function toggleReadStatus() { 
// }     



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

// let bdookOutputField = document.createElement('div'); 


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

    // read book btn   // 
    let bookOutputReadBook = document.createElement('button'); 
     
    let buttonContainer = document.createElement('container'); 
    
    buttonContainer.classList.add('button-container-for-book')
    
    bookOutputReadBook.classList.add('read-book-btn');  
    // remove book btn 
    let removeBookButton = document.createElement('button'); 
    
    removeBookButton.classList.add('remove-book-btn'); 
    
    bookOutputTitle.innerText =  `Title:  ${newBook.title}`; 
    
    bookOutputAuthor.innerText = `Author:  ${newBook.author}`;
    
    bookOutputPages.innerText = `Pages: ${newBook.pages}`; 
    
    // Book.prototype.removeBookBtn = function() { 
        //     newBook.remove(); 
        // } 
        
        
        
        
        bookOutputReadBook.addEventListener('click', () => { 
            newBook.toggleReadStatus(); 
            renderToggleStatus(); 
        }) 
        
        Book.prototype.toggleReadStatus = function() { 
            this.read = !this.read;  
            
        }   
    
        
        
        function renderToggleStatus() { 
        
        if (newBook.read === true) { 
            bookOutputReadBook.innerText = 'Read' 
            bookOutputReadBook.style.backgroundColor = 'green';
            // bookOutputReadBook.append(styleContainer);
            // booksContainer.append(bookOutputReadBook); 
        } else if (newBook.read === false) { 
            bookOutputReadBook.innerText = 'Not Read'; 
            bookOutputReadBook.style.backgroundColor = 'red'; 
            // bookOutputReadBook.append(styleContainer);
            // booksContainer.append(bookOutputReadBook); 
        }   
        
    }  
    
    // renderToggleStatus(newBook);
    // toggleReadStatus(newBook);  

    // removeBookButton.addEventListener('click', function(){
    //     newBook.removeBookBtn(); 

    // })
    
     
    
    


    if (newBook.read === true) {   
        bookOutputReadBook.innerText = 'Read' 
        bookOutputReadBook.style.backgroundColor = 'green';
        // booksContainer.append(bookOutputReadBook);  
    } else if (newBook.read === false) { 
        bookOutputReadBook.innerText = 'Not Read'; 
        bookOutputReadBook.style.backgroundColor = 'red'; 
        // booksContainer.append(bookOutputReadBook); 
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





// displayBook(newBook); 

function displayBooks(books){
    // loop 
    books.forEach(displayBook);
} 

displayBooks(myLibrary); 


  


// toggle read btn 









// this 
// Book.prototype.toggleReadStatus = function() { 
    //     newBook.read = !newBook.read;  
    
    // }   
    
    
    // function renderToggleStatus() { 
        
        //     if (newBook.read === true) { 
            //     let printReadStatus = document.createElement('div'); 
            //     let readBtnContainer = document.createElement('container'); 
            //     printReadStatus.innerText = 'read'; 
            //     printReadStatus.style.backgroundColor = 'green'; 
    //     readBtnContainer.append(printReadStatus); 
    // } else if (newBook.read === false) { 
        //     printReadStatus.innerText = 'not-read'; 
        //     printReadStatus.style.backgroundColor = 'red'; 
        //     readBtnContainer.append(printReadStatus);
        // }   
        
        // }   
        //       let readBookBtn = document.getElementsByClassName('read-book-btn');
        
        
        //       readBookBtn.addEventListener('click', () => { 
            //         newBook.toggleReadStatus(); 
            //         renderToggleStatus(); 
    //     })
    
    
    
    
    
    
    
    
    
    
    // Book.prototype.toggleReadStatus = function() { 
    //     newBook.read = !newBook.read;  
        
    // }   
    
    
    // function renderToggleStatus() { 
         
    
     
    //     if (newBook.read === true) { 
    //     let printReadStatus = document.createElement('div'); 
    //     let readBtnContainer = document.createElement('container'); 
    //     printReadStatus.innerText = 'read'; 
    //     printReadStatus.style.backgroundColor = 'green'; 
    //     readBtnContainer.append(printReadStatus); 
    // } else if (newBook.read === false) { 
    //     printReadStatus.innerText = 'not-read'; 
    //     printReadStatus.style.backgroundColor = 'red'; 
    //     readBtnContainer.append(printReadStatus);
    // }   
        
        
        
    // }   
    
          
        
    //     let readBookBtn = document.getElementsByClassName('read-book-btn');
    
    
    //     readBookBtn.addEventListener('click', () => { 
    //          newBook.toggleReadStatus(); 
    //          renderToggleStatus(); 
    //     }) 
    
    
    
    
    
    
    
    
    
    
    
    
























    
    
    
    
    
    // myLibrary.forEach(book => { 
    //     book.toggleReadStatus()
    //     renderToggleStatus(); 
    // })


// if (Book.read === true) { 
//     let printReadStatus = document.createElement('div'); 
//     let readBtnContainer = document.createElement('container'); 
//     printReadStatus.innerText = 'read'; 
//     printReadStatus.style.backgroundColor = 'green'; 
//     readBtnContainer.append(printReadStatus); 
// } else if (Book.read === false) { 
//     printReadStatus.innerText = 'not-read'; 
//     printReadStatus.style.backgroundColor = 'red'; 
//     readBtnContainer.append(printReadStatus); 
// } 

// if (Book.read === true) { 
//     let printReadStatus = document.createElement('div'); 
//     let readBtnContainer = document.createElement('container'); 
//     printReadStatus.innerText = 'read'; 
//     printReadStatus.style.backgroundColor = 'green'; 
//     readBtnContainer.append(printReadStatus); 
// } else if (Book.read === false) { 
//     printReadStatus.innerText = 'not-read'; 
//     printReadStatus.style.backgroundColor = 'red'; 
//     readBtnContainer.append(printReadStatus); 
// } 








//  if (newBook.read === true) {   
//     bookOutputReadBook.innerText = 'Read' 
//     bookOutputReadBook.style.backgroundColor = 'green';
//     booksContainer.append(bookOutputReadBook);  
// } else if (newBook.read === false) { 
//     bookOutputReadBook.innerText = 'Not Read'; 
//     bookOutputReadBook.style.backgroundColor = 'red'; 
//     booksContainer.append(bookOutputReadBook); 
// }   



// function toggleReadStatus(book) { 
//     this.read = !this.read; 
// } 




        // let readBookBtn = document.getElementsByClassName('read-book-btn'); 
        
        // readBookBtn.addEventListener('click', function(){
        //     toggleStatus(); 
        // }) 
        
        
        
        // function toggleStatus (Book) { 
        //     this.read = !this.read; 
        //     // styleContainer.append(Book); 
        //     // booksContainer.append(styleContainer); 
        // } 


        





// function toggleBook(books) { 
    // myLibrary.foreach(books) => { 
        //     books.read = !books.read; 
        // }
        // } 
        
        
        // Book.prototype.changeReadStatus = function () { 
        //     this.read = !this.read; 
             
        // }













// Book.prototype.changeReadStatus = function () { 
//     this.read = !this.read; 
     
// }  

// have no idea how to toggle the books read status 

// Book.prototype.addEventListener('click', function(){
//     this.read = !this.read; 
// })  

 




// how to toggle the buttons, read status 

// to toggle read status, 

// prototype is a shared object between other objects

// the prototype can have different methods attached to it, 

// you can also set different methods on the prototype, which can be shared amoungst objects 

// I need to set a method on the prototype, like a function which flips the value, 

// then call the method on the element, 





// grab the read button 
// when the button is clicked 
// set a prototype method on the obj, using obj.create, method will be a function call 
// which toggles read status, and flips the value to read to not read 

// call the method 
// update to the DOM 




// toggle the books read status 

// grab the read book button, grab the element with the DOM 

// let readBookCheckboxValue = document.getElementById('read-or-not-checkbox'); 

// readBookCheckboxValue.addEventListener('click', function(books){
//     // grab the book 
    
//     books.forEach(book => () { 
//         book.addEventListener('click', function(){
//             (!book.read); 
//         })
//     })
// })











   



// ``` 
//  function displayBook(newBook) {   


//     if (newBook.read === true) {   
//         bookOutputReadBook.innerText = 'Read' 
//         bookOutputReadBook.style.backgroundColor = 'green';
//         booksContainer.append(bookOutputReadBook);  
//     } else if (newBook.read === false) { 
//         bookOutputReadBook.innerText = 'Not Read'; 
//         bookOutputReadBook.style.backgroundColor = 'red'; 
//         booksContainer.append(bookOutputReadBook); 
//     }    

//     booksContainer.append(bookOutputReadBook);    

//     removeBookButton.innerText = 'Remove';  

//     styleContainer.append(bookOutputTitle); 
    
//     styleContainer.append(bookOutputAuthor); 
    
//     styleContainer.append(bookOutputPages); 
    
//     styleContainer.append(bookOutputReadBook); 
    
//     styleContainer.append(removeBookButton); 

//     booksContainer.append(styleContainer);   
    
//     Book.prototype.toggleReadStatus = function() { 
//         newBook.read = !newBook.read;  
        
//     }   
    
//     function renderToggleStatus(newBook) { 
         
//         if (newBook.read === true) { 
//         bookOutputReadBook.innerText = 'Read' 
//         bookOutputReadBook.style.backgroundColor = 'green';
//         booksContainer.append(bookOutputReadBook);
//     } else if (newBook.read === false) { 
//         bookOutputReadBook.innerText = 'Not Read'; 
//         bookOutputReadBook.style.backgroundColor = 'red'; 
//         booksContainer.append(bookOutputReadBook);
//     }   
        
//     }   
    
//     bookOutputReadBook.addEventListener('click', () => { 
//             newBook.toggleReadStatus(); 
//             renderToggleStatus(); 
//         })
// } ``` 










