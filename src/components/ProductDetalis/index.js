import React, { useState } from "react";
import styled from "styled-components";
import { Content, Tab, Tabs } from "./Style";
import TabelDetalis from "./TabelDetalis";
import { IoCheckmark } from "react-icons/io";
import Vector from "../../images/Vector.png";
import cloth2 from "../../images/cloth2.png";
import cloth3 from "../../images/cloth3.png";
import { ProductLike } from "./ProductLike";
import {Details,Ul,Wraper} from "./Style"
const ProductDetalis = () => {
  const [active, setActive] = useState(0);
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
 
  return (
    <Wraper>
        <Details>
          <Tabs>
            <Tab onClick={handleClick} active={active === 0} id={0}>
              Description
            </Tab>

            <Tab onClick={handleClick} active={active === 1} id={1}>
              Reviews
            </Tab>

            <Tab onClick={handleClick} active={active === 2} id={2}>
              Shipping
            </Tab>
            <Tab onClick={handleClick} active={active === 3} id={3}>
              About company
            </Tab>
          </Tabs>
          <>
            <Content active={active === 0}>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur.
                </p>
                <TabelDetalis
                  model="#8786867"
                  style="Classic style"
                  certificate="ISO-898945656"
                  size="40mm x 450mm x 29mm"
                  memory="256GB RAM"
                />
                <Ul>
                  <li>Some great feature name here</li>
                  <li>Lorem ipsum dolor sit amet, consectetur </li>
                  <li>Duis aute irure dolor in reprehenderit</li>
                  <li>Some great feature name here</li>
                </Ul>
              </div>
            </Content>
            <Content active={active === 1}>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. pariatur.
                </p>
                <TabelDetalis
                  model="#1564544"
                  style="Genral style"
                  certificate="ISO-111121212"
                  size="34mm x 450mm x 19mm"
                  memory="128GB RAM"
                />
                <Ul>
                  <li>Some great feature name here</li>
                  <li>Lorem ipsum dolor sit amet, consectetur </li>
                  <li>Duis aute irure dolor in reprehenderit</li>
                  <li>Some great feature name here</li>
                </Ul>
              </div>
            </Content>
            <Content active={active === 2}>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nosts aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Ut enim ad minim veniam, Quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <TabelDetalis
                  model="#1487487"
                  style="Static style"
                  certificate="ISO-787821313"
                  size="65mm x 490mm x 79mm"
                  memory="64GB RAM"
                />
                <Ul>
                  <li>Some great feature name here</li>
                  <li>Lorem ipsum dolor sit amet, consectetur </li>
                  <li>Duis aute irure dolor in reprehenderit</li>
                  <li>Some great feature name here</li>
                </Ul>
              </div>
            </Content>
            <Content active={active === 3}>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla
                </p>
                <TabelDetalis
                  model="#7987898"
                  style="Fixed style"
                  certificate="ISO-898921212"
                  size="44mm x 410mm x 99mm"
                  memory="36GB RAM"
                />
                <Ul>
                  <li>Some great feature name here</li>
                  <li>Lorem ipsum dolor sit amet, consectetur </li>
                  <li>Duis aute irure dolor in reprehenderit</li>
                  <li>Some great feature name here</li>
                </Ul>
              </div>
            </Content>
          </>
        </Details>
      
      <div>
        <h2>You may like</h2>
        <ProductLike src={cloth3} title="Apple Watch Series Space Gray" price="$7.00 - $99.50"/>
        <ProductLike src={cloth2} title="Apple Watch Series Space Gray" price="$7.00 - $99.50"/>
        <ProductLike src={cloth3} title="Apple Watch Series Space Gray" price="$7.00 - $99.50"/>
        <ProductLike src={cloth2} title="Apple Watch Series Space Gray" price="$7.00 - $99.50"/>
        <ProductLike src={cloth3} title="Apple Watch Series Space Gray" price="$7.00 - $99.50"/>
        <ProductLike src={cloth2} title="Apple Watch Series Space Gray" price="$7.00 - $99.50"/>
      </div>
    </Wraper>
  );
};

export default ProductDetalis;
