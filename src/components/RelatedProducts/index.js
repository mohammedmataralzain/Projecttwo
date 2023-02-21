import React from "react";
import RelatedProduct from "./RelatedProduct";

import iPhone2 from "../../images/iPhone - Apple2.png";
import Electricwaterheater from "../../images/Electricwaterheater.png";
import Laptops from "../../images/Laptops.png";
import Smartwatches from "../../images/Smartwatches.png";
import Smartphones from "../../images/Smartphones.png";
import Headphones from "../../images/Headphones.png";
import { RelatedProducts } from "./Style";
const index = () => {
  return (
    <RelatedProducts>
        <RelatedProducts>
      <h2>Related products</h2>
    <div className="relatedProducts">

      <RelatedProduct
        key={"1"}
        src={Smartphones}
        title="Xiaomi Redmi 8 Original"
        price="$32.00-$40.00"
      />
      <RelatedProduct
        key={"2"}
        src={Smartwatches}
        title="Xiaomi Redmi 8 Original"
        price="$32.00-$40.00"
      />
      <RelatedProduct
        key={"3"}
        src={Headphones}
        title="Xiaomi Redmi 8 Original"
        price="$32.00-$40.00"
      />
      <RelatedProduct
        key={"4"}
        src={Laptops}
        title="Xiaomi Redmi 8 Original"
        price="$32.00-$40.00"
      />
      <RelatedProduct
        key={"5"}
        src={Electricwaterheater}
        title="Xiaomi Redmi 8 Original"
        price="$32.00-$40.00"
      />
      <RelatedProducts
        key={"6"}
        src={iPhone2}
        title="Xiaomi Redmi 8 Original"
        price="$32.00-$40.00"
      />
      </div>
    </RelatedProducts>
      </RelatedProducts>

  );
};

export default index;
