import React from 'react'
import Button from '../Button'
import { FormStyle } from './Style'

const index = () => {
  return (
    <FormStyle>
    <input type="text" placeholder="Search" />
    <select name="category" id="category">
      <option value="volvo">All category</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
    <Button background="#0D6EFD">Search</Button>
  </FormStyle>
  )
}

export default index