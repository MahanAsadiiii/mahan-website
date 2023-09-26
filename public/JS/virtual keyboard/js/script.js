const $ = document
const titleElem = $.querySelector('.title')

function getCode(event) {
    appendValuetoDom(event)

    let userKey = event.key.toUpperCase()
    let mainKeyElem = $.getElementById(userKey)

    mainKeyElem.classList.add('hit')
   
    mainKeyElem.addEventListener('animationend', function(){
        mainKeyElem.classList.remove('hit')
    })

}
// --------------------- append letter to each other------------------

function appendValuetoDom(event){
    
    if (event.key === 'Backspace'){
        titleElem.innerHTML= titleElem.innerHTML.slice(0, -1)
        return
    }else{
        titleElem.innerHTML += event.key
    }
    console.log (event)
}


$.addEventListener('keyup', getCode )