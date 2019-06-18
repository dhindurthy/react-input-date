import React from "react";
import "./styles.scss";

function Date(props) {
  return (
    <React.Fragment>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="date"
        name="bday"
        onChange={props.onChange}
        value={props.value}
      />
    </React.Fragment>
  );
}

export default Date;
