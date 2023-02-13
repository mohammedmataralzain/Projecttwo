import React from "react";
import { SlArrowRight } from "react-icons/sl";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  align-items: center;
  color: #8b96a5;
  gap: 7px;
  padding-top: 20px;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    .arrowRight {
      margin-left: 5px;
      width: 20px;
      height: 10px;
    }
  }
`;
const Series = () => {
  return (
    <Ul>
      <li>
        Home
        <SlArrowRight className="arrowRight" />
      </li>
      <li>
        Clothings
        <SlArrowRight className="arrowRight" />
      </li>
      <li>
        Men’s wear
        <SlArrowRight className="arrowRight" />
      </li>
      <li>Summer clothing</li>
    </Ul>
  );
};

export default Series;
