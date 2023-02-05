import Header from "../components/Header";
import TopHomePageSection from "../components/TopHomePageSection";
import Dealsandoffers from "../components/Deals/Dealsandoffers";
import ConsumerElectronics from "../components/Section2/ConsumerElectronics";
import RecommendedCards from "../components/RecommendedCards";
import OurExtraServices from "../components/OurExtraServices";
import SendRequests from "../components/SendRequst";
import Suppliers from "../components/Suppliers";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import HomeAndOutdoor from "../components/Section2/HomeAndOutdoor";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "E-commerce";
  }, []);

  return (
    <div>
      <Header />
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
