import {combineReducers} from 'redux';
import products from './productsReducer';
import pages from './pageReducer';
import cart from './cartReducer';

const rootReducer = combineReducers({
    products,
    cart,
    pages
});

export default rootReducer;
