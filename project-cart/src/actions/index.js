import * as Types from "../constants/ActionTypes";

export const actAddToCart = (product, quantity) => {
  return {
    type: Types.ADD_TO_CART,
    product,
    quantity,
  };
};


export const actChangeMessage = (message) => {
  return {
    type: Types.CHANGE_MASSAGE,
    message,
  };
};