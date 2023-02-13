import React from "react";
import styled from "styled-components";

import Home from "../../images/Home.png";
import Categories from "../../images/Categories.png";
import Favorites from "../../images/Favorites.png";
import MyOrders from "../../images/My orders.png";
import World from "../../images/World.png";
import ContactUs from "../../images/Contactus.png";
import About from "../../images/About.png";
import { UlMobile } from "./Style";

const Data = [
  { src: Home, title: "Home" },
  { src: Categories, title: "Categories" },
  { src: Favorites, title: "Favorites" },
  { src: MyOrders, title: "My orders" },
  { src: World, title: "English | USD" },
  { src: ContactUs, title: "Contact us" },
  { src: About, title: "About" },
  { src: "", title: "User agreement" },
  { src: "", title: "Partnership" },
  { src: "", title: "Privacy policy" },
];
const RightNav = ({ open }) => {
  return (
    <UlMobile open={open}>
      {Data.map((item,index) => (
        <li key={index}>
          <img src={item.src}/>
          {item.title}
        </li>
      ))}
    </UlMobile>
  );
};

export default RightNav;
