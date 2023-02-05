import React from "react";
import { NavLink } from "react-router-dom";

import {
  StyledForm,
  StyledInput,
  StyledButton,
  StyledLabel,
  Layout,
  Row,
  Select,
  StyleCheckBox,
} from "../styles/FormComponents";

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Layout>
        <StyledForm onSubmit={handleSubmit}>
          <h3>Register</h3>
          <Row>
            <div>
              <StyledLabel htmlFor="name">Name</StyledLabel>
              <StyledInput
                type="text"
                placeholder="Type here"
                width={"160px"}
                id="name"
              />
            </div>
            <div>
              <StyledLabel htmlFor="Surname">Surname</StyledLabel>
              <StyledInput
                type="text"
                placeholder="Type here"
                width={"160px"}
                id="Surname"
              />
            </div>
          </Row>

          <StyledLabel htmlFor="email">Your e-mail</StyledLabel>
          <StyledInput type="email" placeholder="example@mail.com" id="email" />

          <StyledLabel htmlFor="phone">Phone</StyledLabel>
          <Row>
            <Select>
              <option>UZ +998</option>
              <option>UZ +991</option>
              <option>UZ +992</option>
              <option>UZ +994</option>
              <option>UZ +993</option>
              <option>UZ +992</option>
            </Select>
            <StyledInput type="number" placeholder="00-000-00-00" id="phone" />
          </Row>
          <StyledLabel htmlFor="password">Password</StyledLabel>
          <StyledInput
            type="Password"
            placeholder="At least 6 characters."
            id="password"
          />
          <StyledLabel htmlFor="RepeatPassword">Repeat password</StyledLabel>
          <StyledInput
            type="password"
            placeholder="Type here"
            id="RepeatPassword"
          />

          <StyledButton type="submit" background="0D6EFD">
            Register now
          </StyledButton>
          <StyleCheckBox>
            <input type="checkbox" id="checkbox" />
            <StyledLabel htmlFor="checkbox">
              I agree with <span> Terms and Conditions</span>
            </StyledLabel>
          </StyleCheckBox>
          <div className="Register">
            Already have an accaunt?
            <NavLink to="/login">
              <span>Logn in</span>
            </NavLink>
          </div>
        </StyledForm>
      </Layout>
    </div>
  );
};

export default SignUp;
