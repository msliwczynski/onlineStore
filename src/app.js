import React from 'react';
import {connect} from 'react-redux';

import ProductsPage from './components/productsPage';

function mapStateToProps(state) {
    return {
        forsikring: state.forsikring
    };
}

@connect(mapStateToProps)
class App extends React.Component {
    render() {
        return (
            <div className="container">
                <ProductsPage />
            </div>
        );
    }
}
export default App;
