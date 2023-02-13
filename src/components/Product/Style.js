import styled from "styled-components";

export const StyleProduct = styled.div`
  background-color: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
   padding: 10px 0;
  margin: 20px 0; 
  img {
    width: 230px;
    height: 230px;
    display: flex;
    margin: 20px auto;
  }
  .price {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
    border-top: 1px solid #EFF2F4;

    p span {
      text-decoration: line-through;
      color: #8b96a5;
      margin-left: 5px;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .evaluation {
    color: #ff9017;
  }
  .star {
    width: 15px;
    height: 15px;
  }

  .body {
    width: 215px;
    padding: 10px;
    font-weight: 200;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #606060;
  }
  .stars {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
  }
  .like {
    width: 40px;
    height: 40px;
    padding: 5px;
    color: #0d6efd;
    transition: 0.5s;
    border: 1px solid #e3e8ee;
    box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
    border-radius: 6px;
    margin-right: 15px;
    &:hover {
      background-color: black;
      color: white;
    }
  }
  .gridItem {
    height: 400px;
  }
  .listItem {
    display: flex;
   
    .description {
      flex: 1;
      .title {
        display: flex;
        justify-content: space-between;
        h3 {
          font-weight: 500;
          font-size: 16px;
          line-height: 22px;
        }
      }
      .body {
        width: 610px;
      }
      .orders,
      .freeShipping {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
      }
      .orders {
        color: #8b96a5;
      }
      .freeShipping {
        color: #00b517;
      }
    }
    .details {
      font-weight: 500;
      font-size: 16px;
      color: #0d6efd;
    }
  }
`;