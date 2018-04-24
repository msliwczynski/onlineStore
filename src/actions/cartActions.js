export function addProduct(product) {
    return {type: 'ADD_PRODUCT_TO_CART', data: product};
}

export function removeProduct(product) {
    return {type: 'REMOVE_PRODUCT_FROM_CART', data: product};
}
