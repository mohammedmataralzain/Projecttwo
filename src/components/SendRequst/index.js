//Styles
import { ContainerSection } from "../../styles/Container";
import {Input,StyleSendRequests} from "./Style"
//component
import Button from "../Button";


const SendRequests = () => {
  return (
    <ContainerSection>
      <StyleSendRequests>
        <div className="title">
          <h1>An easy way to send requests to all suppliers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <Button background="#0D6EFD" color="#FFFFFF">Send inquiry</Button>
        </div>
        <form>
          <h3>Send quote to suppliers</h3>
          <div>
            <Input
              placeholder="What item you need?"
              width={"440px"}
              height={"40px"}
            />
          </div>
          <div>
            <textarea
              placeholder="Type more details"
            />
          </div>
          <div>
            <Input placeholder="Quantity" width={"206px"} height={"40px"} />
            <select name="" id="">
              <option value="">Pcs</option>
            </select>
          </div>
          <Button background="#0D6EFD" color="#FFFFFF">Send inquiry</Button>
        </form>
      </StyleSendRequests>
    </ContainerSection>
  );
};

export default SendRequests;
