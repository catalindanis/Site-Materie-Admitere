import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/grile_interesante/baze de numeratie/1.png";
import img2 from "../Resources/Images/grile_interesante/baze de numeratie/2.png";

function DiverseInteresanteBazeNumeratie() {
  return (
    <div className="Card">
      <Title text="Grile interesante - Baze de numerație"></Title>
      <img src={img1} className="mb-2" id="image75"></img>
      <Description
        text="-se folosește proprietatea: un număr natural scris în baza b se divide cu b - 1 dacă şi numai dacă suma cifrelor sale este un număr multiplu de b - 1
-această proprietate poate fi privită ca o generalizare a criteriului de divizibilitate cu 9 în baza 10 (suma cifrelor să fie divizibilă cu 9)"
      ></Description>
      <img src={img2} className="mb-2" id="image75"></img>
      <Description
        text="-se folosește proprietatea: un număr natural scris în baza b se divide cu b + 1 dacă şi numai dacă diferenţa dintre suma cifrelor de ordin impar şi suma cifrelor de ordin par este multiplu de b + 1
-această proprietate poate fi privită ca o generalizare a criteriului de divizibilitate cu 11 în baza 10 (diferența dintre suma cifrelor de pe poziții impare și cele de pe poziții pare să fie divizibilă cu 11)"
      ></Description>
      <Title text="Proprietăți interesante - Baze de numerație"></Title>
    </div>
  );
}

export default DiverseInteresanteBazeNumeratie;
