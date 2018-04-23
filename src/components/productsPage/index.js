import React from 'react';
import {connect} from 'react-redux';
import fetchProducts from '../../actions/productsActions';
import ProductItem from '../product-item';

function mapStateToProps(state) {
    return {
        products: state.products,
        pages: state.pages
    };
}

function getProductsItems(products) {
    return products.map((product, index) => {
        return (
            <ProductItem key={index}
                         product={product.product}
                         price={product.price}
                         description={product.description}
                         productObject={product}
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
        const {products, pages} = this.props;
        console.log(products);
        console.log(products.productsData);
        console.log(pages.activePage);

        if (!products.isFetching && products.productsData.length) {
            const productsComponents = getProductsItems(products.productsData);
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
