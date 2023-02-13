//Styles
import { ContainerSection } from "../../styles/Container";
import {Cards} from "./Style"

//Component
import RecommendedCard from "./RecommendedCard";
import H3 from "../HeaderSection";

//images
import cloth1 from "../../images/cloth1.png";
import cloth2 from "../../images/cloth2.png";
import cloth3 from "../../images/cloth3.png";
import cloth4 from "../../images/cloth4.png";
import cloth5 from "../../images/cloth5.png";
import cloth6 from "../../images/cloth6.png";
import phone from "../../images/phone.png";
import waterJar from "../../images/waterJar.png";
import Electricwaterheater from "../../images/Electricwaterheater.png";



const Recommendeditems = () => {
  return (
    <ContainerSection>
      <H3 h3="Recommended items" />
      <Cards>
        <RecommendedCard
          src={cloth1}
          price="$10.30"
          body="T-shirts with multiple colors, for men"
        />
        <RecommendedCard
          src={cloth2}
          price="$10.30"
          body="Jeans shorts for men blue color"
        />
        <RecommendedCard
          src={cloth3}
          price="$12.50"
          body="Brown winter coat medium size"
        />
        <RecommendedCard src={cloth4} price="$34.00" body="Jeans bag for travel for men" />
        <RecommendedCard src={cloth5} price="$99.00" body="Leather wallet" />
        <RecommendedCard
          src={cloth6}
          price="$9.99"
          body="Canon camera  black, 100x zoom"
        />
        <RecommendedCard src={phone} price="$8.99" body="Headset for gaming with mic" />
        <RecommendedCard
          src={cloth5}
          price="$10.30"
          body="Smartwatch silver color modern"
        />
        <RecommendedCard
          src={waterJar}
          price="$10.30"
          body="Blue wallet for men leather metarfial"
        />
        <RecommendedCard
          src={Electricwaterheater}
          price="$80.95"
          body="Jeans bag for travel for men"
        />
      </Cards>
    </ContainerSection>
  );
};

export default Recommendeditems;
