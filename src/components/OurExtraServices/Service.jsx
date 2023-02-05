import React from "react";
import styled from "styled-components";

import {StyleService} from "./Style"

function Service(props) {
  return (
    <StyleService>
      <img src={props.src} alt="Not Found" />
      <p>{props.content}</p>
      <div>
        <img src={props.img} />
      </div>
    </StyleService>
  );
}

export default Service;
