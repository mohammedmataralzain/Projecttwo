import styled from "styled-components";

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    position: fixed;
    top: 15px;
    left: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
export const StyleNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    li {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      padding: 17px;
    }
  }
  select {
    border: none;
    font-weight: 500;
    font-size: 16px;
    margin-left: 10px;
  }
`;

export const StyleHeader = styled.header`

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  .icon {
    width: 30px;
    height: 30px;
    color: #8b96a5;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

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
export const Wrraper = styled.div`
  background-color: white;
  border-bottom: 1px solid #E0E0E0;
  border-top: 1px solid #E0E0E0;
`;
export const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  img {
    width: 22px;
  }
  li {
    display: flex;
    flex-direction: column;
    font-size: 15px;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 1021px) {
    display: none;
  }
`;

export const UlMobile = styled.ul`

  display: none;

  li {
    padding: 18px 10px;
    color: black;
    display: flex;
    align-items: center;
    gap: 15px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    background-color: #FFFFFF;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: 0;
    left: 0;
    height: 100vh;
    width: 280px;
    padding-top: 3.5rem;
    transition: transform 0.9s ease-in-out;
  }
  li:nth-child(8) {
    margin-left: 50px;
  }
  li:nth-child(9) {
    margin-left: 50px;
  }
  li:nth-child(10) {
    margin-left: 50px;
  }
`;
