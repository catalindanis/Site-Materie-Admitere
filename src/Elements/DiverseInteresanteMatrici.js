import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/grile_interesante/matrici/1.png";
import img2 from "../Resources/Images/grile_interesante/matrici/2.png";
import img3 from "../Resources/Images/grile_interesante/matrici/3.png";
import img4 from "../Resources/Images/grile_interesante/matrici/4.png";
import img5 from "../Resources/Images/grile_interesante/matrici/5.png";
import img6 from "../Resources/Images/grile_interesante/matrici/6.png";

function DiverseInteresanteMatrici() {
  return (
    <div className="Card">
      <Title text="Grile interesante - Matrici"></Title>
      <img src={img1} className="mb-2" id="image50"></img>
      <img src={img4} className="mb-2" id="image50"></img>
      <Description
        text="-formula e: a + b - cmmdc(a, b)
-practic, intri într-un pătrat nou, daca intersectezi o linie nouă; pentru exemplul cu a = 4, b = 3 o să fie 3 linii orizontale 
    (deoarece cea de sus nu se mai numără pentru că nu mai intră într-un pătrat nou) și 4 linii verticale (nu se numără cea din dreapta de tot, tot pe aceeași premiză)
-mai departe, trebuie scăzute cazurile când se intersectează 2 linii (una verticală și una orizontală) în același timp (adică când se trece perfect printr-un colț) adică cmmdc(a, b)"
      ></Description>
      <img src={img2} className="mb-2" id="image75"></img>
      <img src={img5} className="mb-2" id="image25"></img>
      <Description
        text="-ca să câștigi, trebuie să cucerești cât mai multe colțuri deoarece din colțuri nu se mai poate ieși
-în imaginea alăturată problemei, se exemplifică un caz în care avem cucerite 2 colțuri și făcând cele mai bune mișcări, tot ce facem este să merge până în celălalt colț unde câștigăm
-în exemplul de față nr de linii putea să fie oricare, deoarece noi rămâneam tot pe primele 2, făcând cele mai bune mișcări
-la fel e și la linii impare sau așa, ideea este doar să le avem cucerite adică să avem prima mișcare realizată pe o coloană sau linie impar (în funcție de caz)
-dacă n sau m sunt impare și tu pornești de pe indice impar, făcând mișcările cele mai bune câștigi sigur"
      ></Description>
      <img src={img3} className="mb-2" id="image75"></img>
      <Description text="-chiar dacă la A nu precizează cum se interschimbă (adică care cu care) nu te interesează acest lucru, ci te interesează că spune bine de unde sunt elementele care sunt interschimbate"></Description>
      <img src={img6} className="mb-2" id="image75"></img>
      <Description
        text="-aici, se vede destul de simplu că modul de construire este asemănător cu triunghiul lui pascal
-dacă se face abstracție de la acel 2 cu care se tot înmulțește, este chiar triunghiul lui Pascal dar în care liniile sunt inversate cu coloanele
-mai apoi, dacă punem acel 2 o să vedem că defapt tot ce face acel 2 este că pe fiecare coloană se înmulțește cu 2^(j-1)
-la ce mai trebuie să fim foarte atenți este indexarea: la triunghiul lui Pascal indexarea e de la 0, aici e de la 1
-valoarea fiecărui element din matrice va fi ( combinări de j-1 luate câte i-1 ) * 2 ^ (j-1) (pentru nr noastre răsp corect este C)"
      ></Description>
      <Title text="Proprietăți interesante - Matrici"></Title>
      <Description text="-dacă avem o matrice pătratică cu n linii și n coloane, numărul de elemente din toate zonele matricii vor fi: n*(n-2) + n%2; de aici putem afla numărul de elemente din fiecare zonă în parte, toate zonele având un număr egal de elemente, împărțind la 4 formula de mai sus"></Description>
    </div>
  );
}

export default DiverseInteresanteMatrici;
