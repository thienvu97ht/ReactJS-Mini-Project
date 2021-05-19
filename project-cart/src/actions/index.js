import * as Types from "../constants/ActionTypes";

export const actAddToCart = (product, quantity, inventory) => {
  return {
    type: Types.ADD_TO_CART,
    product,
    quantity,
    inventory,
  };
};

export const actChangeMessage = (message) => {
  return {
    type: Types.CHANGE_MASSAGE,
    message,
  };
};

export const actDeleteProductInCart = (product) => {
  return {
    type: Types.DELETE_PRODUCT_IN_CART,
    product,
  };
};

export const actUpdateProductInCart = (product, quantity) => {
  return {
    type: Types.UPDATE_PRODUCT_IN_CART,
    product,
    quantity,
  };
};

export const actUpdateProductInventory = (product, inventory) => {
  return {
    type: Types.UPDATE_PRODUCT_INVENTORY,
    product,
    inventory,
  };
};

export const actUpdateInventoryWithDelete = (product, quantity) => {
  return {
    type: Types.UPDATE_INVENTORY_WITH_DELETE,
    product,
    quantity,
  };
};

export const actUpdateInventoryWithQuantity = (product, inventory) => {
  return {
    type: Types.UPDATE_INVENTORY_WITH_QUANTITY,
    product,
    inventory,
  };
};
