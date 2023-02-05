import React from 'react'
import {ButtonStyle} from "./Style"

const Button = (props) => {
  return (
    <ButtonStyle type='submit' background={props.background} color={props.color}>{props.children}</ButtonStyle>
  )
}

export default Button