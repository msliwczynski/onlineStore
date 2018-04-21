import React from 'react';
import {connect} from 'react-redux';
import fetchProducts from '../../common/forsikring/forsikring-actions';
import ProductItem from '../product-item';

function mapStateToProps(state) {
    return {
        forsikring: state.forsikring
    };
}

function getProductsItems(products) {
    return products.map((product, index) => {
        return (
            <ProductItem key={index}
                         product={product.product}
                         price={product.price}
                         description={product.description}
            />
        );
    });
}

@connect(mapStateToProps)
class ProductsPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const dispatch = this.props.dispatch;
        dispatch(fetchProducts());
    }

    render() {
        const {forsikring} = this.props;
        console.log(forsikring);
        console.log(forsikring.productsData);

        if (!forsikring.isFetching && forsikring.productsData.length) {
            const products = getProductsItems(forsikring.productsData);
            return (
                <div className="row">
                    {products}
                </div>
            );
        } else {
            return (<div>Loading</div>);
        }

    }
}


export default ProductsPage;
