import Header from "../components/Header";
import Search from "../components/Search"
import TopHomePageSection from "../components/TopHomePageSection";
import Dealsandoffers from "../components/DealsAndOffers/Dealsandoffers";
import ConsumerElectronics from "../components/HomeAndConsumer/ConsumerElectronics";
import RecommendedCards from "../components/RecommendedCards";
import OurExtraServices from "../components/OurExtraServices";
import SendRequests from "../components/SendRequst";
import Suppliers from "../components/Suppliers";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import HomeAndOutdoor from "../components/HomeAndConsumer/HomeAndOutdoor";
import { useContext, useEffect } from "react";
import Nav from "../components/Header/Nav";
import { useProductContext } from "../context/productContext";

const Home = () => {
  
  useEffect(() => {
    document.title = "E-commerce";
  }, []);

  return (
    <div>
      <Header Search={<Search/>} Nav={ <Nav />} />
      <TopHomePageSection />
      <Dealsandoffers />
      <HomeAndOutdoor />
      <ConsumerElectronics />
      <SendRequests />
      <RecommendedCards />
      <OurExtraServices />
      <Suppliers />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
