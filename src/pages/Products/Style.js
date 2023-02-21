import styled from "styled-components";


export const StyleProducts = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  .headerProducts {
    border: 2px solid #E3E8EE;
    padding: 20px;
    border-radius: 6px;
    width: 1020px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-left: 50px;
    background: #ffffff;
    @media (max-width: 991px) {
      width: 320px;
    }
    h4 {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }

    .rightProducts {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #1c1c1c;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      select {
        background: #ffffff;
        padding: 7px;
        border: 1px solid #e3e8ee;
        font-weight: 400;
        font-size: 16px;
      }
      input {
        text-align: center;
        width: 15px;
        height: 15px;
        margin-right: 5px;
      }
    }
  }
`;

export const Icon = styled.span`
  font-size: 22px;
  color: #8b96a5;
  border: 1px solid #e3e8ee;
  padding: 5px;
  text-align: center;
  background-color: ${(props) =>
    props.view === "list"
      ? props.primary
        ? "#E3E8EE"
        : "#FFFFFF"
      : props.primary
      ? "#E3E8EE"
      : "#FFFFFF"};

`;
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 50px;
`;

export const ListItem = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  column-gap: 20px;
  margin-left: 50px;
  margin-bottom: 150px;
`;

export const GridItem = styled.div`
  padding: 20px;
`;
