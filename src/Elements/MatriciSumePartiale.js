import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/matrici/sume_partiale_matrici.jpg"

function MatriciSumePartiale() {
  return (
    <div className="Card">
      <Title text="Sume parțiale în matrici"></Title>
      <Description
        text="-pentru o matrice a, se construiește o matrice suplimentară s în care 
s[i][j] = s[i-1][j] + s[i][j-1] - s[i-1][j-1] + a[i][j]
-practic, s[i][j] o să rețină suma tuturor elementelor din matricea a până la elementul de pe poziția (i, j), inclusiv elementul de pe poziția (i, j), și astfel putem să accesăm într-o complexitate O(1) orice sumă a unei submatrici
- suma elementelor din submatricea determinată de extremitățile (iS, jS) și (iF, jF) va fi 
suma = s[iF][jF] - s[iS-1][jF] - s[iF][jS-1] + s[iS-1][jS-1]"
      ></Description>
      <img src={img1} className="mb-2" id="image50"></img>
    </div>
  );
}

export default MatriciSumePartiale;