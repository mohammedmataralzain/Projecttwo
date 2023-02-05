import React from "react";

import {StyleRecommendedCard} from "./Style"
const RecommendedCard = (props) => {
  return (
    <StyleRecommendedCard>
      <img src={props.src} alt="Img not found" />
      <h4>{props.price}</h4>
      <p>{props.body}</p>
    </StyleRecommendedCard>
  );
};

export default RecommendedCard;
