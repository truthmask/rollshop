function calcCartPriceAndDelivery() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceEl = document.querySelector('.total-price');

    const deliveruCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');


    let priceTotal = 0;

    cartItems.forEach(function (item) {

        const amountEl = item.querySelector('[data-counter]');
        const priceEL = item.querySelector('.price__currency');

        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEL.innerText);

        priceTotal += currentPrice;
    })

    totalPriceEl.innerText = priceTotal;

    if(priceTotal < 600) {
        priceTotal +=250;
    }else {
        priceTotal +=0;
    }

    if(priceTotal > 0) {
        cartDelivery.classList.remove('none');
    } else{
        cartDelivery.classList.add('none');
    }

    if(priceTotal >= 600) {
        deliveruCost.classList.add('free');
        deliveruCost.innerText = 'Бесплатно';
    } else{
        deliveruCost.classList.remove('free');
        deliveruCost.innerText = '250 ₽';
    }
} 