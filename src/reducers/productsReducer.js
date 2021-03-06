const initState = {productsData: [], description: '', isFetching: false, isError: false, ready: false};

export default function reducer(state = {...initState}, action) {
    switch (action.type) {
    case 'INIT_FETCH_PRODUCTS': {
        return {...initState, isFetching: true};
    }
    case 'FETCH_PRODUCTS_COMPLETED': {
        return {...initState, productsData: action.payload, ready: true};
    }
    case 'FETCH_PRODUCTS_REJECTED': {
        return {...state, isError: true};
    }
    case 'SHOW_PRODUCT_DESCRIPTION': {
        return {...state, description: action.payload};
    }
    case 'HIDE_PRODUCT_DESCRIPTION': {
        return {...state, description: action.payload};
    }
    default: {
        return {...state, isError: true};
    }
    }
    return state;
}
