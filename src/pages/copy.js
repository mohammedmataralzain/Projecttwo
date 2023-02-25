import React, { useReducer } from "react";
import { NavLink } from "react-router-dom";
import { useSignUpContext } from "../context/signupContext";
import axios from "axios";
import * as yup from "yup";

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
import { Schema } from "yup";
const regularExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const schema = yup.object().shape({
  name: yup.string().required("Name is Required"),
  surname: yup.string().required("Surname is Required"),
  email: yup.string().email("Email is invalid").required("Email is Required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number is not valid")
    .required("Phone number is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(regularExpression, "Password week")
    .required("Password is required"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password Not same")
    .required("Confirm Password is Required"),
});
const initialState = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  password: "",
  repeatPassword: "",
  errors: {},
  isSubmitting: false, //*
};

const ACTIONS = {
  SET_FIELD: "setField",
  SET_ERRORS: "setErrors",
  SET_SUBMITTING: "setSubmitting",
};

const Reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_FIELD:
      return {
        ...state,
        [action.field]: action.value,
      };
    case ACTIONS.SET_ERRORS:
      return {
        ...state,
        errors: action.errors,
      };
    case ACTIONS.SET_SUBMITTING:
      return {
        ...state,
        isSubmitting: action.isSubmitting,
      };
    default:
      return state;
  }
};
const SignUp = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  // const { state, setField, setErrors, setSubmitting } = useSignUpContext();
  const {
    name,
    surname,
    email,
    phone,
    password,
    repeatPassword,
    errors,
    isSubmitting,
  } = state;
  const handleSubmit = async (event) => {
    console.log(state);
    event.preventDefault();
    dispatch({ type: "setSubmitting", isSubmitting: true });

    try {
      // const response = await axios.post("/api/signup", {
      //   name,
      //   email,
      //   password,
      // });
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    // setSubmitting({isSubmitting: false });
  };

  const validate = async () => {
    try {
      await Schema.validate(
        { name, surname, email, phone, password, repeatPassword },
        { abortEarly: false }
      );
      return {};
    } catch (error) {
      const errors = {};
      error.inner.forEach((e) => {
        errors[e.path] = e.message;
      });
      return errors;
    }
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
          <StyledLabel htmlFor="password">Password</StyledLabel>
          <StyledInput
            type="Password"
            placeholder="At least 6 characters."
            id="password"
            onChange={(e) => handleChange(e)}
            name="password"
            value={password}
          />
          <StyledLabel htmlFor="RepeatPassword">Repeat password</StyledLabel>
          <StyledInput
            type="password"
            placeholder="Type here"
            id="RepeatPassword"
            onChange={(e) => handleChange(e)}
            name="repeatPassword"
            value={repeatPassword}
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
