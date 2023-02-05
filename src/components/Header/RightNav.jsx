import React from 'react';
import styled from 'styled-components';

import Home from "../../images/Home.png"
import Categories from "../../images/Categories.png"
import Favorites from "../../images/Favorites.png"
import MyOrders from "../../images/My orders.png"
import World from "../../images/World.png"
import ContactUs from "../../images/Contactus.png"
import About from "../../images/About.png"

const Ul = styled.ul`

  list-style: none;
  display: none;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    color: black;
    display: flex;
    align-items: center;
    gap: 15px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    background-color: #FFFFFF;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: 0;
    left: 0;
    height: 100vh;
    width: 280px;
    padding-top: 3.5rem;
    transition: transform 0.9s ease-in-out;
  }
  li:nth-child(8) {
    margin-left: 50px;
  }
  li:nth-child(9) {
    margin-left: 50px;
  }
  li:nth-child(10) {
    margin-left: 50px;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><img src={Home}/>Home</li>
      <li><img src={Categories}/>Categories</li>
      <li><img src={Favorites}/>Favorites</li>
      <li><img src={MyOrders}/>My orders</li>
      <li><img src={World}/>English | USD</li>
      <li><img src={ContactUs}/>Contact us</li>
      <li><img src={About}/>About</li>
      <li>User agreement</li>
      <li>Partnership</li>
      <li>Privacy policy</li>
    
    </Ul>
  )
}

export default RightNav