import styled from "styled-components";

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 30px;
`;
export const StyleRecommendedCard = styled.div`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 15px;

  img {
    width: 191px;
    height: 191px;
  }
  h4 {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    margin-top: 20px;
  }
  p {
    width: 166px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #8b96a5;
  }
`;