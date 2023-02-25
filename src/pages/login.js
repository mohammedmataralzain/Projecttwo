import React, { useContext, useReducer } from "react";
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
import { initialState, Reducer, schema } from "../hooks/login";
import axios from "axios";
import { Api } from "../components/Api";
import AuthContext from "../context/AuthContext";

const Login = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [,setIsAuthenticated ]= useContext(AuthContext);
  const { email, password, errors } = state;

  const handleSubmit = async (event) => {
    console.log(state);
    event.preventDefault();
    schema
      .validate({ email, password }, { abortEarly: false })
      .then(async () => {
        const response = await axios.post(`${Api}/users/login`, {
          email,
          password,
        });
        console.log(response.data);
        if (response.data) {
          localStorage.setItem("token", response.data.token);
          setIsAuthenticated(true);
        }
      })
      .catch((error) => {
        const formattedErrors = {};
        error.inner.forEach((error) => {
          formattedErrors[error.path] = error.message;
          dispatch({
            type: "setErrors",
            errors: formattedErrors,
          });
        });
      });
  };

  const handleChange = (event) => {
    dispatch({
      type: "setField",
      field: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <Layout>
      <StyledForm onSubmit={(e) => handleSubmit(e)}>
        <h3>Sign in</h3>
        <StyledLabel htmlFor="Username">Username:</StyledLabel>
        <StyledInput
          type="text"
          value={email}
          name="email"
          onChange={(event) => handleChange(event)}
          placeholder="Email or phone"
          id="email"
        />
        {errors.email && <div className="error">{errors.email}</div>}

        <StyledLabel htmlFor="Password">
          Password<span>Forgot Password</span>
        </StyledLabel>
        <StyledInput
          type="password"
          value={password}
          onChange={(event) => handleChange(event)}
          placeholder="Type here"
          id="password"
          name="password"
        />
        {errors.password && <div className="error">{errors.password}</div>}

        <StyleCheckBox>
          <input type="checkbox" id="checkbox" />
          <StyledLabel htmlFor="checkbox">Remember me</StyledLabel>
        </StyleCheckBox>
        <StyledButton
          type="submit"
          disabled={!email || !password}
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
