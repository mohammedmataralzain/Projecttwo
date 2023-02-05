import React from "react";
import { NavLink } from "react-router-dom";

import {
  StyledForm,
  StyledInput,
  StyledButton,
  StyledLabel,
  StyleCheckBox,
  Or,
  Layout,
} from "../styles/FormComponents";

import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";

const Login = (props) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordInvalid, setPasswordInvalid] = React.useState(false);
  const [enabled, setEnabled] = React.useState(false);

  const socialIcons = [<FcGoogle />, <AiFillFacebook />];

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate password and set passwordInvalid state accordingly
    if (password.length < 8) {
      setPasswordInvalid(true);
    } else {
      setPasswordInvalid(false);
    }
  };

  const usernameEntered = (e) => {
    setUsername(e.target.value);
  };

  const passwordEntered = (e) => {
    setPassword(e.target.value);
  };

  const buttonEnabled = (username, password) => {
    if (username.length > 0 && password.length > 0) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  };

  return (
    <Layout>
      <StyledForm onSubmit={handleSubmit}>
        <h3>Sign in</h3>
        <StyledLabel htmlFor="Username">Username:</StyledLabel>
        <StyledInput
          type="text"
          value={username}
          onChange={(e) => usernameEntered(e)}
          placeholder="Email or phone"
          id="Username"
        />
        <StyledLabel invalid={passwordInvalid} htmlFor="Password">
          Password<span>Forgot Password</span>
        </StyledLabel>
        <StyledInput
          type="password"
          value={password}
          onChange={(e) => passwordEntered(e)}
          placeholder="Type here"
          id="Password"
        />
        <StyleCheckBox>
          <input type="checkbox" id="checkbox" />
          <StyledLabel htmlFor="checkbox">Remember me</StyledLabel>
        </StyleCheckBox>
        <StyledButton
          type="submit"
          disabled={!username || !password}
          background="0D6EFD"
        >
          Log In
        </StyledButton>
        <Or>OR</Or>
        <StyledButton type="button" background="FFFFFF" color="black">
          <FcGoogle className="icon" />
          <p>Continue with Google</p>
        </StyledButton>
        <StyledButton type="button" background="4267B2">
          <AiFillFacebook className="icon" />
          <p>Continue with Facebook</p>
        </StyledButton>
        <div className="Register">
          Don’t have an account?{" "}
          <NavLink to="/signup">
            <span>Register now</span>
          </NavLink>
        </div>
      </StyledForm>
    </Layout>
  );
};

export default Login;
