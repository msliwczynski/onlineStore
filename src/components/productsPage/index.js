import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts, showDescription} from '../../actions/productsActions';
import ProductItem from '../product-item';
import {addProduct} from '../../actions/cartActions';

function mapStateToProps(state) {
    return {
        products: state.products
    };
}

function getProductsItems(products, onClickButtonFunction, onClickFunction) {
    console.log('onClickFn', onClickFunction);
    console.log('onClickbuttonFn', onClickButtonFunction);
    return products.map((product, index) => {
        return (
            <ProductItem key={index}
                         product={product.product}
                         price={product.price}
                         description={product.description}
                         onClickButton={onClickButtonFunction}
            />
        );
    });
}

@connect(mapStateToProps)
class ProductsPage extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
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
        const dispatch = this.props.dispatch;
        dispatch(showDescription(description));
    }

    render() {
        const {products} = this.props;

        if (!products.isFetching && products.productsData.length) {
            const productsComponents = getProductsItems(products.productsData, this.handleClick);
            return (
                <div className="row">
                    {productsComponents}
                </div>
            );
        } else {
            return (<div>Loading</div>);
        }

    }
}


export default ProductsPage;
