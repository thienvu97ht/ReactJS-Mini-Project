var initialState = [
  {
    id: 1,
    name: "Iphone 12 Pro Max",
    image:
      "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
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
