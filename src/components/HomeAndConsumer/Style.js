import styled from "styled-components";
import Homeandoutdoor from "../../images/Homeandoutdoo.png";
import Consumerelectronics from "../../images/Consumerelectronics.png";

export const StyleItem = styled.div`
  display: flex;
  border: 1px solid #e0e0e0;
  padding: 20px;
  background: #ffffff;

  img {
    width: 80px;
    height: 90px;
    margin-left: 40px;
  }
  h4 {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #1c1c1c;
  }
  p {
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #8b96a5;
    width: 60px;
    height: 32px;
    margin-top: 15px;
  }
  @media (max-width: 991px) {
    flex-direction: column;
    img {
      order: -2;
      margin: auto;
    }
    h4,
    p {
      text-align: center;
    }
    p {
      font-size: 13px;
      line-height: 16px;
      width: 100px;
    }
  }
`;

export const StyleSection = styled.section`
  .title {
    h3 {
      font-weight: 600;
      font-size: 20px;
      line-height: 26px;
      letter-spacing: -0.2px;
      color: #1c1c1c;
      width: 180px;
      height: 52px;
      padding: 15px;
    }
    button {
      background: #ffffff;
      border: 1px solid #ffffff;
      box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
      border-radius: 6px;
      margin: 35px 15px;

    }
  }
  .titleConsumerElectronics {
    background-image: url(${Consumerelectronics});
    background-repeat: no-repeat;
    button {
      margin-top: 55px;

    }
  }
  .titleHomeAndOutdoor {
    background-image: url(${Homeandoutdoor});
    background-repeat: no-repeat;
  }
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin-top: 20px;
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
  }
`;
export const StyleItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  @media (max-width: 991px) {
    display: flex;
    overflow-x: scroll;
  }
`;
