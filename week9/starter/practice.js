// 1. Refactor the cart section to dynamically add products to the cart using the "Buy" button and an event listener.

const $buyButton=document.querryselector('.buy-button')

 $buyButton.addEventListener('click', function(){
    console.log("button clicked")

    // addToCart(products)

    cart.push(
        {
            title: products[0].
            title,
            price: products[0].price
        }
    )

 })


// 2.Refactor the modal section to dynamically display product details and allow for updates to be saved using an event listener and a form element.
