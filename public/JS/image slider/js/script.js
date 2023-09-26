let $ = document;
const prevBtn = $.querySelector(".prev");
const nextBtn = $.querySelector(".next");
let sliderImgElem = $.querySelector("img");

let imageSrcArry = ["image/1.jpg","image/2.png","image/3.jpg"]

let imgIndex = 0

function prevImg(){
  imgIndex -- 
  
  if(imgIndex < 0){
    imgIndex = imageSrcArry.length -1
  }
  sliderImgElem.setAttribute('src',imageSrcArry[imgIndex])
  console.log(imageSrcArry[imgIndex])
}

function nextImg(){
  imgIndex++

  if(imgIndex > imageSrcArry.length -1){
    imgIndex = 0
  }
  sliderImgElem.setAttribute('src',imageSrcArry[imgIndex])
}

setInterval(nextImg, 3000)
prevBtn.addEventListener('click',prevImg)
nextBtn.addEventListener('click',nextImg)