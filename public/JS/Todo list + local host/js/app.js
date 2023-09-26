let $ = document
let inputElem = $.getElementById('itemInput')
let addButton = $.getElementById('addButton')
let clearButton = $.getElementById('clearButton')
let todoListElem = $.getElementById('todoList')
 
let todosArray=[]

// this is for make new to do and send it to local host


function addNewtodo(){
   let newTodoTitle = inputElem.value
    
   let newTodoObj ={
        id: todosArray.length + 1,
        title:newTodoTitle,
        complete: false
   }
    
   inputElem.value = ''

   todosArray.push(newTodoObj)
   setLocalstorage(todosArray)
   todosGenerator(todosArray)
}


function setLocalstorage(todoList){
    localStorage.setItem('todos', JSON.stringify(todoList))
}

// and this is for making Li and btns & 
function todosGenerator (todosList){

    let newTodoLiElem, newTodoLabalElem, newTodocomleteBtn , newTodoDeleteBtn ,Divspace
    
    todoListElem.innerHTML= ''
    
    todosList.forEach(function (todo){
        newTodoLiElem = $.createElement('li')
        newTodoLiElem.className = 'completed-well'

        newTodoLabalElem = $.createElement('lablel')
        newTodoLabalElem.className= 'lable__Li'
        newTodoLabalElem.innerHTML = todo.title
        

        Divspace = $.createElement('div')
        
        newTodocomleteBtn= $.createElement('button')
        newTodocomleteBtn.innerHTML = 'Complete'
        newTodocomleteBtn.className= "btn btn-success"
        newTodocomleteBtn.setAttribute('onclick', 'editTodo('+ todo.id +')' )

        newTodoDeleteBtn= $.createElement('button')
        newTodoDeleteBtn.innerHTML = 'Delete'
        newTodoDeleteBtn.className = 'btn btn-danger'
        newTodoDeleteBtn.setAttribute('onclick','removeTodo('+todo.id+')')


        // change class if the flag come true

        if(todo.complete){
            newTodoLiElem.className = 'Uncompleted-well'
            newTodocomleteBtn.innerHTML = 'Uncomplete'
            newTodoLabalElem.className= 'Unlable__Li'
        }
        
        Divspace.append(newTodocomleteBtn, newTodoDeleteBtn)
        newTodoLiElem.append(newTodoLabalElem, Divspace)
        todoListElem.append(newTodoLiElem)
    } )
}

// this part is for complete btn  
function editTodo(todoId){
    let localStorageTodos= JSON.parse(localStorage.getItem('todos'))

    todosArray = localStorageTodos

    todosArray.forEach(function(todo){
        if(todo.id === todoId){
            todo.complete = !todo.complete
        }
    })
    setLocalstorage(todosArray)
    todosGenerator(todosArray)
    
}

// this is for remove todo from dom and local host
function removeTodo(todoId){
    let localStorageTodos= JSON.parse(localStorage.getItem('todos'))

    todosArray = localStorageTodos

    let mainTodoIndex = todosArray.findIndex(function(todo){
        return todo.id === todoId
    })
    todosArray.splice(mainTodoIndex, 1)

    setLocalstorage(todosArray)
    todosGenerator(todosArray)
}


// this is for calling data from localhost 
function getlocalStorage(){
    let localStorageTodos = JSON.parse(localStorage.getItem('todos'))
    if(localStorageTodos){
        todosArray = localStorageTodos
    } else{
        todosArray = []
    }
    todosGenerator(todosArray)
}
// this part is about clear todo compeletly
function clearTodos(){
    todosArray=[]
    todosGenerator(todosArray)
    localStorage.removeItem('todos')
}


window.addEventListener('load', getlocalStorage)
addButton.addEventListener('click', addNewtodo)
clearButton.addEventListener('click', clearTodos)


inputElem.addEventListener('keydown',function(event){
    if(event.code === 'Enter'){
        addNewtodo()
    }
})