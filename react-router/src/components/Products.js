import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Products extends Component {
  render() {
    var products = [
      {
        id: 1,
        slug: "iphone",
        name: "Iphone X",
        price: 3500,
      },
      {
        id: 2,
        slug: "samsung",
        name: "Samsung Galaxy Note 20",
        price: 3000,
      },
      {
        id: 3,
        slug: "xiaomi",
        name: "Xiaomi Mi 11 Utral",
        price: 3200,
      },
    ];

    var { match } = this.props;
    var url = match.url;

    var result = products.map((product, index) => {
      return (
        <NavLink key={index} to={`${url}/${product.slug}`}>
          <li className="list-group-item">
            {product.id} - {product.name} - {product.price}
          </li>
        </NavLink>
      );
    });

    var {location} = this.props;
    console.log(location);

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
