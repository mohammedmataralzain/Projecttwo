import React from "react";

import {StyleService} from "./Style"

function Service(props) {
  return (
    <StyleService>
      <img src={props.src} alt="Not Found" />
      <p>{props.content}</p>
      <div>
        <img src={props.img} alt="imag" />
      </div>
    </StyleService>
  );
}

export default Service;
