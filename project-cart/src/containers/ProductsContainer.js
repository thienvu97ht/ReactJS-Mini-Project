import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../components/Product";
import Products from "../components/Products"

class ProductContainer extends Component {
  render() {
    var { products } = this.props;
    return (
      <Products>
        { this.showProduct(products)}
      </Products>
    );
  }

  showProduct(products) {
    var result = null;
    if(products.length > 0){
      result = products.map((product, index) =>{
        return <Product key={index} product={product}/>
      })
    }
    return result;
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(ProductContainer);
