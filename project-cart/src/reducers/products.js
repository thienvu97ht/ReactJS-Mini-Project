import * as Types from "../constants/ActionTypes";

var initialState = [
  {
    id: 1,
    name: "Iphone 12 Pro Max",
    image:
      "https://img.websosanh.vn/v2/users/root_product/images/dien-thoai-apple-iphone-12-pro/g94ypm6w72qaz.jpg?compress=85",
    description: "Sản phẩm do Apple sản xuất",
    price: 900,
    inventory: 10,
    rating: 4,
  },
  {
    id: 2,
    name: "Xiaomi Mi 11 Utral",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/235578/xiaomi-mi-11-ultra-600x600-2-600x600.jpg",
    description: "Sản phẩm do Xiaomi sản xuất",
    price: 400,
    inventory: 20,
    rating: 3,
  },
  {
    id: 3,
    name: "Samsung Galaxy Note 20",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/220522/samsung-galaxy-note-20-ultra-vangdong-600x600-200x200.jpg",
    description: "Sản phẩm do Samsung sản xuất",
    price: 700,
    inventory: 15,
    rating: 5,
  },
];

const products = (state = initialState, action) => {
  var { product, inventory, quantity } = action;
  var index = -1;
  switch (action.type) {
    case Types.UPDATE_PRODUCT_INVENTORY:
      index = findProductInCart(state, product);
      if (index !== -1 && state[index].inventory > 0) {
        state[index].inventory = inventory - 1;
      }
      return [...state];

    case Types.UPDATE_INVENTORY_WITH_DELETE:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].inventory = state[index].inventory + quantity;
      }

      return [...state];

      case Types.UPDATE_INVENTORY_WITH_QUANTITY:
        index = findProductInCart(state, product);
        if (index !== -1) {
          state[index].inventory = inventory;
        }
  
        return [...state];

    default:
      return [...state];
  }
};
  
var findProductInCart = (cart, product) => {
  var index = -1;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].id === product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};

export default products;
