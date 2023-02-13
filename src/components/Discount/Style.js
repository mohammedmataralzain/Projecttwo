import styled from "styled-components";

export const ShapeDiscount = styled.div`
  .card-holder {
    margin: 30px 0;
    .card {
      display: flex;
      justify-content: space-between;
      align-items: center;
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
        background-color: #ff9017;
        border-radius: 6px;
      }
    }
    .bg-gold {
      background: -webkit-linear-gradient(200deg, #005ade 40%, #237cff 20%);
    }
  }
`;