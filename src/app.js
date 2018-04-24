import React from 'react';
import {connect} from 'react-redux';

import ProductsPage from './components/productsPage';
import CartPage from './components/cartPage';
import NavigationBar from './components/navigationBar';

function mapStateToProps(state) {
    return {
        pages: state.pages
    };
}

@connect(mapStateToProps)
class App extends React.Component {
    render() {
        const {pages} = this.props;

        return (
            <div className="container">
                <NavigationBar />
                {pages.activePage === 'product' && <ProductsPage />}
                {pages.activePage === 'cart' && <CartPage />}
            </div>
        );
    }
}
export default App;
