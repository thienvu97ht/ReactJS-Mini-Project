import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Product from "./components/Product";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/about",
    exact: false,
    main: () => <About />,
  },
  {
    path: "/contact",
    exact: false,
    main: () => <Contact />,
  },
  {
    path: "/products",
    exact: false,
    main: ({match}) => <Products match={match} />,
  },
  {
    path: "/products/:name",
    exact: true,
    main: ({match}) => <Product match={match} />
  },
  {
    path: "/login",
    exact: true,
    main: () => <Login />
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default routes;
