let $ = document
let inputElem = $.querySelector('.form-control')
let form = $.querySelector('form')
let toDoUIElem = $.querySelector('ul')

function addNewTodo(newInput){
    let newLi = $.createElement('li')
    newLi.className = 'list-group-item d-flex justify-content-between align-items-center'
    
    let newSpan = $.createElement('span')
    newSpan.innerHTML = newInput 
    

    let newI =$.createElement('i')
    newI.className = 'fa fa-trash-o delete'
    
    newI.addEventListener('click',function(event){
        event.target.parentElement.remove()
    })
    
    
    newLi.append(newSpan,newI)
    toDoUIElem.append(newLi)
}

form.addEventListener('submit',function(event){
    event.preventDefault()
})


inputElem.addEventListener('keydown',function(event){
    let newInput = event.target.value.trim()
    
    if(event.keyCode === 13){
        if(newInput){
            inputElem.value = ''
            addNewTodo(newInput)
        }
    }
})

