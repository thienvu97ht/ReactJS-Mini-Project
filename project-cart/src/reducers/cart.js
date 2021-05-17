import * as types from "../constants/ActionTypes";

var data = JSON.parse(localStorage.getItem("CART"));
var initialState = [
  {
    product: {
      id: 2,
      name: "Xiaomi Mi 11 Utral",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/235578/xiaomi-mi-11-ultra-600x600-2-600x600.jpg",
      description: "Sản phẩm do Xiaomi sản xuất",
      price: 400,
      inventory: 10,
      rating: 3,
    },
    quantity: 5,
  },
];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      console.log(action);
      return [...state];
    default:
      return [...state];
  }
};

export default cart;
