import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import PropTypes from "prop-types";
import * as Message from "../constants/Message";
import {
  actDeleteProductInCart,
  actUpdateProductInCart,
  actChangeMessage,
  actUpdateInventoryWithDelete,
  actUpdateInventoryWithQuantity,
} from "../actions/index";

class CartContainer extends Component {
  render() {
    var { cart } = this.props;
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalAmount(cart)}
      </Cart>
    );
  }

  showCartItem = (cart) => {
    var {
      onDeleteProductInCart,
      onUpdateProductInCart,
      onChangeMessage,
      onUpdateInventoryWithDelete,
      onUpdateInventoryWithQuantity,
    } = this.props;
    var result = (
      <tr>
        <td>{Message.MSG_CART_EMPTY}</td>
      </tr>
    );
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            index={index}
            onDeleteProductInCart={onDeleteProductInCart}
            onUpdateProductInCart={onUpdateProductInCart}
            onChangeMessage={onChangeMessage}
            onUpdateInventoryWithDelete={onUpdateInventoryWithDelete}
            onUpdateInventoryWithQuantity={onUpdateInventoryWithQuantity}
          />
        );
      });
    }
    return result;
  };

  showTotalAmount = (cart) => {
    var result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />;
    }
    return result;
  };
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({}).isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  onDeleteProductInCart: PropTypes.func.isRequired,
  onUpdateProductInCart: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onUpdateInventoryWithDelete: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart: (product) => {
      dispatch(actDeleteProductInCart(product));
    },
    onUpdateProductInCart: (product, quantity) => {
      dispatch(actUpdateProductInCart(product, quantity));
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    },
    onUpdateInventoryWithDelete: (product, quantity) => {
      dispatch(actUpdateInventoryWithDelete(product, quantity));
    },
    onUpdateInventoryWithQuantity: (product, inventory) => {
      dispatch(actUpdateInventoryWithQuantity(product, inventory));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
