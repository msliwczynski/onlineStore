const initState = {cartItems: []};

export default function reducer(state = {...initState}, action) {
    switch (action.type) {
    case 'ADD_PRODUCT_TO_CART': {
        return {...initState, cartItems: addItem(state.cartItems, action.data)};
    }
    case 'REMOVE_PRODUCT_FROM_CART': {
        return {...initState, cartItems: removeItem(state.cartItems, action.data)};
    }
    default: {
        return {...state};
    }
    }
    return state;
}

function addItem(cartItems, product) {
    const item = cartItems.find((item) => item.product === product.product);
    if (item) {
        item.number++;
    } else {
        product.number = 1;
        cartItems.push(product);
    }
    return cartItems;
}

function removeItem(cartItems, product) {
    const index = cartItems.findIndex((item) => item.product === product.product);
    if (index > -1) {
        cartItems.splice(index, 1);
    }
    return cartItems;
}
