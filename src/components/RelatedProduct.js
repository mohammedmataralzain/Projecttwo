import React from "react";
import styled from "styled-components";

const StyleRelatedProduct = styled.div`
  img {
    width: 140px;
    height: 140px;
    background: #EFF2F4;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #8b96a5;
  }
  p:first-of-type {
    margin: 18px 0 10px;
    width: 140px;
    color: #505050;
  }
`;
const RelatedProduct = (props) => {
  return (
    <StyleRelatedProduct>
      <img src={props.src} alt="img not found" />
      <p>{props.title}</p>
      <p>{props.price}</p>
    </StyleRelatedProduct>
  );
};

export default RelatedProduct;
