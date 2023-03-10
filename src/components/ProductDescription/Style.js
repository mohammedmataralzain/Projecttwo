import styled from "styled-components";

export const Tabs = styled.div`
  width: 450px;
  height: 50px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #8b96a5;
  padding: 0 20px;
`;
export const Tab = styled.button`
  padding: 0 11px;
  border: none;
  outline: none;
  cursor: pointer;
  text-align: center;
  height: 50px;
  font-size: 1em;
  background-color: white;
  border-bottom: ${(props) => (props.active ? "3px solid #0D6EFD" : "")};
  color: ${(props) => (props.active ? "#0D6EFD" : "black")};
  transition: 0.1s;
`;
export const Content = styled.div`
    border-top: 2px solid #eff2f4;

  p {
    padding: 10px 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    width: 798px;
    letter-spacing: -0.2px;
    color: #505050;
  }
  ${(props) => (props.active ? "" : "display:none")}
`;

export const Ul = styled.ul`
  padding: 0 20px;
  li {
    padding: 5px 15px;
    position: relative;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #505050;
    &:after {
      content: "✔︎";
      position: absolute;
      left: 0;
      color: #8b96a5;
    }
  }
`;
export const Details = styled.div`
  width: 80%;
  background: #ffffff;
  border: 1px solid #E3E8EE;
  box-shadow: 0px 1px 3px rgba(56, 56, 56, 0.1);
  border-radius: 6px;
`;
export const Wraper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .myLike {
    border: 1px solid #E3E8EE;
    border-radius: 10px;
    h2 {
      padding: 10px;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      color: #1c1c1c;
    }
    width: 260px;
    background-color: #ffffff;
    height: 460px;
    
  }
`;

export const StyleProductLike = styled.div`
  background-color: #ffffff;
  padding: 5px;
  display: flex;
  div:first-child {
    width: 70px;
    height: 70px;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
  }
  img {
    width: 55px;
    height: 60px;

  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    margin-left: 10px;
  }
  p:first-of-type {
    color: #1c1c1c;
    width: 151px;
  }
  p:last-of-type {
    color: #8b96a5;
  }
`;