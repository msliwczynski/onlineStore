import React from 'react';
import {connect} from 'react-redux';
import {goToProductPage, goToCartPage} from '../actions/pageActions';

function mapStateToProps(state) {
    return {
        pages: state.pages
    };
}

function mapDispatchToProps(dispatch) {
    return {
        goToProductPage: () => dispatch(goToProductPage()),
        goToCartPage: () => dispatch(goToCartPage())
    };
}

function getClassName(linkName, activePage) {
    if (linkName === activePage) {
        return 'nav-item active';
    } else {
        return 'nav-item';
    }
}
@connect(mapStateToProps, mapDispatchToProps)
class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {pages, goToProductPage, goToCartPage} = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav">
                  <li className={getClassName('product', pages.activePage)}>
                    <a className="nav-link" href="#"
                        onClick={goToProductPage}>Products</a>
                  </li>
                  <li className={getClassName('cart', pages.activePage)}>
                    <a className="nav-link" href="#"
                        onClick={goToCartPage}>Cart</a>
                  </li>
                </ul>
            </nav>
        );
    }
}


export default NavigationBar;
