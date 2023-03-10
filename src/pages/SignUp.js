import React, { useContext, useReducer } from "react";
import { Navigate, NavLink } from "react-router-dom";
import axios from "axios";

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

import { Api } from "../components/Api";
import { initialState, Reducer, schema } from "../hooks/useSignUp";
import AuthContext from "../context/AuthContext";


const SignUp = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [ ,setIsAuthenticated ] = useContext(AuthContext);

  console.log(state);

  const {
    name,
    surname,
    email,
    phone,
    password,
    repeatPassword,
    errors,
  } = state;

  const handleSubmit = async (event) => {
    console.log(state);
    event.preventDefault();
    schema
      .validate(
        { name, surname, email, phone, password, repeatPassword },
        { abortEarly: false }
      )
      .then(async () => {
        const response = await axios.post(`${Api}/users/signup`, {
          name,
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
        console.log(error.errors || error.message);

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
    <div>
      <Layout>
        <StyledForm onSubmit={(e) => handleSubmit(e)}>
          <h3>Register</h3>
          <Row>
            <div>
              <StyledLabel htmlFor="name">Name</StyledLabel>
              <StyledInput
                type="text"
                placeholder="Type here"
                width={"160px"}
                id="name"
                name="name"
                onChange={(event) => handleChange(event)}
                value={name}
              />
              {errors.name && <div className="error">{errors.name}</div>}
            </div>
            <div>
              <StyledLabel htmlFor="Surname">Surname</StyledLabel>
              <StyledInput
                type="text"
                placeholder="Type here"
                width={"160px"}
                id="Surname"
                onChange={(e) => handleChange(e)}
                name="surname"
                value={surname}
              />
              {errors.surname && <div className="error">{errors.surname}</div>}
            </div>
          </Row>

          <StyledLabel htmlFor="email">Your e-mail</StyledLabel>
          <StyledInput
            type="email"
            placeholder="example@mail.com"
            id="email"
            onChange={(e) => handleChange(e)}
            name="email"
            value={email}
          />
          {errors.email && <div className="error">{errors.email}</div>}

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
            <StyledInput
              type="phone"
              placeholder="00-000-00-00"
              id="phone"
              onChange={(e) => handleChange(e)}
              name="phone"
              value={phone}
            />
          </Row>
            {errors.phone && <div className="error">{errors.phone}</div>}
          <StyledLabel htmlFor="password">Password</StyledLabel>
          <StyledInput
            type="Password"
            placeholder="At least 6 characters."
            id="password"
            onChange={(e) => handleChange(e)}
            name="password"
            value={password}
          />
          {errors.password && <div className="error">{errors.password}</div>}

          <StyledLabel htmlFor="RepeatPassword">Repeat password</StyledLabel>
          <StyledInput
            type="password"
            placeholder="Type here"
            id="RepeatPassword"
            onChange={(e) => handleChange(e)}
            name="repeatPassword"
            value={repeatPassword}
          />
          {errors.repeatPassword && (
            <div className="error">{errors.repeatPassword}</div>
          )}

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
      {state.SignUp ? <Navigate to={"/"} /> : ""}
    </div>
  );
};

export default SignUp;
