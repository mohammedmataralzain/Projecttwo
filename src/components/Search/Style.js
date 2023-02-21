import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  input,
  select {
    background: #ffffff;
    height: 40px;
    border: 3px solid #0d6efd;
    font-size: 16px;
    color: #8b96a5;
  }
  input {
    width: 421px;
    border-radius: 8px 0 0 8px;
    padding: 10px;
  }
  select {
    width: 145px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;