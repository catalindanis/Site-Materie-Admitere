import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/grile_interesante/random/1.png";
import img2 from "../Resources/Images/grile_interesante/random/09_29_28_Screenshot_2023-10-15_at_18.22.35.png";

function DiverseInteresanteRandom() {
  return (
    <div className="Card">
      <Title text="Grile interesante"></Title>
      <img src={img2} className="mb-2" id="image75"></img>
      <Description
        text="-mai sus este explicația la problema raza de pe pbinfo (#2611)
-același tip de rezolvare funcționează și la problema biliard (#2371)"
      ></Description>
      <img src={img1} className="mb-2" id="image75"></img>
      <Description text='-formula este: 2^n + n - 1 (nu știu explicația) (vezi "De Brujin")'></Description>
    </div>
  );
}

export default DiverseInteresanteRandom;
