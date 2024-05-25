import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/grile_interesante/complexitate/Screenshot_1.png"

function ComplexitateaAlgoritmilor() {
  return (
    <div className="Card">
      <Title text="Proprietăți interesante - Complexitate"></Title>
      <Description text="-suma de pași 1 + 1/2 + 1/3 + 1/4 + ... + 1/n = logn (demonstrație matematică, nu are rost)"></Description>
      <Title text="Grile interesante - Complexitate"></Title>
      <img src={img1} className="mb-2" id="image75"></img>
    </div>
  );
}

export default ComplexitateaAlgoritmilor;
