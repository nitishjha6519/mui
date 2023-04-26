import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Cart from "./components/Cart";
import Product from "./components/Product";
import { store } from "../src/store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="/product"
        element={
          <Provider store={store}>
            <Product />
          </Provider>
        }
      />
      <Route
        path="/cart"
        element={
          <Provider store={store}>
            <Cart />
          </Provider>
        }
      />
    </Routes>
  </BrowserRouter>
);
