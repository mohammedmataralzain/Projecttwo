import styled from "styled-components";
import background from "../../images/sendRequests.png";

export const StyleSendRequests = styled.div`
  
  margin-top: 20px;
  padding: 40px;
  max-width: 1290px;
  height: 446px;
  display: flex;
  justify-content: space-between;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 6px;

  h1 {
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: -0.2px;
    color: #ffffff;
    width: 440px;
    @media (max-width: 991px) {
      line-height: 25px;
      font-size: 18px;
      width: 217px;
    }
  }

  p {
    margin-top: 10px;
    width: 390px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #ffffff;
    @media (max-width: 700px) {
      display: none;
    }
  }
  .title button {
    display: none;
    margin-top: 20px;
    border-radius: 6px;
    background: linear-gradient(180deg, #127fff 0%, #0067ff 100%);
    border: 1px solid #0d6efd;
    border-radius: 6px;
    width: 104px;
    height: 30px;
    @media (max-width: 990px) {
      display: block;
    }
  }

  form {
    box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.25);
    border-radius: 6px;
    width: 491px;
    height: 346px;
    padding: 20px;
    overflow-x: hidden;
    background-color: #ffffff;

    h3 {
      font-weight: 600;
      font-size: 20px;
    margin-bottom: 10px;

    }

    select {
      border: none;
      padding: 10px;
    }

    button {
      margin-top: 20px;
      display: block;
    }

    select,
    button {
      border-radius: 6px;
    }
    @media (max-width: 991px) {
      display: none;
    }
  }
  @media (max-width: 700px) {
    padding: 10px;
    font-size: 14px;
    height: 155px;
  }
`;

export const Input = styled.input`
  margin-bottom: 20px;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: #8b96a5;
`;
