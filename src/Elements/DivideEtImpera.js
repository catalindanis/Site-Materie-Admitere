import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/divide_et_impera/quick_sort.jpg"
import img2 from "../Resources/Images/divide_et_impera/partitionare_clasic.jpg"
import img3 from "../Resources/Images/divide_et_impera/partitionare_rapida.jpg"
import img4 from "../Resources/Images/divide_et_impera/merge_sort.jpg"

function DivideEtImpera() {
  return (
    <div className="Card">
      <Title text="Divide et impera"></Title>
      <Description
        text="-divide et impera este o metodă de programare care se bazează pe descompunerea unei probleme în 2 jumătăți, se rezolvă fiecare jumătate și apoi se ajunge la răspunsul final
        -acest procedeu este făcut în mod repetat până când nu se mai poate împărți problema
        -se folosește de obicei pe tablouri unidimensionale
        -chiar dacă la prima vedere înjumătățirea problemei te duce cu gândul la complexitate logaritmică, asta nu este adevărat deoarece tot timpul o să se realizeze 2 * (n/2) pași, adică complexitate liniară O(n) (nu este o regulă, deoarece problemele diferă)"
      ></Description>
      <Subtitle text="Sortări rapide"></Subtitle>
      <Description text="-ambii algoritmi folosesc principiul de Divide et Impera"></Description>
      <Subtitle text="Quick sort"></Subtitle>
      <Description
        text="-la fiecare pas este ales un element arbitrar numit pivot (de obicei elementul cel mai din dreapta)
-șirul se partiționează în așa fel încât, în dreapta elementului pivot toate elementele vor fi mai mari ca el, îar în stânga vor fi mai mici sau egale cu el; în acest fel, cu siguranță elementul pivot este plasat pe poziția lui finală
-după aceea se aplică același lucru pe șirul din dreapta poziției unde a fost pus pivot, respectiv pe șirul din stânga poziției unde a fost pus pivotul
-în general complexitatea timp este O(n*log2n), dar în cazul cel mai nefavorabil ajunge la O(n^2)"
      ></Description>
      <img src={img1} className="mb-2" id="image75"></img>
      <img src={img2} className="mb-2" id="image75"></img>
      <img src={img3} className="mb-2" id="image75"></img>
      <Subtitle text="Merge Sort (sortare prin interclasare)"></Subtitle>
      <Description text="-la fiecare pas, șirul este împărțit în două, sunt sortate ambele jumătăți iar apoi se interclasează cele 2 jumătăți sortate, rezultând în subșirul inițial doar că sortat
-complexitatea timp aici este mereu O(n*log2n)), dar problema este că ai nevoie de un șir suplimentar pentru a realiza interclasarea care va influența complexitatea spațiu"></Description>
      <img src={img4} className="mb-2" id="image75"></img>
      <Description text="-pentru ambii algoritmi, șirurile a și c sunt declarate global
-la ambii algoritmi, apelurile inițiale au fost cu parametrii st=1, dr = lungimea șirului"></Description>
    </div>
  );
}

export default DivideEtImpera;
