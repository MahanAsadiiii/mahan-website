let $ = document
let addElem = $.querySelector('#add_btn')
let newModal =$.getElementById('todo_form')
let spanElem = $.querySelector('.btn-close-modal') 
let sectionElem = $.querySelector('#section')
console.log(newModal)



addElem.addEventListener('click',function(){
   newModal.style.display = 'block'
   sectionElem.style.filter = 'Blur(10px)'
   
})


spanElem.addEventListener('click',function(){
   newModal.style.display = 'none'
   sectionElem.style.filter ='Blur(0px)'
})

document.body.addEventListener('keydown',function(event) {
   if(event.keyCode === 27 ){
    newModal.style.display = 'none'
    sectionElem.style.filter ='Blur(0px)'
   }
})