import styled from "styled-components";

import Offer from "./Offer";
import Timer from "./Timer";
import {ContainerSection} from "../../styles/Container"

import mobile from "../../images/mobile.png";
import Headphones from "../../images/Headphones.png";
import Laptops from "../../images/Laptops.png";
import GoProcameras from "../../images/GoProcameras.png";
import Smartwatches from "../../images/Smartwatches.png";
import { Content, Offers, Timers, Title } from "./Style";


const Dealsandoffers = () => {
  return (
    <ContainerSection>
      <Content>
        <Title>
          <div className="titleTimer">
            <h4>Deals and offers</h4>
            <p>Hygiene equipments</p>
          </div>
          <Timers>
            <Timer number="04" type="Days" />
            <Timer number="13" type="Hour" />
            <Timer number="34" type="Min" />
            <Timer number="56" type="Sec" />
          </Timers>
        </Title>
        <Offers>
          <Offer src={Smartwatches} title="Smart watches" discount="-25%" />
          <Offer src={Laptops} title="Laptops" discount="-15" />
          <Offer src={GoProcameras} title="GoPro cameras" discount="-40" />
          <Offer src={Headphones} title="Headphones" discount="-25%" />
          <Offer src={mobile} title="Canon camreras" discount="-25%" />
        </Offers>
      </Content>
    </ContainerSection>
  );
};

export default Dealsandoffers;
