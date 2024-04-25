import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/vectori/interclasare.jpg"
import img2 from "../Resources/Images/vectori/reuniune.jpg"
import img3 from "../Resources/Images/vectori/intersectie.jpg"
import img4 from "../Resources/Images/vectori/diferenta.jpg"
import img5 from "../Resources/Images/vectori/diferenta_simetrica.jpg"

function Interclasari() {
  return (
    <div className="Card">
      <Title text="Interclasări" />
      <Description
        text="-algoritmii de interclasare se pot aplica doar pe șirurile ordonate
-complexitate O(n+m) unde n este lungimea primului șir iar m este lungimea celui de-al doilea șir"
      ></Description>

      <Subtitle text="Interclasarea clasică dintre două șiruri"></Subtitle>
      <img src={img1} className="mb-2" id="image100"></img>

      <Subtitle text="Reuniune dintre două mulțimi (elemente distincte în fiecare șir)"></Subtitle>
      <Description text="A ∪ B"></Description>
      <img src={img2} className="mb-2" id="image100"></img>

      <Subtitle text="Intersecție dintre două mulțimi (elemente distincte în fiecare șir)"></Subtitle>
      <Description text="A ∩ B"></Description>
      <img src={img3} className="mb-2" id="image100"></img>

      <Subtitle text="Diferența dintre două mulțimi (elemente distincte în fiecare șir)"></Subtitle>
      <Description text="A \ B"></Description>
      <img src={img4} className="mb-2" id="image100"></img>

      <Subtitle text="Diferența simetrică dintre două mulțimi (elemente distincte în fiecare șir)"></Subtitle>
      <Description text="(A \ B) ∪ (B \ A)"></Description>
      <img src={img5} className="mb-2" id="image100"></img>
    </div>
  );
}

export default Interclasari;
