import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/exponentiere_rapida/exp_rapida_1.jpg"
import img2 from "../Resources/Images/exponentiere_rapida/ex_1.jpg"
import img3 from "../Resources/Images/exponentiere_rapida/exp_rapida_2.jpg"
import img4 from "../Resources/Images/exponentiere_rapida/ex_2.jpg"
import img5 from "../Resources/Images/exponentiere_rapida/exp_rapida_3.jpg"
import img6 from "../Resources/Images/exponentiere_rapida/ex_3.jpg"

function ExponentiereRapida() {
  return (
    <div className="Card">
      <Title text="Exponențiere rapidă"></Title>
      <Description text="-reprezintă algoritmul de ridicare la putere a unui numar a la putere b în timp logaritmic O( log2(n) )"></Description>
      <Subtitle text="Metoda 1 (folosirea reprezentării lui b în baza 2)"></Subtitle>
      <img src={img1} className="mb-2" id="image50"></img>
      <img src={img2} className="mb-2" id="image50"></img>
      <Subtitle text="Metoda 2 (descompunerea puterilor)"></Subtitle>
      <img src={img3} className="mb-2" id="image50"></img>
      <img src={img4} className="mb-2" id="image50"></img>
      <Subtitle text="Metoda 3 (descompunerea puterilor)"></Subtitle>
      <img src={img5} className="mb-2" id="image50"></img>
      <img src={img6} className="mb-2" id="image50"></img>
    </div>
  );
}

export default ExponentiereRapida;
