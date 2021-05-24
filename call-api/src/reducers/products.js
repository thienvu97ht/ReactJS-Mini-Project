import * as Types from "../constants/ActionTypes";

var initialState = [];

var products = (state = initialState, action) => {
  var index = -1;
  var { id } = action;
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      state = action.products;
      return [...state];

    case Types.DELETE_PRODUCT:
      index = state.findIndex((product) => product.id === id);
      state.splice(index, 1);
      return [...state];

    case Types.ADD_PRODUCT:
      state.push(action.product);
      return [...state];
      
    default:
      return [...state];
  }
};

export default products;
