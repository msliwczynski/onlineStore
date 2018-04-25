import React, {PropTypes} from 'react';

class ProductItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {product, price, description, onClickButton, handleDescription} = this.props;
        const productObject = {
            name: product,
            price: price
        };
        return (<div className="col-sm-4 bg-white">
            <div className="card border">
                <div className="text-center card-body product-body" onClick={(e) => handleDescription(e.target, description)}>
                    <h5 className="card-title">{product}</h5>
                    <div className="row bg-light product-price-button border">
                        <div className="col text-center">
                            <h4 className="text-danger">${price}</h4>
                        </div>
                        <div className="col text-center">
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={(e) => onClickButton(e.target, productObject)}>Add to Cart
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
    onClickButton: PropTypes.func.isRequired,
    handleDescription: PropTypes.func.isRequired
};

export default ProductItem;
