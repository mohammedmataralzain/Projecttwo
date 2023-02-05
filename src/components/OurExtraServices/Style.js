import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
 
`;

export const StyleService = styled.div`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  position: relative;
  
  img {
    border-radius: 6px 6px 0 0;
  }
  p {
    max-width: 170px;
    padding: 5px 0 5px 10px;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
  }
  div {
    width: 55px;
    height: 55px;
    background-color: #d1e7ff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 20px;
    top: 50%;
  }
`;
