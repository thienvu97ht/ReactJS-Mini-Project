import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Menu */}
          <nav className="navbar navbar-inverse">
            <ul className="nav navbar-nav">
              <li className="active">
                <NavLink
                  exact
                  to="/"
                  className="my-link">
                  Trang Chủ
                </NavLink>
              </li>
              <li className="active">
                <NavLink
                  to="/about"
                  className="my-link">
                  Giới thiệu
                </NavLink>
              </li>
              <li className="active">
                <NavLink
                  to="/contact"
                  className="my-link">
                  Liên Hệ
                </NavLink>
              </li>
            </ul>
          </nav>
          {/* Nội Dung */}
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
