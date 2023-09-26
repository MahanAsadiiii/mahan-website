let allProducts = [
    {id:1, title: 'Album 1', price: 12.93, img: "Images/Album 1.png", count: 1},
    {id:2, title: 'Album 2', price: 21, img: "Images/Album 2.png", count: 1},
    {id:3, title: 'Album 3', price: 14, img: "Images/Album 3.png", count: 1},
    {id:4, title: 'Album 4', price: 32 , img: "Images/Album 4.png", count: 1},
    {id:5, title: 'Coffee', price: 42 , img: "Images/Cofee.png", count: 1},
    {id:6, title: 'shirt', price: 50 , img:"Images/Shirt.png", count: 1 },
]

let basket = []

let $ = document
const shopItemsContainer = $.querySelector('.shop-items')
const basketProductsContainer = $.querySelector('.cart-items')
const removeAllBtn = $.querySelector('#removeAllProducts')
const totalPriceElement = $.querySelector('.cart-total-price')
let productFragment = $.createDocumentFragment()

allProducts.forEach( function (product){
    let productContainer = $.createElement('div')
    productContainer.classList.add('shop-item')

    let productTitlespan =$.createElement('span')
    productTitlespan.classList.add('shop-item-title')
    productTitlespan.innerHTML = product.title

    let procductImage = $.createElement("img")
    procductImage.classList.add('shop-item-image')
    procductImage.setAttribute('src', product.img )

    let productDetailsContainer = $.createElement('div')
    productDetailsContainer.classList.add('shop-item-details')

    let productPrice = $.createElement('span')
    productPrice.classList.add('shop-item-price')
    productPrice.innerHTML = product.price

    let productButton =$.createElement('button')
    productButton.innerHTML = 'add to cart'
    productButton.className = 'btn btn-primary shop-item-button'
    productButton.addEventListener("click", function(){
        addProductToBasketArray(product.id)
    })
    

    productDetailsContainer.append(productPrice,productButton)
    productContainer.append(productTitlespan,procductImage,productDetailsContainer)

    // shopItemsContainer.append(productContainer)
    productFragment.append(productContainer)


    // shopItemsContainer.insertAdjacentHTML('beforeend','<div class="shop-item"><span class="shop-item-title">'+ product.title +'</span><img class="shop-item-image" src="' + product.img + '"><div class="shop-item-details"><span class="shop-item-price">'+ product.price +'</span><button class="btn btn-primary shop-item-button" onclick="addProductToBasketArray('+ product.id+')">add to cart</button></div></div>')

})
    
    shopItemsContainer.append(productFragment)

function addProductToBasketArray(productId){
    let mainProduct = allProducts.find(function(product){
        return product.id === productId
    })
    let inCart = basket.some(function(product){
        if(product.id === mainProduct.id){
            return true
        }
    })
    
    if(inCart){
        product.count ++
        basketProductsGenerator(basket)
        calcTotalPrice(basket)
    }else{
        basket.push(mainProduct)
        basketProductsGenerator(basket)
        calcTotalPrice(basket)
    }
    

}

function basketProductsGenerator (userBasketArray){
    basketProductsContainer.innerHTML = ''

    userBasketArray.forEach(function(product){
        let cartItem = $.createElement('div')
        cartItem.className = 'cart-item cart-column'
        
        let cartItemTitle = $.createElement('span')
        cartItemTitle.classList.add('cart-item-title')
        cartItemTitle.innerHTML = product.title
        
        let cartItemImage = $.createElement('img')
        cartItemImage.classList.add('cart-item-image')
        cartItemImage.setAttribute('width','100')
        cartItemImage.setAttribute('height','100')
        cartItemImage.setAttribute('src', product.img)

        cartItem.append(cartItemImage,cartItemTitle)

        cartSpanPrice = $.createElement("span")
        cartSpanPrice.className ='cart-price cart-column'
        cartSpanPrice.innerHTML = product.count * product.price
        

        let cartQuantity = $.createElement('div')
        cartQuantity.className ='cart-quantity cart-column'
        
        let cartQuantityInput = $.createElement('input')
        cartQuantityInput.className ='cart-quantity-input'
        cartQuantityInput.value = product.count
        cartQuantityInput.setAttribute('type', 'number')
        cartQuantityInput.addEventListener('change',function(){
            updateProductCount(product.id, cartQuantityInput.value) 
        })

        let cartQuantityButton = $.createElement('button')
        cartQuantityButton.className = 'btn btn-danger'
        cartQuantityButton.innerHTML = 'REMOVE'
        cartQuantityButton.addEventListener('click',function(){
            removeProductFromBasket(product.id)
        })

        cartQuantity.append(cartQuantityInput,cartQuantityButton)


        let CartRow = $.createElement('div')
        CartRow.classList.add('cart-row')

        CartRow.append(cartItem,cartSpanPrice,cartQuantity)
        basketProductsContainer.append(CartRow)

        console.log(CartRow)
    })
}

function removeProductFromBasket(productId){

    basket =  basket.filter(function(product){
        return product.id !== productId
    })
    basketProductsGenerator(basket)
    calcTotalPrice(basket)
}

removeAllBtn.addEventListener('click', function(){
    basket = []
    basketProductsGenerator(basket)
    totalPriceElement.innerHTML= '$0'
})

function calcTotalPrice(basket){
    let totalSum = 0 

    basket.forEach(function(product){
        totalSum += product.count * product.price
    })
    totalPriceElement.innerHTML = totalSum
}

function updateProductCount (productId , newCount){
    basket.forEach(function(product){
        if(product.id === productId){
            product.count = newCount
        }
        
    })
    calcTotalPrice(basket)
    basketProductsGenerator(basket)
}