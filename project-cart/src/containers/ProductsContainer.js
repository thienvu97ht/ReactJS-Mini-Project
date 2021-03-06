import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../components/Product";
import Products from "../components/Products";
import PropTypes from "prop-types";
import {
  actAddToCart,
  actChangeMessage,
  actUpdateProductInventory,
} from "../actions/index";

class ProductsContainer extends Component {
  render() {
    var { products } = this.props;
    return <Products>{this.showProduct(products)}</Products>;
  }

  showProduct(products) {
    var result = null;
    var { onAddToCart, onChangeMessage, onUpdateProductInventory } = this.props;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <Product
            key={index}
            product={product}
            onAddToCart={onAddToCart}
            onChangeMessage={onChangeMessage}
            onUpdateProductInventory={onUpdateProductInventory}
          />
        );
      });
    }
    return result;
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product, quantity, inventory) => {
      dispatch(actAddToCart(product, quantity, inventory));
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    },
    onUpdateProductInventory: (product, inventory) => {
      dispatch(actUpdateProductInventory(product, inventory));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
