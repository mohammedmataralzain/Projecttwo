import React from "react";
import Header from "../components/Header";
import Search from "../components/Search"
import Footer from "../components/Footer";
import Series from "../components/Series";
import { Container } from "../styles/Container";
import Discount from "../components/Discount";

import ProductDescription from "../components/ProductDescription";
import ProductDetails from "../components/ProductDetails";
import  RelatedProducts from "../components/RelatedProducts"
import Nav from "../components/Header/Nav";
const SingleProduct = () => {
  return (
    <div>
       <Header Search={<Search/>} Nav={ <Nav />} />
      <Container>
        <Series />
        <ProductDetails />
        <ProductDescription />
        <RelatedProducts />
        <Discount />
      </Container>
      <Footer />
    </div>
  );
};

export default SingleProduct;
