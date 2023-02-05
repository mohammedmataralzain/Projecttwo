import React from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 60%;  
  border: 1px solid #E0E7E9;
  margin:  0 20px;
  border-collapse: collapse;

  tr {
    
    &:hover {
        opacity: 0.5;
    }
    td {
        padding: 8px;
        background-color: #FFFFFF;
  border: 1px solid #E0E7E9;

    }
    .title {
        background: #EFF2F4;
    }
}
`;
const TabelDetalis = (props) => {
  return (
    <Table>
      <tr>
        <td className="title">Model</td>
        <td>{props.model}</td>
      </tr>
      <tr>
        <td className="title">Style</td>
        <td>{props.style}</td>
      </tr>
      <tr>
        <td className="title">Certificate</td>
        <td>{props.certificate}</td>
      </tr>
      <tr>
        <td className="title">Size</td>
        <td>{props.size}</td>
      </tr>
      <tr>
        <td className="title">Memory</td>
        <td>{props.memory}</td>
      </tr>
    </Table>
  );
};

export default TabelDetalis;
