import styled from "styled-components";

export const DropdownStyle = styled.div`

  border-top: 3px solid  #E3E8EE;
  margin-bottom: 20px;
  padding-top: 10px;
  width: 240px;
  h3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }
  .titleDropDown {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul {
    li {
      display: flex;
      align-items: center;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      margin-top: 15px;
      color: #1C1C1C;
      input {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }
    li:last-child {
        color: #0D6EFD;
    }
  }
  
`;
export const StyledBurger = styled.div`
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(360deg)")};
  transition: 0.5s;
`;