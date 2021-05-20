import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Products extends Component {
  render() {
    var products = [
      {
        id: 1,
        name: "Iphone X",
        price: 3500,
      },
      {
        id: 2,
        name: "Samsung Galaxy Note 20",
        price: 3000,
      },
      {
        id: 3,
        name: "Xiaomi Mi 11 Utral",
        price: 3200,
      },
    ];

    var { match } = this.props;
    console.log(match);

    var result = products.map((product, index) => {
      return (
        <NavLink key={index} to="">
          <li className="list-group-item">
            {product.id} - {product.name} - {product.price}
          </li>
        </NavLink>
      );
    });

    return (
      <div className="container">
        <h1>Danh Sách Sản Phẩm</h1>

        <div className="row">
          <ul className="list-group">{result}</ul>
        </div>
      </div>
    );
  }
}

export default Products;
