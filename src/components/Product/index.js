import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { StyleProduct } from "./Style";



const Product = (props) => {
  return props.type === "listItem" ? (
    <StyleProduct>
      <div className="listItem">
        <div>
          <img src={props.src} />
        </div>
        <div className="description">
          <div className="title">
            <h3>{props.title}</h3>
            <AiOutlineHeart className="like" />
          </div>
          <div className="price">
            <p>
              {props.newPrice}
              <span>{props.oldPrice}</span>
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
            <span className="evaluation">{props.evaluation}</span>
            <span className="orders">154 orders</span>
            <span className="freeShipping">Free Shipping</span>
          </div>
          <div className="body">{props.body}</div>
          <p className="details">View details</p>
        </div>
      </div>
    </StyleProduct>
  ) : (
    <StyleProduct>
      <div className="gridItem">
        <img src={props.src} alt="Img not found" />
        <div className="price">
          <p>
            {props.newPrice}
            <span>{props.oldPrice}</span>
          </p>
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
          <span className="evaluation">{props.evaluation}</span>
        </div>
        <p className="body">{props.body}</p>
      </div>
    </StyleProduct>
  );
};

export default Product;
