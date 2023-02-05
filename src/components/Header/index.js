import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import Burger from "./Burger";
import Button from "../Button";
import { Container } from "../../styles/Container";
import { HiShoppingCart } from "react-icons/hi";
import { MdMessage } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GiSelfLove } from "react-icons/gi";

import logo from "../../images/logo1.png";
import Orders from "../../images/Orders.png";
import Profile from "../../images/Profile.png";
import Message from "../../images/Message.png";
import MyCart from "../../images/My cart.png";
import Nav from "./Nav";
import { StyleHeader, Wrraper,Form,Ul } from "./Style";
import { NavLink } from "react-router-dom";



const Header = () => {
  return (
    <Wrraper>
      <Container>
        <StyleHeader>
          <Burger />
          <NavLink to="/">
            <Logo src={logo} logo="false" />
          </NavLink>
          <Form>
            <input type="text" placeholder="Search" />
            <select name="cars" id="cars">
              <option value="volvo">All category</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <Button background="#0D6EFD">Search</Button>
          </Form>
          <Ul>
            <li>
              <CgProfile className="icon" />
              Profile
            </li>
            <li>
              <MdMessage className="icon" />
              Message
            </li>
            <li>
              <GiSelfLove className="icon" />
              Orders
            </li>
            <li>
              <HiShoppingCart className="icon" />
              Mycart
            </li>
          </Ul>
        </StyleHeader>
      </Container>
      <Wrraper>
   <Container>

        <Nav />
   </Container>
      </Wrraper>
    </Wrraper>
  );
};

export default Header;
