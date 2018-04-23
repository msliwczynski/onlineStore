import axios from 'axios';

export default function fetchProducts() {
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
