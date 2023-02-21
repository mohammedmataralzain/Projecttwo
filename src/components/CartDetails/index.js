import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useProductContext } from "../../context/productContext";
import Button from "../Button";
import ItemCart from "../ItemCart";
import { StyleCartDetails } from "./Style";

const CartDetails = () => {
  const { state ,removeAll} = useProductContext();

  return (
    <StyleCartDetails>
      <h2>My cart ({state.count})</h2>
      <div className="section">
        <div className="CartDetails">
          {!state.products.length && <h1>No Products in the cart</h1>}
          {state?.products?.map((product) => (
            <ItemCart key={product.id} {...{ product }} />
          ))}
          {state.products.length && (
            <div className="buttons">
              <Link to="/Products">
                <button>
                  <AiOutlineArrowLeft />
                  <p>Back to shop</p>
                </button>
              </Link>
              <button onClick={()=>removeAll()}>Remove all</button>
            </div>
          )}
        </div>
        <div className="total">
          <p>Have a coupon?</p>
          <form>
            <input type="text" placeholder="Add coupon" />
            <button className="Apply">Apply</button>
          </form>
          <table>
            <tr>
              <td>Subtotal:</td>
              <td>$1403.97</td>
            </tr>
            <tr>
              <td>Discount:</td>
              <td>- $60.00</td>
            </tr>
            <tr>
              <td>Tax:</td>
              <td>+ $14.00</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>
                {state.products.reduce(
                  (accumulator, currentValue) =>
                    accumulator + currentValue.newPrice,
                  0
                )}
              </td>
            </tr>
          </table>
          <button className="Checkout">Checkout</button>
        </div>
      </div>
    </StyleCartDetails>
  );
};

export default CartDetails;
