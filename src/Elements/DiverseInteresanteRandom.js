import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/grile_interesante/random/1.png"

function DiverseInteresanteRandom() {
  return (
    <div className="Card">
      <Title text="Grile interesante"></Title>
      <img src={img1} className="mb-2" id="image75"></img>
      <Description text='-formula este: 2^n + n - 1 (nu știu explicația) (vezi "De Brujin")'></Description>
    </div>
  );
}

export default DiverseInteresanteRandom;
