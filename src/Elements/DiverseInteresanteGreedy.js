import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/grile_interesante/greedy/15.png"
import img2 from "../Resources/Images/grile_interesante/greedy/14.png"
import img3 from "../Resources/Images/grile_interesante/greedy/13.png"


function DiverseInteresanteGreedy() {
  return (
    <div className="Card">
      <Title text="Grile interesante - Greedy"></Title>
      <img src={img1} className="mb-2" id="image75"></img>
        <Description text="-cele 2 grile de mai jos sunt 2 grile populare (eprubete, interclasări) care ambele funcționează pe același principiu de greedy
-la fiecare pas, combinăm elementele care ne costă cel mai puțin posibil
-pentru a verifica de ce acest lucru ne garantează timp minim, putem da un exemplu foarte ușor:
să zicem că avem 3 eprubete cu timpii de amestecare în următoarea ordine: 2, 3, 1001; este clar că mai bine luam (2, 3) și așteptăm 5 min, după care luam (5, 1001) și mai așteptăm 1006 min decât să luăm (2, 1001) și apoi (1003, 3) (efect de cascadă)"></Description>
      <img src={img2} className="mb-2" id="image75"></img>
      <img src={img3} className="mb-2" id="image75"></img>
      
    </div>
  );
}

export default DiverseInteresanteGreedy;
