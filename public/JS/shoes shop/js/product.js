let $ = document

let backBtn = $.querySelector('#back')
let shoeTitle = $.querySelector('h1')
let shoeDesc = $.querySelector('p')
let shoeImage = $.querySelector('img')

let shoesArray =[
    {id:1, title: "sport shoe", price: 53, img: "images/1.png"  },
    {id:2, title: "women shoe", price: 81 , img: "images/2.png" },
    {id:3, title: "boots", price: 34 , img: "images/3.png" },
]

let locationParams = new URLSearchParams(location.search)
let mainProductID =locationParams.get('id')

let mainProductObject = shoesArray.find(function(product){
    return product.id === Number(mainProductID)
})
if(mainProductObject){
   shoeTitle.innerHTML = mainProductObject.title
   shoeImage.setAttribute('src',mainProductObject.img)
  
}else{
   location.href = 'http://127.0.0.1:5500/JS/shoes%20shop/'
}
console.log(mainProductObject)

backBtn.addEventListener('click', function(){
    history.go(-1)
})