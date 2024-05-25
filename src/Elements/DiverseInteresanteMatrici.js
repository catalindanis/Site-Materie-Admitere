import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/grile_interesante/matrici/1.png"

function DiverseInteresanteMatrici() {
  return (
    <div className="Card">
      <Title text="Grile interesante - Matrici"></Title>
      <img src={img1} className="mb-2" id="image75"></img>
      <Description text="-formula e: a + b - cmmdc(a, b)
-practic, intri într-un pătrat nou, daca intersectezi o linie nouă; pentru exemplul cu a = 4, b = 3 o să fie 3 linii orizontale 
    (deoarece cea de sus nu se mai numără pentru că nu mai intră într-un pătrat nou) și 4 linii verticale (nu se numără cea din dreapta de tot, tot pe aceeași premiză)
-mai departe, trebuie scăzute cazurile când se intersectează 2 linii (una verticală și una orizontală) în același timp (adică când se trece perfect printr-un colț) adică cmmdc(a, b)"></Description>
      <Title text="Proprietăți interesante - Matrici"></Title>
      <Description text="-dacă avem o matrice pătratică cu n linii și n coloane, numărul de elemente din toate zonele matricii vor fi: n*(n-2) + n%2; de aici putem afla numărul de elemente din fiecare zonă în parte, toate zonele având un număr egal de elemente, împărțind la 4 formula de mai sus"></Description>
    </div>
  );
}

export default DiverseInteresanteMatrici;
