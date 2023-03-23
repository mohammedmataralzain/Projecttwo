import { StyleProductLike } from "./Style";


export const ProductLike = (props) => {
  return (
    <StyleProductLike>
      <div>
        <img src={props.src} alt="imag"/>
      </div>
      <div>
        <p>{props.title}</p>
        <p>{props.price}</p>
      </div>
    </StyleProductLike>
  );
};
