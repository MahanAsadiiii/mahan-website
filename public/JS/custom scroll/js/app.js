// DOM => Document Object Model
// BOM => Browser Object Model

let customScroll = document.getElementById('scroll')

window.addEventListener('scroll',function(){
    
    let scrollTop = window.scrollY
    
    let documentHeight = document.body.clientHeight
    
    let windowHeight = window.innerHeight
    
    let scrollpercent = scrollTop / (documentHeight - windowHeight)
    
    let scrollpercentRounded = Math.round(scrollpercent * 100)

    customScroll.style.width =scrollpercentRounded +"%"

})