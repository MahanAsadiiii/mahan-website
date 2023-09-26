const listItems = [
    { id: 1, name: 'Amin', family: 'Saeedi Rad' },
    { id: 2, name: 'Amir', family: 'Zehtab' },
    { id: 3, name: 'Qadir', family: 'Yolme' },
    { id: 4, name: 'Babak', family: 'Mohammadi' },
    { id: 5, name: 'Hasan', family: 'Ghahreman Zadeh' },

    { id: 6, name: 'Amin', family: 'Saeedi Rad' },
    { id: 7, name: 'Amir', family: 'Zehtab' },
    { id: 8, name: 'Qadir', family: 'Yolme' },
    { id: 9, name: 'Babak', family: 'Mohammadi' },
    { id: 10, name: 'Hasan', family: 'Ghahreman Zadeh' },

    { id: 11, name: 'Saeed', family: 'Ehsani' },
    { id: 12, name: 'Siamak', family: 'Modiri' },
    { id: 13, name: 'Mohsen', family: 'Ansari' },
    { id: 14, name: 'Mehran', family: 'Ali Pour' },
    { id: 15, name: 'Amir Hossein', family: 'Mahtabi' },

    { id: 16, name: 'Hossein', family: 'Amino' },
    { id: 17, name: 'Melika', family: 'Ehsani' },
    { id: 18, name: 'Qadir', family: 'Yolme' },
    { id: 19, name: 'Fatemeh', family: 'Alilou' },
    { id: 20, name: 'Ehsan', family: 'Tayyebi' },

    { id: 21, name: 'Zahra', family: 'Gholami' },
    { id: 22, name: 'Matin', family: 'Sahebi' },
    
];


const $ = document
let listElement = $.querySelector('#list')
let pagenumberElement = $.querySelector('#pagination')

// we have to make 2 important value 
let currentPage = 1
let rowsCount = 5

// this part is for making template for useres pagination
function displayList(allUserArray, usersContainer, rows, currentPage){
    usersContainer.innerHTML= ''

    let end = rows * currentPage
    let start = end - rows

    let paginationItem = allUserArray.slice(start,end)

    paginationItem.forEach(function(item){

        let itemElement = $.createElement('div')
        itemElement.classList.add('item')
        itemElement.innerHTML = item.name + '' + item.family
        usersContainer.append(itemElement)
        
        
    })
}

// this is for knowing how many page should we have
function setupPagtaion(allUserArray, pageContainer, rows){
    pageContainer.innerHTML= ''

    // The ceil() method rounds the specified double value upward and returns it.
    let pageCount = Math.ceil(allUserArray.length / rows) 

    for(let i = 1 ; i <= pageCount ; i++){
        let btn = pageNationButtonGenerator(i,allUserArray)
        pageContainer.append(btn)
    } 

}

// this part is about make button template and for onclick function
function pageNationButtonGenerator (Page, allUserArray){
    let button = $.createElement('button')
    button.innerHTML = Page

    if(Page === currentPage){
        button.classList.add('active')
    }

    button.addEventListener('click',function(){
        currentPage = Page
        
        displayList( allUserArray , listElement , rowsCount , currentPage)

        let prevPage = $.querySelector('button.active')
        prevPage.classList.remove('active')

        button.classList.add('active')
    })
    return button   

}

// I send values via this part to the functions
displayList( listItems , listElement , rowsCount , currentPage)
setupPagtaion( listItems , pagenumberElement , rowsCount)