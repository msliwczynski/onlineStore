export function goToProductPage() {
    return {type: 'SET_PRODUCTS_PAGE', payload: 'product'};
}

export function goToCartPage() {
    return {type: 'SET_CART_PAGE', payload: 'cart'};
}
