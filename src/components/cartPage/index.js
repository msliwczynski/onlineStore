import React from 'react';
import {connect} from 'react-redux';

function getProductsRow(cartItems) {
    if (cartItems) {
        return cartItems.map((item, index) => {
            return (
                <tr key={index}>
                   <th scope="row">{index}</th>
                   <td>{cartItems.product}</td>
                   <td>{cartItems.price}</td>
                   <td>{cartItems.number}</td>
                </tr>
            );
        });
    }
}

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
        const productItems = getProductsRow(cartItems);

        return (
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Number</th>
                </tr>
              </thead>
              <tbody>
                {productItems}
              </tbody>
            </table>
            );
    }
}


export default CartPage;
