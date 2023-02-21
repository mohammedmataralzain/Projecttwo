import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ErrorPage from "./components/Error";
import Login from "./pages/login";
import SignUp from "./pages/SignUp";
import SingleProduct from "./pages/SingleProduct";
import GlobalStyle from "./GlobalStyle";
import Products from "./pages/Products";
import MyCart from "./pages/MyCart";
import ProductProvider from "./context/productContext";

function App() {
  return (
    <ProductProvider>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/singleproduct" element={<SingleProduct />} />
        <Route path="/MyCart" element={<MyCart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
