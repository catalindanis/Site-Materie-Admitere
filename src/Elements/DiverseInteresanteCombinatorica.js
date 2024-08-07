import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/grile_interesante/combinatorica/1.png";
import img2 from "../Resources/Images/grile_interesante/combinatorica/2.png";

function DiverseInteresanteCombinatorica() {
  return (
    <div className="Card">
      <Title text="Grile interesante - Combinatorică"></Title>
      <img src={img1} className="mb-2" id="image25"></img>
      <img src={img2} className="mb-2" id="image25"></img>
      <Description text="-o chestie foarte importantă când informatica implică matematică este ordinea în care se efectuează operațiile
-dacă în matematică cei 2 algoritmi de mai sus ar returna același lucru, în informatică prima imagine nu calculează corect combinările chiar dacă formula recursivă pare corectă
-prima dată se face DIV k și există cazuri în care împărțirea să nu fie exactă, fapt în care rezultatul nu mai e corect"></Description>
      <Title text="Proprietăți interesante - Combinatorică"></Title>
      <Description text="-fie F: A -> B, cardA = n, cardB = m
-numărul de funcții care se pot forma este m ^ n
-numărul de funcții injective care se pot forma este aranjamente de m luate câte n
-numărul de funcții bijective care se pot forma este n! (practic, am face tot aranjamente de m luate câte n, dar pentru a fi bijectivă, F va avea n = m și atunci rezultă n!)
-numărul de funcții crescătoare / descrescătoare este combinări de m luate câte n
-numărul de funcții monotone este numărul de funcții crescătoare + numărul de funcții descrescătoare adică 2 * combinări de m luate câte n"></Description>
    </div>
  );
}

export default DiverseInteresanteCombinatorica;
