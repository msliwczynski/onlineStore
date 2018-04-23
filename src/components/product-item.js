import React, {PropTypes} from 'react';
import {addProduct} from '../actions/cartActions';

class ProductItem extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick = (e) => {
        console.log('props', this.props);
        const dispatch = this.props.dispatch;
        const product = this.props.productObject;
        console.log('product to add', product);
        dispatch(addProduct(product));
        console.log('Click happened', e);
    }

    render() {
        const {product, price} = this.props;
        console.log('render props', this.props);
        return (<div className="col-sm-4 bg-white">
            <div className="card">
                <div className="text-center card-body">
                    <h5 className="card-title">{product}</h5>
                    <div className="row bg-light">
                        <div className="col text-center">
                            <h4>{price}</h4>
                        </div>
                        <div className="col text-center">
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={(e) => this.handleClick(e.target)}>Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}

ProductItem.propTypes = {
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    productObject: PropTypes.object.isRequired
};

export default ProductItem;
