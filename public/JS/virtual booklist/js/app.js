const $ = document
let titleInputElem = $.getElementById('title')
let authorInputElem = $.getElementById('author')
let yearInputElem = $.getElementById('year')
let bookListElem = $.getElementById('book-list')
let submitBtn = $.querySelector('.btn')


let books = []

function addNewBook(event){
    event.preventDefault()
    setIntoLocalstorage(books)
    let titleInputValue = titleInputElem.value
    let authorInputValue = authorInputElem.value
    let yearInputValue = yearInputElem.value




    if( titleInputValue ==='' || authorInputValue ==='' || yearInputValue ==='' ){
        alert('plz fill all the blanks')
    }else{
        let newBook = {
            id: books.length + 1 , 
            title:titleInputValue,
            author: authorInputValue,
            year: yearInputValue,
        }
     
        books.push(newBook)
        setIntoLocalstorage(books)
        makeEmptyInput()
    }
    
}
function setIntoLocalstorage(allBookArrey){
    localStorage.setItem('books',JSON.stringify(allBookArrey))
    BooksGenarator(allBookArrey)
}

function makeEmptyInput(){
    titleInputElem.value = ''    
    authorInputElem.value = ''
    yearInputElem.value = ''    
}

function BooksGenarator(allBookArrey){
    let newBookTr, newBookTitleTh, newBookAuthorTh, newBookYearTh
    bookListElem.innerHTML=''

    allBookArrey.forEach(function (book){
        newBookTr = $.createElement('tr')

        newBookTitleTh= $.createElement('th')
        newBookTitleTh.innerHTML = book.title
        newBookAuthorTh= $.createElement('th')
        newBookAuthorTh.innerHTML = book.author
        newBookYearTh= $.createElement('th')
        newBookYearTh.innerHTML = book.year

        newBookTr.append(newBookTitleTh,newBookAuthorTh,newBookYearTh)
        bookListElem.append(newBookTr)
    })
}
function getBooksFromLocalStorage(){
    let localStorageBooks = localStorage.getItem('books')
    if(localStorageBooks){
        books = JSON.parse(localStorageBooks)
        BooksGenarator(books)
    }
}
window.addEventListener('load',getBooksFromLocalStorage)
submitBtn.addEventListener('click', addNewBook )