import Button from "../Button";
import { ShapeDiscount } from "./Style";


const Discount = () => {
  return (
    <ShapeDiscount>
      <div className="card-holder">
        <div className="card bg-gold">
          <div>
            <h2>Super discount on more than 100 USD</h2>
            <p>Have you ever finally just write dummy info</p>
          </div>
          <Button>Shop now</Button>
        </div>
      </div>
    </ShapeDiscount>
  );
};

export default Discount;
