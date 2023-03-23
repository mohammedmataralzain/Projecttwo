import React from "react";
import { useProductContext } from "../../context/productContext";
import Button from "../Button";
import { StyleItemCart } from "./Style";

const ItemCart = ({ product }) => {
  const { removeFromCart } = useProductContext();

  return (
    <StyleItemCart>
      <div>
        <img src={product.image} alt="imag"/>
      </div>
      <div className="content">
        <div>
          <h3>{product.title}</h3>
          <p>Size: medium, Color: blue, Material: Plastic</p>
          <p>Seller: Artel Market</p>
          <div>
            <button onClick={() => removeFromCart(product)}>Remove</button>
            <Button>Save for later</Button>
          </div>
        </div>
        <div>
          <p className="price">${product.newPrice}</p>
          <select>
            <option>Qty: 1</option>
            <option>Qty: 2</option>
            <option>Qty: 3</option>
            <option>Qty: 4</option>
            <option>Qty: 5</option>
            <option>Qty: 6</option>
            <option>Qty: 7</option>
            <option>Qty: 8</option>
            <option>Qty: 9</option>
            <option>Qty: 10</option>
          </select>
        </div>
      </div>
    </StyleItemCart>
  );
};

export default ItemCart;
