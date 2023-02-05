import { ContainerSection } from "../../styles/Container";
import H3 from "../HeaderSection";
import Service from "./Service";
import { Cards } from "./Style";

import Fast from "../../images/Fast.png";
import Customize from "../../images/Customize.png";
import Product from "../../images/Product monitoring.png";
import Source from "../../images/Source.png";
import Search from "../../images/search.png";
import Customizeicon from "../../images/Customizeicon.png";
import Fasticon from "../../images/Fasticon.png";
import Producticon from "../../images/Producticon.png";

function OurExtraServices() {
  return (
    <ContainerSection>
      <H3 h3="Our extra services" />
      <Cards>
        <Service
          src={Source}
          content="Source from Industry Hubs"
          img={Search}
        />
        <Service
          src={Customize}
          content="Customize Your Products"
          img={Customizeicon}
        />
        <Service
          src={Fast}
          content="Fast, reliable shipping by ocean or air"
          img={Fasticon}
        />
        <Service
          src={Product}
          content="Product monitoring and inspection"
          img={Producticon}
        />
      </Cards>
    </ContainerSection>
  );
}

export default OurExtraServices;
