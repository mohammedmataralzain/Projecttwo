import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Search from "../../components/Search";
import Footer from "../../components/Footer";
import Subscribe from "../../components/Subscribe";
import Dropdown from "../../components/Dropdown";
import { AiFillStar } from "react-icons/ai";

import { Container, ContainerSection } from "../../styles/Container";
import Series from "../../components/Series";
import { BsList } from "react-icons/bs";
import { RiLayoutGridFill } from "react-icons/ri";
import styled from "styled-components";
import Product from "../../components/Product";

import iPhone1 from "../../images/iPhone - Apple.png";
import iPhone2 from "../../images/iPhone - Apple2.png";
import Smartphones from "../../images/Smartphones.png";
import mobile from "../../images/mobile.png";
import GoProcameras from "../../images/GoProcameras.png";
import Laptops from "../../images/Laptops.png";
import Smartwatches from "../../images/Smartwatches.png";
import phone from "../../images/phone.png";
import { GridContainer, Icon, ListContainer, StyleProducts } from "./Style";
import Nav from "../../components/Header/Nav";
import { products } from "../../mock";
import { useProductContext } from "../../context/productContext";

const Products = () => {
  useEffect(() => {
    document.title = "Products";
  }, []);

  const [view, setView] = useState("list");
  const cart = useProductContext();
  console.log(cart);

  return (
    <div>
      <>
        <Header Search={<Search />} Nav={<Nav />} />
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
                    <Icon view={view} primary={view === "grid"}>
                      <RiLayoutGridFill
                        onClick={() => setView("grid")}
                        className="grid"
                      />
                    </Icon>
                    <Icon view={view} primary={view === "list"}>
                      <BsList
                        onClick={() => setView("list")}
                        className="list"
                      />
                    </Icon>
                  </div>
                </div>
              </div>
              <div>
                {view === "list" ? (
                  <ListContainer>
                    {products.map((product) => (
                      <Product
                        type="listItem"
                        key={product.id}
                        {...{ product }}
                      />
                    ))}
                  </ListContainer>
                ) : (
                  <GridContainer>
                    {products.map((product) => (
                      <Product
                        type="gridItem"
                        key={product.id}
                        {...{ product }}
                      />
                    ))}
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
