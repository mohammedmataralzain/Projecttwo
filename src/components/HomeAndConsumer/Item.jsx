import React from 'react'
import {StyleItem} from "./Style"

const Item = (props) => {
  return (
    <StyleItem>
        <div>
            <h4>{props.title}</h4>
            <p>{props.price}</p>
        </div>
    </StyleItem>
  )
}

export default Item