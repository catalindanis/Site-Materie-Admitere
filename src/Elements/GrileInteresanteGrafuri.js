import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/grile_interesante/grafuri/1.png";

function GrileInteresanteGrafuri() {
  return (
    <div className="Card">
      <Title text="Grile interesante - grafuri"></Title>
      <img src={img1} className="mb-2" id="image75"></img>
    </div>
  );
}

export default GrileInteresanteGrafuri;
