import React, { Component } from "react";
import Header from "../src/components/Header";
import CartContainer from "../src/containers/CartContainer";
import MessageContainer from "../src/containers/MessageContainer";
import Footer from "../src/components/Footer";
import ProductsContainer from "../src/containers/ProductsContainer";

class App extends Component {
  render() {
    return (
      <div>
        {/* Header */}
        <Header />

        <main id="mainContainer">
          <div className="container">
            {/* Products */}
            <ProductsContainer />

            {/* Message */}
            <MessageContainer />

            {/* Cart */}
            <CartContainer />
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
