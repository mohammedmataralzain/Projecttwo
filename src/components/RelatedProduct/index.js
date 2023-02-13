import { StyleRelatedProduct } from "./Style";

const RelatedProduct = (props) => {
  return (
    <StyleRelatedProduct>
      <div className="img">
      <img src={props.src} alt="img not found" />
      </div>
      <p>{props.title}</p>
      <p>{props.price}</p>
    </StyleRelatedProduct>
  );
};

export default RelatedProduct;
