import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts, showDescription, hideDescription} from '../../actions/productsActions';
import ProductItem from '../product-item';
import {addProduct} from '../../actions/cartActions';

function mapStateToProps(state) {
    return {
        products: state.products
    };
}

function getProductsItems(products, onClickButtonFunction, onClickFunction) {
    return products.map((product, index) => {
        return (
            <ProductItem key={index}
                         product={product.product}
                         price={product.price}
                         description={product.description}
                         onClickButton={onClickButtonFunction}
                         handleDescription={onClickFunction}
            />
        );
    });
}

@connect(mapStateToProps)
class ProductsPage extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.hideDescription = this.hideDescription.bind(this);
    }

    componentWillMount() {
        const dispatch = this.props.dispatch;
        dispatch(fetchProducts());
    }

    handleClick(event, product) {
        const dispatch = this.props.dispatch;
        dispatch(addProduct(product));
    }

    handleDescription(event, description) {
        if (event.tagName !== 'BUTTON') {
            const dispatch = this.props.dispatch;
            dispatch(showDescription(description));
        }
    }

    hideDescription() {
        const dispatch = this.props.dispatch;
        dispatch(hideDescription());
    }

    render() {
        const {products} = this.props;

        if (!products.isFetching && products.productsData.length) {
            const productsComponents = getProductsItems(products.productsData, this.handleClick, this.handleDescription);
            return (
                <div>
                    <div className="row">
                        <div className="col-sm">
                        </div>
                        <div className="col-sm">
                        </div>
                        <div className="col-sm alert alert-light">
                            {products.description !== '' &&
                                <div>
                                    <div>{products.description}</div>
                                    <div className="text-right">
                                    <button className="btn btn-secondary btn-sm"
                                        onClick={this.hideDescription}>close</button>
                                    </div>
                                </div>}
                        </div>
                    </div>
                    <div className="row">
                        {productsComponents}
                    </div>
                </div>
            );
        } else {
            return (<div>Loading</div>);
        }

    }
}


export default ProductsPage;
