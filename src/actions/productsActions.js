import axios from 'axios';

export function fetchProducts() {
    return function (dispatch) {
        dispatch({type: 'INIT_FETCH_PRODUCTS', payload: null});
        axios.get('/products/')
            .then((response) => {
                dispatch({type: 'FETCH_PRODUCTS_COMPLETED', payload: response.data});
            })
            .catch((err) => {
                dispatch({type: 'FETCH_PRODUCTS_REJECTED', payload: err});
            });
    };
}

export function showDescription(description) {
    return {type: 'SHOW_PRODUCT_DESCRIPTION', payload: description};
}
