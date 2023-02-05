import React from 'react'
import Item from './Item'
import { ContainerSection } from "../../styles/Container";

import SmartWatches from "../../images/Smartwatches.png"
import Headphones from "../../images/Headphones.png"
import Laptops from "../../images/Laptops.png"
import Electricwaterheater from "../../images/Electricwaterheater.png"
import GoProcameras from "../../images/GoProcameras.png";
import phone from "../../images/phone.png";
import iPhone from "../../images/iPhone - Apple.png";
import Smartphones from "../../images/Smartphones.png";
import {StyleItems,StyleSection} from "./Style"
import Button from "../Button"

const ConsumerElectronics = () => {
  return (
    <ContainerSection>
      <StyleSection>
    <div className='titleConsumerElectronics title'>
      <h3>Consumer electronics and gadgets</h3>
      <Button>Source now</Button>
    </div>
      <StyleItems>
          <Item title="Smart watches" price="From USD 19" src={SmartWatches}/>
          <Item title="Cameras" price="From USD 89" src={GoProcameras}/>
          <Item title="Headphones" price="From USD 10" src={phone}/>
          <Item title="Smart watches" price="From USD 90" src={Electricwaterheater}/>
          <Item title="Gaming set" price="From USD 35" src={Headphones}/>
          <Item title="Laptops & PC" price="From USD 340" src={Laptops}/>
          <Item title="Smartphones" price="From USD 19" src={Smartphones}/>
          <Item title="Electric kattle" price="From USD 240" src={iPhone}/>
      </StyleItems>
      </StyleSection>
    </ContainerSection>
  )
}

export default ConsumerElectronics