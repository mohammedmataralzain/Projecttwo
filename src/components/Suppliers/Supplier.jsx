import {StyleCountry} from "./Style"
const Supplier = (props) => {
  return (
    <StyleCountry>
      <img src={props.src} alt="" />
      <div>
        <h3>{props.country}</h3>
        <p>{props.body}</p>
      </div>
    </StyleCountry>
  );
};

export default Supplier;
