import styled from "styled-components";

export const Layout = styled.div`
  width: 387px;
  margin: 10px auto;
  background-color: #f4f4f4;
  border-radius: 5px;
  @media (max-width: 447px) {
       width: 100%;
      }
`;
export const StyledForm = styled.form`
background: #FFFFFF;  padding: 30px;
  border-radius: 5px;

    h3 {
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
    }
    .Register {
        margin-top: 17px;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        letter-spacing: -0.1px;
        color: #606060;
  }
  span {
        color: #0D6EFD;
        margin-left: 4px;
    }
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.2px;
`;

export const StyledInput = styled.input`
  width: ${({width}) => width ? width : '327px'};
  height: 40px;
  padding: 10px;
  margin-bottom: 15px;
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

export const StyleCheckBox = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
input {
    width: 20px;
    height: 20px;
}
label {
    margin-left: 12px;
}

`;
export const Or = styled.div`
position: relative;
text-align: center;
margin-top: 20px;
color: #A9ACB0;
&::before {
    content: "";
    position: absolute;
    width: 143px;
    height: 1px;
    background-color: #A9ACB0;
    left: 0;
    top: 4px;

}
&::after {
    content: "";
    position: absolute;
    width: 143px;
    height: 1px;
    background-color: #A9ACB0;
    right: 0;
    top: 4px;
}

`;

export const StyledButton = styled.button`
 display: flex;
  justify-content: center;
  align-items: center;
  width: 327px;
  background-color:  ${props => `#${props.background}`};
  border: 1px solid #0d6efd;
  border-radius: 6px;
  color: ${({color}) => color ? color : '#FFFFFF'};
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  border: 2px solid #E0E0E0;

  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1;
  }

  opacity: ${(props) => (!props.enabled ? 0.5 : 1)};

  p {
    flex : 1;
  }
  .icon {
    width: 22px;
    height: 22px;
    color: white;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  input[type="number"] {
    border-radius: 0 6px 6px 0;
  }
`;
export const Select = styled.select`
  width: 121px;
  height: 40px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  border: 1px solid #E0E0E0;
  border-radius: 6px 0 0 6px;
  color: #BDC1C8;
`;
