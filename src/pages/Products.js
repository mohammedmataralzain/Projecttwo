import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header"
import Subscribe from "../components/Subscribe";
import Dropdown from "../components/Dropdown";
import { AiFillStar } from "react-icons/ai";

import { Container, ContainerSection } from "../styles/Container";
import Series from "../components/Series";
import { BsList } from "react-icons/bs";
import { RiLayoutGridFill } from "react-icons/ri";
import styled from "styled-components";
import Product from "../components/Product";

import iPhone1 from "../images/iPhone - Apple.png";
import iPhone2 from "../images/iPhone - Apple2.png";
import Smartphones from "../images/Smartphones.png";
import mobile from "../images/mobile.png";
import GoProcameras from "../images/GoProcameras.png";
import Laptops from "../images/Laptops.png";
import Smartwatches from "../images/Smartwatches.png";
import phone from "../images/phone.png";

const StyleProducts = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  .headerProducts {
    padding: 20px;
    border-radius: 6px;
    width: 1020px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-left: 50px;
    background: #FFFFFF;
    @media (max-width: 991px) {
      width: 320px;
    }
    h4 {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
    .list,
    .grid {
      width: 20px;
      height: 20px;
      color: #8b96a5;
      margin-left: 10px;
    }
    .rightProducts {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #1c1c1c;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      select {
        border: none;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
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
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 50px;
`;

const ListItem = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(295px, 295px));
  column-gap: 65px;
  margin-left: 50px;
`;

const GridItem = styled.div`
  padding: 20px;
`;

const Products = () => {
  useEffect(() => {
    document.title = "Products";
  }, []);

  const [view, setView] = useState("list");

  return (
    <div>
      <>
        <Header />
        <Container>
          <Series />
          <StyleProducts>
            <div>
              <Dropdown title="Category">
                <ul>
                  <li>Mobile accessory </li>
                  <li>Electronics </li>
                  <li>Smartphones </li>
                  <li>Modern tech </li>
                  <li>See all </li>
                </ul>
              </Dropdown>
              <Dropdown title="Brands">
                <ul>
                  <li>
                    <input type="checkbox" />
                    Samsung
                  </li>
                  <li>
                    <input type="checkbox" />
                    Apple
                  </li>
                  <li>
                    <input type="checkbox" />
                    Huawei
                  </li>
                  <li>
                    <input type="checkbox" />
                    Pocco
                  </li>
                  <li>
                    <input type="checkbox" />
                    Lenovo
                  </li>
                  <li>See all </li>
                </ul>
              </Dropdown>
              <Dropdown title="Features">
                <ul>
                  <li>
                    <input type="checkbox" />
                    Metallic
                  </li>
                  <li>
                    <input type="checkbox" />
                    Plastic cover
                  </li>
                  <li>
                    <input type="checkbox" />
                    8GB Ram
                  </li>
                  <li>
                    <input type="checkbox" />
                    Super power
                  </li>
                  <li>
                    <input type="checkbox" />
                    Large Memory
                  </li>
                  <li>See all </li>
                </ul>
              </Dropdown>
              <Dropdown title="Price range">
                <input type="range" />
                <input type="range" />
              </Dropdown>
              <Dropdown title="Condition">
                <ul>
                  <li>
                    <input type="radio" />
                    Any
                  </li>
                  <li>
                    <input type="radio" />
                    Refurbished
                  </li>
                  <li>
                    <input type="radio" />
                    Brand new
                  </li>
                  <li>
                    <input type="radio" />
                    Old items
                  </li>
                </ul>
              </Dropdown>
              <Dropdown title="Ratings">
                <ul>
                  <li>
                    <input type="checkbox" />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </li>
                  <li>
                    <input type="checkbox" />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </li>
                  <li>
                    <input type="checkbox" />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </li>
                  <li>
                    <input type="checkbox" />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </li>
                </ul>
              </Dropdown>
            </div>
            <div>
              <div className="headerProducts">
                <div>
                  <h4>12,911 items in Mobile accessory</h4>
                </div>

                <div className="rightProducts">
                  <div>
                    <input type="checkbox" />
                    Verified only
                  </div>
                  <div>
                    <select>
                      <option>Featured</option>
                      <option>Featured</option>
                      <option>Featured</option>
                      <option>Featured</option>
                    </select>
                  </div>
                  <div>
                    <RiLayoutGridFill
                      className="list"
                      onClick={() => setView("grid")}
                    />
                    <BsList className="grid" onClick={() => setView("list")} />
                  </div>
                </div>
              </div>
              <div>
                {view === "list" ? (
                  <ListContainer>
                    <Product
                      type="listItem"
                      src={iPhone1}
                      title="Canon Cmera EOS 2000, Black 10x zoom"
                      newPrice="$998.00"
                      oldPrice="$1128.00"
                      evaluation="7.5"
                      body="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit "
                    />
                    <Product
                      type="listItem"
                      src={mobile}
                      title="GoPro HERO6 4K Action Camera - Black"
                      newPrice="$998.00"
                      evaluation="7.5"
                      body="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit "
                    />
                    <Product
                      type="listItem"
                      src={Smartphones}
                      title="GoPro HERO6 4K Action Camera - Black"
                      evaluation="7.5"
                      body="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit "
                    />
                    <Product
                      type="listItem"
                      src={Laptops}
                      title="Canon Cmera EOS 2000, Black 10x zoom"
                      newPrice="$998.00"
                      evaluation="7.5"
                      body="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit "
                    />
                    <Product
                      type="listItem"
                      src={Smartwatches}
                      title="Canon Cmera EOS 2000, Black 10x zoom"
                      newPrice="$998.00"
                      oldPrice="$1128.00"
                      evaluation="7.5"
                      body="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit "
                    />
                    <Product
                      type="listItem"
                      src={phone}
                      title="Canon Cmera EOS 2000, Black 10x zoom"
                      newPrice="$998.00"
                      evaluation="7.5"
                      body="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit "
                    />
                  </ListContainer>
                ) : (
                  <GridContainer>
                    <Product
                      type="gridItem"
                      src={iPhone1}
                      newPrice="$99.50"
                      oldPrice="$1128.00"
                      evaluation="7.5"
                      body="GoPro HERO6 4K Action Camera - Black"
                    />
                    <Product
                      type="gridItem"
                      src={iPhone2}
                      newPrice="$99.50"
                      oldPrice="$1128.00"
                      evaluation="5.9"
                      body="GoPro HERO6 4K Action Camera - Black"
                    />
                    <Product
                      type="gridItem"
                      src={mobile}
                      newPrice="$99.50"
                      evaluation="7.5"
                      body="GoPro HERO6 4K Action Camera - Black"
                    />
                    <Product
                      type="gridItem"
                      src={Smartphones}
                      newPrice="$99.50"
                      oldPrice="$1128.00"
                      evaluation="7.5"
                      body="GoPro HERO6 4K Action Camera - Black"
                    />
                    <Product
                      type="gridItem"
                      src={GoProcameras}
                      newPrice="$99.50"
                      oldPrice="$1128.00"
                      evaluation="7.5"
                      body="GoPro HERO6 4K Action Camera - Black"
                    />
                    <Product
                      type="gridItem"
                      src={iPhone2}
                      newPrice="$99.50"
                      evaluation="7.5"
                      body="GoPro HERO6 4K Action Camera - Black"
                    />
                    <Product
                      type="gridItem"
                      src={Laptops}
                      newPrice="$99.50"
                      oldPrice="$1128.00"
                      evaluation="7.5"
                      body="GoPro HERO6 4K Action Camera - Black"
                    />
                    <Product
                      type="gridItem"
                      src={Smartwatches}
                      newPrice="$99.50"
                      oldPrice="$1128.00"
                      evaluation="7.5"
                      body="GoPro HERO6 4K Action Camera - Black"
                    />
                    <Product
                      type="gridItem"
                      src={iPhone1}
                      newPrice="$99.50"
                      evaluation="7.5"
                      body="GoPro HERO6 4K Action Camera - Black"
                    />
                  </GridContainer>
                )}
              </div>
            </div>
          </StyleProducts>
        </Container>
        <Subscribe />
        <Footer />
      </>
    </div>
  );
};

export default Products;
