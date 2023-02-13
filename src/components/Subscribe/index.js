
//icon
import { HiOutlineMail } from "react-icons/hi";

//Component
import Button from "../Button";

//Styles
import { ContainerSection } from "../../styles/Container";
import {StyleSubscribe } from "./Style";


const Subscribe = () => {
  return (
    <StyleSubscribe>
      <ContainerSection>
        <h4>Subscribe on our new slitter</h4>
        <p>
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
        <form>
          <div className="InputContainer">
            <HiOutlineMail size={20} className="icon"/>
            <input type="email" placeholder="Email" />
          </div>
          <Button background="#0D6EFD" color="#FFFFFF">
            Subscribe
          </Button>
        </form>
      </ContainerSection>
    </StyleSubscribe>
  );
};

export default Subscribe;
