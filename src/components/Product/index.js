import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { useProductContext } from "../../context/productContext";
import { StyledButton, StyleProduct } from "./Style";

const Product = ({ product, type }) => {
  const { addToCart } = useProductContext();

  return type === "listItem" ? (
    <StyleProduct>
      <div className="listItem">
        <div>
          <img src={product.image} />
        </div>
        <div className="description">
          <div className="title">
            <h3>{product.title}</h3>

            <AiOutlineHeart className="like" />
          </div>
          <div className="price">
            <p>
              {product.newPrice}
              <span>{product.oldPrice ? product.oldPrice : ""}</span>
            </p>
          </div>
          <div className="stars">
            <span>
              <AiFillStar className="star evaluation" />
              <AiFillStar className="star evaluation" />
              <AiFillStar className="star evaluation" />
              <AiFillStar className="star" />
              <AiFillStar className="star" />
            </span>
            <span className="evaluation">{product.evaluation}</span>
            <span className="orders">154 orders</span>
            <span className="freeShipping">Free Shipping</span>
          </div>
          <div className="body">{product.body}</div>
          <div className="details">
            <p>View details</p>
            <StyledButton
              onClick={() => addToCart(product)}
              className="addToCart"
              disabled={product.isSelected}
            >
              Add
              <HiShoppingCart className="icon" />
            </StyledButton>
          </div>
        </div>
      </div>
    </StyleProduct>
  ) : (
    <StyleProduct>
      <div className="gridItem">
        <img src={product.image} alt="Img not found" />
        <div className="price">
          <p>
            {product.newPrice}
            <span>{product.oldPrice}</span>
          </p>
          <button onClick={() => addToCart(product)} className="addToCart">
            Add <HiShoppingCart className="icon" />
          </button>
          <AiOutlineHeart className="like" />
        </div>
        <div className="stars">
          <span>
            <AiFillStar className="star evaluation" />
            <AiFillStar className="star evaluation" />
            <AiFillStar className="star evaluation" />
            <AiFillStar className="star evaluation" />
            <AiFillStar className="star" />
          </span>
          <span className="evaluation">{product.evaluation}</span>
        </div>
        <p className="body">{product.body}</p>
      </div>
    </StyleProduct>
  );
};

export default Product;
