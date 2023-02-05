import React from "react";
import { CaptionStyle } from "./Style";

const Caption = (props) => {
  return (
    <CaptionStyle background={props.background}>
      <p>{props.body}</p>
    </CaptionStyle>
  );
};

export default Caption;
