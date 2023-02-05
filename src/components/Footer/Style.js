import styled from "styled-components";

export const Footr = styled.footer`
  padding-top: 30px;
  background-color: #FFFFFF;
  h3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    margin-top: 15px;
  }

  p {
    width: 276px;
    color: #505050;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    margin: 18px 0;
  }

  .links {
    ul {
      margin-top: 10px;
      li {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.2px;
        cursor: pointer;
        a {
          color: #8b96a5;
        }
      }
    }
  }

  .colums {
    display: grid;
    grid-template-columns: 2fr repeat(5, 1fr);

    @media (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
      padding: 30px;
    }

    @media (max-width: 568px) {
      grid-template-columns: repeat(1, 1fr);
      padding: 10px;
    }
  }
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #bbbcbe;
  color: white;
  font-size: 15px;
  margin-right: 10px;
`;
export const Icons = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
export const Row = styled.div`
    background-color: #EFF2F4;
  .ContainerSection {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    margin-bottom: 0;
    font-weight: 400;
    font-size: 16px;
    color: #606060;
  }
  select {
    border: none;
    color: #606060;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    background-color: #EFF2F4;

  }
`;
