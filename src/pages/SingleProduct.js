import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import Series from "../components/Series";
import { Container } from "../styles/Container";
import Discount from "../components/Discount";
import RelatedProduct from "../components/RelatedProduct";

import iPhone2 from "../images/iPhone - Apple2.png";
import Electricwaterheater from "../images/Electricwaterheater.png";
import Laptops from "../images/Laptops.png";
import Smartwatches from "../images/Smartwatches.png";
import Smartphones from "../images/Smartphones.png";
import Headphones from "../images/Headphones.png";
import styled from "styled-components";
import ProductDescription from "../components/ProductDescription";
import ProductDetails from "../components/ProductDetails";

const RelatedProducts = styled.div`
  background: #ffffff;
  padding: 15px;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  margin: 15px 0;

  h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.2px;
    color: #1c1c1c;
    margin: 15px 0;
  }
  .relatedProducts {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
  }
`;

const SingleProduct = () => {
  return (
    <div>
      <Header />
      <Container>
        <Series />
        <ProductDetails/>
        <ProductDescription />
        <RelatedProducts>
          <h2>Related products</h2>
          <div className="relatedProducts">
            <RelatedProduct
              key={"1"}
              src={Smartphones}
              title="Xiaomi Redmi 8 Original"
              price="$32.00-$40.00"
            />
            <RelatedProduct
              key={"2"}
              src={Smartwatches}
              title="Xiaomi Redmi 8 Original"
              price="$32.00-$40.00"
            />
            <RelatedProduct
              key={"3"}
              src={Headphones}
              title="Xiaomi Redmi 8 Original"
              price="$32.00-$40.00"
            />
            <RelatedProduct
              key={"4"}
              src={Laptops}
              title="Xiaomi Redmi 8 Original"
              price="$32.00-$40.00"
            />
            <RelatedProduct
              key={"5"}
              src={Electricwaterheater}
              title="Xiaomi Redmi 8 Original"
              price="$32.00-$40.00"
            />
            <RelatedProduct
              key={"6"}
              src={iPhone2}
              title="Xiaomi Redmi 8 Original"
              price="$32.00-$40.00"
            />
          </div>
        </RelatedProducts>
        <Discount />
      </Container>
      <Footer />
    </div>
  );
};

export default SingleProduct;
