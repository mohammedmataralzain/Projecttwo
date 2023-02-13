import React, { useState } from "react";
import cloth1 from "../../images/cloth7.png";
import cloth2 from "../../images/cloth2.png";
import cloth3 from "../../images/cloth3.png";
import cloth4 from "../../images/cloth1.png";
import cloth5 from "../../images/cloth8.png";
import cloth6 from "../../images/cloth8.png";
import France from "../../images/France.png";
import { MdMessage } from "react-icons/md";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { TbBasket } from "react-icons/tb";
import { GoVerified } from "react-icons/go";
import { TbWorld } from "react-icons/tb";
import Button from "../Button";
import RowOfTable from "./RowOfTable";
import { StyleDetails } from "./Style";


const ProductDetails = () => {
  const imgs = [
    { id: 0, value: cloth1 },
    { id: 1, value: cloth2 },
    { id: 2, value: cloth3 },
    { id: 3, value: cloth4 },
    { id: 4, value: cloth5 },
    { id: 5, value: cloth6 },
  ];

  const [sliderData, setSliderData] = useState(imgs[0]);
  const handelClick = (index) => {
    const slider = imgs[index];
    setSliderData(slider);
  };
  return (
    <StyleDetails>
      <div className="col1">
        <div className="bigImg">
          <img src={sliderData.value} height="200" width="200" />
        </div>
        <div className="imgs">
          {imgs.map((data, i) => (
            <img
              src={data.value}
              height="50"
              width="50"
              key={data.id}
              onClick={() => handelClick(i)}
            />
          ))}
        </div>
      </div>
      <div className="col2">
        <p>✔︎In stock</p>
        <div>
          <h2>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h2>
        </div>

        <ul>
          <li className="star">
            <AiFillStar className="icon star" />
            <AiFillStar className="icon star" />
            <AiFillStar className="icon star" />
            <AiFillStar className="icon star" />
            <AiFillStar className="icon" />
            9.3
          </li>
          <li>
            <MdMessage className="icon" />
            32 reviews
          </li>
          <li>
            <TbBasket className="icon" />
            154 sold
          </li>
        </ul>
        <div>
          <p>
            <span>$98.00</span>
            <span>50-100 pcs</span>
          </p>
          <p>
            <span>$90.00</span>
            <span>100-700 pcs</span>
          </p>
          <p>
            <span>$78.00</span>
            <span>700+ pcs</span>
          </p>
        </div>

        <table>
          <tbody>
            <RowOfTable title="Price" descripton="Negotiable" key="1" />
            <RowOfTable title="Type" descripton="Classic shoes" key="2" />
            <RowOfTable
              title="Material"
              descripton="Plastic material"
              key="3"
            />
            <RowOfTable title="Design" descripton="Modern nice" key="4" />
            <RowOfTable
              title="Customization"
              descripton="Customized logo and design custom packages"
              key="5"
            />
            <RowOfTable title="Protection" descripton="Refund Policy" key="6" />
            <RowOfTable
              title="Warranty: "
              descripton="2 years full warranty"
              key="7"
            />
          </tbody>
        </table>
      </div>
      <div className="col3">
        <div className="topCol">
          <div>
            <p>R</p>
            <p>Supplier Guanjoi Trading LLC</p>
          </div>
          <div>
            <ul>
              <li>
                <img src={France} />
                France, Berlin
              </li>
              <li>
                <GoVerified />
                Verified Seller
              </li>
              <li>
                <TbWorld />
                Worldwide shipping
              </li>
            </ul>
          </div>
          <div>
            <Button>Send inquiry</Button>
            <Button>Seller’s profile</Button>
          </div>
        </div>
        <div className="bottomCol">
          <AiOutlineHeart className="icon" />
          Save for later
        </div>
      </div>
    </StyleDetails>
  );
};

export default ProductDetails;
