import styled from "styled-components";

export const ButtonStyle = styled.button`

  background: ${({ background }) => background};
  width: 100px;
  height: 40px;
  box-sizing: border-box;
  border-radius: 0 8px 8px 0;
  border: 1px solid #0d6efd;
  color: ${({ color }) => color};
`;