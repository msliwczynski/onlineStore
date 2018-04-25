import React from 'react';
import {connect} from 'react-redux';
import {removeProduct} from '../../actions/cartActions';

function isEven(n) {
    return n % 2 === 0;
}

function getBorderClass(index) {
    if (isEven(index)) {
        return 'border border-info rounded-circle';
    } else {
        return 'border border-danger rounded-circle';
    }
}

function getProductsRow(cartItems, onClickFunction) {
    if (cartItems) {
        return cartItems.map((item, index) => {
            return (
                <tr key={index} className={getBorderClass(index)}>
                   <th scope="row">{index + 1}</th>
                   <td>{item.name}</td>
                   <td>{item.price}</td>
                   <td>{item.number}</td>
                   <td>{(item.price * item.number).toFixed(2)}</td>
                   <td>
                       <button type="button" id={index}
                               className="btn btn-danger btn-sm"
                               onClick={(e) => onClickFunction(e.target)}>Remove</button>
                   </td>
                </tr>
            );
        });
    }
}

function getTotalPrice(cartItems) {
    let totalPrice = 0;
    if (cartItems) {
        cartItems.map((item) => (totalPrice += (item.price * item.number)));
    }
    return totalPrice.toFixed(2);
}

function getRandomIndex(max) {
    return Math.floor(Math.random() * (max - 0) + 0);
}


function mapStateToProps(state) {
    return {
        cartItems: state.cart
    };
}


@connect(mapStateToProps)
class CartPage extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleClick(event) {
        const dispatch = this.props.dispatch;
        dispatch(removeProduct(event.id));
    }

    handleSave() {
        const cartItems = this.props.cartItems;
        const dispatch = this.props.dispatch;
        if (cartItems.cartItems.length > 0) {
            const index = getRandomIndex(cartItems.cartItems.length);
            dispatch(removeProduct(index));
            setTimeout(this.handleSave, 1000);
        }
    }

    render() {
        const {cartItems} = this.props;
        const productItems = getProductsRow(cartItems.cartItems, this.handleClick);
        const totalPrice = getTotalPrice(cartItems.cartItems);

        return (
            <div>
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Sum</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {productItems}
                    <tr>
                        <td colSpan="4"></td>
                        <td><h3>Total {totalPrice}</h3></td>
                        <td></td>
                    </tr>
                  </tbody>
                </table>
                <div>
                    <button type="button" className="btn btn-success btn-lg btn-block"
                        onClick={this.handleSave}>Buy</button>
                </div>
            </div>
            );
    }
}


export default CartPage;
