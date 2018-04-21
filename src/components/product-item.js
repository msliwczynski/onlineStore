import React, {PropTypes} from 'react';

class ProductItem extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const {product, price} = this.props;
        return (<div className="col-sm-4 bg-white">
            <div className="card">
                <div className="text-center card-body">
                    <h5 className="card-title">{product}</h5>
                    <div className="row bg-light">
                        <div className="col text-center">
                            <h4>{price}</h4>
                        </div>
                        <div className="col text-center">
                            <button type="button" className="btn btn-danger">Add to Cart</button>
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
    description: PropTypes.string.isRequired
};

export default ProductItem;
