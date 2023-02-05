import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import styled from "styled-components";

const DropdownStyle = styled.div`
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
  .titleDropDown {
    .toggle {
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
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
const StyledBurger = styled.div`
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(360deg)")};
`;
const Dropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
    setOpen(!open);
  };
  return (
    <DropdownStyle>
      <div className="titleDropDown">
        <h3>{props.title}</h3>
        <StyledBurger onClick={toggle} open={open} className="toggle">
          <SlArrowDown />
        </StyledBurger>
      </div>
      <div>{dropdownOpen && props.children}</div>
    </DropdownStyle>
  );
};

export default Dropdown;
