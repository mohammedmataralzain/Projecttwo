import { StyleOffer } from "./Style";


const Offer = (props) => {
  return (
    <StyleOffer>
      <img src={props.src} alt="imag"/>
      <h4>{props.title}</h4>
      <p>{props.discount}</p>
    </StyleOffer>
  );
};
export default Offer;
