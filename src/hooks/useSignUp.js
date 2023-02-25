import * as yup from "yup";

const regularExpression = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;

export const schema = yup.object().shape({
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

export const initialState = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  password: "",
  repeatPassword: "",
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

