import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/grile_interesante/complexitate/Screenshot_1.png";
import img2 from "../Resources/Images/grile_interesante/complexitate/2.png";
import img3 from "../Resources/Images/grile_interesante/complexitate/3.png";
import img4 from "../Resources/Images/grile_interesante/complexitate/4.png";

function ComplexitateaAlgoritmilor() {
  return (
    <div className="Card">
      <Title text="Proprietăți interesante - Complexitate"></Title>
      <Description text="-suma de pași 1 + 1/2 + 1/3 + 1/4 + ... + 1/n = logn (demonstrație matematică, nu are rost)
-suma de pași 1 + 1/2 + 1/4 + ... = 2 (se poate demonstra cu limita de la suma asta calculată cu ajutorul progresiei geometrice)
-clasa de complexitate diferă de complexitatea clasică doar prin permiterea următoarei aproximări:
O(n!) = O(n^n)"></Description>
      <Title text="Grile interesante - Complexitate"></Title>
      <img src={img1} className="mb-2" id="image75"></img>
      <Description text="-se foloseste proprietatea care spune că 1 + 1/2 + 1/3 + 1/4 + ... + 1/n = logn"></Description>
      <img src={img2} className="mb-2" id="image75"></img>
      <Description text="-se numără pașii și se observă formula"></Description>
      <img src={img3} className="mb-2" id="image75"></img>
      <Description text="-răspunsurile corecte sunt B și D
-se folosește aproximarea (1 + 1/2 + 1/4 + ...) = 2 => complexitate O(n)"></Description>
      <img src={img4} className="mb-2" id="image75"></img>
      <Description text="-răspunsurile corecte sunt A și C
-se folosește aproximarea n! = n^n"></Description>
      <h6 className="mt-4">
        Unele grile sunt preluate din simulări de pe zecelaexamene.ro
      </h6>
    </div>
  );
}

export default ComplexitateaAlgoritmilor;
