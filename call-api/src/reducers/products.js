var initialState = [
  {
    id: 1,
    name: "Iphone 12 Pro Max",
    price: 400,
    status: true,
  },
  {
    id: 2,
    name: "Xiaomi Mi 11 Utral",
    price: 500,
    status: true,
  },
  {
    id: 3,
    name: "Samsung Note 12",
    price: 600,
    status: false,
  },
];

var products = (state = initialState, action) => {
  switch (action.type) {

    default:
      return [...state];
  }
};

export default products;
