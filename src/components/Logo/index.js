import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 123px;
  height: 42px;
  padding: 10px 15px;
  background: #000000;
  border-radius: 6px;
`;

const Logo = (props) => {
  return (
    <div>
      {props.logo === "true" ? (
        <Img src={props.src} alt="My logo img" />
      ) : (
        <img src={props.src} alt="My logo img" />
      )}
    </div>
  );
};

export default Logo;
