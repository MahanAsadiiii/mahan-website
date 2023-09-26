let $ = document
let inputElem = $.getElementById('input-field')
let saveBtn = $.getElementById('btn-save')
let deletBtn = $.getElementById('btn-delete')
let colorBox = $.querySelectorAll(".color-box")
let container = $.querySelector('#listed')


colorBox.forEach(function(colors){
    colors.addEventListener('click', function(event){
        let mainColor = event.target.style.backgroundColor
        inputElem.style.backgroundColor = mainColor
    })
})

function savefunction(){
    if(inputElem.value){

  let newDiv = $.createElement('div')
  newDiv.classname = 'card shadow-sm rounded'
  newDiv.addEventListener('click', removediv )
  
  let inputBg = inputElem.style.backgroundColor
  newDiv.style.backgroundColor = inputBg
  
  
  let newP = $.createElement('p')
  newP.className = 'card-text p-3'
  newP.innerHTML = inputElem.value
  
  newDiv.append(newP)
  container.append(newDiv)

  inputElem.value = ''
  inputElem.style.backgroundColor = 'white'
}}

function removediv(event){
    event.target.parentElement.remove()
}

function deleteFunction (){
    inputElem.value = ''
    inputElem.style.backgroundColor = 'white'
}

function enterFunction (event){
    if(event.keyCode === 13 ){
        savefunction()
    }    
}

inputElem.addEventListener('keydown', enterFunction) 
deletBtn.addEventListener('click', deleteFunction ) 
saveBtn.addEventListener('click', savefunction )