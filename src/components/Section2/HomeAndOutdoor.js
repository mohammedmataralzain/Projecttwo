import React from 'react'
import { ContainerSection } from '../../styles/Container'
import Item from './Item'

import rasm1 from "../../images/rasm1.png"
import rasm2 from "../../images/rasm2.png"
import rasm3 from "../../images/rasm3.png"
import rasm4 from "../../images/rasm4.png"
import waterJar from "../../images/waterJar.png"
import Kitchenmixer from "../../images/Kitchenmixer.png"
import Blenders from "../../images/Blenders.png"
import Homeappliance from "../../images/Homeappliance.png"
import {StyleItems,StyleSection} from "./Style"
import Button from '../Button'


const HomeAndOutdoor = () => {
  return (
    <ContainerSection>
      <StyleSection>
      <div className='titleHomeAndOutdoor title'>
      <h3>Home and outdoor</h3>
      <Button>Source now</Button>
    </div>
      <StyleItems>
          <Item title="Soft chairs" price="From USD 19" src={rasm1}/>
          <Item title="Soft chairs" price="From USD 19" src={rasm2}/>
          <Item title="Kitchen dishes" price="From USD 19" src={rasm3}/>
          <Item title="Smart watches" price="From USD 19" src={waterJar}/>
          <Item title="Kitchen mixer" price="From USD 100" src={Kitchenmixer}/>
          <Item title="Blenders" price="From USD 39" src={Blenders}/>
          <Item title="Home appliance" price="From USD 19" src={Homeappliance}/>
          <Item title="Coffee maker" price="From USD 10" src={rasm4}/>
      </StyleItems>
      </StyleSection>
    </ContainerSection>
  )
}

export default HomeAndOutdoor