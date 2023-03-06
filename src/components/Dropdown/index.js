import  { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { DropdownStyle, StyledBurger } from "./Style";

const Dropdown = (props) => {
  
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
    setOpen(!open);
  };
  return (
    <DropdownStyle onClick={toggle}>
      <div className="titleDropDown">
        <h3>{props.title}</h3>
        <StyledBurger open={open} className="toggle">
          <SlArrowDown />
        </StyledBurger>
      </div>
      <div>{dropdownOpen && props.children}</div>
    </DropdownStyle>
  );
};

export default Dropdown;
