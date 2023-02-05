import { ContainerSection } from "../../styles/Container";
import Button from "../Button";
import styled from "styled-components";

import {Input,StyleSendRequests} from "./Style"

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
            <Input
              placeholder="Type more details"
              width={"440px"}
              height={"73px"}
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
