import React from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {
        cartItems: state.cartItems
    };
}

@connect(mapStateToProps)
class CartPage extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const {cartItems} = this.props;
        console.log(cartItems);

        return (
            <div className="row">
                <h1>Shopping cart</h1>
            </div>
            );
    }
}


export default CartPage;
