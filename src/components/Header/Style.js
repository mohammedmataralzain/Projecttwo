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
  /* padding-top: 30px; */
  ul {
    display: flex;
    li {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      padding: 10px;
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
  padding-bottom: 20px;
  .icon {
    width: 30px;
    height: 30px;
    color: #8b96a5;
  }
  @media (max-width: 768px) {
    position: fixed;
    text-align: center;
  }
`;

export const Form = styled.form`
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
  padding-top: 15px;
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