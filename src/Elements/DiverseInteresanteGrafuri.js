import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/grile_interesante/grafuri/1.png";
import img2 from "../Resources/Images/grile_interesante/grafuri/2.png";
import img4 from "../Resources/Images/grile_interesante/grafuri/3.png";

function DiverseInteresanteGrafuri() {
  return (
    <div className="Card">
      <Title text="Grile interesante - grafuri"></Title>
      <img src={img1} className="mb-2" id="image75"></img>
      <img src={img2} className="mb-2" id="image75"></img>
      <img src={img4} className="mb-2" id="image75"></img>
      <Description
        text="-se folosește algoritmul de sortare topologică
-acest algoritm se aplică pe grafurile orientate aciclic, și practic presupune ordonarea liniară a vârfurilor, astfel încât, dacă există un arc între (i, j) atunci i apare înaintea lui j în această ordonare"
      ></Description>
      <Title text="Proprietăți interesante - grafuri"></Title>
      <Description text="-dacă ridicăm o matrice de adiacență la puterea k, vom obține în fiecare element (i, j) numărul de lanțuri (sau drumuri) de la nodul i la nodul j de lungime k"></Description>
    </div>
  );
}

export default DiverseInteresanteGrafuri;
