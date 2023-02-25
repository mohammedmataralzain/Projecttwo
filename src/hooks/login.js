import * as yup from "yup";

export const schema = yup.object().shape({
    email: yup
    .string()
    .test("emailOrMobile", "Invalid email or mobile number", (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const mobileRegex = /^[0-9]{10}$/;
      if (emailRegex.test(value) || mobileRegex.test(value)) {
        return true;
      }
      return false;
    })
    .required("Email or mobile number is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const initialState = {
    email: "",
  password: "",
  errors: {},
};

const ACTIONS = {
    SET_FIELD: "setField",
    SET_ERRORS: "setErrors",
  };


  export const Reducer = (state, action) => {
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
      default:
        return state;
    }
  };