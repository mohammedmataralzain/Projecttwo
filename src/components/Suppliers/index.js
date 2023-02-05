import React from "react";

import { ContainerSection } from "../../styles/Container";
import H3 from "../HeaderSection";
import Supplier from "./Supplier";
import { CardsSuppliers } from "./Style";

import Russia from "../../images/Russia.png";
import ArabicEmirates from "../../images/Arabic Emirates.png";
import Australia from "../../images/Australia.png";
import UnitedStates from "../../images/United States.png";
import China from "../../images/China.png";
import Denmark from "../../images/Denmark.png";
import France from "../../images/France.png";
import GreatBritain from "../../images/Great Britain.png";
import Italy from "../../images/Italy.png";

const Suppliers = () => {
  return (
    <ContainerSection>
      <H3 h3="Suppliers by region" />
      <CardsSuppliers>
        <Supplier
          src={ArabicEmirates}
          country="Arabic Emirates"
          body="shopname.ae"
        />
        <Supplier src={Australia} country="Australia" body="shopname.ae" />
        <Supplier
          src={UnitedStates}
          country="United States"
          body="shopname.ru"
        />
        <Supplier src={Russia} country="Russia" body="shopname.it" />
        <Supplier src={Italy} country="Italy" body="shopname.it" />
        <Supplier src={Denmark} country="Denmark" body="shopname.com.fr" />
        <Supplier src={France} country="France" body="shopname.ae" />
        <Supplier
          src={ArabicEmirates}
          country="Arabic Emirates"
          body="shopname.ae"
        />
        <Supplier src={China} country="China" body="shopname.co.uk" />
        <Supplier
          src={GreatBritain}
          country="Great Britain"
          body="shopname.co.uk"
        />
      </CardsSuppliers>
    </ContainerSection>
  );
};

export default Suppliers;
