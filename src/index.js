import React from 'react';
import {render} from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import './common/polyfills';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from './privat/reducers';
import App from './app';


const logger = createLogger({
    predicate: () => __DEV__,
    collapsed: true
});
const store = applyMiddleware(thunk, logger)(createStore)(rootReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
