import styled from "styled-components";

export const Content = styled.section`
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  @media (max-width: 551px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  .titleTimer {
    padding: 10px;
    h4 {
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
      letter-spacing: -0.2px;
      color: #1c1c1c;
    }
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #8b96a5;
    }
  }
  @media (max-width: 447px) {
    justify-content: center;
    align-items: center;
    font-size: 15px;
    flex-direction: row;
  }
`;

export const Timers = styled.div`
  display: flex;
  @media (max-width: 447px) {
    flex: 1;
    margin-left: 10px;
  }
`;
export const StyleTimer = styled.div`
  width: 45px;
  height: 50px;
  border-radius: 4px;
  padding: 5px;
  text-align: center;
  color: white;
  background: #606060;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 15px 5px 0 3px;
  p:first-of-type {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #ffffff;
  }
  @media (max-width: 447px) {
    background-color: white;
    color: #8b96a5;
    font-weight: 600;
    font-size: 16px;
  }
`;

export const Offers = styled.div`
  background-color: white;
  display: flex;
  @media (max-width: 1150px) {
    overflow-x: scroll;
  }
`;
export const StyleOffer = styled.div`
  text-align: center;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  padding: 42px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 120px;
    height: 120px;
  }
  h4 {
    font-weight: 400;
    font-size: 16px;
    margin: 15px 0;
  }
  p {
    color: #eb001b;
    width: 59px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    background: #ffe3e3;
    border-radius: 29px;
  }
`;
