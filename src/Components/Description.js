import React from "react";
import "../Style/Card.css"

function Description(props) {
  return (
    
        <p className="fs-4 fw-normal m-0 " id="description-paragraph">{props.text}</p>
    
  );
}

export default Description;
