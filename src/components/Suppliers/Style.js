import styled from "styled-components";

export  const StyleCountry = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;

  img {
    width: 28px;
  }
  h3 {
    color: #1c1c1c;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
  }
  p {
    color: #8b96a5;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
  }
`;

export const CardsSuppliers = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 30px;
  padding-bottom: 50px;
`;