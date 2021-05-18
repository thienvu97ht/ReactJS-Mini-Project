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
    inventory: 10,
    rating: 3,
  },
  {
    id: 3,
    name: "Samsung Galaxy Note 20 Ultra",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/220522/samsung-galaxy-note-20-ultra-vangdong-600x600-200x200.jpg",
    description: "Sản phẩm do Samsung sản xuất",
    price: 700,
    inventory: 10,
    rating: 5,
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;
