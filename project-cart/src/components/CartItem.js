import React, { Component } from "react";
import * as Message from "../constants/Message";

class CartItem extends Component {
  render() {
    var { item } = this.props;
    var { quantity } = item;

    return (
      <tr>
        <th scope="row">
          <img
            src={item.product.image}
            alt={item.product.name}
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              onClick={() =>
                this.onUpdateQuantity(item.product, item.quantity - 1)
              }
              className="btn btn-sm btn-primary
                                            btn-rounded waves-effect waves-light">
              <button>—</button>
            </label>
            <label
              onClick={() =>
                this.onUpdateQuantity(item.product, item.quantity + 1)
              }
              className="btn btn-sm btn-primary
                                            btn-rounded waves-effect waves-light">
              <button>+</button>
            </label>
          </div>
        </td>
        <td>{this.showSubTotal(item.product.price, item.quantity)}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() =>
              this.onDelete(item.product, item.quantity)
            }>
            X
          </button>
        </td>
      </tr>
    );
  }

  onUpdateQuantity = (product, quantity) => {
    if (quantity > 0) {
      var { onUpdateProductInCart, onChangeMessage } = this.props;
      onUpdateProductInCart(product, quantity);
      onChangeMessage(Message.MSG_UPDTAE_CART_SUCCESS);
    }
  };

  onDelete = (product, quantity) => {
    var { onDeleteProductInCart, onUpdateInventoryWithDelete } = this.props;
    onDeleteProductInCart(product);
    onUpdateInventoryWithDelete(product, quantity);
  };

  showSubTotal = (price, quantity) => {
    return price * quantity;
  };
}

export default CartItem;
