import styled from "styled-components";

export const StyleItemCart = styled.div`
  padding: 23px;
  width: 840px;
  height: 136px;
  display: flex;
  margin-bottom: 20px;
  gap: 20px;
  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .price {
      color: #1c1c1c;
      margin: 0 0 10px 30px;
    }
    select {
      border: 1px solid #e3e8ee;
      border-radius: 6px;
      padding: 10px 30px 10px 0;
    }
  }
  img {
    width: 60px;
    height: 60px;
  }
  h3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #1c1c1c;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #8b96a5;
  }

  button {
    height: 30px;
    border: 1px solid #e3e8ee;
    box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
    border-radius: 6px;
    margin-right: 5px;
    padding-top: 10px;
  }
  button:first-of-type {
    width: 71px;
  }
  button:last-of-type {
    width: 108px;
    color: #0d6efd;
  }
`;
