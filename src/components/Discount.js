import React from 'react'
import styled from 'styled-components';
import Button from './Button';

const ShapeDiscount = styled.div`
  .card-holder {
    margin: 30px 0;
    .card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 95%;
      height: 120px;
      padding: 0 25px;
      border-radius: 6px;
      color: #ffffff;

      h2 {
        font-weight: 600;
        font-size: 24px;
        letter-spacing: -0.2px;
      }
      p {
        font-weight: 400;
        font-size: 16px;
        opacity: 0.7;
      }
      button {
        color: #ffffff;
        background-color: #FF9017;
        border-radius: 6px;
      }
    }
    .bg-gold {
      background: -webkit-linear-gradient(200deg, #005ade 40%, #237cff 20%);
    }
  }
`;
const Discount = () => {
  return (
    <ShapeDiscount>
    <div class="card-holder">
      <div class="card bg-gold">
        <div>
          <h2>Super discount on more than 100 USD</h2>
          <p>Have you ever finally just write dummy info</p>
        </div>
        <Button>Shop now</Button>
      </div>
    </div>
  </ShapeDiscount>
  )
}

export default Discount