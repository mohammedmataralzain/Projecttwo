import styled from "styled-components";

export const StyleSubscribe = styled.section`
  background: #eff2f4;
  padding: 50px 0;
  text-align: center;
  h4 {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.2px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #606060;
  }

  form {
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .InputContainer {
      position: relative;
      display: inline-block;
      input {
        height: 40px;
        width: 274px;
        padding: 15px 40px 15px 35px;
        font-size: 16px;
        border: 1px solid #e3e8ee;
        border-radius: 6px;
        margin-right: 20px;
        background: #ffffff;
      }
      .icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: #8b96a5;
      }
    }
    button {
      border-radius: 6px;
    }
  }
`;
