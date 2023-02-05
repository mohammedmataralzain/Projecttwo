import { ContainerSection } from "../../styles/Container";
import Button from "../Button";
import { StyleSubscribe } from "./Style";

const Subscribe = () => {
  return (
    <StyleSubscribe>
      <ContainerSection>
        <h4>Subscribe on our newsletter</h4>
        <p>
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
        <form>
          <input placeholder="Email" />
          <Button background="#0D6EFD" color="#FFFFFF">
            Subscribe
          </Button>
        </form>
      </ContainerSection>
    </StyleSubscribe>
  );
};

export default Subscribe;
