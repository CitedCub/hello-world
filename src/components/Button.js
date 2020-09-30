import React from "react";
import "../Button.css";

function Button(props) {
  return (
    <button className="location-button">
      {props.location ? props.location : "All Locations"}
    </button>
  );
}

export default Button;
