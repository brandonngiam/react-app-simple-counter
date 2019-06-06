import React from "react";
import "../styles/Display.css";

function Display(props) {
  const counter = props.count;
  return (
    <div className={`count ${counter < 0 ? " negative" : ""}`}>{counter} </div>
  );
}

export default Display;
