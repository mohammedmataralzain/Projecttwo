import styled from "styled-components";

export const StyleRelatedProduct = styled.div`
padding: 10px 0;
.img {
  padding: 20px;
  background: #EFF2F4;
  border-radius: 6px;


}
  img {
    width: 140px;
    height: 140px;
    display: flex;
    margin: 0 auto;
    background: #EFF2F4;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #8b96a5;
    padding: 3px 0;
  }
  p:first-of-type {
    margin: 18px 0 10px;
    width: 140px;
    color: #505050;
  }
`;

export const RelatedProducts = styled.div`
  background: #ffffff;
  padding: 15px;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  margin: 15px 0;

  h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.2px;
    color: #1c1c1c;
    margin: 15px 0;
  }
  .relatedProducts {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
  }
`;
