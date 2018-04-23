const initState = {activePage: 'product'};

export default function reducer(state = {...initState}, action) {
    switch (action.type) {
    case 'SET_PRODUCTS_PAGE': {
        return {...initState, activePage: 'product'};
    }
    case 'SET_CART_PAGE': {
        return {...initState, activePage: 'cart'};
    }
    default: {
        return {...state};
    }
    }
    return state;
}
