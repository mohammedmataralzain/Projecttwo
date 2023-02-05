import React from "react";
import styled from "styled-components";

const StyleProductLike = styled.div`
background-color: #FFFFFF;
  display: flex;
  div:first-child {
    width: 70px;
height: 70px;
border: 1px solid #E0E0E0;
border-radius: 6px;
  }
  img {
    width: 55px;
    height: 60px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
  }
  p:first-of-type {
    color: #1c1c1c;
    width: 151px;
  }
  p:last-of-type {
    color: #8b96a5;
  }
`;
export const ProductLike = (props) => {
  return (
    <StyleProductLike>
      <div>
        <img src={props.src} />
      </div>
      <div>
        <p>{props.title}</p>
        <p>{props.price}</p>
      </div>
    </StyleProductLike>
  );
};
