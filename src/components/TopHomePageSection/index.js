import React from "react";
import { StyleTopSection } from "./Style";
import { ContainerSection } from "../../styles/Container";
import Button from "../Button";
import Caption from "./Caption";
import { NavLink } from "react-router-dom";

import Avatar from "../../images/Avatar.jpg"

function index() {
  const Categories = [
    "Automobiles",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tools, equipments",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
    "More category",
  ];

  return (
    <ContainerSection>
      <StyleTopSection>
        <ul>
          {Categories.map((Categorie,index) => (
            <li key={index}>{Categorie}</li>
          ))}
        </ul>
        <div className="bannerBoard">
          <div className="title">
            <h2>Latest trending</h2>
            <h1>Electronic items</h1>
            <Button>Source now</Button>
          </div>
        </div>
        <div className="col3">
        <div className="detalis">
            <div className="avatar">
                <img src={Avatar}/>
                <p>Hi, user let’s get stated</p>
            </div>
            <div>
            <NavLink to="/signup">
              <Button  background="#0D6EFD" color="#FFFFFF">Join now</Button>
          </NavLink>
            </div>
            <div>
            <NavLink to="/login">
              <Button  background="#FFFFFF" color="#0D6EFD">Log in</Button>
          </NavLink>
          </div>
        </div>
          <Caption
            body="Get US $10 off with a new supplier"
            background="#F38332"
          />
          <Caption
            body="Send quotes with supplier preferences"
            background="#55BDC4"
          />
        </div>
      </StyleTopSection>
    </ContainerSection>
  );
}

export default index;
