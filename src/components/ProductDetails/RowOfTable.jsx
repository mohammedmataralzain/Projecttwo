import React from "react";

const RowOfTable = (props) => {
  return (

    <tr>
      <td>{props.title}</td>
      <td>{props.descripton}</td>
    </tr>
  );
};

export default RowOfTable;
